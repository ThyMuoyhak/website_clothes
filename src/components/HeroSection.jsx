import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Up to 50% OFF",
      description: "Discover the latest trends in fashion with our exclusive summer collection",
      image: "https://www.shutterstock.com/image-photo/happy-byer-shopping-bags-standing-600nw-1927526819.jpg",
      buttonText: "Shop Now",
      buttonColor: "from-orange-500 to-red-500",
      badge: "New Arrivals"
    },
    {
      id: 2,
      title: "Elegant Winter Wear",
      subtitle: "Stay Warm in Style",
      description: "Premium quality jackets and sweaters for the cold season",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2070&auto=format&fit=crop",
      buttonText: "Explore Winter",
      buttonColor: "from-blue-600 to-indigo-700",
      badge: "Limited Edition"
    },
    {
      id: 3,
      title: "Athleisure Collection",
      subtitle: "Performance Meets Fashion",
      description: "Comfortable and stylish activewear for your everyday adventures",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
      buttonText: "Shop Activewear",
      buttonColor: "from-green-500 to-emerald-600",
      badge: "Trending"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Hero Slider */}
      <div className="relative h-[600px] md:h-[700px] lg:h-[800px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 md:px-8">
              <div className="h-full flex items-center">
                <div className="max-w-2xl text-white animate-slideIn">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                    <span className="text-sm font-semibold">{slide.badge}</span>
                    <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-lg md:text-xl font-light text-gray-200 mb-2">
                    {slide.subtitle}
                  </p>

                  {/* Title */}
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className={`px-8 py-4 rounded-lg bg-gradient-to-r ${slide.buttonColor} text-white font-semibold text-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 flex items-center justify-center space-x-2`}>
                      <span>{slide.buttonText}</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                    <button className="px-8 py-4 rounded-lg bg-white/20 backdrop-blur-sm text-white font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                      View Collection
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="mt-12 flex flex-wrap gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold">200+</div>
                      <div className="text-gray-300">Brands</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">5K+</div>
                      <div className="text-gray-300">Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-gray-300">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Featured Categories */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Men', icon: '👨', count: '240 items', color: 'from-blue-500 to-cyan-500' },
            { name: 'Women', icon: '👩', count: '320 items', color: 'from-pink-500 to-rose-500' },
            { name: 'Kids', icon: '👶', count: '180 items', color: 'from-green-500 to-emerald-500' },
            { name: 'Accessories', icon: '👓', count: '150 items', color: 'from-purple-500 to-violet-500' }
          ].map((category) => (
            <div 
              key={category.name} 
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.count}</p>
                <button className="text-gray-700 font-medium group-hover:text-indigo-600 transition-colors duration-300 flex items-center">
                  Shop Now
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;