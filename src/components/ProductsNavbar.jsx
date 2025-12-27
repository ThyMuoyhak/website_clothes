// ProductsNavbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Sample product categories data
const productCategories = {
  'Men': {
    items: [
      { id: 1, name: 'Casual T-Shirts', count: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop' },
      { id: 2, name: 'Formal Shirts', count: 32, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w-400&auto=format&fit=crop' },
      { id: 3, name: 'Jeans & Pants', count: 28, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&auto=format&fit=crop' },
      { id: 4, name: 'Jackets & Hoodies', count: 23, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop' },
      { id: 5, name: 'Activewear', count: 18, image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=400&auto=format&fit=crop' },
      { id: 6, name: 'Footwear', count: 36, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&auto=format&fit=crop' },
    ],
    brands: ['Nike', 'Adidas', 'Levi\'s', 'Puma', 'Tommy Hilfiger', 'Calvin Klein'],
    trending: ['Oversized Hoodies', 'Cargo Pants', 'Minimalist Watches', 'Sneakers']
  },
  'Women': {
    items: [
      { id: 7, name: 'Dresses', count: 67, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop' },
      { id: 8, name: 'Tops & Blouses', count: 42, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&auto=format&fit=crop' },
      { id: 9, name: 'Skirts', count: 25, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&auto=format&fit=crop' },
      { id: 10, name: 'Activewear', count: 31, image: 'https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?w=400&auto=format&fit=crop' },
      { id: 11, name: 'Handbags', count: 29, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop' },
      { id: 12, name: 'Jewelry', count: 48, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop' },
    ],
    brands: ['Zara', 'H&M', 'Forever 21', 'Mango', 'Gucci', 'Chanel'],
    trending: ['Floral Dresses', 'Cropped Tops', 'Platform Sandals', 'Pearl Jewelry']
  },
  'Kids': {
    items: [
      { id: 13, name: 'Boys Clothing', count: 34, image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=400&auto=format&fit=crop' },
      { id: 14, name: 'Girls Clothing', count: 38, image: 'https://images.unsplash.com/photo-1519686997393-7bdb5d6c9c3f?w=400&auto=format&fit=crop' },
      { id: 15, name: 'Baby Wear', count: 22, image: 'https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=400&auto=format&fit=crop' },
      { id: 16, name: 'School Uniforms', count: 15, image: 'https://images.unsplash.com/photo-1575425186775-b8de9a427e5e?w=400&auto=format&fit=crop' },
      { id: 17, name: 'Footwear', count: 27, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop' },
      { id: 18, name: 'Accessories', count: 19, image: 'https://images.unsplash.com/photo-1558769132-cb1f4e1c4b5f?w=400&auto=format&fit=crop' },
    ],
    brands: ['Carter\'s', 'Gap Kids', 'Old Navy', 'Disney', 'Nike Kids', 'Adidas Kids'],
    trending: ['Cartoon Prints', 'Light-up Shoes', 'Backpacks', 'Swimwear']
  },
  'Accessories': {
    items: [
      { id: 19, name: 'Watches', count: 42, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=400&auto=format&fit=crop' },
      { id: 20, name: 'Sunglasses', count: 28, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&auto=format&fit=crop' },
      { id: 21, name: 'Belts', count: 15, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop' },
      { id: 22, name: 'Hats & Caps', count: 23, image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&auto=format&fit=crop' },
      { id: 23, name: 'Bags', count: 37, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&auto=format&fit=crop' },
      { id: 24, name: 'Jewelry', count: 51, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&auto=format&fit=crop' },
    ],
    brands: ['Ray-Ban', 'Fossil', 'Michael Kors', 'Coach', 'Pandora', 'Tissot'],
    trending: ['Smart Watches', 'Aviator Sunglasses', 'Leather Backpacks', 'Minimalist Rings']
  }
};

const ProductsNavbar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Sample all products for search
  const allProducts = Object.values(productCategories).flatMap(category => category.items);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = searchQuery ? allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
    setIsMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    setIsMegaMenuOpen(false);
    setActiveCategory(null);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-xl backdrop-blur-lg bg-white/95' : 'bg-white'
    }`}>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium flex items-center">
              <span>🔥 Summer Sale: Up to 50% Off All Products!</span>
              <button className="ml-4 px-3 py-1 bg-white/20 rounded-full text-xs hover:bg-white/30 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/store-locator" className="hover:text-indigo-200 transition-colors">
                <i className="fas fa-map-marker-alt mr-1"></i>
                Stores
              </Link>
              <Link to="/track-order" className="hover:text-indigo-200 transition-colors">
                <i className="fas fa-truck mr-1"></i>
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              FashionHub
            </span>
          </Link>

          {/* All Products Dropdown Trigger */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <i className="fas fa-th-large"></i>
              <span>All Products</span>
              <i className="fas fa-chevron-down text-sm"></i>
            </button>

            {/* Mega Menu */}
            {isMegaMenuOpen && (
              <div 
                className="absolute left-0 mt-2 w-screen max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slideDown"
                onMouseLeave={handleMegaMenuLeave}
              >
                <div className="p-8">
                  <div className="grid grid-cols-4 gap-8">
                    {Object.entries(productCategories).map(([category, data]) => (
                      <div key={category} className="space-y-4">
                        <h3 className="font-bold text-lg text-gray-900 pb-2 border-b border-gray-200">
                          {category}
                          <span className="ml-2 text-sm font-normal text-gray-500">
                            ({data.items.length} categories)
                          </span>
                        </h3>
                        
                        {/* Subcategories */}
                        <ul className="space-y-2">
                          {data.items.map(item => (
                            <li key={item.id}>
                              <Link
                                to={`/products/category/${item.id}`}
                                className="flex items-center space-x-3 p-2 rounded-lg hover:bg-indigo-50 transition-colors group"
                              >
                                <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                                  <img 
                                    src={item.image} 
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900 group-hover:text-indigo-600">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-500">{item.count} products</p>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>

                        {/* Popular Brands */}
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="font-medium text-gray-700 mb-2">Popular Brands</h4>
                          <div className="flex flex-wrap gap-2">
                            {data.brands.map(brand => (
                              <span 
                                key={brand}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                              >
                                {brand}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Trending */}
                        <div className="pt-2">
                          <h4 className="font-medium text-gray-700 mb-2">Trending Now</h4>
                          <div className="flex flex-wrap gap-2">
                            {data.trending.map(item => (
                              <span 
                                key={item}
                                className="px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Featured Products Row */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="font-bold text-xl text-gray-900 mb-6">🔥 Featured This Week</h3>
                    <div className="grid grid-cols-4 gap-6">
                      {[
                        { name: 'Summer Collection', discount: '40% OFF', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&auto=format&fit=crop' },
                        { name: 'New Arrivals', tag: 'NEW', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&auto=format&fit=crop' },
                        { name: 'Best Sellers', sales: '500+ sold', image: 'https://images.unsplash.com/photo-1558769132-cb1f4e1c4b5f?w=300&auto=format&fit=crop' },
                        { name: 'Clearance Sale', discount: 'Up to 70%', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&auto=format&fit=crop' },
                      ].map((feature, index) => (
                        <Link
                          key={index}
                          to="/featured"
                          className="group relative overflow-hidden rounded-xl"
                        >
                          <div className="aspect-[4/3] overflow-hidden rounded-xl">
                            <img 
                              src={feature.image} 
                              alt={feature.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          </div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h4 className="font-bold text-lg">{feature.name}</h4>
                            {feature.discount && (
                              <p className="text-sm bg-red-500 inline-block px-2 py-1 rounded mt-1">
                                {feature.discount}
                              </p>
                            )}
                            {feature.tag && (
                              <p className="text-sm bg-blue-500 inline-block px-2 py-1 rounded mt-1">
                                {feature.tag}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex justify-between">
                      <Link 
                        to="/all-products" 
                        className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        View All Products <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                      <div className="flex items-center space-x-6">
                        <Link to="/sale" className="text-gray-700 hover:text-indigo-600 font-medium">
                          <i className="fas fa-percentage mr-2"></i> Sale Items
                        </Link>
                        <Link to="/new" className="text-gray-700 hover:text-indigo-600 font-medium">
                          <i className="fas fa-star mr-2"></i> New Arrivals
                        </Link>
                        <Link to="/trending" className="text-gray-700 hover:text-indigo-600 font-medium">
                          <i className="fas fa-fire mr-2"></i> Trending
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Actions */}
          <div className="flex items-center space-x-6">
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
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-50 animate-slideDown">
                  <div className="flex items-center bg-gray-50 rounded-lg p-3 mb-3">
                    <i className="fas fa-search ml-2 text-gray-400"></i>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search all products..."
                      className="flex-grow bg-transparent border-none focus:outline-none px-3 py-2"
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
                  
                  {searchQuery && filteredProducts.length > 0 && (
                    <div className="max-h-96 overflow-y-auto">
                      <div className="space-y-2">
                        {filteredProducts.slice(0, 8).map(product => (
                          <div
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer group"
                          >
                            <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="ml-3">
                              <p className="font-medium text-gray-900 group-hover:text-indigo-600">
                                {product.name}
                              </p>
                              <p className="text-sm text-gray-500">{product.count} products</p>
                            </div>
                            <i className="fas fa-chevron-right ml-auto text-gray-400 group-hover:text-indigo-600"></i>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <button 
                          onClick={() => {
                            navigate(`/search?q=${searchQuery}`);
                            setIsSearchOpen(false);
                          }}
                          className="w-full py-2 text-center text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium"
                        >
                          View all {filteredProducts.length} results
                          <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {searchQuery && filteredProducts.length === 0 && (
                    <div className="text-center py-6 text-gray-500">
                      <i className="fas fa-search text-3xl mb-3"></i>
                      <p>No products found for "{searchQuery}"</p>
                    </div>
                  )}
                  
                  {!searchQuery && (
                    <div className="text-sm text-gray-500">
                      <p className="mb-2 font-medium">Popular searches:</p>
                      <div className="flex flex-wrap gap-2">
                        {['T-shirts', 'Jeans', 'Dresses', 'Sneakers', 'Jackets', 'Watches'].map(term => (
                          <button
                            key={term}
                            onClick={() => setSearchQuery(term)}
                            className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            {term}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* User */}
            <Link to="/account" className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <i className="fas fa-user text-white text-sm"></i>
              </div>
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <i className="fas fa-heart text-xl text-gray-700 hover:text-red-500 transition-colors"></i>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
              <i className="fas fa-shopping-bag text-xl text-gray-700 hover:text-indigo-600 transition-colors"></i>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Quick Categories Bar */}
        <div className="mt-4">
          <div className="flex items-center justify-between bg-gray-50 rounded-xl p-2">
            <div className="flex items-center space-x-6">
              <Link 
                to="/sale" 
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <i className="fas fa-fire"></i>
                <span>Sale</span>
                <span className="text-xs bg-white/30 px-2 py-0.5 rounded">-50%</span>
              </Link>
              
              <div className="flex space-x-4">
                {['New Arrivals', 'Best Sellers', 'Trending', 'Limited Edition'].map((item, index) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="px-4 py-2 rounded-lg font-medium hover:bg-white hover:shadow-md transition-all duration-200 flex items-center space-x-2"
                  >
                    <span>{item}</span>
                    {index === 0 && (
                      <span className="px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">NEW</span>
                    )}
                    {index === 1 && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">HOT</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Link to="/free-shipping" className="hover:text-indigo-600">
                <i className="fas fa-shipping-fast mr-1"></i> Free Shipping
              </Link>
              <Link to="/easy-returns" className="hover:text-indigo-600">
                <i className="fas fa-undo mr-1"></i> Easy Returns
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (simplified version) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
        <div className="flex justify-around items-center p-2">
          <Link to="/" className="flex flex-col items-center p-2 text-gray-700 hover:text-indigo-600">
            <i className="fas fa-home text-xl"></i>
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <button 
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className="flex flex-col items-center p-2 text-gray-700 hover:text-indigo-600"
          >
            <i className="fas fa-th-large text-xl"></i>
            <span className="text-xs mt-1">Products</span>
          </button>
          
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex flex-col items-center p-2 text-gray-700 hover:text-indigo-600"
          >
            <i className="fas fa-search text-xl"></i>
            <span className="text-xs mt-1">Search</span>
          </button>
          
          <Link to="/cart" className="flex flex-col items-center p-2 text-gray-700 hover:text-indigo-600 relative">
            <i className="fas fa-shopping-bag text-xl"></i>
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
            <span className="text-xs mt-1">Cart</span>
          </Link>
        </div>
      </div>

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

export default ProductsNavbar;