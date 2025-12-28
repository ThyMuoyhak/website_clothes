// ProductDetail.jsx - Modern Redesign
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('details');

  // Dynamic product data
  const productsDatabase = [
    {
      id: 1,
      name: "Organic Cotton Tee",
      category: "Essentials",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 128,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&brightness=1.1",
      ],
      tags: ["Bestseller", "Organic"],
      colors: [
        { name: "Charcoal", value: "bg-gray-900", hex: "#111827" },
        { name: "Navy", value: "bg-blue-900", hex: "#1e3a8a" },
        { name: "White", value: "bg-white border", hex: "#ffffff" }
      ],
      sizes: ["S", "M", "L", "XL"],
      inStock: true,
      description: "Premium organic cotton tee with tailored fit and sustainable production. Crafted from GOTS certified organic cotton for exceptional comfort and quality.",
      features: [
        "100% Organic Cotton",
        "Tailored Fit",
        "Sustainable Production",
        "Pre-shrunk Fabric",
        "Tag-free Design",
        "Ethically Made"
      ],
      materials: "100% GOTS Certified Organic Cotton",
      careInstructions: "Machine wash cold, tumble dry low, do not bleach, iron on low heat",
      shipping: "Free shipping on orders over $50",
      returnPolicy: "30-day return policy",
      brand: "Essentials",
      dimensions: "Body: 28\" length, 20\" chest",
      weight: "0.3 lbs",
      relatedProducts: [2, 3, 4]
    },
    {
      id: 2,
      name: "Silk Blend Dress",
      category: "Contemporary",
      price: 189.99,
      originalPrice: 259.99,
      rating: 4.8,
      reviews: 256,
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
      ],
      tags: ["New", "Luxury"],
      colors: [
        { name: "Blush", value: "bg-pink-100", hex: "#fce7f3" },
        { name: "Ivory", value: "bg-yellow-50", hex: "#fefce8" },
      ],
      sizes: ["XS", "S", "M", "L"],
      inStock: true,
      description: "Elegant silk blend dress with modern drape and refined silhouette. Perfect for special occasions or elevated everyday wear.",
      features: [
        "Silk Blend Fabric",
        "Modern Drape",
        "Refined Silhouette",
        "Adjustable Straps",
        "Wrinkle Resistant",
        "Hand Finished"
      ],
      materials: "60% Silk, 40% Viscose",
      careInstructions: "Dry clean only, do not wring, iron on low heat",
      shipping: "Free express shipping",
      returnPolicy: "30-day return policy",
      brand: "Contemporary",
      dimensions: "Length: 42\", Waist: 28\"",
      weight: "0.8 lbs",
      relatedProducts: [1, 3, 6]
    },
    {
      id: 3,
      name: "Raw Denim Jacket",
      category: "Utility",
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.7,
      reviews: 189,
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
      ],
      tags: ["Limited", "Raw"],
      colors: [
        { name: "Indigo", value: "bg-indigo-900", hex: "#312e81" },
        { name: "Black", value: "bg-gray-900", hex: "#111827" },
      ],
      sizes: ["M", "L", "XL", "XXL"],
      inStock: true,
      description: "Raw selvedge denim jacket with classic hardware and durable construction. Each piece develops unique character with wear.",
      features: [
        "Selvedge Denim",
        "Classic Hardware",
        "Durable Construction",
        "Multiple Pockets",
        "Reinforced Stitching",
        "Washed Finish"
      ],
      materials: "100% Raw Selvedge Denim",
      careInstructions: "Machine wash cold, hang dry, do not bleach",
      shipping: "Free shipping",
      returnPolicy: "30-day return policy",
      brand: "Utility",
      dimensions: "Length: 28\", Chest: 44\"",
      weight: "2.2 lbs",
      relatedProducts: [1, 4, 7]
    },
    {
      id: 4,
      name: "Minimalist Sneakers",
      category: "Footwear",
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.9,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
      ],
      tags: ["Bestseller", "Minimal"],
      colors: [
        { name: "White", value: "bg-white border", hex: "#ffffff" },
        { name: "Black", value: "bg-black", hex: "#000000" },
      ],
      sizes: ["US 8", "US 9", "US 10", "US 11", "US 12"],
      inStock: true,
      description: "Minimalist leather sneakers with premium construction and comfortable fit. Versatile design for everyday wear.",
      features: [
        "Premium Leather",
        "Ortholite Insole",
        "Minimal Design",
        "Rubber Sole",
        "Breathable Lining",
        "Easy Clean"
      ],
      materials: "Full Grain Leather, Rubber Sole",
      careInstructions: "Wipe clean with damp cloth, air dry, use leather conditioner",
      shipping: "Free shipping",
      returnPolicy: "30-day return policy",
      brand: "Footwear",
      dimensions: "Varies by size",
      weight: "1.2 lbs per pair",
      relatedProducts: [1, 3, 5]
    },
  ];

  useEffect(() => {
    const foundProduct = productsDatabase.find(p => p.id === parseInt(productId));
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      const related = foundProduct.relatedProducts.map(id => 
        productsDatabase.find(p => p.id === id)
      ).filter(Boolean);
      
      setRelatedProducts(related);
    } else {
      navigate('/products');
    }
    
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
    setActiveImage(0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [productId, navigate]);

  const handleAddToCart = () => {
    if (!product) return;
    
    if (!selectedSize && product.sizes[0] !== "One Size") {
      alert("Please select a size");
      return;
    }
    if (!selectedColor && product.colors.length > 0) {
      alert("Please select a color");
      return;
    }
    
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      size: selectedSize || "One Size",
      color: selectedColor || product.colors[0]?.name || "Default",
      quantity,
      image: product.images[0]
    };
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
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

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const handleShare = () => {
    if (!product) return;
    
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Check out this ${product.name} on AESTHETE COLLECTIVE`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-gray-900' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 className="text-xl font-light text-gray-900 mb-2">Product Not Found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/products')}
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
        >
          Browse Collections
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <button
              onClick={() => navigate('/products')}
              className="hover:text-gray-900 transition-colors"
            >
              Collections
            </button>
            <span className="mx-2">/</span>
            <button
              onClick={() => navigate(`/products/category/${product.category.toLowerCase()}`)}
              className="hover:text-gray-900 transition-colors"
            >
              {product.category}
            </button>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg bg-gray-50 mb-4">
              <div className="aspect-square relative">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Tags */}
                <div className="absolute top-4 left-4">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 py-1 bg-white text-gray-900 text-xs font-medium rounded mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto py-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border ${
                    activeImage === index 
                      ? 'border-gray-900' 
                      : 'border-gray-200 hover:border-gray-400'
                  } transition-colors`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Basic Info */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs tracking-wider uppercase text-gray-500">
                  {product.category} • {product.brand}
                </span>
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-3">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl font-light text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-900 bg-gray-100 px-2 py-0.5 rounded">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              
              <div className="flex items-center mb-6">
                <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
                <span className="mx-3 text-gray-300">|</span>
                <span className="text-sm text-gray-600">Free shipping</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Colors */}
            {product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex flex-col items-center group ${
                        selectedColor === color.name ? 'ring-1 ring-gray-900 ring-offset-2' : ''
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full ${color.value} ${color.value.includes('white') ? 'border border-gray-300' : ''} mb-1`}
                        title={color.name}
                      />
                      <span className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors">
                        {color.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes.length > 0 && product.sizes[0] !== "One Size" && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <button className="text-xs text-gray-600 hover:text-gray-900 transition-colors">
                    Size guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 text-center text-sm rounded border transition-colors ${
                        selectedSize === size
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'border-gray-300 text-gray-700 hover:border-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Actions */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex border border-gray-300 rounded">
                    <button
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <div className="w-12 h-10 flex items-center justify-center text-gray-900">
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-sm text-gray-600">
                    Only {product.inStock ? '12' : '0'} left in stock
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 text-sm font-medium transition-colors duration-300 ${
                    product.inStock
                      ? 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Add to Bag
                </button>
                <button
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 px-6 border text-sm font-medium transition-colors duration-300 ${
                    product.inStock
                      ? 'border-gray-900 text-gray-900 hover:bg-gray-50'
                      : 'border-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Buy Now
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex space-x-6">
                <button
                  onClick={() => {
                    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                    if (!wishlist.includes(product.id)) {
                      wishlist.push(product.id);
                      localStorage.setItem('wishlist', JSON.stringify(wishlist));
                      alert(`${product.name} added to wishlist!`);
                    } else {
                      alert(`${product.name} is already in your wishlist!`);
                    }
                  }}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Add to Wishlist
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-900 mb-4">Features</h3>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-gray-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {['details', 'materials', 'shipping', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="py-8">
            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Materials & Care</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p><span className="font-medium">Material:</span> {product.materials}</p>
                    <p><span className="font-medium">Care:</span> {product.careInstructions}</p>
                    <p><span className="font-medium">Dimensions:</span> {product.dimensions}</p>
                    <p><span className="font-medium">Weight:</span> {product.weight}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Shipping & Returns</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <p>{product.shipping}</p>
                    <p>Delivery in 2-5 business days</p>
                    <p>{product.returnPolicy}</p>
                    <p>Free returns for unworn items</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center mb-1">
                      <div className="flex">
                        {renderStars(product.rating)}
                      </div>
                      <span className="ml-2 text-sm text-gray-900">{product.rating} out of 5</span>
                    </div>
                    <p className="text-sm text-gray-600">Based on {product.reviews} reviews</p>
                  </div>
                  <button className="px-4 py-2 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors">
                    Write a Review
                  </button>
                </div>
                {/* Reviews would go here */}
              </div>
            )}
          </div>
        </div>

        {/* Recommended Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-light text-gray-900">You Might Also Like</h2>
              <button
                onClick={() => navigate('/products')}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                View all →
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 mb-3">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-light text-gray-900 group-hover:text-gray-700 transition-colors mb-1">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900">${relatedProduct.price.toFixed(2)}</span>
                      <div className="flex items-center space-x-1">
                        {renderStars(relatedProduct.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
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
      `}</style>
    </div>
  );
};

export default ProductDetail;