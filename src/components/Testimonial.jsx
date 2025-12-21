import React, { useState, useEffect } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1974&auto=format&fit=crop",
      rating: 5,
      comment: "The quality is exceptional! I've been shopping here for over a year and every piece exceeds my expectations. The customer service is outstanding.",
      date: "2 days ago",
      verified: true,
      purchase: "Summer Dress Collection"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      rating: 4,
      comment: "Great selection of minimalist wear. The materials feel premium and the fit is perfect. Will definitely order again!",
      date: "1 week ago",
      verified: true,
      purchase: "Minimalist Collection"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
      rating: 5,
      comment: "Best online shopping experience I've had. Fast shipping, easy returns, and the clothes are exactly as pictured. Highly recommended!",
      date: "3 days ago",
      verified: true,
      purchase: "Professional Wear"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      rating: 5,
      comment: "The attention to detail is impressive. From packaging to product quality, everything feels premium. My go-to fashion store now.",
      date: "2 weeks ago",
      verified: true,
      purchase: "Business Casual"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2068&auto=format&fit=crop",
      rating: 4,
      comment: "Love the sustainable fashion options. The quality matches the price perfectly. Already recommended to my friends!",
      date: "5 days ago",
      verified: true,
      purchase: "Eco Collection"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'} text-lg`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who love our premium fashion collection
          </p>
          <div className="mt-8 flex items-center justify-center space-x-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fas fa-star text-yellow-400 text-xl"></i>
              ))}
            </div>
            <span className="text-gray-700 font-bold text-xl">4.8/5</span>
            <span className="text-gray-500">(2,548 reviews)</span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="p-4">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                        {/* Customer Info */}
                        <div className="lg:w-1/3 text-center lg:text-left">
                          <div className="relative inline-block">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {testimonial.verified && (
                              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                <i className="fas fa-check text-sm"></i>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-6">
                            <h3 className="text-2xl font-bold text-gray-900">{testimonial.name}</h3>
                            <p className="text-gray-600 mb-2">{testimonial.role}</p>
                            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                              {renderStars(testimonial.rating)}
                              <span className="text-gray-500 text-sm">({testimonial.date})</span>
                            </div>
                            <div className="inline-flex items-center px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                              <i className="fas fa-shopping-bag mr-2"></i>
                              {testimonial.purchase}
                            </div>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="lg:w-2/3 relative">
                          {/* Quote Icon */}
                          <div className="absolute -top-6 -left-6 text-6xl text-indigo-100">
                            <i className="fas fa-quote-left"></i>
                          </div>
                          
                          <div className="relative z-10">
                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
                              "{testimonial.comment}"
                            </p>
                            
                            {/* Helpful Votes */}
                            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                              <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
                                  <i className="fas fa-thumbs-up"></i>
                                  <span>Helpful</span>
                                  <span className="text-gray-400">(42)</span>
                                </button>
                                <button className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors">
                                  <i className="fas fa-share"></i>
                                  <span>Share</span>
                                </button>
                              </div>
                              <div className="text-gray-500 text-sm">
                                Verified Purchase
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-all duration-300"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={() => {
              nextSlide();
              setIsAutoPlaying(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-all duration-300"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-gradient-to-r from-indigo-600 to-purple-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "4.8★", label: "Average Rating" },
            { value: "98%", label: "Recommend Us" },
            { value: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Trusted by leading brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Vogue", "Forbes", "Elle", "GQ", "Fashion Week"].map((brand) => (
              <div key={brand} className="text-gray-400 font-bold text-xl hover:text-gray-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;