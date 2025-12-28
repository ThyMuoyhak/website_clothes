import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      comment: "The craftsmanship and attention to detail are unparalleled. Each piece feels like a long-term investment in style.",
      date: "2 days ago",
      verified: true,
      purchase: "Essentials Collection",
      location: "New York, NY"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      comment: "Minimalist design executed perfectly. The fabric quality and fit exceed expectations. My wardrobe essential.",
      date: "1 week ago",
      verified: true,
      purchase: "Minimalist Edit",
      location: "San Francisco, CA"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      rating: 5,
      comment: "A refined shopping experience from start to finish. The quality matches the aesthetic perfectly. Highly curated.",
      date: "3 days ago",
      verified: true,
      purchase: "Editorial Collection",
      location: "Paris, FR"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Brand Strategist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      rating: 5,
      comment: "The intersection of luxury and sustainability done right. Every detail feels intentional and premium.",
      date: "2 weeks ago",
      verified: true,
      purchase: "Sustainable Line",
      location: "London, UK"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2068&auto=format&fit=crop",
      rating: 5,
      comment: "A masterclass in modern tailoring. The proportions and fabric choices are exceptional. Worth every penny.",
      date: "5 days ago",
      verified: true,
      purchase: "Tailored Collection",
      location: "Tokyo, JP"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-gray-900' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-8 h-px bg-gray-900"></div>
            <span className="text-sm tracking-widest uppercase text-gray-500">Testimonials</span>
            <div className="w-8 h-px bg-gray-900"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Client <span className="font-normal">Experiences</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            Stories from our community of discerning individuals who value quality and craftsmanship
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="relative">
            {/* Active Testimonial */}
            <div className={`transition-all duration-500 ease-out ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Customer Info */}
                  <div className="lg:col-span-1 border-r border-gray-200 p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img 
                            src={testimonials[activeIndex].image} 
                            alt={testimonials[activeIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {testimonials[activeIndex].verified && (
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>

                      <div>
                        <h3 className="text-2xl font-light mb-1">{testimonials[activeIndex].name}</h3>
                        <p className="text-gray-600 mb-2">{testimonials[activeIndex].role}</p>
                        <p className="text-sm text-gray-500">{testimonials[activeIndex].location}</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonials[activeIndex].rating)}
                        </div>
                        
                        <div className="text-sm text-gray-500">
                          Purchased: <span className="font-medium text-gray-900">{testimonials[activeIndex].purchase}</span>
                        </div>
                        
                        <div className="text-sm text-gray-400">
                          {testimonials[activeIndex].date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2 p-8 lg:p-12">
                    <div className="relative h-full">
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 text-gray-900/5 text-8xl">
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <p className="text-gray-700 text-xl leading-relaxed mb-8 max-w-2xl">
                          "{testimonials[activeIndex].comment}"
                        </p>

                        {/* Helpful Actions */}
                        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                          <div className="flex items-center space-x-6">
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
                              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                              </svg>
                              <span className="text-sm">Helpful</span>
                            </button>
                            
                            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 group">
                              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                              </svg>
                              <span className="text-sm">Share</span>
                            </button>
                          </div>

                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Verified Purchase</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={handlePrevSlide}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-gray-900' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextSlide}
              className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:border-gray-900 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Community Members" },
              { value: "4.9", label: "Average Rating" },
              { value: "98%", label: "Would Recommend" },
              { value: "24/7", label: "Concierge Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 mb-8">
            <div className="w-4 h-px bg-gray-900"></div>
            <span className="text-sm tracking-widest uppercase text-gray-500">Featured In</span>
            <div className="w-4 h-px bg-gray-900"></div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["VOGUE", "GQ", "MONOCLE", "WALLPAPER*", "FRAME"].map((brand) => (
              <div key={brand} className="text-gray-400 font-light text-lg tracking-tight hover:text-gray-600 transition-colors duration-300">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Testimonial;