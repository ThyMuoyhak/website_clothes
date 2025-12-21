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

  // Dynamic product data based on productId
  const productsDatabase = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      category: "Men",
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      reviews: 128,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&brightness=0.8",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&brightness=1.2",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&brightness=0.9"
      ],
      tags: ["Bestseller", "Organic", "Premium"],
      colors: [
        { name: "Navy Blue", value: "bg-blue-900", hex: "#1e3a8a" },
        { name: "Black", value: "bg-black", hex: "#000000" },
        { name: "White", value: "bg-white border", hex: "#ffffff" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      description: "Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this shirt offers exceptional breathability and softness. Perfect for everyday wear or casual outings.",
      features: [
        "100% Organic Cotton",
        "Breathable & Soft",
        "Machine Washable",
        "Pre-shrunk Fabric",
        "Tag-free Design",
        "Ethically Made"
      ],
      materials: "100% GOTS Certified Organic Cotton",
      careInstructions: "Machine wash cold, tumble dry low, do not bleach, iron on low heat",
      shipping: "Free shipping on orders over $50. Delivery in 2-5 business days.",
      returnPolicy: "30-day return policy. Free returns for unworn items.",
      relatedProducts: [2, 3, 4, 5]
    },
    {
      id: 2,
      name: "Designer Summer Dress",
      category: "Women",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 256,
      images: [
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop&brightness=1.1",
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop&brightness=0.8"
      ],
      tags: ["New", "-30%", "Summer"],
      colors: [
        { name: "Rose Pink", value: "bg-pink-500", hex: "#ec4899" },
        { name: "Sun Yellow", value: "bg-yellow-400", hex: "#fbbf24" },
        { name: "Mint Green", value: "bg-green-300", hex: "#86efac" }
      ],
      sizes: ["XS", "S", "M", "L"],
      inStock: true,
      description: "Elegant summer dress with beautiful floral patterns. Made from lightweight, breathable fabric perfect for warm weather and special occasions.",
      features: [
        "Lightweight Fabric",
        "Floral Pattern",
        "Adjustable Straps",
        "A-line Silhouette",
        "Machine Washable",
        "Wrinkle Resistant"
      ],
      materials: "100% Viscose",
      careInstructions: "Hand wash cold, line dry, do not wring, iron on low heat",
      shipping: "Free shipping on all orders. Delivery in 3-7 business days.",
      returnPolicy: "30-day return policy. Free returns for unworn items.",
      relatedProducts: [1, 3, 6, 8]
    },
    {
      id: 3,
      name: "Classic Denim Jacket",
      category: "Men",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 189,
      images: [
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop&brightness=1.1",
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop&brightness=0.8"
      ],
      tags: ["Limited", "Premium", "Classic"],
      colors: [
        { name: "Dark Blue", value: "bg-blue-900", hex: "#1e3a8a" },
        { name: "Black", value: "bg-gray-800", hex: "#1f2937" },
        { name: "Indigo", value: "bg-indigo-700", hex: "#4338ca" }
      ],
      sizes: ["M", "L", "XL", "XXL"],
      inStock: true,
      description: "Timeless denim jacket with a modern fit. Perfect for layering and adding a casual yet stylish touch to any outfit. Made from premium quality denim.",
      features: [
        "100% Cotton Denim",
        "Metal Buttons",
        "Multiple Pockets",
        "Classic Fit",
        "Reinforced Stitching",
        "Washed Finish"
      ],
      materials: "100% Cotton Denim",
      careInstructions: "Machine wash cold with similar colors, tumble dry low, do not bleach",
      shipping: "Free shipping on orders over $30. Delivery in 2-4 business days.",
      returnPolicy: "30-day return policy. Free returns for unworn items.",
      relatedProducts: [1, 4, 7, 5]
    },
    {
      id: 4,
      name: "Activewear Set",
      category: "Women",
      price: 64.99,
      originalPrice: 89.99,
      rating: 4.6,
      reviews: 312,
      images: [
        "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop&brightness=1.1",
        "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop&brightness=0.8"
      ],
      tags: ["Popular", "Sale", "Active"],
      colors: [
        { name: "Purple", value: "bg-purple-600", hex: "#7c3aed" },
        { name: "Black", value: "bg-black", hex: "#000000" },
        { name: "Gray", value: "bg-gray-200", hex: "#e5e7eb" }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      inStock: false,
      description: "Complete activewear set designed for maximum performance and comfort during workouts. Features moisture-wicking technology and 4-way stretch fabric.",
      features: [
        "Moisture Wicking",
        "4-Way Stretch",
        "Breathable Fabric",
        "Quick Dry",
        "UV Protection",
        "Anti-odor Technology"
      ],
      materials: "88% Polyester, 12% Spandex",
      careInstructions: "Machine wash cold, do not use fabric softener, hang dry, do not iron",
      shipping: "Free shipping on orders over $25. Delivery in 2-5 business days.",
      returnPolicy: "30-day return policy. Free returns for unworn items.",
      relatedProducts: [2, 5, 6, 8]
    },
    {
      id: 5,
      name: "Kids Casual Sneakers",
      category: "Kids",
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviews: 156,
      images: [
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop&brightness=1.1",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop&brightness=0.8"
      ],
      tags: ["Bestseller", "-25%", "Kids"],
      colors: [
        { name: "Red", value: "bg-red-500", hex: "#ef4444" },
        { name: "Blue", value: "bg-blue-400", hex: "#60a5fa" },
        { name: "Green", value: "bg-green-500", hex: "#22c55e" }
      ],
      sizes: ["26", "28", "30", "32", "34"],
      inStock: true,
      description: "Comfortable and stylish sneakers designed specifically for kids. Features excellent grip, durable construction, and easy velcro closures for convenience.",
      features: [
        "Rubber Sole with Grip",
        "Breathable Mesh Upper",
        "Easy Velcro Closure",
        "Lightweight Design",
        "Shock Absorbing",
        "Machine Washable"
      ],
      materials: "Mesh Upper, Rubber Sole",
      careInstructions: "Wipe clean with damp cloth, air dry, do not machine wash",
      shipping: "Free shipping on all orders. Delivery in 3-6 business days.",
      returnPolicy: "60-day return policy for kids items. Free returns.",
      relatedProducts: [1, 3, 4, 7]
    },
    {
      id: 6,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: 129.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviews: 89,
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop&brightness=1.1",
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop&brightness=0.8"
      ],
      tags: ["Luxury", "New", "Premium"],
      colors: [
        { name: "Brown", value: "bg-brown-800", hex: "#78350f" },
        { name: "Black", value: "bg-black", hex: "#000000" },
        { name: "Tan", value: "bg-tan", hex: "#d2b48c" }
      ],
      sizes: ["One Size"],
      inStock: true,
      description: "Genuine leather crossbody bag with sophisticated design. Features multiple compartments for organization, adjustable strap, and secure magnetic closure.",
      features: [
        "Genuine Leather",
        "Adjustable Strap",
        "Multiple Pockets",
        "Magnetic Closure",
        "Water Resistant",
        "Handcrafted"
      ],
      materials: "100% Genuine Leather, Metal Hardware",
      careInstructions: "Wipe with damp cloth, use leather conditioner monthly, keep away from direct sunlight",
      shipping: "Free express shipping. Delivery in 1-3 business days.",
      returnPolicy: "30-day return policy. Free returns for unworn items.",
      relatedProducts: [2, 8, 3, 1]
    },
    {
      id: 7,
      name: "Wool Blend Sweater",
      category: "Men",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.4,
      reviews: 201,
      images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop&brightness=1.1",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2070&auto=format&fit=crop&brightness=0.8"
      ],
      tags: ["Winter", "Cozy", "Sale"],
      colors: [
        { name: "Charcoal", value: "bg-gray-700", hex: "#374151" },
        { name: "Navy", value: "bg-navy", hex: "#000080" },
        { name: "Burgundy", value: "bg-burgundy", hex: "#800020" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      inStock: true,
      description: "Warm and comfortable wool blend sweater perfect for cold weather. Features classic crew neck design, ribbed cuffs and hem for a snug fit.",
      features: [
        "Wool Blend (70% Wool, 30% Acrylic)",
        "Ribbed Cuffs & Hem",
        "Classic Crew Neck",
        "Machine Washable",
        "Warm & Cozy",
        "Odor Resistant"
      ],
      materials: "70% Wool, 30% Acrylic",
      careInstructions: "Machine wash cold, tumble dry low, do not bleach, iron on low heat",
      shipping: "Free shipping on orders over $40. Delivery in 2-5 business days.",
      returnPolicy: "30-day return policy. Free returns for unworn items.",
      relatedProducts: [1, 3, 5, 8]
    },
    {
      id: 8,
      name: "Silk Scarf Set",
      category: "Accessories",
      price: 34.99,
      originalPrice: 49.99,
      rating: 4.7,
      reviews: 67,
      images: [
        "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
        "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop&brightness=1.1",
        "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop&brightness=0.8"
      ],
      tags: ["Gift", "Elegant", "Luxury"],
      colors: [
        { name: "Blush Pink", value: "bg-pink-200", hex: "#fbcfe8" },
        { name: "Sky Blue", value: "bg-blue-100", hex: "#dbeafe" },
        { name: "Cream", value: "bg-yellow-100", hex: "#fef3c7" }
      ],
      sizes: ["One Size"],
      inStock: true,
      description: "Set of three elegant silk scarves featuring different patterns for versatile styling. Perfect for adding a touch of sophistication to any outfit.",
      features: [
        "100% Silk",
        "Multiple Patterns",
        "Hand Rolled Edges",
        "Lightweight",
        "Breathable",
        "Versatile Styling"
      ],
      materials: "100% Silk",
      careInstructions: "Dry clean only, do not wring, iron on low heat with cloth, store flat",
      shipping: "Free shipping on all orders. Delivery in 2-4 business days.",
      returnPolicy: "30-day return policy. Free returns for unworn items.",
      relatedProducts: [2, 4, 6, 1]
    }
  ];

  useEffect(() => {
    // Find the product by ID
    const foundProduct = productsDatabase.find(p => p.id === parseInt(productId));
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products
      const related = foundProduct.relatedProducts.map(id => 
        productsDatabase.find(p => p.id === id)
      ).filter(Boolean); // Remove any undefined products
      
      setRelatedProducts(related);
    } else {
      // If product not found, redirect to home or show error
      navigate('/');
    }
    
    // Reset states for new product
    setSelectedSize('');
    setSelectedColor('');
    setQuantity(1);
    setActiveImage(0);
    
    // Simulate loading
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
    
    // Add to cart logic here - in real app, you would use context or state management
    console.log("Added to cart:", cartItem);
    
    // Save to localStorage for demo
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    alert(`${product.name} added to cart!`);
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
        text: `Check out this ${product.name} on FashionHub`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Product link copied to clipboard!");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-6xl mb-4">😕</div>
        <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors mb-6"
        >
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Products
        </button>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-lg mb-4">
              <div 
                className="h-96 md:h-[500px] bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${product.images[activeImage]})` }}
              />
              {/* Tags */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
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
              
              {/* Image Navigation */}
              <button
                onClick={() => setActiveImage(prev => (prev - 1 + product.images.length) % product.images.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={() => setActiveImage(prev => (prev + 1) % product.images.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-4 overflow-x-auto py-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === index 
                      ? 'border-indigo-600 scale-105' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            {/* Category & Name */}
            <div className="mb-4">
              <span className="text-sm text-gray-500 uppercase tracking-wider">{product.category}</span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`fas fa-star text-lg ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
              <span className="mx-4 text-gray-300">|</span>
              <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-center">
                <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="ml-3 text-xl text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                    <span className="ml-3 px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              <p className="text-gray-500 text-sm mt-2">Tax included. Shipping calculated at checkout.</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Description</h3>
              <p className="text-gray-700">{product.description}</p>
            </div>

            {/* Colors - Only show if product has colors */}
            {product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex flex-col items-center ${selectedColor === color.name ? 'ring-2 ring-indigo-600 ring-offset-2' : ''}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${color.value} ${color.value.includes('white') ? 'border border-gray-300' : ''} mb-1`}
                      />
                      <span className="text-xs text-gray-600">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes - Only show if product has sizes other than "One Size" */}
            {product.sizes.length > 0 && product.sizes[0] !== "One Size" && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">Size</h3>
                  <button className="text-sm text-indigo-600 hover:text-indigo-800">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-center rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-3">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="w-12 h-12 bg-gray-100 rounded-l-lg flex items-center justify-center hover:bg-gray-200"
                >
                  <i className="fas fa-minus"></i>
                </button>
                <div className="w-20 h-12 bg-gray-50 flex items-center justify-center font-bold text-lg">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-12 h-12 bg-gray-100 rounded-r-lg flex items-center justify-center hover:bg-gray-200"
                >
                  <i className="fas fa-plus"></i>
                </button>
                <span className="ml-4 text-sm text-gray-600">
                  Only {product.inStock ? '12' : '0'} items left!
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
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
              <button
                onClick={handleBuyNow}
                disabled={!product.inStock}
                className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  product.inStock
                    ? 'bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <i className="fas fa-bolt mr-2"></i>
                Buy Now
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex gap-6 mb-8">
              <button
                onClick={() => {
                  // Add to wishlist logic
                  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                  if (!wishlist.includes(product.id)) {
                    wishlist.push(product.id);
                    localStorage.setItem('wishlist', JSON.stringify(wishlist));
                    alert(`${product.name} added to wishlist!`);
                  } else {
                    alert(`${product.name} is already in your wishlist!`);
                  }
                }}
                className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
              >
                <i className="far fa-heart text-xl mr-2"></i>
                Add to Wishlist
              </button>
              <button
                onClick={handleShare}
                className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <i className="fas fa-share-alt text-xl mr-2"></i>
                Share
              </button>
            </div>

            {/* Features */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Features & Benefits</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span className="text-gray-700">{feature}</span>
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
              {['Details', 'Materials', 'Shipping', 'Returns'].map((tab) => (
                <button
                  key={tab}
                  className="py-4 px-2 font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-gray-300"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4">Materials & Care</h4>
                <p className="text-gray-700 mb-2"><strong>Material:</strong> {product.materials}</p>
                <p className="text-gray-700"><strong>Care Instructions:</strong> {product.careInstructions}</p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4">Shipping & Returns</h4>
                <p className="text-gray-700 mb-2">{product.shipping}</p>
                <p className="text-gray-700">{product.returnPolicy}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <div className="h-48 overflow-hidden">
                    <div 
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${relatedProduct.images[0]})` }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center mt-2">
                      <span className="text-lg font-bold text-gray-900">${relatedProduct.price.toFixed(2)}</span>
                      {relatedProduct.originalPrice > relatedProduct.price && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          ${relatedProduct.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star text-xs ${
                              i < Math.floor(relatedProduct.rating)
                                ? 'text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 ml-2">
                        ({relatedProduct.reviews})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;