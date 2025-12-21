// Navbar.jsx
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories', 'New Arrivals', 'Sale'];
  const subCategories = ['T-Shirts', 'Jeans', 'Dresses', 'Jackets', 'Shoes', 'Activewear', 'Luxury'];
  const cartItems = 3;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-xl backdrop-blur-lg bg-white/95' : 'bg-white'
    }`}>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0">
            <div className="text-sm font-medium flex items-center">
              <span className="hidden lg:inline">🎁 Free shipping on orders over $50 • </span>
              <span className="lg:hidden">🎁 Free shipping over $50</span>
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">Limited Time</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="hover:text-indigo-200 transition-colors duration-200 flex items-center">
                <i className="fas fa-map-marker-alt mr-1"></i>
                <span className="hidden sm:inline">Store Locator</span>
              </a>
              <a href="#" className="hover:text-indigo-200 transition-colors duration-200 flex items-center">
                <i className="fas fa-question-circle mr-1"></i>
                <span className="hidden sm:inline">Help</span>
              </a>
              <a href="#" className="hover:text-indigo-200 transition-colors duration-200 flex items-center">
                <i className="fas fa-phone-alt mr-1"></i>
                <span className="hidden sm:inline">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
            
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                FashionHub
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {categories.map((category) => (
              <div key={category} className="relative group">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {category}
                  {category === 'New Arrivals' && (
                    <span className="ml-2 px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">New</span>
                  )}
                  {category === 'Sale' && (
                    <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-500 text-white rounded-full">-50%</span>
                  )}
                </button>
                
                {/* Dropdown for Women category */}
                {category === 'Women' && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10">
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Women's Collection</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {['Dresses', 'Tops', 'Jeans', 'Activewear', 'Jackets', 'Shoes'].map((item) => (
                          <a 
                            key={item}
                            href="#"
                            className="p-2 rounded-lg hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button 
                onClick={toggleSearch}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Search"
              >
                <i className="fas fa-search text-xl text-gray-700"></i>
              </button>
              
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-2 z-20 animate-slideDown">
                  <div className="flex items-center bg-gray-50 rounded-lg p-2">
                    <i className="fas fa-search ml-2 text-gray-400"></i>
                    <input
                      type="text"
                      placeholder="Search products, brands, categories..."
                      className="flex-grow bg-transparent border-none focus:outline-none px-3 py-2"
                      autoFocus
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-200">
                      Search
                    </button>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 px-2">
                    Try: "summer dress" or "running shoes"
                  </div>
                </div>
              )}
            </div>

            {/* User Account */}
            <a href="#" className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 hidden md:block" aria-label="Account">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <i className="fas fa-user text-white text-sm"></i>
              </div>
            </a>

            {/* Wishlist */}
            <a href="#" className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative group" aria-label="Wishlist">
              <i className="fas fa-heart text-xl text-gray-700 group-hover:text-red-500 transition-colors duration-200"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                2
              </span>
            </a>

            {/* Cart */}
            <a href="#" className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative group" aria-label="Cart">
              <div className="relative">
                <i className="fas fa-shopping-bag text-xl text-gray-700 group-hover:text-indigo-600 transition-colors duration-200"></i>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg">
                  {cartItems}
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Sub-category Navigation */}
        <div className="hidden md:flex justify-center mt-4 overflow-x-auto">
          <div className="flex items-center space-x-1 bg-gray-50 rounded-xl p-1">
            {subCategories.map((subCat, index) => (
              <button
                key={subCat}
                className="px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 hover:bg-white hover:shadow-md hover:text-indigo-600"
              >
                {subCat}
                {index === subCategories.length - 1 && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-yellow-100 text-yellow-800 rounded-full">Luxury</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-2xl border border-gray-100 animate-slideDown">
            <div className="p-4">
              {/* Search in Mobile Menu */}
              <div className="mb-4">
                <div className="flex items-center bg-gray-50 rounded-lg p-3">
                  <i className="fas fa-search text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-grow bg-transparent border-none focus:outline-none px-3"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="space-y-1">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      activeCategory === category 
                        ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="font-medium">{category}</span>
                    {category === 'New Arrivals' && (
                      <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full">New</span>
                    )}
                    <i className="fas fa-chevron-right text-gray-400"></i>
                  </a>
                ))}
              </div>

              {/* User Links */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-2">
                  <a href="#" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <i className="fas fa-user text-gray-700"></i>
                    <span>My Account</span>
                  </a>
                  <a href="#" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <i className="fas fa-box text-gray-700"></i>
                    <span>Orders</span>
                  </a>
                  <a href="#" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <i className="fas fa-cog text-gray-700"></i>
                    <span>Settings</span>
                  </a>
                  <a href="#" className="p-3 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <i className="fas fa-sign-out-alt text-gray-700"></i>
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add these styles to your global CSS or Tailwind config */}
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
        
        /* Hide scrollbar for sub-category navigation */
        .overflow-x-auto {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;