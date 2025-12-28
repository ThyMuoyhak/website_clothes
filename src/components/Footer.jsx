import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: 'Collections',
      items: ['Essentials', 'Contemporary', 'Designer', 'Sustainable', 'Seasonal']
    },
    {
      title: 'Services',
      items: ['Personal Styling', 'Gift Cards', 'Wishlist', 'Size Guide', 'Alterations']
    },
    {
      title: 'About',
      items: ['Our Story', 'Sustainability', 'Careers', 'Press', 'Showrooms']
    },
    {
      title: 'Support',
      items: ['Contact', 'Shipping', 'Returns', 'FAQ', 'Privacy Policy']
    }
  ];

  const paymentMethods = [
    { name: 'Visa', icon: 'cc-visa' },
    { name: 'Mastercard', icon: 'cc-mastercard' },
    { name: 'Amex', icon: 'cc-amex' },
    { name: 'PayPal', icon: 'cc-paypal' },
    { name: 'Apple Pay', icon: 'cc-apple-pay' }
  ];

  const trustBadges = [
    { icon: '🚚', title: 'Free Shipping', desc: 'On all orders' },
    { icon: '🔄', title: 'Easy Returns', desc: '30 days' },
    { icon: '🛡️', title: 'Secure', desc: 'Payment' },
    { icon: '⭐', title: 'Premium', desc: 'Quality' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4">
            {/* Brand */}
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div>
                  <div className="text-2xl font-light tracking-tight text-gray-900">AESTHETE</div>
                  <div className="text-xs tracking-widest uppercase text-gray-500">COLLECTIVE</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Curated essentials and statement pieces for the modern lifestyle. 
                Quality craftsmanship meets contemporary design.
              </p>
            </div>

            {/* Newsletter */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-4 h-px bg-gray-900"></div>
                <span className="text-sm tracking-widest uppercase text-gray-500">Newsletter</span>
              </div>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg py-3 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded px-4 py-1.5 text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                  >
                    Join
                  </button>
                </div>
                
                {subscribed && (
                  <div className="flex items-center text-green-600 text-sm">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Thank you for subscribing
                  </div>
                )}
                
                <p className="text-xs text-gray-500">
                  Subscribe for exclusive updates, new arrivals, and special offers.
                </p>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn', 'Pinterest'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-gray-900 transition-colors duration-300 text-sm"
                  aria-label={platform}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-sm font-medium text-gray-900 mb-4 tracking-wider uppercase">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900 transition-colors duration-300 text-sm flex items-center group"
                          onMouseEnter={() => setIsHovered(`${sectionIndex}-${itemIndex}`)}
                          onMouseLeave={() => setIsHovered(null)}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mr-2 transition-all duration-300 ${
                            isHovered === `${sectionIndex}-${itemIndex}` ? 'bg-gray-900' : 'bg-transparent'
                          }`}></span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-200"></div>

        {/* Trust & Payment Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Trust Badges */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{badge.title}</div>
                  <div className="text-xs text-gray-500">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <div className="flex items-center justify-end space-x-4">
              <span className="text-sm text-gray-500 mr-4">Payment Methods</span>
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300"
                  title={method.name}
                >
                  <i className={`fab fa-${method.icon} text-xl`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-sm text-gray-600">
                © {new Date().getFullYear()} AESTHETE COLLECTIVE. All rights reserved.
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
                Cookies
              </a>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <select className="bg-transparent border-none text-sm text-gray-600 focus:outline-none cursor-pointer">
                  <option>English</option>
                  <option>Français</option>
                  <option>Español</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 z-50 shadow-lg"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Chat Button */}
      <button
        className="fixed bottom-24 right-8 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 z-50 shadow-lg group"
        aria-label="Contact support"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-900 text-xs rounded-full flex items-center justify-center border-2 border-white">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping"></span>
        </span>
      </button>
    </footer>
  );
};

export default Footer;