// ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Sample products data matching the navbar categories
const allProducts = [
  // Men's Products
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    category: "Men",
    subcategory: "Casual T-Shirts",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&brightness=0.8",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop&brightness=1.2",
    ],
    tags: ["Bestseller", "Organic"],
    colors: [
      { name: "Navy Blue", value: "bg-blue-900", hex: "#1e3a8a" },
      { name: "Black", value: "bg-black", hex: "#000000" },
      { name: "White", value: "bg-white border", hex: "#ffffff" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    description: "Experience ultimate comfort with our Premium Cotton T-Shirt. Made from 100% organic cotton, this shirt offers exceptional breathability and softness.",
    features: [
      "100% Organic Cotton",
      "Breathable & Soft",
      "Machine Washable",
      "Tag-free Design"
    ],
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    category: "Men",
    subcategory: "Jackets & Hoodies",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Limited", "Premium"],
    colors: [
      { name: "Dark Blue", value: "bg-blue-900", hex: "#1e3a8a" },
      { name: "Black", value: "bg-gray-800", hex: "#1f2937" },
      { name: "Indigo", value: "bg-indigo-700", hex: "#4338ca" }
    ],
    sizes: ["M", "L", "XL"],
    inStock: true,
    description: "Timeless denim jacket with a modern fit. Perfect for layering and adding style to any outfit.",
    features: [
      "100% Cotton Denim",
      "Metal Buttons",
      "Multiple Pockets",
      "Classic Fit"
    ],
  },
  {
    id: 3,
    name: "Formal Business Shirt",
    category: "Men",
    subcategory: "Formal Shirts",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.4,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["New", "Professional"],
    colors: [
      { name: "White", value: "bg-white border", hex: "#ffffff" },
      { name: "Blue", value: "bg-blue-200", hex: "#93c5fd" },
      { name: "Gray", value: "bg-gray-300", hex: "#d1d5db" }
    ],
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Professional business shirt for formal occasions.",
    features: [
      "Non-Iron Fabric",
      "Classic Fit",
      "Button-Down Collar",
      "Easy Care"
    ],
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    category: "Men",
    subcategory: "Jeans & Pants",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 204,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Popular", "Sale"],
    colors: [
      { name: "Dark Blue", value: "bg-blue-900", hex: "#1e3a8a" },
      { name: "Black", value: "bg-black", hex: "#000000" },
      { name: "Light Blue", value: "bg-blue-300", hex: "#93c5fd" }
    ],
    sizes: ["28", "30", "32", "34", "36"],
    inStock: true,
    description: "Comfortable slim fit jeans for everyday wear.",
    features: [
      "Stretch Denim",
      "Slim Fit",
      "Five Pockets",
      "Machine Washable"
    ],
  },

  // Women's Products
  {
    id: 5,
    name: "Designer Summer Dress",
    category: "Women",
    subcategory: "Dresses",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2080&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["New", "-30%"],
    colors: [
      { name: "Rose Pink", value: "bg-pink-500", hex: "#ec4899" },
      { name: "Sun Yellow", value: "bg-yellow-400", hex: "#fbbf24" },
      { name: "Mint Green", value: "bg-green-300", hex: "#86efac" }
    ],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    description: "Elegant summer dress with beautiful floral patterns.",
    features: [
      "Lightweight Fabric",
      "Floral Pattern",
      "Adjustable Straps",
      "Machine Washable"
    ],
  },
  {
    id: 6,
    name: "Activewear Set",
    category: "Women",
    subcategory: "Activewear",
    price: 64.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1591369822094-ffb5eaa5b566?q=80&w=2080&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Popular", "Sale"],
    colors: [
      { name: "Purple", value: "bg-purple-600", hex: "#7c3aed" },
      { name: "Black", value: "bg-black", hex: "#000000" },
      { name: "Gray", value: "bg-gray-200", hex: "#e5e7eb" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    description: "Complete activewear set for workout sessions.",
    features: [
      "Moisture Wicking",
      "4-Way Stretch",
      "Breathable",
      "Quick Dry"
    ],
  },
  {
    id: 7,
    name: "Silk Blouse",
    category: "Women",
    subcategory: "Tops & Blouses",
    price: 54.99,
    originalPrice: 79.99,
    rating: 4.7,
    reviews: 143,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Luxury", "New"],
    colors: [
      { name: "White", value: "bg-white border", hex: "#ffffff" },
      { name: "Black", value: "bg-black", hex: "#000000" },
      { name: "Red", value: "bg-red-500", hex: "#ef4444" }
    ],
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    description: "Elegant silk blouse for formal occasions.",
    features: [
      "100% Silk",
      "French Cuffs",
      "Classic Design",
      "Dry Clean Only"
    ],
  },
  {
    id: 8,
    name: "Midi Skirt",
    category: "Women",
    subcategory: "Skirts",
    price: 44.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Trending", "Summer"],
    colors: [
      { name: "Navy", value: "bg-blue-900", hex: "#1e3a8a" },
      { name: "Beige", value: "bg-yellow-100", hex: "#fef3c7" },
      { name: "Green", value: "bg-green-400", hex: "#4ade80" }
    ],
    sizes: ["S", "M", "L"],
    inStock: true,
    description: "Elegant midi skirt for any occasion.",
    features: [
      "A-line Silhouette",
      "Side Zipper",
      "Wrinkle Resistant",
      "Machine Washable"
    ],
  },

  // Kids Products
  {
    id: 9,
    name: "Kids Casual Sneakers",
    category: "Kids",
    subcategory: "Footwear",
    price: 44.99,
    originalPrice: 59.99,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2080&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Bestseller", "-25%"],
    colors: [
      { name: "Red", value: "bg-red-500", hex: "#ef4444" },
      { name: "Blue", value: "bg-blue-400", hex: "#60a5fa" },
      { name: "Green", value: "bg-green-500", hex: "#22c55e" }
    ],
    sizes: ["26", "28", "30", "32"],
    inStock: true,
    description: "Comfortable sneakers for kids with excellent grip.",
    features: [
      "Rubber Sole",
      "Breathable Mesh",
      "Easy Velcro Closure",
      "Lightweight"
    ],
  },
  {
    id: 10,
    name: "Cartoon T-Shirt",
    category: "Kids",
    subcategory: "Boys Clothing",
    price: 19.99,
    originalPrice: 29.99,
    rating: 4.7,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Cartoon", "Fun"],
    colors: [
      { name: "Blue", value: "bg-blue-500", hex: "#3b82f6" },
      { name: "Red", value: "bg-red-500", hex: "#ef4444" },
      { name: "Green", value: "bg-green-500", hex: "#22c55e" }
    ],
    sizes: ["4-5", "6-7", "8-9", "10-11"],
    inStock: true,
    description: "Fun cartoon t-shirt for boys.",
    features: [
      "100% Cotton",
      "Cartoon Print",
      "Machine Washable",
      "Kid Friendly"
    ],
  },
  {
    id: 11,
    name: "Princess Dress",
    category: "Kids",
    subcategory: "Girls Clothing",
    price: 39.99,
    originalPrice: 49.99,
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1519686997393-7bdb5d6c9c3f?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519686997393-7bdb5d6c9c3f?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519686997393-7bdb5d6c9c3f?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1519686997393-7bdb5d6c9c3f?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Fairy", "Magic"],
    colors: [
      { name: "Pink", value: "bg-pink-300", hex: "#f9a8d4" },
      { name: "Purple", value: "bg-purple-300", hex: "#d8b4fe" },
      { name: "Blue", value: "bg-blue-300", hex: "#93c5fd" }
    ],
    sizes: ["4-5", "6-7", "8-9", "10-11"],
    inStock: true,
    description: "Beautiful princess dress for girls.",
    features: [
      "Tutu Style",
      "Sparkle Details",
      "Comfortable Fit",
      "Machine Washable"
    ],
  },
  {
    id: 12,
    name: "Baby Onesie Set",
    category: "Kids",
    subcategory: "Baby Wear",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1589820308425-78d88cb13c4c?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Soft", "Comfort"],
    colors: [
      { name: "White", value: "bg-white border", hex: "#ffffff" },
      { name: "Yellow", value: "bg-yellow-200", hex: "#fde68a" },
      { name: "Blue", value: "bg-blue-200", hex: "#bfdbfe" }
    ],
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
    inStock: true,
    description: "Soft baby onesie set for newborns.",
    features: [
      "100% Organic Cotton",
      "Snap Buttons",
      "Tag-free",
      "Machine Washable"
    ],
  },

  // Accessories
  {
    id: 13,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    subcategory: "Bags",
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2070&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Luxury", "New"],
    colors: [
      { name: "Brown", value: "bg-brown-800", hex: "#78350f" },
      { name: "Black", value: "bg-black", hex: "#000000" },
      { name: "Tan", value: "bg-tan", hex: "#d2b48c" }
    ],
    sizes: ["One Size"],
    inStock: true,
    description: "Genuine leather crossbody bag with multiple compartments.",
    features: [
      "Genuine Leather",
      "Adjustable Strap",
      "Multiple Pockets",
      "Magnetic Closure"
    ],
  },
  {
    id: 14,
    name: "Classic Watch",
    category: "Accessories",
    subcategory: "Watches",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Premium", "Classic"],
    colors: [
      { name: "Silver", value: "bg-gray-300", hex: "#d1d5db" },
      { name: "Gold", value: "bg-yellow-500", hex: "#eab308" },
      { name: "Rose Gold", value: "bg-pink-300", hex: "#f9a8d4" }
    ],
    sizes: ["One Size"],
    inStock: true,
    description: "Classic wristwatch with leather strap.",
    features: [
      "Stainless Steel Case",
      "Genuine Leather Strap",
      "Water Resistant",
      "Quartz Movement"
    ],
  },
  {
    id: 15,
    name: "Aviator Sunglasses",
    category: "Accessories",
    subcategory: "Sunglasses",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Trending", "UV Protection"],
    colors: [
      { name: "Gold", value: "bg-yellow-500", hex: "#eab308" },
      { name: "Silver", value: "bg-gray-300", hex: "#d1d5db" },
      { name: "Black", value: "bg-black", hex: "#000000" }
    ],
    sizes: ["One Size"],
    inStock: true,
    description: "Classic aviator sunglasses with UV protection.",
    features: [
      "UV400 Protection",
      "Polarized Lenses",
      "Metal Frame",
      "Includes Case"
    ],
  },
  {
    id: 16,
    name: "Silk Scarf Set",
    category: "Accessories",
    subcategory: "Jewelry",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?w=800&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop&brightness=0.9",
      "https://images.unsplash.com/photo-1585059711334-4e8bcc8a4f65?q=80&w=2070&auto=format&fit=crop&brightness=1.1",
    ],
    tags: ["Gift", "Elegant"],
    colors: [
      { name: "Blush Pink", value: "bg-pink-200", hex: "#fbcfe8" },
      { name: "Sky Blue", value: "bg-blue-100", hex: "#dbeafe" },
      { name: "Cream", value: "bg-yellow-100", hex: "#fef3c7" }
    ],
    sizes: ["One Size"],
    inStock: true,
    description: "Set of three silk scarves in different patterns.",
    features: [
      "100% Silk",
      "Multiple Patterns",
      "Hand Rolled Edges",
      "Dry Clean Only"
    ],
  },
];

// Subcategories mapping
const subcategoryMapping = {
  'casual-tshirts': 'Casual T-Shirts',
  'formal-shirts': 'Formal Shirts',
  'jeans-pants': 'Jeans & Pants',
  'jackets-hoodies': 'Jackets & Hoodies',
  'activewear': 'Activewear',
  'footwear': 'Footwear',
  'dresses': 'Dresses',
  'tops-blouses': 'Tops & Blouses',
  'skirts': 'Skirts',
  'handbags': 'Handbags',
  'jewelry': 'Jewelry',
  'boys-clothing': 'Boys Clothing',
  'girls-clothing': 'Girls Clothing',
  'baby-wear': 'Baby Wear',
  'school-uniforms': 'School Uniforms',
  'watches': 'Watches',
  'sunglasses': 'Sunglasses',
  'belts': 'Belts',
  'hats-caps': 'Hats & Caps',
  'bags': 'Bags',
};

const ProductsPage = () => {
  const { category, subcategory } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q');
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const productsPerPage = 12;

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [category, subcategory, activeFilter, sortBy, searchQuery, priceRange, selectedBrands, minRating]);

  // Filter products based on URL parameters and filters
  const filteredProducts = allProducts.filter(product => {
    // If category is specified in URL
    if (category && category !== 'all') {
      if (product.category.toLowerCase() !== category.toLowerCase()) {
        return false;
      }
    }
    
    // If subcategory is specified in URL
    if (subcategory && subcategoryMapping[subcategory]) {
      const mappedSubcategory = subcategoryMapping[subcategory];
      if (product.subcategory !== mappedSubcategory) {
        return false;
      }
    }
    
    // Search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(query);
      const matchesCategory = product.category.toLowerCase().includes(query);
      const matchesSubcategory = product.subcategory.toLowerCase().includes(query);
      const matchesDescription = product.description.toLowerCase().includes(query);
      
      if (!(matchesName || matchesCategory || matchesSubcategory || matchesDescription)) {
        return false;
      }
    }
    
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }
    
    // Rating filter
    if (product.rating < minRating) {
      return false;
    }
    
    // Active filters
    if (activeFilter === 'sale') {
      return product.originalPrice > product.price;
    }
    if (activeFilter === 'new') {
      return product.tags.some(tag => tag === 'New');
    }
    if (activeFilter === 'bestseller') {
      return product.tags.some(tag => tag === 'Bestseller');
    }
    
    // Brands filter (if implemented)
    if (selectedBrands.length > 0) {
      // This is a simplified brand filter - you would need to add brand property to products
      return true;
    }
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch(sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'rating': return b.rating - a.rating;
      case 'newest': return b.id - a.id;
      case 'popular': return b.reviews - a.reviews;
      default: return a.id - b.id;
    }
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  // Get category title
  const getCategoryTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    if (subcategory && subcategoryMapping[subcategory]) {
      return subcategoryMapping[subcategory];
    }
    if (category && category !== 'all') {
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      return `${formattedCategory}'s Collection`;
    }
    if (activeFilter === 'sale') {
      return 'Sale Products';
    }
    if (activeFilter === 'new') {
      return 'New Arrivals';
    }
    if (activeFilter === 'bestseller') {
      return 'Best Sellers';
    }
    return 'All Products';
  };

  // Get category description
  const getCategoryDescription = () => {
    if (searchQuery) {
      return `Found ${sortedProducts.length} products matching "${searchQuery}"`;
    }
    if (subcategory && subcategoryMapping[subcategory]) {
      return `Browse our collection of ${subcategoryMapping[subcategory].toLowerCase()}. Find the perfect items for your style.`;
    }
    if (category && category !== 'all') {
      return `Explore our ${category.toLowerCase()} collection featuring the latest trends and timeless classics.`;
    }
    if (activeFilter === 'sale') {
      return 'Discover amazing deals and discounts on our premium products.';
    }
    if (activeFilter === 'new') {
      return 'Check out our latest arrivals and stay ahead of fashion trends.';
    }
    if (activeFilter === 'bestseller') {
      return 'Our most popular products loved by customers worldwide.';
    }
    return 'Discover our complete collection of premium products across all categories.';
  };

  const filters = [
    { key: 'all', label: 'All Products', icon: 'fas fa-th' },
    { key: 'sale', label: 'On Sale', icon: 'fas fa-percentage' },
    { key: 'new', label: 'New Arrivals', icon: 'fas fa-star' },
    { key: 'bestseller', label: 'Best Sellers', icon: 'fas fa-crown' },
  ];

  const categories = [
    { name: 'All', path: '/products', count: allProducts.length },
    { name: 'Men', path: '/products/category/men', count: allProducts.filter(p => p.category === 'Men').length },
    { name: 'Women', path: '/products/category/women', count: allProducts.filter(p => p.category === 'Women').length },
    { name: 'Kids', path: '/products/category/kids', count: allProducts.filter(p => p.category === 'Kids').length },
    { name: 'Accessories', path: '/products/category/accessories', count: allProducts.filter(p => p.category === 'Accessories').length },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={`fas fa-star text-sm ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    };
    
    // Add to cart logic here - in real app, you would use context or state management
    console.log("Added to cart:", cartItem);
    
    // Save to localStorage for demo
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    currentCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    // Show success message
    const event = new CustomEvent('cartUpdate', { detail: cartItem });
    window.dispatchEvent(event);
    
    // Show temporary notification (you can replace with a toast component)
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-slideIn';
    notification.innerHTML = `
      <div class="flex items-center">
        <i class="fas fa-check-circle mr-2"></i>
        <span>${product.name} added to cart!</span>
      </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  };

  const handleQuickView = (product, e) => {
    e.stopPropagation();
    e.preventDefault();
    // You can implement a quick view modal here
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{getCategoryTitle()}</h1>
            <p className="text-lg text-white/90 mb-6">{getCategoryDescription()}</p>
            <div className="text-sm text-white/80">
              <span className="font-semibold">{sortedProducts.length}</span> products found
              {category && category !== 'all' && (
                <span> in {category.charAt(0).toUpperCase() + category.slice(1)}</span>
              )}
              {subcategory && (
                <span> in {subcategoryMapping[subcategory]}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                        (!category && cat.name === 'All') || 
                        (category && cat.name.toLowerCase() === category)
                          ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{cat.name}</span>
                        <span className="text-sm text-gray-500">
                          {cat.count}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">${priceRange[0]}</span>
                    <span className="text-gray-600">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>$0</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Customer Rating</h3>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0, 0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${
                        minRating === rating
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center">
                        {rating > 0 ? (
                          <>
                            {renderStars(rating)}
                            <span className="ml-2 text-gray-700">& above</span>
                          </>
                        ) : (
                          <span className="text-gray-700">All Ratings</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">
                        {rating > 0 
                          ? allProducts.filter(p => p.rating >= rating).length
                          : allProducts.length
                        }
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter - Placeholder */}
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Popular Brands</h3>
                <div className="space-y-2">
                  {['Nike', 'Adidas', 'Levi\'s', 'Zara', 'H&M', 'Gucci'].map((brand) => (
                    <label key={brand} className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-gray-50">
                      <input 
                        type="checkbox" 
                        className="rounded text-indigo-600 focus:ring-indigo-500" 
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands([...selectedBrands, brand]);
                          } else {
                            setSelectedBrands(selectedBrands.filter(b => b !== brand));
                          }
                        }}
                      />
                      <span className="text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters Button */}
              {(priceRange[0] > 0 || priceRange[1] < 500 || minRating > 0 || selectedBrands.length > 0) && (
                <button
                  onClick={() => {
                    setPriceRange([0, 500]);
                    setMinRating(0);
                    setSelectedBrands([]);
                  }}
                  className="w-full mt-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Filters and Sorting Bar */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2">
                  {filters.map((filter) => (
                    <button
                      key={filter.key}
                      onClick={() => setActiveFilter(filter.key)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                        activeFilter === filter.key
                          ? 'bg-indigo-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <i className={filter.icon}></i>
                      <span>{filter.label}</span>
                    </button>
                  ))}
                </div>

                {/* Results Count and Sorting */}
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">
                    {sortedProducts.length} products
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-600 font-medium">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="popular">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {currentProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 block"
                    >
                      {/* Product Image */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        {/* Tags */}
                        <div className="absolute top-3 left-3 flex flex-col gap-2">
                          {product.tags.map((tag, index) => (
                            <span
                              key={index}
                              className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                                tag === 'Bestseller' ? 'bg-orange-500' :
                                tag.includes('%') ? 'bg-green-500' :
                                tag === 'New' ? 'bg-blue-500' :
                                tag === 'Limited' ? 'bg-purple-500' :
                                'bg-gray-800'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center gap-2">
                          <button
                            onClick={(e) => handleAddToCart(product, e)}
                            disabled={!product.inStock}
                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors ${
                              product.inStock
                                ? 'bg-white hover:bg-gray-100'
                                : 'bg-gray-200 cursor-not-allowed'
                            }`}
                            title="Quick Add to Cart"
                          >
                            <i className={`fas fa-shopping-cart ${product.inStock ? 'text-gray-700' : 'text-gray-400'}`}></i>
                          </button>

                          <button
                            onClick={(e) => handleQuickView(product, e)}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                            title="Quick View"
                          >
                            <i className="fas fa-eye text-gray-700"></i>
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              // Add to wishlist logic
                              const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                              if (!wishlist.includes(product.id)) {
                                wishlist.push(product.id);
                                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                                alert(`${product.name} added to wishlist!`);
                              }
                            }}
                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                            title="Add to Wishlist"
                          >
                            <i className="far fa-heart text-gray-700"></i>
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="p-5">
                        <div className="mb-2">
                          <span className="text-sm text-gray-500">{product.category} • {product.subcategory}</span>
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {product.name}
                          </h3>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center mb-3">
                          <div className="flex">
                            {renderStars(product.rating)}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>

                        {/* Price */}
                        <div className="flex items-center mb-4">
                          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                          {product.originalPrice > product.price && (
                            <>
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ${product.originalPrice.toFixed(2)}
                              </span>
                              <span className="ml-2 text-sm font-bold text-green-600">
                                Save ${(product.originalPrice - product.price).toFixed(2)}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Colors Preview */}
                        {product.colors && product.colors.length > 0 && (
                          <div className="flex items-center mb-3">
                            <span className="text-sm text-gray-600 mr-2">Colors:</span>
                            <div className="flex gap-2">
                              {product.colors.slice(0, 3).map((color, index) => (
                                <div
                                  key={index}
                                  className={`w-5 h-5 rounded-full ${color.value} ${color.value.includes('border') ? 'border border-gray-300' : ''}`}
                                  title={color.name}
                                />
                              ))}
                              {product.colors.length > 3 && (
                                <span className="text-xs text-gray-500">
                                  +{product.colors.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Add to Cart Button */}
                        <button
                          onClick={(e) => handleAddToCart(product, e)}
                          disabled={!product.inStock}
                          className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                            product.inStock
                              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {product.inStock ? (
                            <>
                              <i className="fas fa-shopping-cart mr-2"></i>
                              Add to Cart
                            </>
                          ) : (
                            'Out of Stock'
                          )}
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center mt-12">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      
                      {/* First page */}
                      <button
                        onClick={() => setCurrentPage(1)}
                        className={`w-10 h-10 rounded-lg font-medium ${
                          currentPage === 1
                            ? 'bg-indigo-600 text-white'
                            : 'border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        1
                      </button>
                      
                      {/* Ellipsis if needed */}
                      {currentPage > 3 && (
                        <span className="px-2">...</span>
                      )}
                      
                      {/* Middle pages */}
                      {[...Array(totalPages)].map((_, i) => {
                        const pageNum = i + 1;
                        if (pageNum > 1 && pageNum < totalPages && Math.abs(pageNum - currentPage) <= 1) {
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-10 h-10 rounded-lg font-medium ${
                                currentPage === pageNum
                                  ? 'bg-indigo-600 text-white'
                                  : 'border border-gray-300 hover:bg-gray-50'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        }
                        return null;
                      })}
                      
                      {/* Ellipsis if needed */}
                      {currentPage < totalPages - 2 && totalPages > 5 && (
                        <span className="px-2">...</span>
                      )}
                      
                      {/* Last page */}
                      {totalPages > 1 && (
                        <button
                          onClick={() => setCurrentPage(totalPages)}
                          className={`w-10 h-10 rounded-lg font-medium ${
                            currentPage === totalPages
                              ? 'bg-indigo-600 text-white'
                              : 'border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {totalPages}
                        </button>
                      )}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-search text-3xl text-gray-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Products Found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching your criteria.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setActiveFilter('all');
                      setPriceRange([0, 500]);
                      setMinRating(0);
                      setSelectedBrands([]);
                      if (category || subcategory || searchQuery) {
                        navigate('/products');
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                  <Link
                    to="/products"
                    className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-all duration-300"
                  >
                    Browse All Products
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        /* Custom scrollbar for products grid */
        .grid::-webkit-scrollbar {
          width: 8px;
        }
        
        .grid::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .grid::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 4px;
        }
        
        .grid::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;