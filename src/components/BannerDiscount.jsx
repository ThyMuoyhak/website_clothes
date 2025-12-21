import React, { useState, useEffect } from 'react';

const BannerDiscount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // 3 days from now

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

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 px-4">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-2xl">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
            {/* Left Content */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="text-white font-bold text-sm">LIMITED TIME OFFER</span>
                <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Flash Sale!
                <br />
                <span className="text-yellow-300">Up to 70% OFF</span>
              </h2>

              <p className="text-white/90 text-lg mb-8 max-w-lg">
                Don't miss out on our biggest sale of the year. Shop premium fashion at unbelievable prices. 
                Offer ends soon!
              </p>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-white mb-2">
                  <span className="font-medium">Hurry! Limited stock available</span>
                  <span className="font-bold">85% claimed</span>
                </div>
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full transition-all duration-1000"
                    style={{ width: '85%' }}
                  ></div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-white">
                  <i className="fas fa-shipping-fast mr-2"></i>
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center text-white">
                  <i className="fas fa-shield-alt mr-2"></i>
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center text-white">
                  <i className="fas fa-undo mr-2"></i>
                  <span>30-Day Returns</span>
                </div>
              </div>
            </div>

            {/* Right Content - Countdown */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-white text-2xl font-bold mb-6 text-center">Offer Ends In:</h3>
                
                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-white rounded-xl p-4 mb-2">
                        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                          {item.value.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <span className="text-white font-medium text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-white to-gray-100 text-orange-600 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center">
                  <i className="fas fa-bolt mr-2"></i>
                  Shop Now & Save 70%
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>

                {/* Discount Code */}
                <div className="mt-6 text-center">
                  <p className="text-white/80 mb-2">Use code at checkout:</p>
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <code className="text-white font-mono font-bold text-xl">FLASH70</code>
                    <button className="ml-3 text-white hover:text-yellow-300">
                      <i className="fas fa-copy"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          *Discount applies to selected items. Minimum purchase $50. Limited quantities available.
        </p>
      </div>
    </section>
  );
};

export default BannerDiscount;