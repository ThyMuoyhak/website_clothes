import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    {
      id: 1,
      title: "The New Minimalism",
      subtitle: "SS24 Collection",
      description: "Clean lines, premium fabrics, effortless style. Discover our curated collection of essential pieces.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      buttonText: "Explore Collection",
      badge: "Featured",
      colorScheme: "text-gray-900",
      accentColor: "border-gray-900"
    },
    {
      id: 2,
      title: "Elevated Essentials",
      subtitle: "Designer Edit",
      description: "Timeless pieces reimagined for the modern wardrobe. Quality craftsmanship meets contemporary design.",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
      buttonText: "Shop Now",
      badge: "Limited",
      colorScheme: "text-gray-900",
      accentColor: "border-gray-900"
    },
    {
      id: 3,
      title: "Urban Utility",
      subtitle: "Functional Fashion",
      description: "Performance-driven designs for the city explorer. Where form meets function in every detail.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      buttonText: "Discover",
      badge: "New",
      colorScheme: "text-gray-900",
      accentColor: "border-gray-900"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Modern Hero Slider */}
      <div className="relative h-[85vh] min-h-[700px] max-h-[900px]">
        {/* Slide Indicators - Modern Vertical */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className="flex items-center space-x-3 group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-px w-6 transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-gray-900 w-12' 
                  : 'bg-gray-400 group-hover:bg-gray-600'
              }`}></div>
              <span className={`text-xs tracking-wider transition-all duration-300 ${
                index === currentSlide 
                  ? 'text-gray-900 opacity-100' 
                  : 'text-gray-500 opacity-0 group-hover:opacity-100'
              }`}>
                0{index + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-full pointer-events-none'
            } ${isAnimating ? 'transition-none' : ''}`}
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  backgroundPosition: 'center 30%'
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Content Container */}
            <div className="relative h-full container mx-auto px-4 md:px-8 lg:px-12">
              <div className="h-full flex items-center">
                <div className="max-w-3xl">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 mb-8 animate-fadeIn">
                    <div className="flex items-center">
                      <span className="text-xs tracking-widest uppercase font-medium text-gray-900 border-b border-gray-900 pb-1">
                        {slide.badge}
                      </span>
                    </div>
                    <div className="w-8 h-px bg-gray-900/50"></div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm tracking-[0.2em] uppercase text-gray-600 mb-4 animate-fadeIn" style={{animationDelay: '100ms'}}>
                    {slide.subtitle}
                  </p>

                  {/* Title */}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 leading-[0.9] animate-fadeIn" style={{animationDelay: '200ms'}}>
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h1>

                  {/* Description */}
                  <p className="text-lg text-gray-700 mb-10 max-w-md leading-relaxed animate-fadeIn" style={{animationDelay: '300ms'}}>
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn" style={{animationDelay: '400ms'}}>
                    <button className="group relative px-8 py-4 bg-gray-900 text-white font-medium tracking-wider hover:bg-gray-800 transition-all duration-300 overflow-hidden">
                      <span className="relative z-10 flex items-center justify-center space-x-3">
                        <span>{slide.buttonText}</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <button className="px-8 py-4 border border-gray-300 text-gray-900 font-medium tracking-wider hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2">
                      <span>View Lookbook</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Stats - Modern */}
                  <div className="mt-16 flex items-center space-x-8 animate-fadeIn" style={{animationDelay: '500ms'}}>
                    <div className="border-r border-gray-200 pr-8">
                      <div className="text-2xl font-light text-gray-900">200+</div>
                      <div className="text-xs text-gray-500 tracking-wider uppercase mt-1">Brands</div>
                    </div>
                    <div className="border-r border-gray-200 pr-8">
                      <div className="text-2xl font-light text-gray-900">5K+</div>
                      <div className="text-xs text-gray-500 tracking-wider uppercase mt-1">Products</div>
                    </div>
                    <div>
                      <div className="text-2xl font-light text-gray-900">24/7</div>
                      <div className="text-xs text-gray-500 tracking-wider uppercase mt-1">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls - Modern */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200 z-20">
          <div 
            className="h-full bg-gray-900 transition-all duration-6000 ease-linear"
            style={{ 
              width: isAnimating ? '100%' : '0%',
              animation: isAnimating ? 'none' : 'progress 6s linear forwards'
            }}
          ></div>
        </div>
      </div>

      {/* Modern Categories Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light tracking-tight mb-6">Collections</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Curated categories designed for the modern lifestyle. Each collection tells a story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              name: 'Essentials', 
              description: 'Timeless basics',
              count: '240 items',
              color: 'bg-gray-900',
              image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop'
            },
            { 
              name: 'Modern Tailoring', 
              description: 'Refined silhouettes',
              count: '180 items',
              color: 'bg-gray-800',
              image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1974&auto=format&fit=crop'
            },
            { 
              name: 'Urban Utility', 
              description: 'Functional pieces',
              count: '150 items',
              color: 'bg-gray-700',
              image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1974&auto=format&fit=crop'
            },
            { 
              name: 'Leisure', 
              description: 'Casual comfort',
              count: '210 items',
              color: 'bg-gray-600',
              image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop'
            }
          ].map((category, index) => (
            <div 
              key={category.name} 
              className="group relative overflow-hidden h-[400px] rounded-lg cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                <div>
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <div className="w-8 h-px bg-white/50"></div>
                    <span className="text-sm tracking-widest uppercase opacity-75">{category.count}</span>
                  </div>
                  <h3 className="text-2xl font-light mb-2">{category.name}</h3>
                  <p className="text-white/70">{category.description}</p>
                </div>
                
                <button className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group/btn">
                  <span className="text-sm tracking-wider uppercase">Explore</span>
                  <div className="w-8 h-px bg-white/50 group-hover/btn:bg-white transition-colors duration-300"></div>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/0 to-transparent group-hover:from-black/10 group-hover:via-black/20 group-hover:to-black/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center space-x-2 text-gray-900 hover:text-gray-700 transition-colors duration-300 group">
            <span className="text-sm tracking-wider uppercase font-medium">View All Collections</span>
            <div className="w-8 h-px bg-gray-900 group-hover:w-12 transition-all duration-300"></div>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

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
        
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;