import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FashionHub
              </span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium fashion for the modern individual. Discover curated collections that blend style, comfort, and quality craftsmanship.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-8">
              {['facebook', 'twitter', 'instagram', 'pinterest', 'youtube'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={platform}
                >
                  <i className={`fab fa-${platform} text-gray-400 group-hover:text-white`}></i>
                </a>
              ))}
            </div>

            {/* App Stores */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 rounded-xl p-3 transition-colors">
                <i className="fab fa-apple text-2xl mr-3"></i>
                <div>
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center bg-gray-800 hover:bg-gray-700 rounded-xl p-3 transition-colors">
                <i className="fab fa-google-play text-xl mr-3"></i>
                <div>
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mr-3"></span>
              Shop
            </h3>
            <ul className="space-y-3">
              {['Men', 'Women', 'Kids', 'Accessories', 'New Arrivals', 'Best Sellers', 'Sale'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full mr-3"></span>
              Support
            </h3>
            <ul className="space-y-3">
              {[
                'Help Center',
                'Contact Us',
                'Shipping Info',
                'Returns & Exchanges',
                'Size Guide',
                'FAQs',
                'Privacy Policy'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-2 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full mr-3"></span>
              Newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl py-3 px-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg px-4 py-2 transition-all duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>

            {subscribed && (
              <div className="mb-6 p-3 bg-green-500/20 border border-green-500/30 rounded-xl">
                <div className="flex items-center text-green-400">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span>Successfully subscribed! Check your email.</span>
                </div>
              </div>
            )}

            {/* Payment Methods */}
            <div className="mt-8">
              <h4 className="text-sm font-bold mb-4 text-gray-300">We Accept</h4>
              <div className="flex flex-wrap gap-3">
                {['cc-visa', 'cc-mastercard', 'cc-amex', 'cc-paypal', 'cc-apple-pay'].map((method) => (
                  <div 
                    key={method}
                    className="w-12 h-8 bg-gray-800 rounded-lg flex items-center justify-center"
                  >
                    <i className={`fab fa-${method} text-gray-400 text-lg`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: 'fa-truck', title: 'Free Shipping', desc: 'On orders $50+' },
              { icon: 'fa-shield-alt', title: 'Secure Payment', desc: '100% protected' },
              { icon: 'fa-undo', title: 'Easy Returns', desc: '30 day policy' },
              { icon: 'fa-headset', title: '24/7 Support', desc: 'Dedicated help' }
            ].map((badge, index) => (
              <div key={index} className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mr-4">
                  <i className={`fas ${badge.icon} text-indigo-400 text-lg`}></i>
                </div>
                <div>
                  <div className="font-bold text-sm">{badge.title}</div>
                  <div className="text-gray-400 text-xs">{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black/50 border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} FashionHub. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
              <div className="flex items-center text-gray-400 text-sm">
                <i className="fas fa-globe mr-2"></i>
                <select className="bg-transparent border-none focus:outline-none">
                  <option>English</option>
                  <option>Español</option>
                  <option>Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up"></i>
      </button>

      {/* Live Chat Button */}
      <button
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Live chat"
      >
        <i className="fas fa-comment text-xl"></i>
        <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
          <i className="fas fa-bolt"></i>
        </span>
      </button>
    </footer>
  );
};

export default Footer;