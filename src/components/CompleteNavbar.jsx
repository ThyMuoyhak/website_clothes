// CompleteNavbar.jsx - Modern Redesign
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
    ],
    brands: ['Nike', 'Adidas', 'Levi\'s', 'Puma', 'Tommy Hilfiger'],
    trending: ['Oversized Hoodies', 'Cargo Pants', 'Minimalist Watches']
  },
  'Women': {
    items: [
      { id: 9, name: 'Dresses', count: 67, category: 'Women', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop' },
      { id: 10, name: 'Tops & Blouses', count: 42, category: 'Women', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop' },
      { id: 11, name: 'Skirts', count: 25, category: 'Women', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&auto=format&fit=crop' },
      { id: 12, name: 'Activewear', count: 31, category: 'Women', image: 'https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?w=400&auto=format&fit=crop' },
    ],
    brands: ['Zara', 'H&M', 'Forever 21', 'Mango', 'Gucci'],
    trending: ['Floral Dresses', 'Cropped Tops', 'Platform Sandals']
  },
  'Kids': {
    items: [
      { id: 17, name: 'Boys Clothing', count: 34, category: 'Kids', image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=400&auto=format&fit=crop' },
      { id: 18, name: 'Girls Clothing', count: 38, category: 'Kids', image: 'https://images.unsplash.com/photo-1519686997393-7bdb5d6c9c3f?w=400&auto=format&fit=crop' },
      { id: 19, name: 'Baby Wear', count: 22, category: 'Kids', image: 'https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=400&auto=format&fit=crop' },
      { id: 20, name: 'School Uniforms', count: 15, category: 'Kids', image: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e5e?w=400&auto=format&fit=crop' },
    ],
    brands: ['Carter\'s', 'Gap Kids', 'Old Navy', 'Disney', 'Nike Kids'],
    trending: ['Cartoon Prints', 'Light-up Shoes', 'Backpacks']
  },
  'Accessories': {
    items: [
      { id: 25, name: 'Watches', count: 42, category: 'Accessories', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&auto=format&fit=crop' },
      { id: 26, name: 'Sunglasses', count: 28, category: 'Accessories', image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop' },
      { id: 27, name: 'Belts', count: 15, category: 'Accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop' },
      { id: 28, name: 'Hats & Caps', count: 23, category: 'Accessories', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop' },
    ],
    brands: ['Ray-Ban', 'Fossil', 'Michael Kors', 'Coach', 'Pandora'],
    trending: ['Smart Watches', 'Aviator Sunglasses', 'Leather Backpacks']
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

  const allProducts = Object.entries(productCategories).flatMap(([category, data]) => 
    data.items.map(item => ({
      ...item,
      category: category
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

  const createSubcategoryUrl = (subcategory) => {
    return subcategory?.toLowerCase()
      .replace(/ & /g, '-')
      .replace(/ /g, '-')
      .replace(/[^a-z0-9-]/g, '') || '';
  };

  return (
    <>
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
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .border-gradient {
          border: double 1px transparent;
          background-image: linear-gradient(white, white), 
                            linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-origin: border-box;
          background-clip: padding-box, border-box;
        }
      `}</style>
      
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg' : 'bg-white'}`}>
        {/* Modern Announcement Bar */}
        <div className="bg-black text-white py-2 px-4">
          <div className="container mx-auto">
            <div className="flex justify-center items-center">
              <div className="flex items-center space-x-4 text-sm">
                <span className="hidden md:inline-flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Free shipping on orders over $50
                </span>
                <span className="hidden lg:inline">|</span>
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  Summer Sale: 50% Off
                </span>
                <button 
                  onClick={() => navigate('/products?filter=sale')}
                  className="ml-4 px-3 py-1 text-xs border border-white/30 hover:bg-white/10 rounded-full transition-colors"
                >
                  Shop Now →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation - Modern Design */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}></span>
                  <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}></span>
                </div>
              </button>
              
              <Link 
                to="/" 
                className="flex items-center space-x-3 group"
                onClick={() => setActiveNav('home')}
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight text-gray-900 block">
                    AESTHETE
                  </span>
                  <span className="text-xs text-gray-500 tracking-widest uppercase">COLLECTIVE</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Modern */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                to="/"
                onClick={() => setActiveNav('home')}
                className={`px-5 py-2 font-medium transition-all duration-200 relative group ${
                  activeNav === 'home' 
                    ? 'text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
                {activeNav === 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></span>
                )}
              </Link>

              {/* Products Dropdown - Modern */}
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
                  className={`px-5 py-2 font-medium transition-all duration-200 flex items-center space-x-2 relative group ${
                    activeNav === 'products' 
                      ? 'text-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>Collections</span>
                  <svg className={`w-4 h-4 transition-transform ${isProductsMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {activeNav === 'products' && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></span>
                  )}
                </button>

                {/* Modern Mega Menu */}
                {isProductsMenuOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden animate-slideDown">
                    <div className="p-8">
                      {/* Grid Layout */}
                      <div className="grid grid-cols-4 gap-8">
                        {Object.entries(productCategories).map(([category, data]) => (
                          <div key={category} className="space-y-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-gray-900 rounded-full"></div>
                              <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">
                                {category}
                              </h3>
                            </div>
                            
                            {/* Subcategories */}
                            <ul className="space-y-2">
                              {data.items.map(item => (
                                <li key={item.id}>
                                  <Link
                                    to={`/products/category/${category.toLowerCase()}/${createSubcategoryUrl(item.name)}`}
                                    onClick={() => setIsProductsMenuOpen(false)}
                                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                                  >
                                    <span className="text-gray-700 group-hover:text-gray-900 text-sm">
                                      {item.name}
                                    </span>
                                    <span className="text-xs text-gray-400 group-hover:text-gray-600">
                                      {item.count}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>

                            {/* Brands */}
                            <div className="pt-4 border-t border-gray-100">
                              <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Brands</h4>
                              <div className="flex flex-wrap gap-1.5">
                                {data.brands.slice(0, 3).map(brand => (
                                  <button
                                    key={brand}
                                    onClick={() => {
                                      navigate(`/products?q=${brand}`);
                                      setIsProductsMenuOpen(false);
                                    }}
                                    className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                                  >
                                    {brand}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Featured Section */}
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <div className="grid grid-cols-2 gap-6">
                          <Link
                            to="/products?filter=new"
                            onClick={() => setIsProductsMenuOpen(false)}
                            className="group relative overflow-hidden rounded-lg"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-gray-900/5 group-hover:from-gray-900/10 group-hover:to-gray-900/10 transition-all"></div>
                            <div className="relative p-6">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">New Arrivals</h4>
                                  <p className="text-sm text-gray-600">Latest designs</p>
                                </div>
                              </div>
                            </div>
                          </Link>

                          <Link
                            to="/products?filter=sale"
                            onClick={() => setIsProductsMenuOpen(false)}
                            className="group relative overflow-hidden rounded-lg"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-50 group-hover:from-red-100 group-hover:to-red-100 transition-all"></div>
                            <div className="relative p-6">
                              <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">Summer Sale</h4>
                                  <p className="text-sm text-gray-600">Up to 50% off</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setActiveNav('about')}
                className={`px-5 py-2 font-medium transition-all duration-200 relative group ${
                  activeNav === 'about' 
                    ? 'text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                About
                {activeNav === 'about' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></span>
                )}
              </Link>

              <Link
                to="/contact"
                onClick={() => setActiveNav('contact')}
                className={`px-5 py-2 font-medium transition-all duration-200 relative group ${
                  activeNav === 'contact' 
                    ? 'text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
                {activeNav === 'contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></span>
                )}
              </Link>

              <Link
                to="/journal"
                onClick={() => setActiveNav('journal')}
                className={`px-5 py-2 font-medium transition-all duration-200 relative group ${
                  activeNav === 'journal' 
                    ? 'text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Journal
                {activeNav === 'journal' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900"></span>
                )}
              </Link>
            </div>

            {/* Action Icons - Modern */}
            <div className="flex items-center space-x-2">
              {/* Search - Modern */}
              <div className="relative">
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Search"
                >
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                
                {isSearchOpen && (
                  <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 animate-slideDown">
                    <div className="relative">
                      <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search products, collections..."
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900/10 text-sm"
                        autoFocus
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery('')}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                        >
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {searchQuery && (
                      <div className="mt-4 max-h-80 overflow-y-auto">
                        {filteredProducts.length > 0 ? (
                          <>
                            <div className="space-y-2">
                              {filteredProducts.slice(0, 5).map(product => (
                                <div
                                  key={product.id}
                                  onClick={() => handleProductClick(product.id)}
                                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                  <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                                    <img 
                                      src={product.image} 
                                      alt={product.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                    <p className="text-xs text-gray-500">{product.category}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <button 
                              onClick={() => {
                                navigate(`/products?q=${searchQuery}`);
                                setIsSearchOpen(false);
                              }}
                              className="w-full mt-3 py-2 text-center text-sm text-gray-600 hover:text-gray-900 font-medium border-t border-gray-100 pt-3"
                            >
                              View all results →
                            </button>
                          </>
                        ) : (
                          <div className="text-center py-6">
                            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-600 text-sm">No results found</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link 
                to="/wishlist" 
                className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors relative"
                aria-label="Wishlist"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  3
                </span>
              </Link>

              {/* Cart */}
              <Link 
                to="/cart" 
                className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors relative"
                aria-label="Cart"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">
                  5
                </span>
              </Link>

              {/* User Account */}
              <Link 
                to="/account" 
                className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors hidden lg:block"
                aria-label="Account"
              >
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Modern Quick Categories */}
          <div className="hidden lg:flex justify-center mt-6">
            <div className="flex items-center space-x-6">
              {['New In', 'Best Sellers', 'Summer Edit', 'Designer', 'Sale'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const route = item === 'New In' ? '/products?filter=new' :
                                  item === 'Best Sellers' ? '/products?filter=bestseller' :
                                  item === 'Summer Edit' ? '/products?filter=summer' :
                                  item === 'Sale' ? '/products?filter=sale' :
                                  '/products?filter=designer';
                    navigate(route);
                    setActiveNav('products');
                  }}
                  className={`text-sm font-medium transition-colors relative group ${
                    item === 'Sale' ? 'text-red-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                  {item === 'Sale' && (
                    <span className="absolute -top-1 -right-3 text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded-full">
                      -50%
                    </span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modern Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl animate-slideDown">
            <div className="container mx-auto px-4 py-6">
              {/* Search in Mobile Menu */}
              <div className="relative mb-6">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none text-sm"
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-1">
                {['Home', 'Collections', 'About', 'Contact', 'Journal'].map((item) => (
                  <Link
                    key={item}
                    to={item === 'Home' ? '/' : 
                         item === 'Collections' ? '/products' :
                         `/${item.toLowerCase()}`}
                    onClick={() => {
                      setActiveNav(item.toLowerCase());
                      setIsMobileMenuOpen(false);
                      if (item === 'Collections') setIsProductsMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeNav === item.toLowerCase() 
                        ? 'bg-gray-50 text-gray-900' 
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{item}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>

              {/* Mobile Categories Grid */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Shop by Category</h3>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(productCategories).map(([category, data]) => (
                    <Link
                      key={category}
                      to={`/products/category/${category.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">{category}</h4>
                      <p className="text-xs text-gray-500">
                        {data.items.length} collections
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Account Links */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-3">
                  <Link to="/account" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm">Account</span>
                  </Link>
                  <Link to="/orders" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="text-sm">Orders</span>
                  </Link>
                </div>
              </div>

              {/* Mobile Sale Banner */}
              <div className="mt-8">
                <Link
                  to="/products?filter=sale"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">Summer Sale</h4>
                      <p className="text-sm text-gray-600">Up to 50% off</p>
                    </div>
                    <span className="px-3 py-1 bg-red-600 text-white text-xs rounded-full font-medium">
                      -50%
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default CompleteNavbar;