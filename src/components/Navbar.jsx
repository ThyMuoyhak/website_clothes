import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const categories = ['New', 'Men', 'Women', 'Collections', 'Sale'];
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-6'
    }`}>
      <div className={`container mx-auto px-6 transition-all duration-500 ${
        scrolled ? 'max-w-5xl' : 'max-w-7xl'
      }`}>
        <nav className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent border-transparent'
        }`}>
          
          {/* Menu Toggle (Mobile) */}
          <button className="lg:hidden group p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-slate-900 rounded transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-3/4 bg-slate-900 rounded transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-slate-900 rounded transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Luxe<span className="text-indigo-600">.</span>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex items-center space-x-10">
            {categories.map((cat) => (
              <li key={cat}>
                <a href={`/${cat.toLowerCase()}`} className="relative group text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                  {cat}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            <button 
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-full hover:bg-slate-100 transition-all text-slate-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </button>
            
            <a href="/cart" className="relative p-2.5 rounded-full hover:bg-slate-100 transition-all text-slate-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
              <span className="absolute top-2 right-2 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-600 text-[10px] text-white items-center justify-center">3</span>
              </span>
            </a>
            
            <a href="/login" className="hidden md:flex items-center px-5 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-200">
              Sign In
            </a>
          </div>
        </nav>
      </div>

      {/* Modern Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-md flex flex-col p-10 animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsSearchOpen(false)} className="absolute top-10 right-10 text-slate-400 hover:text-slate-900 transition-colors">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className="max-w-4xl mx-auto w-full mt-20">
                <input 
                    type="text" 
                    placeholder="Search for inspiration..." 
                    className="w-full text-5xl font-light border-b-2 border-slate-200 py-4 focus:outline-none focus:border-indigo-600 transition-all placeholder:text-slate-200"
                    autoFocus
                />
                <div className="mt-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Trending Searches</p>
                    <div className="flex gap-3 flex-wrap">
                        {['Summer Linens', 'Oversized Tees', 'Sustainability', 'Activewear'].map(tag => (
                            <span key={tag} className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer transition-all">{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;