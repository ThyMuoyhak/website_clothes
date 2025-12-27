// Cart.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const navigate = useNavigate();

  // Sample products for cart - in real app, this would come from your backend or context
  const sampleProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&auto=format&fit=crop",
      color: "Navy Blue",
      size: "M",
      quantity: 2,
      inStock: true,
      maxQuantity: 10
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&auto=format&fit=crop",
      color: "Dark Blue",
      size: "L",
      quantity: 1,
      inStock: true,
      maxQuantity: 5
    },
    {
      id: 3,
      name: "Designer Summer Dress",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&auto=format&fit=crop",
      color: "Rose Pink",
      size: "S",
      quantity: 1,
      inStock: true,
      maxQuantity: 8
    }
  ];

  useEffect(() => {
    // Load cart items from localStorage or context
    const loadCart = () => {
      setIsLoading(true);
      try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          setCartItems(parsedCart);
        } else {
          // Use sample data for demo
          setCartItems(sampleProducts);
        }
      } catch (error) {
        console.error('Error loading cart:', error);
        setCartItems(sampleProducts);
      }
      setIsLoading(false);
    };

    loadCart();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }

    const product = cartItems.find(item => item.id === id);
    if (product && newQuantity > product.maxQuantity) {
      newQuantity = product.maxQuantity;
    }

    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    
    // Show removal notification
    const removedItem = cartItems.find(item => item.id === id);
    if (removedItem) {
      showNotification(`${removedItem.name} removed from cart`);
    }
  };

  const applyCoupon = () => {
    if (!couponCode.trim()) return;
    
    const validCoupons = {
      'SUMMER20': 0.20, // 20% off
      'FASHION15': 0.15, // 15% off
      'WELCOME10': 0.10, // 10% off
      'FREESHIP': 'freeshipping' // Free shipping
    };

    const coupon = couponCode.toUpperCase();
    
    if (validCoupons[coupon]) {
      if (coupon === 'FREESHIP') {
        setCouponDiscount('free');
        showNotification('Free shipping applied!');
      } else {
        const discountPercent = validCoupons[coupon];
        const subtotal = calculateSubtotal();
        setCouponDiscount(subtotal * discountPercent);
        showNotification(`Coupon applied! ${discountPercent * 100}% discount`);
      }
      setCouponApplied(true);
    } else {
      showNotification('Invalid coupon code');
    }
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    setCouponDiscount(0);
    setCouponCode('');
    showNotification('Coupon removed');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const calculateShipping = () => {
    if (couponDiscount === 'free') return 0;
    
    const subtotal = calculateSubtotal();
    if (subtotal >= 50) return 0; // Free shipping over $50
    return 5.99; // Standard shipping
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    return subtotal * 0.08; // 8% tax rate
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const tax = calculateTax();
    const discount = couponDiscount === 'free' ? 0 : couponDiscount;
    
    return subtotal + shipping + tax - discount;
  };

  const showNotification = (message) => {
    // Create and show a notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slideIn';
    notification.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-check-circle mr-2"></i>
        <span>${message}</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showNotification('Your cart is empty!');
      return;
    }
    setShowCheckoutModal(true);
  };

  const proceedToCheckout = () => {
    // Save order details and navigate to checkout
    const orderDetails = {
      items: cartItems,
      subtotal: calculateSubtotal(),
      shipping: calculateShipping(),
      tax: calculateTax(),
      discount: couponDiscount === 'free' ? 'Free Shipping' : couponDiscount,
      total: calculateTotal(),
      couponCode: couponApplied ? couponCode : null
    };
    
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    navigate('/checkout');
  };

  const continueShopping = () => {
    navigate('/products');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="fas fa-shopping-cart text-4xl text-gray-400"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={continueShopping}
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Continue Shopping
              </button>
              <Link
                to="/products?filter=sale"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300"
              >
                View Sale Items
              </Link>
            </div>
            <div className="mt-12">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Popular Categories</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Men', 'Women', 'Kids', 'Accessories'].map(category => (
                  <Link
                    key={category}
                    to={`/products/category/${category.toLowerCase()}`}
                    className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="text-indigo-600 font-bold">{category}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Cart Header */}
              <div className="hidden md:grid grid-cols-12 gap-4 p-6 border-b border-gray-200 bg-gray-50">
                <div className="col-span-5 font-medium text-gray-700">Product</div>
                <div className="col-span-2 font-medium text-gray-700 text-center">Price</div>
                <div className="col-span-2 font-medium text-gray-700 text-center">Quantity</div>
                <div className="col-span-2 font-medium text-gray-700 text-center">Total</div>
                <div className="col-span-1"></div>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Product Image & Info */}
                      <div className="flex-1 flex items-center gap-4">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
                          />
                          {!item.inStock && (
                            <div className="absolute inset-0 bg-red-500/20 rounded-lg flex items-center justify-center">
                              <span className="text-xs font-bold text-white bg-red-500 px-2 py-1 rounded">Out of Stock</span>
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 hover:text-indigo-600 transition-colors">
                            <Link to={`/product/${item.id}`}>{item.name}</Link>
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.color && (
                              <div className="flex items-center">
                                <span className="text-sm text-gray-600 mr-2">Color:</span>
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color === 'Navy Blue' ? '#1e3a8a' : item.color === 'Rose Pink' ? '#ec4899' : '#000000' }}></div>
                                <span className="text-sm text-gray-700 ml-1">{item.color}</span>
                              </div>
                            )}
                            {item.size && (
                              <div className="flex items-center">
                                <span className="text-sm text-gray-600 mr-2">Size:</span>
                                <span className="text-sm text-gray-700">{item.size}</span>
                              </div>
                            )}
                          </div>
                          {!item.inStock && (
                            <p className="text-sm text-red-600 mt-1">This item is out of stock</p>
                          )}
                        </div>
                      </div>

                      {/* Price */}
                      <div className="md:w-24 text-center">
                        <div className="flex flex-col items-center">
                          <span className="font-bold text-gray-900">${item.price.toFixed(2)}</span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="md:w-32">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            className="w-8 h-8 bg-gray-100 rounded-l-lg flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <i className="fas fa-minus text-gray-600"></i>
                          </button>
                          <div className="w-12 h-8 bg-gray-50 flex items-center justify-center font-medium">
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.maxQuantity}
                            className="w-8 h-8 bg-gray-100 rounded-r-lg flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <i className="fas fa-plus text-gray-600"></i>
                          </button>
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-1">
                          Max: {item.maxQuantity}
                        </div>
                      </div>

                      {/* Total */}
                      <div className="md:w-24 text-center">
                        <span className="font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      {/* Remove Button */}
                      <div className="md:w-8">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-8 h-8 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Actions */}
              <div className="p-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={continueShopping}
                      className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                    >
                      <i className="fas fa-arrow-left mr-2"></i>
                      Continue Shopping
                    </button>
                    <button
                      onClick={() => {
                        localStorage.removeItem('cart');
                        setCartItems([]);
                        showNotification('Cart cleared successfully');
                      }}
                      className="px-6 py-2 border-2 border-red-200 text-red-600 rounded-lg font-medium hover:border-red-300 hover:bg-red-50 transition-colors"
                    >
                      <i className="fas fa-trash mr-2"></i>
                      Clear Cart
                    </button>
                  </div>
                  <div className="text-sm text-gray-600">
                    Need help? <Link to="/contact" className="text-indigo-600 hover:text-indigo-800">Contact Support</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Security & Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Secure Checkout</h4>
                <p className="text-sm text-gray-600">Your payment information is encrypted and secure</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-truck text-blue-600 text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Free Shipping</h4>
                <p className="text-sm text-gray-600">Free shipping on orders over $50</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fas fa-undo text-purple-600 text-xl"></i>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Easy Returns</h4>
                <p className="text-sm text-gray-600">30-day return policy for unworn items</p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                    disabled={couponApplied}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:bg-gray-100"
                  />
                  {couponApplied ? (
                    <button
                      onClick={removeCoupon}
                      className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-medium hover:bg-red-200 transition-colors"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                      Apply
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Try: SUMMER20, FASHION15, WELCOME10, FREESHIP
                </p>
              </div>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
                </div>
                
                {couponApplied && couponDiscount !== 'free' && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-${couponDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {couponDiscount === 'free' ? (
                      <span className="text-green-600">Free</span>
                    ) : calculateShipping() === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$${calculateShipping().toFixed(2)}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${calculateTax().toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Including ${calculateTax().toFixed(2)} in taxes
                </p>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={cartItems.some(item => !item.inStock)}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  cartItems.some(item => !item.inStock)
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                }`}
              >
                {cartItems.some(item => !item.inStock) ? (
                  'Cannot Checkout - Out of Stock Items'
                ) : (
                  <>
                    <i className="fas fa-lock mr-2"></i>
                    Proceed to Checkout
                  </>
                )}
              </button>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">We accept:</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <i className="fab fa-cc-visa text-gray-700"></i>
                  </div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <i className="fab fa-cc-mastercard text-gray-700"></i>
                  </div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <i className="fab fa-cc-amex text-gray-700"></i>
                  </div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <i className="fab fa-cc-paypal text-gray-700"></i>
                  </div>
                  <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <i className="fab fa-apple text-gray-700"></i>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Secure 256-bit SSL encryption</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>30-day money back guarantee</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i>
                  <span>Free returns & exchanges</span>
                </div>
              </div>
            </div>

            {/* You May Also Like */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Frequently Bought Together</h3>
              <div className="space-y-4">
                {sampleProducts.slice(0, 2).map(product => (
                  <div key={product.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => {
                        const existingItem = cartItems.find(item => item.id === product.id);
                        if (existingItem) {
                          updateQuantity(product.id, existingItem.quantity + 1);
                        } else {
                          setCartItems([...cartItems, { ...product, quantity: 1 }]);
                        }
                        showNotification(`${product.name} added to cart`);
                      }}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <i className="fas fa-plus text-gray-600"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 animate-slideUp">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shopping-bag text-green-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Checkout?</h3>
              <p className="text-gray-600">
                You're about to complete your purchase of {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} for ${calculateTotal().toFixed(2)}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Items:</span>
                <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span className="font-medium">
                    {couponDiscount === 'free' ? 'Free Shipping' : `-$${couponDiscount.toFixed(2)}`}
                  </span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-4">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={proceedToCheckout}
                className="flex-1 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                Continue to Payment
              </button>
              <button
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              By proceeding, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Cart;