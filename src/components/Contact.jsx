// Contact.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      details: ['1-800-FASHION', '(555) 123-4567'],
      action: 'Available 24/7'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Us',
      details: ['support@fashionhub.com', 'sales@fashionhub.com'],
      action: 'Response within 24 hours'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Visit Us',
      details: ['123 Fashion Ave', 'San Francisco, CA 94107'],
      action: 'Mon-Fri: 9AM-6PM'
    },
    {
      icon: 'fas fa-headset',
      title: 'Live Chat',
      details: ['Click the chat icon below'],
      action: 'Available now'
    }
  ];

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all unworn items with original tags. Free returns for orders over $50.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping is 1-2 business days. International shipping takes 7-14 business days.'
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location.'
    },
    {
      question: 'Are your products sustainable?',
      answer: '85% of our products are made from sustainable materials. Look for the green leaf icon on product pages.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order ships, you will receive a tracking number via email. You can also track orders in your account.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Shop Pay.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We're here to help! Reach out to us for any questions or concerns.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${info.icon} text-2xl text-indigo-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <p className="text-sm text-indigo-600 font-medium">{info.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form & Map */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-3 text-xl"></i>
                      <div>
                        <p className="font-medium text-green-800">Message sent successfully!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="order">Order Inquiry</option>
                      <option value="return">Returns & Exchanges</option>
                      <option value="product">Product Questions</option>
                      <option value="shipping">Shipping Information</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Map & FAQ */}
              <div className="space-y-8">
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-64 bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-map-marker-alt text-4xl text-indigo-600 mb-4"></i>
                      <p className="text-gray-700 font-medium">San Francisco Headquarters</p>
                      <p className="text-gray-600">123 Fashion Ave, San Francisco, CA 94107</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Our Headquarters</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-clock mr-3"></i>
                        <span>Mon-Fri: 9AM-6PM PST</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-phone mr-3"></i>
                        <span>(555) 123-4567</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-envelope mr-3"></i>
                        <span>visit@fashionhub.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Link to="/faq" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">FAQ & Help Center</span>
                      <i className="fas fa-chevron-right text-gray-400"></i>
                    </Link>
                    <Link to="/shipping" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">Shipping Information</span>
                      <i className="fas fa-chevron-right text-gray-400"></i>
                    </Link>
                    <Link to="/returns" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">Returns & Exchanges</span>
                      <i className="fas fa-chevron-right text-gray-400"></i>
                    </Link>
                    <Link to="/size-guide" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-gray-700">Size Guide</span>
                      <i className="fas fa-chevron-right text-gray-400"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find quick answers to common questions
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    onClick={() => {
                      // Toggle FAQ answer
                      const answer = document.getElementById(`faq-answer-${index}`);
                      answer.classList.toggle('hidden');
                    }}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <i className="fas fa-chevron-down text-gray-400 transition-transform"></i>
                  </button>
                  <div id={`faq-answer-${index}`} className="hidden px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/faq"
                  className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Visit FAQ Center
                </Link>
                <button
                  onClick={() => {
                    // Scroll to contact form
                    document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  Ask a Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore our collection of sustainable fashion pieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Button */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-50">
        <i className="fas fa-comment text-xl"></i>
      </button>
    </div>
  );
};

export default Contact;