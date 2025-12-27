// CompleteNavbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Extended product categories data
const productCategories = {
  'Men': {
    items: [
      { id: 1, name: 'Casual T-Shirts', count: 45, category: 'Men', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop' },
      { id: 2, name: 'Formal Shirts', count: 32, category: 'Men', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop' },
      { id: 3, name: 'Jeans & Pants', count: 28, category: 'Men', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop' },
      { id: 4, name: 'Jackets & Hoodies', count: 23, category: 'Men', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop' },
      { id: 5, name: 'Activewear', count: 18, category: 'Men', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&auto=format&fit=crop' },
      { id: 6, name: 'Footwear', count: 36, category: 'Men', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop' },
      { id: 7, name: 'Suits & Blazers', count: 15, category: 'Men', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&auto=format&fit=crop' },
      { id: 8, name: 'Accessories', count: 22, category: 'Men', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop' },
    ],
    brands: ['Nike', 'Adidas', 'Levi\'s', 'Puma', 'Tommy Hilfiger', 'Calvin Klein', 'Hugo Boss', 'Ralph Lauren'],
    trending: ['Oversized Hoodies', 'Cargo Pants', 'Minimalist Watches', 'Sneakers', 'Bomber Jackets']
  },
  'Women': {
    items: [
      { id: 9, name: 'Dresses', count: 67, category: 'Women', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop' },
      { id: 10, name: 'Tops & Blouses', count: 42, category: 'Women', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop' },
      { id: 11, name: 'Skirts', count: 25, category: 'Women', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&auto=format&fit=crop' },
      { id: 12, name: 'Activewear', count: 31, category: 'Women', image: 'https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?w=400&auto=format&fit=crop' },
      { id: 13, name: 'Handbags', count: 29, category: 'Women', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop' },
      { id: 14, name: 'Jewelry', count: 48, category: 'Women', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop' },
      { id: 15, name: 'Swimwear', count: 18, category: 'Women', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&auto=format&fit=crop' },
      { id: 16, name: 'Maternity Wear', count: 12, category: 'Women', image: 'https://images.unsplash.com/photo-1581404917879-53e1920fd54a?w=400&auto=format&fit=crop' },
    ],
    brands: ['Zara', 'H&M', 'Forever 21', 'Mango', 'Gucci', 'Chanel', 'Dior', 'Louis Vuitton'],
    trending: ['Floral Dresses', 'Cropped Tops', 'Platform Sandals', 'Pearl Jewelry', 'Boho Style']
  },
  'Kids': {
    items: [
      { id: 17, name: 'Boys Clothing', count: 34, category: 'Kids', image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=400&auto=format&fit=crop' },
      { id: 18, name: 'Girls Clothing', count: 38, category: 'Kids', image: 'https://images.unsplash.com/photo-1519686997393-7bdb5d6c9c3f?w=400&auto=format&fit=crop' },
      { id: 19, name: 'Baby Wear', count: 22, category: 'Kids', image: 'https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=400&auto=format&fit=crop' },
      { id: 20, name: 'School Uniforms', count: 15, category: 'Kids', image: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e5e?w=400&auto=format&fit=crop' },
      { id: 21, name: 'Footwear', count: 27, category: 'Kids', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop' },
      { id: 22, name: 'Accessories', count: 19, category: 'Kids', image: 'https://images.unsplash.com/photo-1558769132-cb1f4e1c4b5f?w=400&auto=format&fit=crop' },
      { id: 23, name: 'Toys & Games', count: 24, category: 'Kids', image: 'https://images.unsplash.com/photo-1587654780298-8f576d8c9ba8?w=400&auto=format&fit=crop' },
      { id: 24, name: 'Winter Wear', count: 16, category: 'Kids', image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=400&auto=format&fit=crop' },
    ],
    brands: ['Carter\'s', 'Gap Kids', 'Old Navy', 'Disney', 'Nike Kids', 'Adidas Kids', 'Caterpillar', 'Lego'],
    trending: ['Cartoon Prints', 'Light-up Shoes', 'Backpacks', 'Swimwear', 'Interactive Toys']
  },
  'Accessories': {
    items: [
      { id: 25, name: 'Watches', count: 42, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&auto=format&fit=crop' },
      { id: 26, name: 'Sunglasses', count: 28, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop' },
      { id: 27, name: 'Belts', count: 15, category: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop' },
      { id: 28, name: 'Hats & Caps', count: 23, category: 'Accessories', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop' },
      { id: 29, name: 'Bags', count: 37, category: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop' },
      { id: 30, name: 'Jewelry', count: 51, category: 'Accessories', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop' },
      { id: 31, name: 'Wallets', count: 19, category: 'Accessories', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop' },
      { id: 32, name: 'Tech Accessories', count: 27, category: 'Accessories', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop' },
    ],
    brands: ['Ray-Ban', 'Fossil', 'Michael Kors', 'Coach', 'Pandora', 'Tissot', 'Casio', 'Swatch'],
    trending: ['Smart Watches', 'Aviator Sunglasses', 'Leather Backpacks', 'Minimalist Rings', 'Wireless Earphones']
  }
};

const CompleteNavbar = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // All products for search - Flatten all items from categories
  const allProducts = Object.entries(productCategories).flatMap(([category, data]) => 
    data.items.map(item => ({
      ...item,
      category: category // Ensure category is defined
    }))
  );
  
  const totalProducts = allProducts.reduce((sum, product) => sum + product.count, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fixed search filter with optional chaining
  const filteredProducts = searchQuery ? allProducts.filter(product => {
    const query = searchQuery.toLowerCase();
    return (
      product?.name?.toLowerCase().includes(query) ||
      product?.category?.toLowerCase().includes(query)
    );
  }) : [];

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setIsSearchOpen(false);
    setSearchQuery('');
    setIsProductsMenuOpen(false);
  };

  // Function to create URL-friendly subcategory name
  const createSubcategoryUrl = (subcategory) => {
    return subcategory?.toLowerCase()
      .replace(/ & /g, '-')
      .replace(/ /g, '-')
      .replace(/[^a-z0-9-]/g, '') || '';
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-xl backdrop-blur-lg bg-white/95' : 'bg-white'
    }`}>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm font-medium flex items-center">
              <span>🚚 Free Shipping Worldwide |</span>
              <span className="ml-2">🔥 Summer Sale: Up to 50% Off</span>
              <button 
                onClick={() => navigate('/products?filter=sale')}
                className="ml-4 px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors"
              >
                Shop Now
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm mt-1 md:mt-0">
              <Link to="/store-locator" className="hover:text-indigo-200 transition-colors">
                <i className="fas fa-map-marker-alt mr-1"></i>
                <span className="hidden sm:inline">Store Locator</span>
              </Link>
              <Link to="/track-order" className="hover:text-indigo-200 transition-colors">
                <i className="fas fa-truck mr-1"></i>
                <span className="hidden sm:inline">Track Order</span>
              </Link>
              <Link to="/contact" className="hover:text-indigo-200 transition-colors">
                <i className="fas fa-headset mr-1"></i>
                <span className="hidden sm:inline">24/7 Support</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
            
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setActiveNav('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                FashionHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setActiveNav('home')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeNav === 'home' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
            >
              <i className="fas fa-home"></i>
              <span>Home</span>
            </Link>

            {/* Products */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsMenuOpen(true)}
              onMouseLeave={() => setIsProductsMenuOpen(false)}
            >
              <button
                onClick={() => {
                  setActiveNav('products');
                  setIsProductsMenuOpen(!isProductsMenuOpen);
                }}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeNav === 'products' 
                    ? 'text-indigo-600 bg-indigo-50' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
              >
                <i className="fas fa-th-large"></i>
                <span>Products</span>
                <i className="fas fa-chevron-down text-xs"></i>
                <span className="ml-1 px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full">
                  {totalProducts}+
                </span>
              </button>

              {/* Mega Products Menu */}
              {isProductsMenuOpen && (
                <div className="absolute left-0 mt-2 w-screen max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown">
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900">
                        <i className="fas fa-boxes mr-3 text-indigo-600"></i>
                        All Products
                      </h2>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-indigo-600">{totalProducts}</span> products across <span className="font-semibold">{Object.keys(productCategories).length}</span> categories
                      </div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-4 gap-8">
                      {Object.entries(productCategories).map(([category, data]) => {
                        const categoryTotal = data.items.reduce((sum, item) => sum + item.count, 0);
                        return (
                          <div key={category} className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-bold text-lg text-gray-900">
                                {category}
                                <span className="ml-2 text-sm font-normal text-gray-500">
                                  ({categoryTotal})
                                </span>
                              </h3>
                              <Link 
                                to={`/products/category/${category.toLowerCase()}`}
                                onClick={() => setIsProductsMenuOpen(false)}
                                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                              >
                                View All →
                              </Link>
                            </div>
                            
                            {/* Subcategories */}
                            <ul className="space-y-2">
                              {data.items.map(item => (
                                <li key={item.id}>
                                  <Link
                                    to={`/products/category/${category.toLowerCase()}/${createSubcategoryUrl(item.name)}`}
                                    onClick={() => setIsProductsMenuOpen(false)}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-50 transition-colors group"
                                  >
                                    <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                      <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                      />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="font-medium text-gray-900 group-hover:text-indigo-600 truncate">
                                        {item.name}
                                      </p>
                                      <p className="text-sm text-gray-500">{item.count} products</p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            {/* Quick Actions */}
                            <div className="space-y-3">
                              <div className="flex flex-wrap gap-1">
                                {data.brands.slice(0, 4).map(brand => (
                                  <button
                                    key={brand}
                                    onClick={() => {
                                      navigate(`/products?q=${brand}`);
                                      setIsProductsMenuOpen(false);
                                    }}
                                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs hover:bg-gray-200 transition-colors cursor-pointer"
                                  >
                                    {brand}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* All Products Banner */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              <i className="fas fa-star mr-2 text-yellow-500"></i>
                              Browse Complete Collection
                            </h3>
                            <p className="text-gray-600">
                              Explore {totalProducts}+ premium products with free shipping and easy returns
                            </p>
                          </div>
                          <Link 
                            to="/products"
                            onClick={() => setIsProductsMenuOpen(false)}
                            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                          >
                            View All Products
                            <i className="fas fa-arrow-right ml-2"></i>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Special Collections */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4">
                        <Link
                          to="/products?filter=sale"
                          onClick={() => setIsProductsMenuOpen(false)}
                          className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-xl hover:shadow-md transition-all"
                        >
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                              <i className="fas fa-fire text-white"></i>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">Sale Items</h4>
                              <p className="text-sm text-gray-600">Up to 70% off</p>
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/products?filter=new"
                          onClick={() => setIsProductsMenuOpen(false)}
                          className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl hover:shadow-md transition-all"
                        >
                          <div className="flex items-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                              <i className="fas fa-star text-white"></i>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">New Arrivals</h4>
                              <p className="text-sm text-gray-600">Latest collections</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              to="/about"
              onClick={() => setActiveNav('about')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeNav === 'about' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
            >
              <span>About Us</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setActiveNav('contact')}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeNav === 'contact' 
                  ? 'text-indigo-600 bg-indigo-50' 
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
            >
              <span>Contact</span>
            </Link>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Search"
              >
                <i className="fas fa-search text-xl text-gray-700"></i>
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-slideDown">
                  <div className="flex items-center bg-gray-50 rounded-xl p-3 mb-4">
                    <i className="fas fa-search ml-2 text-gray-400"></i>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products, categories, brands..."
                      className="flex-grow bg-transparent border-none focus:outline-none px-3 py-2 text-lg"
                      autoFocus
                    />
                    {searchQuery && (
                      <button 
                        onClick={() => setSearchQuery('')}
                        className="p-2 text-gray-400 hover:text-gray-600"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                  
                  {searchQuery && (
                    <>
                      {filteredProducts.length > 0 ? (
                        <div className="max-h-96 overflow-y-auto">
                          <div className="space-y-2">
                            <p className="text-sm text-gray-500 mb-2">
                              Found {filteredProducts.length} results
                            </p>
                            {filteredProducts.slice(0, 6).map(product => (
                              <div
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                className="flex items-center p-3 rounded-xl hover:bg-indigo-50 cursor-pointer group border border-transparent hover:border-indigo-100 transition-all"
                              >
                                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                                  <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="ml-4 flex-1">
                                  <p className="font-semibold text-gray-900 group-hover:text-indigo-600">
                                    {product.name}
                                  </p>
                                  <p className="text-sm text-gray-500">{product?.category} • {product.count} products</p>
                                </div>
                                <i className="fas fa-chevron-right ml-4 text-gray-400 group-hover:text-indigo-600"></i>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <button 
                              onClick={() => {
                                navigate(`/products?q=${searchQuery}`);
                                setIsSearchOpen(false);
                              }}
                              className="w-full py-3 text-center text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium"
                            >
                              View all search results
                              <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8">
                          <i className="fas fa-search text-4xl text-gray-300 mb-3"></i>
                          <p className="text-gray-600">No products found for "{searchQuery}"</p>
                          <button 
                            onClick={() => {
                              navigate('/products');
                              setIsSearchOpen(false);
                            }}
                            className="mt-4 px-4 py-2 text-indigo-600 hover:text-indigo-800 font-medium"
                          >
                            Browse all products
                          </button>
                        </div>
                      )}
                    </>
                  )}
                  
                  {!searchQuery && (
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-3">Popular Categories:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(productCategories).map(([category, data]) => (
                          <button
                            key={category}
                            onClick={() => {
                              navigate(`/products/category/${category.toLowerCase()}`);
                              setIsSearchOpen(false);
                            }}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                          >
                            <div className="w-8 h-8 rounded bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center mr-3">
                              <i className="fas fa-folder text-indigo-600"></i>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{category}</p>
                              <p className="text-xs text-gray-500">{data.items.length} categories</p>
                            </div>
                          </button>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-medium text-gray-700 mb-2">Quick Links:</p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => {
                              navigate('/products?filter=sale');
                              setIsSearchOpen(false);
                            }}
                            className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm hover:bg-red-100"
                          >
                            Sale Items
                          </button>
                          <button
                            onClick={() => {
                              navigate('/products?filter=new');
                              setIsSearchOpen(false);
                            }}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100"
                          >
                            New Arrivals
                          </button>
                          <button
                            onClick={() => {
                              navigate('/products?filter=bestseller');
                              setIsSearchOpen(false);
                            }}
                            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm hover:bg-green-100"
                          >
                            Best Sellers
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* User Account */}
            <Link 
              to="/account" 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors hidden md:block"
              aria-label="Account"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <i className="fas fa-user text-white text-sm"></i>
              </div>
            </Link>

            {/* Wishlist */}
            <Link 
              to="/wishlist" 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              aria-label="Wishlist"
            >
              <i className="fas fa-heart text-xl text-gray-700 hover:text-red-500 transition-colors"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link 
              to="/cart" 
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              aria-label="Cart"
            >
              <div className="relative">
                <i className="fas fa-shopping-bag text-xl text-gray-700 hover:text-indigo-600 transition-colors"></i>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                  5
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Quick Categories Bar */}
        <div className="hidden md:flex justify-center mt-4">
          <div className="flex items-center space-x-4 bg-gray-50 rounded-xl p-2">
            <button
              onClick={() => {
                navigate('/products?filter=sale');
                setActiveNav('products');
              }}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <i className="fas fa-fire"></i>
              <span>Sale</span>
              <span className="text-xs bg-white/30 px-2 py-0.5 rounded">-50%</span>
            </button>
            
            {['New Arrivals', 'Best Sellers', 'Trending Now', 'Limited Edition'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const route = item === 'New Arrivals' ? '/products?filter=new' :
                                item === 'Best Sellers' ? '/products?filter=bestseller' :
                                item === 'Trending Now' ? '/products?filter=trending' :
                                '/products?filter=limited';
                  navigate(route);
                  setActiveNav('products');
                }}
                className="px-4 py-2 rounded-lg font-medium hover:bg-white hover:shadow-md transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-2xl animate-slideDown">
          <div className="container mx-auto px-4 py-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <Link
                to="/"
                onClick={() => {
                  setActiveNav('home');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  activeNav === 'home' 
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className="fas fa-home text-lg"></i>
                  <span className="font-medium">Home</span>
                </div>
                <i className="fas fa-chevron-right text-gray-400"></i>
              </Link>

              {/* Products Mobile */}
              <div className="space-y-1">
                <button
                  onClick={() => setIsProductsMenuOpen(!isProductsMenuOpen)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl ${
                    activeNav === 'products' 
                      ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-th-large text-lg"></i>
                    <span className="font-medium">Products</span>
                    <span className="px-2 py-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full">
                      {totalProducts}+
                    </span>
                  </div>
                  <i className={`fas fa-chevron-right text-gray-400 transition-transform ${
                    isProductsMenuOpen ? 'rotate-90' : ''
                  }`}></i>
                </button>

                {isProductsMenuOpen && (
                  <div className="ml-8 space-y-2 animate-slideDown">
                    {Object.entries(productCategories).map(([category, data]) => {
                      const categoryTotal = data.items.reduce((sum, item) => sum + item.count, 0);
                      return (
                        <div key={category} className="space-y-1">
                          <div className="flex items-center justify-between p-2">
                            <span className="font-medium text-gray-900">{category}</span>
                            <span className="text-sm text-gray-500">({categoryTotal})</span>
                          </div>
                          <div className="space-y-1">
                            {data.items.slice(0, 3).map(item => (
                              <Link
                                key={item.id}
                                to={`/products/category/${category.toLowerCase()}/${createSubcategoryUrl(item.name)}`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsProductsMenuOpen(false);
                                }}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50"
                              >
                                <div className="w-10 h-10 rounded overflow-hidden flex-shrink-0">
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-medium text-sm text-gray-900">{item.name}</p>
                                  <p className="text-xs text-gray-500">{item.count} products</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          {data.items.length > 3 && (
                            <Link
                              to={`/products/category/${category.toLowerCase()}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium p-2 block"
                            >
                              View all {category} →
                            </Link>
                          )}
                        </div>
                      );
                    })}
                    
                    {/* Special Collections in Mobile */}
                    <div className="space-y-2 mt-4 pt-4 border-t border-gray-200">
                      <Link
                        to="/products?filter=sale"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center p-3 bg-red-50 rounded-lg"
                      >
                        <i className="fas fa-fire text-red-500 mr-3"></i>
                        <span className="font-medium text-gray-900">Sale Items</span>
                      </Link>
                      <Link
                        to="/products?filter=new"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center p-3 bg-blue-50 rounded-lg"
                      >
                        <i className="fas fa-star text-blue-500 mr-3"></i>
                        <span className="font-medium text-gray-900">New Arrivals</span>
                      </Link>
                      <Link
                        to="/products"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg text-center font-medium text-indigo-600 mt-2 block"
                      >
                        View All Products
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => {
                  setActiveNav('about');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  activeNav === 'about' 
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className="fas fa-info-circle text-lg"></i>
                  <span className="font-medium">About Us</span>
                </div>
                <i className="fas fa-chevron-right text-gray-400"></i>
              </Link>

              <Link
                to="/contact"
                onClick={() => {
                  setActiveNav('contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  activeNav === 'contact' 
                    ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-lg"></i>
                  <span className="font-medium">Contact</span>
                </div>
                <i className="fas fa-chevron-right text-gray-400"></i>
              </Link>
            </div>

            {/* Mobile Account Links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                <Link to="/account" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                  <i className="fas fa-user text-gray-700"></i>
                  <span>Account</span>
                </Link>
                <Link to="/orders" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                  <i className="fas fa-box text-gray-700"></i>
                  <span>Orders</span>
                </Link>
                <Link to="/wishlist" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                  <i className="fas fa-heart text-gray-700"></i>
                  <span>Wishlist</span>
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </Link>
                <Link to="/cart" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                  <i className="fas fa-shopping-bag text-gray-700"></i>
                  <span>Cart</span>
                  <span className="ml-auto bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    5
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default CompleteNavbar;