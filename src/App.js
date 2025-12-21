import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureProducts from './components/FeatureProducts';
import BannerDiscount from './components/BannerDiscount';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureProducts />
              <BannerDiscount />
              <Testimonial />
            </>
          } />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/products" element={
            <div className="py-16">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8">All Products</h1>
                <FeatureProducts />
              </div>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;