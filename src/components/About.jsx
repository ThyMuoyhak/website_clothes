// About.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop',
      bio: 'Former fashion designer with 15+ years of experience in luxury fashion.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
      bio: 'Award-winning fashion stylist with expertise in sustainable fashion.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Head of Sustainability',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
      bio: 'Environmental scientist passionate about sustainable fashion practices.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Customer Experience Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
      bio: '10+ years in e-commerce customer service and logistics.',
      social: {
        linkedin: '#',
        twitter: '#',
        instagram: '#'
      }
    }
  ];

  const milestones = [
    { year: '2015', title: 'Founded FashionHub', description: 'Started as a small boutique focusing on sustainable fashion.' },
    { year: '2017', title: 'Online Store Launch', description: 'Expanded to e-commerce, reaching customers nationwide.' },
    { year: '2019', title: 'Sustainability Certification', description: 'Received GOTS certification for organic products.' },
    { year: '2020', title: 'Global Shipping', description: 'Started international shipping to 50+ countries.' },
    { year: '2022', title: 'Mobile App Launch', description: 'Released award-winning mobile shopping app.' },
    { year: '2023', title: '1 Million Customers', description: 'Reached milestone of 1 million satisfied customers.' }
  ];

  const values = [
    {
      icon: 'fas fa-leaf',
      title: 'Sustainability',
      description: 'We are committed to eco-friendly practices and sustainable sourcing.'
    },
    {
      icon: 'fas fa-heart',
      title: 'Quality First',
      description: 'Every product is carefully selected and tested for exceptional quality.'
    },
    {
      icon: 'fas fa-users',
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Ethical Practices',
      description: 'We ensure fair wages and safe working conditions for all partners.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: 'Constantly evolving to bring you the latest fashion trends.'
    },
    {
      icon: 'fas fa-globe',
      title: 'Global Community',
      description: 'Building connections with fashion lovers worldwide.'
    }
  ];

  const stats = [
    { number: '500K+', label: 'Happy Customers' },
    { number: '50+', label: 'Countries Served' },
    { number: '10K+', label: 'Products Available' },
    { number: '24/7', label: 'Customer Support' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '3-5 Days', label: 'Average Delivery' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
              Our Story
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Redefining fashion with sustainability, quality, and style since 2015
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/products"
                className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Shop Now
              </Link>
              <button
                onClick={() => document.getElementById('team').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                To make sustainable fashion accessible to everyone, creating beautiful products 
                that don't compromise on ethics or the environment.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <i className={`${value.icon} text-2xl text-indigo-600`}></i>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story & Impact Tabs */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center mb-8">
              <div className="bg-white rounded-xl p-1 flex">
                {[
                  { id: 'story', label: 'Our Story', icon: 'fas fa-book' },
                  { id: 'impact', label: 'Our Impact', icon: 'fas fa-chart-line' },
                  { id: 'milestones', label: 'Milestones', icon: 'fas fa-trophy' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <i className={tab.icon}></i>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {activeTab === 'story' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">How It All Began</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-gray-600 mb-4">
                        FashionHub was born in 2015 from a simple idea: fashion should be beautiful, 
                        ethical, and sustainable. Our founder, Sarah Chen, noticed a gap in the market 
                        for high-quality, sustainable fashion that was both accessible and affordable.
                      </p>
                      <p className="text-gray-600 mb-4">
                        Starting as a small boutique in San Francisco, we focused on curating 
                        collections from independent designers who shared our vision for ethical 
                        production and environmental responsibility.
                      </p>
                      <p className="text-gray-600">
                        Today, we've grown into a global platform serving customers in over 50 
                        countries, but our core mission remains the same: to make sustainable 
                        fashion the norm, not the exception.
                      </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop"
                        alt="Our Story"
                        className="w-full h-auto rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Making a Difference</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact</h4>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">Reduced carbon footprint by 40% since 2018</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">100% plastic-free packaging</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">85% of products made from sustainable materials</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">Tree planting initiative: 50,000+ trees planted</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Social Impact</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">Fair wages for all manufacturing partners</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">Supporting 200+ local artisans worldwide</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">Annual donation of 5% profits to fashion education</span>
                        </li>
                        <li className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                          <span className="text-gray-600">Women-led business supporting female entrepreneurs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'milestones' && (
                <div className="animate-fadeIn">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Journey</h3>
                  <div className="relative">
                    {/* Timeline */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 hidden lg:block"></div>
                    
                    <div className="space-y-12">
                      {milestones.map((milestone, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                              <div className="text-sm font-semibold text-indigo-600 mb-2">{milestone.year}</div>
                              <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                              <p className="text-gray-600">{milestone.description}</p>
                            </div>
                          </div>
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold my-4 lg:my-0 lg:mx-4">
                            <i className="fas fa-star"></i>
                          </div>
                          <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                            {/* Empty space for alignment */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Passionate individuals dedicated to revolutionizing the fashion industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="group text-center">
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {Object.entries(member.social).map(([platform, link]) => (
                        <a 
                          key={platform}
                          href={link}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <i className={`fab fa-${platform} text-gray-700`}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability Commitment */}
      <div className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Sustainability Commitment
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Building a better future through responsible fashion
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-recycle text-green-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Circular Fashion</h3>
                      <p className="text-gray-600">
                        We've implemented a recycling program where customers can return old clothes 
                        for store credit, keeping textiles out of landfills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-tint text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Water Conservation</h3>
                      <p className="text-gray-600">
                        Our manufacturing partners use water-saving technologies that reduce 
                        water consumption by up to 90% compared to traditional methods.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-sun text-yellow-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Renewable Energy</h3>
                      <p className="text-gray-600">
                        100% of our warehouses and offices are powered by renewable energy 
                        sources, reducing our carbon footprint significantly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop"
                  alt="Sustainable Fashion"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Fashion Revolution
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Be part of the movement towards sustainable, ethical fashion. 
              Every purchase makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Shop Sustainable Collection
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <p>Questions? Call us at 1-800-FASHION or email hello@fashionhub.com</p>
            </div>
          </div>
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
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;