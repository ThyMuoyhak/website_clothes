// ProductsPage.jsx - Modern Redesign
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Sample products data
const allProducts = [
  // Men's Products
  {
    id: 1,
    name: "Organic Cotton Tee",
    category: "Men",
    subcategory: "Essentials",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
    tags: ["Bestseller", "Organic"],
    colors: [
      { name: "Charcoal", value: "bg-gray-900", hex: "#111827" },
      { name: "Navy", value: "bg-blue-900", hex: "#1e3a8a" },
      { name: "White", value: "bg-white border", hex: "#ffffff" }
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Premium organic cotton tee with tailored fit and sustainable production.",
    features: ["100% Organic Cotton", "Tailored Fit", "Sustainable Production"],
    brand: "Essentials"
  },
  {
    id: 2,
    name: "Raw Denim Jacket",
    category: "Men",
    subcategory: "Utility",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop",
    tags: ["Limited", "Raw"],
    colors: [
      { name: "Indigo", value: "bg-indigo-900", hex: "#312e81" },
      { name: "Black", value: "bg-gray-900", hex: "#111827" },
    ],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Raw selvedge denim jacket with classic hardware details.",
    features: ["Selvedge Denim", "Classic Hardware", "Durable Construction"],
    brand: "Utility"
  },
  {
    id: 3,
    name: "Wool Blend Sweater",
    category: "Men",
    subcategory: "Knitwear",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop",
    tags: ["Winter", "Premium"],
    colors: [
      { name: "Charcoal", value: "bg-gray-800", hex: "#1f2937" },
      { name: "Navy", value: "bg-blue-900", hex: "#1e3a8a" },
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Fine gauge wool blend sweater for transitional seasons.",
    features: ["Wool Blend", "Fine Gauge", "Timeless Design"],
    brand: "Knitwear"
  },

  // Women's Products
  {
    id: 4,
    name: "Silk Blend Dress",
    category: "Women",
    subcategory: "Contemporary",
    price: 189.99,
    originalPrice: 259.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop",
    tags: ["New", "Luxury"],
    colors: [
      { name: "Blush", value: "bg-pink-100", hex: "#fce7f3" },
      { name: "Ivory", value: "bg-yellow-50", hex: "#fefce8" },
    ],
    sizes: ["XS", "S", "M"],
    inStock: true,
    description: "Elegant silk blend dress with modern drape and refined silhouette.",
    features: ["Silk Blend", "Modern Drape", "Refined Silhouette"],
    brand: "Contemporary"
  },
  {
    id: 5,
    name: "Tailored Trousers",
    category: "Women",
    subcategory: "Tailoring",
    price: 129.99,
    originalPrice: 169.99,
    rating: 4.6,
    reviews: 143,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop",
    tags: ["Premium", "Tailored"],
    colors: [
      { name: "Black", value: "bg-black", hex: "#000000" },
      { name: "Navy", value: "bg-blue-900", hex: "#1e3a8a" },
      { name: "Gray", value: "bg-gray-600", hex: "#4b5563" }
    ],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    description: "Perfectly tailored trousers with clean lines and premium fabric.",
    features: ["Premium Fabric", "Clean Lines", "Perfect Fit"],
    brand: "Tailoring"
  },

  // Kids Products
  {
    id: 6,
    name: "Organic Onesie Set",
    category: "Kids",
    subcategory: "Baby",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=800&auto=format&fit=crop",
    tags: ["Organic", "Soft"],
    colors: [
      { name: "White", value: "bg-white border", hex: "#ffffff" },
      { name: "Mint", value: "bg-green-100", hex: "#dcfce7" },
      { name: "Sky", value: "bg-blue-100", hex: "#dbeafe" }
    ],
    sizes: ["0-3M", "3-6M", "6-9M"],
    inStock: true,
    description: "Soft organic cotton onesie set for newborns and infants.",
    features: ["100% Organic Cotton", "Snap Buttons", "Tag-free"],
    brand: "Baby"
  },

  // Accessories
  {
    id: 7,
    name: "Leather Tote",
    category: "Accessories",
    subcategory: "Bags",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop",
    tags: ["Luxury", "Crafted"],
    colors: [
      { name: "Cognac", value: "bg-amber-800", hex: "#92400e" },
      { name: "Black", value: "bg-black", hex: "#000000" },
    ],
    sizes: ["One Size"],
    inStock: true,
    description: "Full-grain leather tote with handcrafted details and functional organization.",
    features: ["Full-grain Leather", "Handcrafted", "Multiple Compartments"],
    brand: "Accessories"
  },
  {
    id: 8,
    name: "Minimalist Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
    tags: ["Minimal", "Premium"],
    colors: [
      { name: "Silver", value: "bg-gray-300", hex: "#d1d5db" },
      { name: "Black", value: "bg-gray-900", hex: "#111827" },
    ],
    sizes: ["One Size"],
    inStock: true,
    description: "Minimalist watch with clean design and premium materials.",
    features: ["Swiss Movement", "Leather Strap", "Minimal Design"],
    brand: "Accessories"
  },
];

const subcategoryMapping = {
  'essentials': 'Essentials',
  'utility': 'Utility',
  'knitwear': 'Knitwear',
  'contemporary': 'Contemporary',
  'tailoring': 'Tailoring',
  'baby': 'Baby',
  'bags': 'Bags',
  'watches': 'Watches',
};

const ProductsPage = () => {
  const { category, subcategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const productsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [category, subcategory, activeFilter, sortBy, searchQuery, priceRange, selectedBrands, minRating]);

  const filteredProducts = allProducts.filter(product => {
    if (category && category !== 'all') {
      if (product.category.toLowerCase() !== category.toLowerCase()) {
        return false;
      }
    }
    
    if (subcategory && subcategoryMapping[subcategory]) {
      const mappedSubcategory = subcategoryMapping[subcategory];
      if (product.subcategory !== mappedSubcategory) {
        return false;
      }
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesCategory = product.category.toLowerCase().includes(query);
      const matchesSubcategory = product.subcategory.toLowerCase().includes(query);
      const matchesDescription = product.description.toLowerCase().includes(query);
      
      if (!(matchesName || matchesCategory || matchesSubcategory || matchesDescription)) {
        return false;
      }
    }
    
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    if (product.rating < minRating) {
      return false;
    }
    
    if (activeFilter === 'sale') {
      return product.originalPrice > product.price;
    }
    if (activeFilter === 'new') {
      return product.tags.some(tag => tag === 'New');
    }
    if (activeFilter === 'bestseller') {
      return product.tags.some(tag => tag === 'Bestseller');
    }
    
    if (selectedBrands.length > 0 && product.brand) {
      if (!selectedBrands.includes(product.brand)) {
        return false;
      }
    }
    
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': return b.id - a.id;
      case 'popular': return b.reviews - a.reviews;
      default: return a.id - b.id;
    }
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const getCategoryTitle = () => {
    if (searchQuery) {
      return `"${searchQuery}"`;
    }
    if (subcategory && subcategoryMapping[subcategory]) {
      return subcategoryMapping[subcategory];
    }
    if (category && category !== 'all') {
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      return formattedCategory;
    }
    if (activeFilter === 'sale') {
      return 'Sale';
    }
    if (activeFilter === 'new') {
      return 'New Arrivals';
    }
    if (activeFilter === 'bestseller') {
      return 'Best Sellers';
    }
    return 'Collections';
  };

  const getCategoryDescription = () => {
    if (searchQuery) {
      return `${sortedProducts.length} results`;
    }
    if (subcategory && subcategoryMapping[subcategory]) {
      return `Curated selection of ${subcategoryMapping[subcategory].toLowerCase()}`;
    }
    if (category && category !== 'all') {
      return `Explore our ${category.toLowerCase()} collection`;
    }
    if (activeFilter === 'sale') {
      return 'Special offers and promotions';
    }
    if (activeFilter === 'new') {
      return 'Latest additions to our collection';
    }
    if (activeFilter === 'bestseller') {
      return 'Customer favorites';
    }
    return 'Complete collection of premium products';
  };

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'new', label: 'New' },
    { key: 'sale', label: 'Sale' },
    { key: 'bestseller', label: 'Best Sellers' },
  ];

  const categories = [
    { name: 'All', path: '/products', count: allProducts.length },
    { name: 'Men', path: '/products/category/men', count: allProducts.filter(p => p.category === 'Men').length },
    { name: 'Women', path: '/products/category/women', count: allProducts.filter(p => p.category === 'Women').length },
    { name: 'Kids', path: '/products/category/kids', count: allProducts.filter(p => p.category === 'Kids').length },
    { name: 'Accessories', path: '/products/category/accessories', count: allProducts.filter(p => p.category === 'Accessories').length },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-gray-900' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    };
    
    console.log("Added to cart:", cartItem);
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    const event = new CustomEvent('cartUpdate', { detail: cartItem });
    window.dispatchEvent(event);
    
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn';
    notification.innerHTML = `
      <div class="flex items-center">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>${product.name} added to cart</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const handleQuickView = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    navigate(`/product/${product.id}`);
  };

  const uniqueBrands = [...new Set(allProducts.map(product => product.brand).filter(Boolean))];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-2">
              <Link to="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link to="/products" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                Collections
              </Link>
              {category && category !== 'all' && (
                <>
                  <span className="text-gray-300">/</span>
                  <Link 
                    to={`/products/category/${category}`}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                </>
              )}
              {subcategory && (
                <>
                  <span className="text-gray-300">/</span>
                  <span className="text-sm text-gray-900">
                    {subcategoryMapping[subcategory]}
                  </span>
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3">
              {getCategoryTitle()}
            </h1>
            <p className="text-gray-600">
              {getCategoryDescription()} • <span className="font-medium">{sortedProducts.length}</span> items
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full py-3 border border-gray-300 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filters</span>
            </button>
          </div>

          {/* Sidebar Filters */}
          <div className={`
            lg:w-1/4 lg:block ${isFilterOpen ? 'block' : 'hidden'}
            animate-fadeIn
          `}>
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-24">
              {/* Categories */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-px bg-gray-900"></div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Categories</h3>
                </div>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className={`block px-3 py-2 rounded transition-all duration-200 ${
                        (!category && cat.name === 'All') || 
                        (category && cat.name.toLowerCase() === category)
                          ? 'bg-gray-50 text-gray-900 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{cat.name}</span>
                        <span className="text-sm text-gray-500">
                          {cat.count}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-px bg-gray-900"></div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Price Range</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-900">${priceRange[0]}</span>
                    <span className="text-gray-900">${priceRange[1]}</span>
                  </div>
                  <div className="relative h-1 bg-gray-200 rounded-full">
                    <div 
                      className="absolute h-full bg-gray-900 rounded-full"
                      style={{ 
                        left: `${(priceRange[0] / 500) * 100}%`,
                        width: `${((priceRange[1] - priceRange[0]) / 500) * 100}%`
                      }}
                    ></div>
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="absolute w-full h-full opacity-0 cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="absolute w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-px bg-gray-900"></div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Rating</h3>
                </div>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0, 0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`flex items-center justify-between w-full px-2 py-1.5 rounded transition-colors ${
                        minRating === rating
                          ? 'bg-gray-50'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        {rating > 0 ? (
                          <>
                            <div className="flex">
                              {renderStars(rating)}
                            </div>
                            <span className="ml-2 text-sm text-gray-700">& up</span>
                          </>
                        ) : (
                          <span className="text-sm text-gray-700">All Ratings</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-500">
                        {rating > 0 
                          ? allProducts.filter(p => p.rating >= rating).length
                          : allProducts.length
                        }
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-4 h-px bg-gray-900"></div>
                  <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Brands</h3>
                </div>
                <div className="space-y-2">
                  {uniqueBrands.map((brand) => (
                    <label key={brand} className="flex items-center space-x-3 cursor-pointer p-1 rounded hover:bg-gray-50">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-gray-900 focus:ring-gray-900" 
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand));
                          }
                        }}
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(priceRange[0] > 0 || priceRange[1] < 500 || minRating > 0 || selectedBrands.length > 0) && (
                <button
                  onClick={() => {
                    setPriceRange([0, 500]);
                    setMinRating(0);
                    setSelectedBrands([]);
                  }}
                  className="w-full py-2 border border-gray-300 text-gray-700 rounded text-sm hover:border-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className={`px-3 py-1.5 rounded text-sm font-medium transition-all duration-300 ${
                        activeFilter === filter.key
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* View Toggle and Sort */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                  
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <>
                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                    : 'grid-cols-1'
                }`}>
                  {currentProducts.map((product, index) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className={`group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 block ${
                        viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Product Image */}
                      <div className={`relative overflow-hidden bg-gray-100 ${
                        viewMode === 'list' ? 'md:w-1/3' : 'aspect-square'
                      }`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Tags */}
                        <div className="absolute top-3 left-3">
                          {product.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-block px-2 py-1 bg-white text-gray-900 text-xs font-medium rounded mr-1 mb-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-2">
                          <button
                            onClick={(e) => handleAddToCart(product, e)}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
                            title="Add to Cart"
                          >
                            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className={`p-4 ${viewMode === 'list' ? 'md:w-2/3' : ''}`}>
                        <div className="mb-3">
                          <span className="text-xs tracking-wider uppercase text-gray-500 mb-1 block">
                            {product.category} • {product.brand}
                          </span>
                          <h3 className="text-lg font-light text-gray-900 group-hover:text-gray-700 transition-colors">
                            {product.name}
                          </h3>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          <div className="flex">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-xs text-gray-600 ml-2">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        {/* Description (List view only) */}
                        {viewMode === 'list' && (
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                            {product.description}
                          </p>
                        )}

                        {/* Price */}
                        <div className="flex items-center mb-4">
                          <span className="text-xl font-light text-gray-900">
                            ${product.price.toFixed(2)}
                          </span>
                          {product.originalPrice > product.price && (
                            <>
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                              <span className="ml-2 text-xs font-medium text-gray-900 bg-gray-100 px-1.5 py-0.5 rounded">
                                Save ${(product.originalPrice - product.price).toFixed(2)}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Colors (Grid view only) */}
                        {viewMode === 'grid' && product.colors && product.colors.length > 0 && (
                          <div className="flex items-center mb-4">
                            <div className="flex -space-x-2">
                              {product.colors.slice(0, 3).map((color, index) => (
                                <div
                                  key={index}
                                  className={`w-5 h-5 rounded-full border border-gray-200 ${color.value}`}
                                  title={color.name}
                                />
                              ))}
                            </div>
                            {product.colors.length > 3 && (
                              <span className="text-xs text-gray-500 ml-2">
                                +{product.colors.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Add to Cart Button */}
                        <button
                          onClick={(e) => handleAddToCart(product, e)}
                          className="w-full py-2 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        if (
                          pageNum === 1 || 
                          pageNum === totalPages || 
                          Math.abs(pageNum - currentPage) <= 1
                        ) {
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-8 h-8 rounded text-sm font-medium ${
                                currentPage === pageNum
                                  ? 'bg-gray-900 text-white'
                                  : 'border border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        } else if (
                          (pageNum === 2 && currentPage > 3) ||
                          (pageNum === totalPages - 1 && currentPage < totalPages - 2)
                        ) {
                          return (
                            <span key={pageNum} className="px-1">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setActiveFilter('all');
                    setPriceRange([0, 500]);
                    setMinRating(0);
                    setSelectedBrands([]);
                    if (category || subcategory || searchQuery) {
                      navigate('/products');
                    }
                  }}
                  className="px-6 py-2 bg-gray-900 text-white rounded font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .grid > div {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Custom range slider styles */
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #111827;
          border-radius: 50%;
          cursor: pointer;
        }

        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #111827;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;