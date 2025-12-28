// About.jsx - Modern Redesign
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Founder & Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop',
      bio: 'Former luxury fashion designer with 15+ years experience. Passionate about sustainable luxury.',
      expertise: ['Sustainable Design', 'Luxury Fashion', 'Brand Strategy']
    },
    {
      id: 2,
      name: 'Michael Park',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop',
      bio: 'Award-winning designer focused on minimalist aesthetics and functional design.',
      expertise: ['Minimalist Design', 'Product Development', 'Material Innovation']
    },
    {
      id: 3,
      name: 'Emma Wilson',
      role: 'Sustainability Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop',
      bio: 'Environmental scientist dedicated to sustainable fashion practices and circular economy.',
      expertise: ['Circular Economy', 'Supply Chain', 'Environmental Impact']
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop',
      bio: 'Expert in sustainable logistics and ethical manufacturing with 10+ years experience.',
      expertise: ['Logistics', 'Ethical Manufacturing', 'Quality Control']
    }
  ];

  const milestones = [
    { year: '2018', title: 'Foundation', description: 'Established with focus on sustainable luxury' },
    { year: '2019', title: 'First Collection', description: 'Launched minimalist essentials line' },
    { year: '2020', title: 'Global Recognition', description: 'Featured in major fashion publications' },
    { year: '2021', title: 'Expansion', description: 'Opened first flagship store in London' },
    { year: '2022', title: 'Innovation', description: 'Introduced circular fashion initiative' },
    { year: '2023', title: 'Growth', description: 'Expanded to 50+ countries worldwide' }
  ];

  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'Attention to detail and premium materials define our approach.',
      icon: '🎯'
    },
    {
      title: 'Sustainable Design',
      description: 'Every piece designed with environmental impact in mind.',
      icon: '🌱'
    },
    {
      title: 'Minimalist Aesthetic',
      description: 'Clean lines and timeless designs for lasting appeal.',
      icon: '✨'
    },
    {
      title: 'Ethical Production',
      description: 'Fair wages and safe conditions for all partners.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement in materials and processes.',
      icon: '💡'
    },
    {
      title: 'Authenticity',
      description: 'Transparent about our practices and impact.',
      icon: '📖'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Community Members' },
    { number: '40+', label: 'Countries' },
    { number: '98%', label: 'Satisfaction' },
    { number: '24/7', label: 'Support' },
    { number: '100%', label: 'Sustainable' },
    { number: '5 Days', label: 'Delivery' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative border-b border-gray-200">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 mb-8">
              <div className="w-8 h-px bg-gray-900"></div>
              <span className="text-sm tracking-widest uppercase text-gray-500">About Us</span>
              <div className="w-8 h-px bg-gray-900"></div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
              Redefining
              <br />
              <span className="font-normal">Modern Fashion</span>
            </h1>
            
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
              A commitment to sustainable luxury, minimalist design, and exceptional craftsmanship. 
              Building a fashion future that respects both people and planet.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Explore Collections
              </Link>
              <button
                onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Tabs */}
      <div id="story" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex border-b border-gray-200">
                {[
                  { id: 'story', label: 'Story' },
                  { id: 'philosophy', label: 'Philosophy' },
                  { id: 'approach', label: 'Approach' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto">
              {activeTab === 'story' && (
                <div className="animate-fadeIn">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-light mb-6">Our Beginning</h2>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                          Founded in 2018 by Sarah Chen, AESTHETE COLLECTIVE emerged from a vision 
                          to bridge the gap between luxury fashion and sustainable practices.
                        </p>
                        <p>
                          What began as a curated collection of minimalist essentials has evolved 
                          into a global platform championing responsible luxury.
                        </p>
                        <p>
                          Each piece is thoughtfully designed, ethically produced, and crafted 
                          to last—challenging the fast fashion model.
                        </p>
                      </div>
                    </div>
                    <div className="order-first lg:order-last">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&auto=format&fit=crop"
                          alt="Our Story"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'philosophy' && (
                <div className="animate-fadeIn">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-last lg:order-first">
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop"
                          alt="Our Philosophy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-light mb-6">Design Philosophy</h2>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                          We believe in creating pieces that transcend seasons—timeless designs 
                          that become wardrobe staples rather than temporary trends.
                        </p>
                        <p>
                          Our approach combines minimalist aesthetics with premium materials, 
                          focusing on exceptional fit, comfort, and longevity.
                        </p>
                        <p>
                          Every design decision considers environmental impact, from material 
                          selection to production methods and packaging.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'approach' && (
                <div className="animate-fadeIn">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-light mb-6">Our Approach</h2>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>
                          We partner exclusively with certified ethical manufacturers who share 
                          our commitment to fair labor practices and environmental responsibility.
                        </p>
                        <p>
                          Each collection undergoes rigorous quality testing to ensure durability 
                          and comfort, with materials selected for both luxury and sustainability.
                        </p>
                        <p>
                          Our circular initiative allows customers to return worn pieces for 
                          recycling or refurbishment, reducing fashion waste.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop"
                          alt="Our Approach"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-4 h-px bg-gray-900"></div>
                <span className="text-sm tracking-widest uppercase text-gray-500">Values</span>
                <div className="w-4 h-px bg-gray-900"></div>
              </div>
              <h2 className="text-3xl font-light mb-6">Our Guiding Principles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-light mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-4 h-px bg-gray-900"></div>
                <span className="text-sm tracking-widest uppercase text-gray-500">Team</span>
                <div className="w-4 h-px bg-gray-900"></div>
              </div>
              <h2 className="text-3xl font-light mb-6">Leadership Team</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="aspect-square overflow-hidden rounded-lg mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-4 h-px bg-gray-900"></div>
                <span className="text-sm tracking-widest uppercase text-gray-500">Journey</span>
                <div className="w-4 h-px bg-gray-900"></div>
              </div>
              <h2 className="text-3xl font-light mb-6">Key Milestones</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                      <div className="p-6">
                        <div className="text-sm text-gray-500 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-light mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center my-4 lg:my-0">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      {/* Empty for alignment */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 mb-4">
                  <div className="w-4 h-px bg-gray-900"></div>
                  <span className="text-sm tracking-widest uppercase text-gray-500">Sustainability</span>
                  <div className="w-4 h-px bg-gray-900"></div>
                </div>
                
                <h2 className="text-3xl font-light mb-6">Our Commitment</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm">♻️</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-2">Circular Design</h3>
                      <p className="text-gray-600 text-sm">
                        Every product designed for longevity and eventual recycling or repurposing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm">🌍</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-2">Carbon Neutral</h3>
                      <p className="text-gray-600 text-sm">
                        Carbon offset program covering all manufacturing and shipping emissions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <span className="text-sm">💧</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-light mb-2">Water Conservation</h3>
                      <p className="text-gray-600 text-sm">
                        Water-saving production methods and natural dye processes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop"
                    alt="Sustainability"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">
              Join Our Movement
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Experience fashion that combines luxury with responsibility. 
              Each purchase supports our commitment to sustainable practices.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-6 py-3 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
              >
                Shop Collection
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors duration-300"
              >
                Get in Touch
              </Link>
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
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default About;