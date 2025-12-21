import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureProducts = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      category: "Men",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
      tags: ["Bestseller", "Organic"],
      colors: ["bg-blue-600", "bg-black", "bg-white border"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      description: "Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this shirt offers exceptional breathability and softness.",
      features: ["100% Organic Cotton", "Breathable & Soft", "Machine Washable", "Tag-free Design"]
    },
    {
      id: 2,
      name: "Designer Summer Dress",
      category: "Women",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop",
      tags: ["New", "-30%"],
      colors: ["bg-pink-500", "bg-yellow-400", "bg-green-300"],
      sizes: ["XS", "S", "M"],
      inStock: true,
      description: "Elegant summer dress with floral patterns. Perfect for sunny days and special occasions.",
      features: ["Lightweight Fabric", "Floral Pattern", "Adjustable Straps", "Machine Washable"]
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      category: "Men",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop",
      tags: ["Limited", "Premium"],
      colors: ["bg-blue-900", "bg-gray-800", "bg-indigo-700"],
      sizes: ["M", "L", "XL"],
      inStock: true,
      description: "Timeless denim jacket with a modern fit. Perfect for layering and adding style to any outfit.",
      features: ["100% Cotton Denim", "Metal Buttons", "Multiple Pockets", "Classic Fit"]
    },
    {
      id: 4,
      name: "Activewear Set",
      category: "Women",
      price: 64.99,
      originalPrice: 89.99,
      rating: 4.6,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop",
      tags: ["Popular", "Sale"],
      colors: ["bg-purple-600", "bg-black", "bg-gray-200"],
      sizes: ["XS", "S", "M", "L"],
      inStock: false,
      description: "Complete activewear set for your workout sessions. Comfortable and stylish.",
      features: ["Moisture Wicking", "4-Way Stretch", "Breathable", "Quick Dry"]
    },
    {
      id: 5,
      name: "Kids Casual Sneakers",
      category: "Kids",
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop",
      tags: ["Bestseller", "-25%"],
      colors: ["bg-red-500", "bg-blue-400", "bg-green-500"],
      sizes: ["26", "28", "30", "32"],
      inStock: true,
      description: "Comfortable sneakers for kids with excellent grip and durable construction.",
      features: ["Rubber Sole", "Breathable Mesh", "Easy Velcro Closure", "Lightweight"]
    },
    {
      id: 6,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop",
      tags: ["Luxury", "New"],
      colors: ["bg-brown-800", "bg-black", "bg-tan"],
      sizes: ["One Size"],
      inStock: true,
      description: "Genuine leather crossbody bag with multiple compartments for organization.",
      features: ["Genuine Leather", "Adjustable Strap", "Multiple Pockets", "Magnetic Closure"]
    },
    {
      id: 7,
      name: "Wool Blend Sweater",
      category: "Men",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 201,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop",
      tags: ["Winter", "Cozy"],
      colors: ["bg-gray-700", "bg-navy", "bg-burgundy"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      description: "Warm and comfortable wool blend sweater perfect for cold weather.",
      features: ["Wool Blend", "Ribbed Cuffs", "Classic Crew Neck", "Machine Washable"]
    },
    {
      id: 8,
      name: "Silk Scarf Set",
      category: "Accessories",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop",
      tags: ["Gift", "Elegant"],
      colors: ["bg-pink-200", "bg-blue-100", "bg-yellow-100"],
      sizes: ["One Size"],
      inStock: true,
      description: "Set of three silk scarves in different patterns for versatile styling.",
      features: ["100% Silk", "Multiple Patterns", "Hand Rolled Edges", "Dry Clean Only"]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Products' },
    { key: 'men', label: 'Men' },
    { key: 'women', label: 'Women' },
    { key: 'kids', label: 'Kids' },
    { key: 'accessories', label: 'Accessories' },
    { key: 'sale', label: 'On Sale' },
    { key: 'new', label: 'New Arrivals' }
  ];

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sale') return product.originalPrice > product.price;
    if (activeFilter === 'new') return product.tags.includes('New');
    return product.category.toLowerCase() === activeFilter;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      default: return 0;
    }
  });

  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleQuickAddToCart = (productId, e) => {
    e.stopPropagation(); // Prevent triggering view details
    // Add to cart logic here
    alert(`Product ${productId} added to cart!`);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star text-sm ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium fashion items
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Sorting */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer"
              onClick={() => handleViewDetails(product.id)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        tag === 'Bestseller' ? 'bg-orange-500' :
                        tag.includes('%') ? 'bg-green-500' :
                        tag === 'New' ? 'bg-blue-500' :
                        tag === 'Limited' ? 'bg-purple-500' :
                        'bg-gray-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Out of Stock Badge */}
                {!product.inStock && (
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold">
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between">
                  {/* View Details Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(product.id);
                    }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                    title="View Details"
                  >
                    <i className="fas fa-eye text-gray-700"></i>
                  </button>

                  {/* Quick Add to Cart */}
                  <button
                    onClick={(e) => handleQuickAddToCart(product.id, e)}
                    disabled={!product.inStock}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                      product.inStock
                        ? 'bg-white hover:bg-gray-100'
                        : 'bg-gray-200 cursor-not-allowed'
                    }`}
                    title="Quick Add to Cart"
                  >
                    <i className={`fas fa-shopping-cart ${product.inStock ? 'text-gray-700' : 'text-gray-400'}`}></i>
                  </button>

                  {/* Wishlist */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert('Added to wishlist!');
                    }}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                    title="Add to Wishlist"
                  >
                    <i className="far fa-heart text-gray-700"></i>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-sm text-gray-500">{product.category}</span>
                    <h3 className="font-bold text-lg hover:text-indigo-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickAddToCart(product.id, e);
                    }}
                    disabled={!product.inStock}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      product.inStock
                        ? 'bg-gray-100 hover:bg-indigo-100 hover:text-indigo-600'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <i className="fas fa-shopping-cart"></i>
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                      <span className="ml-2 text-sm font-bold text-green-600">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>

                {/* Colors */}
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-600 mr-2">Colors:</span>
                  <div className="flex gap-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className={`w-6 h-6 rounded-full border ${color} ${
                          color.includes('border') ? 'border-gray-300' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex items-center mb-4">
                  <span className="text-sm text-gray-600 mr-2">Sizes:</span>
                  <div className="flex gap-1">
                    {product.sizes.map((size, index) => (
                      <span
                        key={index}
                        className="w-8 h-8 flex items-center justify-center text-xs border border-gray-300 rounded hover:border-indigo-600 hover:text-indigo-600 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Size selection logic here
                        }}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuickAddToCart(product.id, e);
                  }}
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                    product.inStock
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? (
                    <>
                      <i className="fas fa-shopping-cart mr-2"></i>
                      Add to Cart
                    </>
                  ) : (
                    'Out of Stock'
                  )}
                </button>

                {/* View Details Button (Desktop) */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewDetails(product.id);
                  }}
                  className="w-full mt-3 py-2 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-300 hidden md:block"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors duration-300"
          >
            View All Products
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>

        {/* Mobile View Details Button Container (for better UX) */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
          <div className="container mx-auto">
            <button
              onClick={() => navigate('/products')}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold text-lg"
            >
              Browse All Products
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal (Optional Enhancement) */}
      {/* You can add a quick view modal here that appears when clicking "View Details" without navigation */}
    </section>
  );
};

export default FeatureProducts;