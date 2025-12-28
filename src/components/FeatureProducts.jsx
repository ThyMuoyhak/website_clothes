import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeatureProducts = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Organic Cotton Tee",
      category: "Essentials",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop"
      ],
      tags: ["Bestseller", "Organic"],
      colors: ["#1a1a1a", "#4a4a4a", "#ffffff"],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      description: "Premium organic cotton tee with a tailored fit and sustainable production.",
      features: ["100% Organic Cotton", "Tailored Fit", "Sustainable Production"]
    },
    {
      id: 2,
      name: "Silk Blend Dress",
      category: "Contemporary",
      price: 189.99,
      originalPrice: 259.99,
      rating: 4.8,
      reviews: 256,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["New", "Luxury"],
      colors: ["#f8b4d9", "#fde68a", "#a7f3d0"],
      sizes: ["XS", "S", "M"],
      inStock: true,
      description: "Elegant silk blend dress with modern drape and refined silhouette.",
      features: ["Silk Blend Fabric", "Modern Drape", "Refined Silhouette"]
    },
    {
      id: 3,
      name: "Raw Denim Jacket",
      category: "Utility",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["Premium", "Raw"],
      colors: ["#1e3a8a", "#1e293b", "#312e81"],
      sizes: ["M", "L", "XL"],
      inStock: true,
      description: "Raw selvedge denim jacket with classic hardware and durable construction.",
      features: ["Selvedge Denim", "Classic Hardware", "Durable Construction"]
    },
    {
      id: 4,
      name: "Performance Set",
      category: "Activewear",
      price: 84.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["Performance", "Lightweight"],
      colors: ["#7c3aed", "#1a1a1a", "#e5e5e5"],
      sizes: ["XS", "S", "M", "L"],
      inStock: true,
      description: "Technical performance set with moisture-wicking fabric and ergonomic design.",
      features: ["Moisture Wicking", "Ergonomic Design", "Quick Dry"]
    },
    {
      id: 5,
      name: "Minimalist Sneakers",
      category: "Footwear",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["Bestseller", "Minimal"],
      colors: ["#dc2626", "#3b82f6", "#10b981"],
      sizes: ["US 8", "US 9", "US 10", "US 11"],
      inStock: true,
      description: "Minimalist leather sneakers with premium construction and comfortable fit.",
      features: ["Premium Leather", "Ortholite Insole", "Minimal Design"]
    },
    {
      id: 6,
      name: "Leather Tote",
      category: "Accessories",
      price: 299.99,
      originalPrice: 399.99,
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["Luxury", "Crafted"],
      colors: ["#78350f", "#1a1a1a", "#d4a574"],
      sizes: ["One Size"],
      inStock: true,
      description: "Full-grain leather tote with handcrafted details and functional organization.",
      features: ["Full-grain Leather", "Handcrafted", "Multiple Compartments"]
    },
    {
      id: 7,
      name: "Cashmere Blend",
      category: "Knitwear",
      price: 179.99,
      originalPrice: 239.99,
      rating: 4.4,
      reviews: 201,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1510227320294-2c2b0d2b31b3?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["Luxury", "Warm"],
      colors: ["#374151", "#1e3a8a", "#7f1d1d"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      description: "Luxurious cashmere blend sweater with fine gauge knit and classic styling.",
      features: ["Cashmere Blend", "Fine Gauge Knit", "Timeless Design"]
    },
    {
      id: 8,
      name: "Silk Scarf Set",
      category: "Accessories",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop"
      ],
      tags: ["Set", "Luxury"],
      colors: ["#fce7f3", "#e0f2fe", "#fef3c7"],
      sizes: ["One Size"],
      inStock: true,
      description: "Collection of pure silk scarves with hand-finished edges and artisanal patterns.",
      features: ["Pure Silk", "Hand Finished", "Artisanal Patterns"]
    }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'essentials', label: 'Essentials' },
    { key: 'contemporary', label: 'Contemporary' },
    { key: 'luxury', label: 'Luxury' },
    { key: 'accessories', label: 'Accessories' },
    { key: 'sale', label: 'Sale' }
  ];

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sale') return product.originalPrice > product.price;
    return product.category.toLowerCase() === activeFilter;
  });

  const handleQuickView = (productId) => {
    const product = products.find(p => p.id === productId);
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

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

  return (
    <section className="py-24 bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Featured <span className="font-normal">Collections</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Curated selection of premium essentials and statement pieces for the modern wardrobe
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                  activeFilter === filter.key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Card */}
              <div className="relative overflow-hidden">
                {/* Image Container */}
                <div className="aspect-square overflow-hidden mb-6">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-wider uppercase text-gray-500">
                      {product.category}
                    </span>
                    {/* Rating */}
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-light tracking-tight group-hover:text-gray-700 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-center">
                    <span className="text-xl font-light tracking-tight">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Colors */}
                  <div className="flex items-center space-x-2">
                    {product.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Hover Actions */}
                <div className={`absolute inset-x-0 bottom-0 p-4 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleQuickView(product.id)}
                      className="px-4 py-2 bg-white text-gray-900 text-sm font-medium tracking-wide hover:bg-gray-50 transition-colors duration-300 border border-gray-200"
                    >
                      Quick View
                    </button>
                    <button
                      onClick={() => {
                        // Add to cart logic
                      }}
                      className="px-4 py-2 bg-gray-900 text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>

                {/* Sale Badge */}
                {product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1 bg-gray-900 text-white text-xs tracking-widest">
                      SALE
                    </div>
                  </div>
                )}

                {/* Wishlist Button */}
                <button
                  className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Wishlist logic
                  }}
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-20">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center space-x-3 text-gray-900 hover:text-gray-700 transition-colors duration-300 group"
          >
            <span className="text-sm tracking-wider uppercase font-medium">View All Products</span>
            <div className="w-8 h-px bg-gray-900 group-hover:w-12 transition-all duration-300" />
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left Column - Images */}
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {quickViewProduct.images?.map((img, index) => (
                    <div key={index} className="aspect-square overflow-hidden rounded">
                      <img
                        src={img}
                        alt={`${quickViewProduct.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-light mb-2">{quickViewProduct.name}</h2>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {quickViewProduct.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(quickViewProduct.rating)}
                      <span className="text-sm text-gray-500">({quickViewProduct.reviews})</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {quickViewProduct.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-2xl font-light">
                  ${quickViewProduct.price}
                  {quickViewProduct.originalPrice > quickViewProduct.price && (
                    <span className="ml-2 text-base text-gray-500 line-through">
                      ${quickViewProduct.originalPrice}
                    </span>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium uppercase tracking-wider">Features</h4>
                  <ul className="space-y-2">
                    {quickViewProduct.features?.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colors */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider mb-3">Colors</h4>
                  <div className="flex space-x-3">
                    {quickViewProduct.colors?.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wider mb-3">Sizes</h4>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes?.map((size, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 border border-gray-300 text-sm hover:border-gray-900 hover:bg-gray-50 transition-colors duration-300"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-4 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => {
                      // Add to cart logic
                      closeQuickView();
                    }}
                    className="flex-1 py-3 bg-gray-900 text-white font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300"
                  >
                    Add to Bag
                  </button>
                  <button
                    onClick={() => navigate(`/product/${quickViewProduct.id}`)}
                    className="flex-1 py-3 border border-gray-900 text-gray-900 font-medium tracking-wide hover:bg-gray-50 transition-colors duration-300"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid > div {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .grid > div:nth-child(1) { animation-delay: 0.1s; }
        .grid > div:nth-child(2) { animation-delay: 0.2s; }
        .grid > div:nth-child(3) { animation-delay: 0.3s; }
        .grid > div:nth-child(4) { animation-delay: 0.4s; }
        .grid > div:nth-child(5) { animation-delay: 0.5s; }
        .grid > div:nth-child(6) { animation-delay: 0.6s; }
        .grid > div:nth-child(7) { animation-delay: 0.7s; }
        .grid > div:nth-child(8) { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
};

export default FeatureProducts;