// Checkout.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Form states
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    saveAddress: true
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false
  });

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });

  // Load order details from localStorage
  const orderDetails = JSON.parse(localStorage.getItem('orderDetails') || '{}');

  const generateOrderNumber = () => {
    return `ORD-${Date.now().toString().slice(-8)}`;
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStep(3);
    window.scrollTo(0, 0);
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newOrderNumber = generateOrderNumber();
      setOrderNumber(newOrderNumber);
      
      // Save order to localStorage
      const order = {
        orderNumber: newOrderNumber,
        date: new Date().toISOString(),
        shippingInfo,
        paymentInfo: {
          ...paymentInfo,
          cardNumber: `**** **** **** ${paymentInfo.cardNumber.slice(-4)}`
        },
        orderDetails,
        status: 'Processing'
      };
      
      // Save order to localStorage
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));
      
      // Clear cart
      localStorage.removeItem('cart');
      localStorage.removeItem('orderDetails');
      
      setLoading(false);
      setOrderComplete(true);
    }, 2000);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.slice(0, 2) + (v.length > 2 ? '/' + v.slice(2, 4) : '');
    }
    return v;
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-check text-4xl text-green-600"></i>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Order Number</div>
                <div className="text-2xl font-bold text-indigo-600">{orderNumber}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Total</span>
                  <span className="font-bold text-lg">${orderDetails.total?.toFixed(2) || '0.00'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Items</span>
                  <span>{orderDetails.items?.length || 0} items</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{orderDetails.shipping === 0 ? 'Free' : `$${orderDetails.shipping?.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Delivery</span>
                  <span>3-5 business days</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white rounded-xl shadow-md">
                <i className="fas fa-envelope text-indigo-600 text-xl mb-2"></i>
                <h4 className="font-bold text-gray-900 mb-2">Email Confirmation</h4>
                <p className="text-sm text-gray-600">Order details sent to {shippingInfo.email}</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <i className="fas fa-truck text-indigo-600 text-xl mb-2"></i>
                <h4 className="font-bold text-gray-900 mb-2">Track Your Order</h4>
                <p className="text-sm text-gray-600">Tracking info will be sent via email</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-md">
                <i className="fas fa-headset text-indigo-600 text-xl mb-2"></i>
                <h4 className="font-bold text-gray-900 mb-2">Need Help?</h4>
                <p className="text-sm text-gray-600">Contact our support team anytime</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/orders')}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300"
              >
                View Order Details
              </button>
              <button
                onClick={() => navigate('/products')}
                className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>Questions about your order? <Link to="/contact" className="text-indigo-600 hover:text-indigo-800">Contact Support</Link></p>
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Checkout</h1>
          <p className="text-gray-600 mt-2">Complete your purchase in a few simple steps</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Checkout Steps */}
          <div className="lg:w-2/3">
            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    1
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Shipping</div>
                    <div className="text-sm text-gray-500">Address details</div>
                  </div>
                </div>

                <div className="h-1 flex-1 mx-4 bg-gray-200">
                  <div className={`h-full ${step >= 2 ? 'bg-indigo-600' : ''}`}></div>
                </div>

                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= 2 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    2
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Payment</div>
                    <div className="text-sm text-gray-500">Payment method</div>
                  </div>
                </div>

                <div className="h-1 flex-1 mx-4 bg-gray-200">
                  <div className={`h-full ${step >= 3 ? 'bg-indigo-600' : ''}`}></div>
                </div>

                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= 3 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    3
                  </div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-900">Review</div>
                    <div className="text-sm text-gray-500">Order summary</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Information</h2>
                <form onSubmit={handleShippingSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apartment, Suite, etc. (Optional)
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.apartment}
                      onChange={(e) => setShippingInfo({...shippingInfo, apartment: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.zipCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, zipCode: e.target.value})}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country *
                    </label>
                    <select
                      value={shippingInfo.country}
                      onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Germany">Germany</option>
                    </select>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="saveAddress"
                      checked={shippingInfo.saveAddress}
                      onChange={(e) => setShippingInfo({...shippingInfo, saveAddress: e.target.checked})}
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="saveAddress" className="ml-2 text-sm text-gray-700">
                      Save this address for future purchases
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => navigate('/cart')}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back to Cart
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Continue to Payment
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 2: Payment Information */}
            {step === 2 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
                <form onSubmit={handlePaymentSubmit}>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      value={paymentInfo.cardNumber}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: formatCardNumber(e.target.value)})}
                      required
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name on Card *
                    </label>
                    <input
                      type="text"
                      value={paymentInfo.cardName}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value})}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        value={paymentInfo.expiryDate}
                        onChange={(e) => setPaymentInfo({...paymentInfo, expiryDate: formatExpiryDate(e.target.value)})}
                        required
                        maxLength={5}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        value={paymentInfo.cvv}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value.replace(/\D/g, '').slice(0, 4)})}
                        required
                        maxLength={4}
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        id="billingSame"
                        checked={billingSameAsShipping}
                        onChange={(e) => setBillingSameAsShipping(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                      />
                      <label htmlFor="billingSame" className="ml-2 text-sm text-gray-700">
                        Billing address is the same as shipping address
                      </label>
                    </div>

                    {!billingSameAsShipping && (
                      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <h4 className="font-medium text-gray-900 mb-3">Billing Address</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="px-3 py-2 border border-gray-300 rounded"
                            value={billingInfo.firstName}
                            onChange={(e) => setBillingInfo({...billingInfo, firstName: e.target.value})}
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="px-3 py-2 border border-gray-300 rounded"
                            value={billingInfo.lastName}
                            onChange={(e) => setBillingInfo({...billingInfo, lastName: e.target.value})}
                          />
                          <input
                            type="text"
                            placeholder="Address"
                            className="px-3 py-2 border border-gray-300 rounded"
                            value={billingInfo.address}
                            onChange={(e) => setBillingInfo({...billingInfo, address: e.target.value})}
                          />
                          <input
                            type="text"
                            placeholder="City"
                            className="px-3 py-2 border border-gray-300 rounded"
                            value={billingInfo.city}
                            onChange={(e) => setBillingInfo({...billingInfo, city: e.target.value})}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="saveCard"
                      checked={paymentInfo.saveCard}
                      onChange={(e) => setPaymentInfo({...paymentInfo, saveCard: e.target.checked})}
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor="saveCard" className="ml-2 text-sm text-gray-700">
                      Save this card for future purchases
                    </label>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Back to Shipping
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Review Order
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Order Review */}
            {step === 3 && (
              <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Review</h2>
                
                {/* Order Summary */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    {orderDetails.items?.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                          <div>
                            <p className="font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity} • ${item.price.toFixed(2)} each</p>
                          </div>
                        </div>
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${orderDetails.subtotal?.toFixed(2)}</span>
                    </div>
                    {orderDetails.discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount</span>
                        <span>-${orderDetails.discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{orderDetails.shipping === 0 ? 'Free' : `$${orderDetails.shipping?.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span>${orderDetails.tax?.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                      <span>Total</span>
                      <span>${orderDetails.total?.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Shipping Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-medium">{shippingInfo.firstName} {shippingInfo.lastName}</p>
                    <p className="text-gray-600">{shippingInfo.address}</p>
                    {shippingInfo.apartment && <p className="text-gray-600">{shippingInfo.apartment}</p>}
                    <p className="text-gray-600">{shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}</p>
                    <p className="text-gray-600">{shippingInfo.country}</p>
                    <p className="text-gray-600">{shippingInfo.phone}</p>
                    <p className="text-gray-600">{shippingInfo.email}</p>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Payment Method</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <i className="fab fa-cc-visa text-2xl text-gray-700 mr-3"></i>
                      <div>
                        <p className="font-medium">Visa ending in {paymentInfo.cardNumber.slice(-4)}</p>
                        <p className="text-gray-600">Expires {paymentInfo.expiryDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="mb-6">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 mt-1"
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      I agree to the <Link to="/terms" className="text-indigo-600 hover:text-indigo-800">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</Link>. I understand that my order will be processed within 1-2 business days and shipping may take 3-5 business days.
                    </label>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Back to Payment
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    disabled={loading}
                    className={`px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                      loading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                        Processing...
                      </div>
                    ) : (
                      'Place Order'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${orderDetails.subtotal?.toFixed(2) || '0.00'}</span>
                </div>
                {orderDetails.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-${orderDetails.discount?.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{orderDetails.shipping === 0 ? 'Free' : `$${orderDetails.shipping?.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Tax</span>
                  <span>${orderDetails.tax?.toFixed(2) || '0.00'}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${orderDetails.total?.toFixed(2) || '0.00'}</span>
                </div>
              </div>

              {/* Need Help */}
              <div className="bg-indigo-50 p-4 rounded-lg mb-6">
                <div className="flex items-start">
                  <i className="fas fa-question-circle text-indigo-600 text-lg mr-3 mt-0.5"></i>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Need Help?</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      Our support team is available 24/7 to assist you.
                    </p>
                    <Link to="/contact" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                      Contact Support →
                    </Link>
                  </div>
                </div>
              </div>

              {/* Security Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-lock text-green-500 mr-2"></i>
                  <span>Secure checkout with 256-bit encryption</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                  <span>Your payment information is protected</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="fas fa-undo text-green-500 mr-2"></i>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>

            {/* Return Policy */}
            <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">Return Policy</h4>
              <p className="text-sm text-gray-600 mb-3">
                We offer a 30-day return policy for all unworn items with original tags. Free returns for orders over $50.
              </p>
              <Link to="/returns" className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                Learn more about returns →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;