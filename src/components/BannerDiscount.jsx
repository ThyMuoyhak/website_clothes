import React, { useState, useEffect } from 'react';

const BannerDiscount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('SS24FLASH');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const countdownItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  const features = [
    { icon: '🚚', label: 'Free Shipping' },
    { icon: '🔄', label: 'Easy Returns' },
    { icon: '🛡️', label: 'Secure Payment' },
    { icon: '⭐', label: 'Premium Quality' }
  ];

  return (
    <section className="py-16 px-4">
      <div className="relative overflow-hidden">
        {/* Modern Card Container */}
        <div className={`
          relative bg-gradient-to-br from-white to-gray-50 
          border border-gray-200 rounded-2xl
          shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]
          transition-all duration-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          {/* Accent Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-gray-900 via-gray-900 to-gray-900 bg-clip-border"></div>

          <div className="relative">
            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
              {/* Left Column - Main Offer */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-900 rounded-full animate-pulse"></div>
                  <span className="text-sm tracking-widest uppercase text-gray-900 font-medium">
                    Spring Flash Sale
                  </span>
                </div>

                {/* Main Heading */}
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 leading-[0.9] mb-4">
                    End of
                    <br />
                    <span className="font-normal">Season Sale</span>
                  </h2>
                  
                  <div className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 py-3 rounded-full">
                    <span className="text-3xl font-light mr-3">Up to</span>
                    <span className="text-4xl font-bold">70%</span>
                    <span className="text-3xl font-light ml-3">OFF</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  Final reductions on our curated collection. Premium quality essentials at exceptional prices. 
                  Limited quantities remaining.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-sm font-medium text-gray-900">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Countdown & CTA */}
              <div className="space-y-8">
                {/* Countdown Timer - Modern */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-px bg-gray-900"></div>
                    <span className="text-sm tracking-widest uppercase text-gray-500">Ends in</span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3">
                    {countdownItems.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="relative">
                          <div className="aspect-square bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-xl flex items-center justify-center mb-2">
                            <span className="text-3xl md:text-4xl font-light text-gray-900 tabular-nums">
                              {item.value.toString().padStart(2, '0')}
                            </span>
                          </div>
                          {/* Pulsing Dot */}
                          {index === 3 && (
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-900 rounded-full animate-ping"></div>
                          )}
                        </div>
                        <span className="text-xs tracking-wider uppercase text-gray-500">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Limited stock remaining</span>
                    <span className="font-medium text-gray-900">85% claimed</span>
                  </div>
                  <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-1000"
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>

                {/* Discount Code */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-px bg-gray-900"></div>
                    <span className="text-sm tracking-widest uppercase text-gray-500">Promo Code</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl p-4 group hover:border-gray-300 transition-colors duration-300">
                    <div>
                      <span className="text-sm text-gray-500 mb-1 block">Apply at checkout</span>
                      <code className="text-2xl font-mono font-bold text-gray-900">SS24FLASH</code>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="relative px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                    >
                      <span className={copied ? 'opacity-0' : 'opacity-100'}>
                        Copy
                      </span>
                      <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        copied ? 'opacity-100' : 'opacity-0'
                      }`}>
                        Copied!
                      </span>
                    </button>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="group relative w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-4 rounded-xl font-medium tracking-wider hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center space-x-3">
                    <span>Shop the Collection</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-gray-900/5 to-transparent rounded-full blur-3xl"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gray-900/10"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gray-900/10"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gray-900/10"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gray-900/10"></div>
          </div>
        </div>

        {/* Floating Badge */}
        <div className={`
          absolute -top-4 left-1/2 transform -translate-x-1/2
          bg-gradient-to-r from-gray-900 to-gray-800 text-white 
          px-6 py-2 rounded-full text-sm font-medium tracking-wider
          shadow-lg transition-all duration-700
          ${isVisible ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-4'}
        `}>
          Limited Time Offer
        </div>

        {/* Additional Info */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            *Discount applies to selected items. Valid until stock lasts. Minimum purchase may apply.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default BannerDiscount;