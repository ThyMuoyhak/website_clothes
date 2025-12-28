// Contact.jsx - Modern Redesign
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
    
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: ['+1 (555) 123-4567'],
      action: 'Mon-Fri, 9AM-6PM EST',
      color: 'bg-blue-50'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['contact@aesthetes.com'],
      action: 'Response within 24h',
      color: 'bg-green-50'
    },
    {
      icon: '📍',
      title: 'Studio',
      details: ['123 Design Ave', 'New York, NY 10001'],
      action: 'By appointment',
      color: 'bg-amber-50'
    }
  ];

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for unworn items. Free returns for orders over $100.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to 50+ countries with expedited options available.'
    },
    {
      question: 'How do I track my order?',
      answer: 'Tracking information is sent via email once your order ships.'
    },
    {
      question: 'Are your materials sustainable?',
      answer: 'All our materials are sustainably sourced and ethically produced.'
    },
    {
      question: 'Do you offer custom sizing?',
      answer: 'Yes, custom sizing is available for select collections.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 mb-8">
              <div className="w-8 h-px bg-gray-900"></div>
              <span className="text-sm tracking-widest uppercase text-gray-500">Contact</span>
              <div className="w-8 h-px bg-gray-900"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              Get in Touch
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Have questions about our collections or need assistance? 
              Our team is here to help with personalized support.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 ${info.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{info.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form & Info Grid */}
      <div className="py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <div className="inline-flex items-center space-x-2 mb-4">
                    <div className="w-4 h-px bg-gray-900"></div>
                    <span className="text-sm tracking-widest uppercase text-gray-500">Send Message</span>
                  </div>
                  
                  <h2 className="text-2xl font-light mb-6">Contact Form</h2>
                </div>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-green-800">Message sent successfully</p>
                      <p className="text-sm text-green-700">We'll respond within 24 hours</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-colors text-sm"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-colors text-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-1 focus:ring-gray-900 focus:border-transparent transition-colors text-sm resize-none"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 text-sm font-medium transition-colors duration-300 ${
                      isSubmitting
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Side Information */}
              <div className="space-y-8">
                {/* Studio Info */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-lg">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-light text-gray-900 mb-2">Studio Visit</h3>
                      <p className="text-sm text-gray-600">
                        Schedule a private appointment to explore our collections in person.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Mon-Fri, 10AM-6PM by appointment
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      123 Design Ave, New York, NY 10001
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-light text-gray-900 mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <Link to="/faq" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100">
                      <span>FAQ & Support</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link to="/shipping" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100">
                      <span>Shipping Information</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link to="/returns" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 transition-colors py-2 border-b border-gray-100">
                      <span>Returns & Exchanges</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link to="/size-guide" className="flex items-center justify-between text-sm text-gray-600 hover:text-gray-900 transition-colors py-2">
                      <span>Size Guide</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Response Time</h4>
                      <p className="text-sm text-gray-600">Typically within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-4 h-px bg-gray-900"></div>
                <span className="text-sm tracking-widest uppercase text-gray-500">FAQ</span>
                <div className="w-4 h-px bg-gray-900"></div>
              </div>
              
              <h2 className="text-2xl font-light mb-6">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full py-4 text-left flex items-center justify-between hover:text-gray-900 transition-colors"
                    onClick={() => {
                      const answer = document.getElementById(`faq-answer-${index}`);
                      const icon = document.getElementById(`faq-icon-${index}`);
                      answer.classList.toggle('hidden');
                      icon.classList.toggle('rotate-180');
                    }}
                  >
                    <span className="font-light text-gray-900">{faq.question}</span>
                    <svg 
                      id={`faq-icon-${index}`}
                      className="w-4 h-4 text-gray-400 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div id={`faq-answer-${index}`} className="hidden pb-4">
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 mb-4">Need more help?</p>
              <button
                onClick={() => {
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center text-sm text-gray-900 hover:text-gray-700 transition-colors group"
              >
                <span>Send us a message</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-light mb-6">
              Explore Our Collections
            </h2>
            
            <p className="text-gray-600 mb-8 text-sm leading-relaxed max-w-2xl mx-auto">
              Discover our curated selection of sustainable essentials and statement pieces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Shop Collections
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 shadow-lg z-50">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
};

export default Contact;