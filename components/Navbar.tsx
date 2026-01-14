
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-500 ${
      scrolled ? 'py-4 glass-nav shadow-sm' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center transform group-hover:rotate-[15deg] transition duration-500">
            <span className="text-white font-black text-sm italic">V</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Velora</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-12">
          {['Shop', 'Features', 'Ethics', 'Support'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <button className="text-slate-900 hover:opacity-50 transition">
            <i className="fa-solid fa-magnifying-glass text-sm"></i>
          </button>
          <button className="relative group">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-slate-900 rounded-full"></div>
            <i className="fa-solid fa-cart-shopping text-sm text-slate-900 group-hover:scale-110 transition"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
