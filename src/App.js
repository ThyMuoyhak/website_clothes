// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureProducts from './components/FeatureProducts';
import BannerDiscount from './components/BannerDiscount';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import CompleteNavbar from './components/CompleteNavbar';
import ProductsPage from './pages/ProductsPage';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <CompleteNavbar/>
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
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/category/:category" element={<ProductsPage />} />
          {/* Add this route for subcategories */}
          <Route path="/products/category/:category/:subcategory" element={<ProductsPage />} />
          <Route path="/all-products" element={<ProductsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;