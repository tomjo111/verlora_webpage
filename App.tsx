
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { COLORS, SIZES, FEATURES } from './constants';
import { SizeOption, ColorOption } from './types';

const PRODUCT_IMAGE_URL = "https://image2url.com/r2/default/images/1768397139027-0e592bd0-5531-48d3-9c98-3a1ebfd0dd01.png";

const App: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<SizeOption>('M');
  const [selectedColor, setSelectedColor] = useState<ColorOption>(COLORS[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <div className="min-h-screen bg-velora-earth flex flex-col selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* Dynamic Background Accent */}
      <div 
        className="fixed inset-0 pointer-events-none transition-colors duration-1000 opacity-[0.03]" 
        style={{ backgroundColor: selectedColor.hex }}
      />

      {/* Hero Entrance */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Season 2025 Collection
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6 leading-[0.9]">
              VELORA <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">ONE</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed font-light">
              Where timeless design meets sustainable living. Protection for your head, respect for your playground.
            </p>
            <a href="#shop" className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all hover:translate-y-[-2px] hover:shadow-xl">
              <span>EXPLORE SHOP</span>
              <i className="fa-solid fa-arrow-down text-sm"></i>
            </a>
          </div>
          <div className="hidden lg:block relative">
            <img 
              src={PRODUCT_IMAGE_URL} 
              alt="Velora One Hero" 
              className="w-full h-auto animate-float drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Enhanced Image Gallery */}
          <div className="sticky top-28 space-y-6">
            <div className="aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 flex items-center justify-center border border-white p-12 relative group">
              <div 
                className="absolute inset-0 opacity-10 transition-colors duration-700"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <img
                src={PRODUCT_IMAGE_URL}
                alt="Velora One Ski Helmet"
                className="w-full h-full object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-1000"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 right-8 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition">
                    <i className="fa-solid fa-expand"></i>
                 </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className={`aspect-square bg-white rounded-2xl border-2 transition-all p-2 overflow-hidden ${i === 1 ? 'border-slate-900 shadow-md' : 'border-slate-100 hover:border-slate-300'}`}>
                  <img src={PRODUCT_IMAGE_URL} className="w-full h-full object-contain opacity-80" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Purchasing Experience */}
          <div className="lg:pl-8">
            <div className="mb-10">
              <div className="flex items-center space-x-2 mb-4">
                 <div className="flex text-amber-400 text-xs">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                 </div>
                 <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">(4.9/5 • 128 Reviews)</span>
              </div>
              <h2 className="text-5xl font-black text-slate-900 mb-2">Velora One</h2>
              <p className="text-xl text-slate-400 font-light mb-6">Unisex Mountain Protection</p>
              <div className="flex items-baseline space-x-4">
                <span className="text-5xl font-bold text-slate-900">€35</span>
                <span className="text-lg text-slate-400 line-through">€49</span>
              </div>
            </div>

            <div className="space-y-10 border-t border-slate-200 pt-10">
              {/* Color Selection */}
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                  Finishing: <span className="text-slate-900">{selectedColor.name}</span>
                </label>
                <div className="flex flex-wrap gap-4">
                  {COLORS.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`group relative p-1 rounded-full border-2 transition-all duration-300 ${
                        selectedColor.name === color.name ? 'border-slate-900' : 'border-transparent hover:border-slate-200'
                      }`}
                      title={color.name}
                    >
                      <div 
                        className="w-10 h-10 rounded-full shadow-inner"
                        style={{ backgroundColor: color.hex }}
                      />
                      {selectedColor.name === color.name && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-900 whitespace-nowrap opacity-100 transition-opacity">
                          SELECTED
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Select Size</label>
                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-900 border-b border-slate-900">Size Guide</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size as SizeOption)}
                      className={`py-4 rounded-2xl font-black transition-all ${
                        selectedSize === size
                          ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 scale-[1.02]'
                          : 'bg-white border border-slate-200 text-slate-900 hover:border-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Area */}
              <div className="pt-6">
                <div className="flex gap-4">
                  <div className="flex items-center bg-white border border-slate-200 rounded-2xl overflow-hidden px-4">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-12 text-slate-400 hover:text-slate-900">-</button>
                    <span className="w-12 text-center font-black">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-12 text-slate-400 hover:text-slate-900">+</button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    disabled={addedToCart}
                    className={`flex-1 py-4 rounded-2xl font-black tracking-widest transition-all duration-500 flex items-center justify-center space-x-3 ${
                      addedToCart
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-2xl active:scale-[0.98]'
                    }`}
                  >
                    <i className={`fa-solid ${addedToCart ? 'fa-check animate-bounce' : 'fa-bag-shopping'}`}></i>
                    <span>{addedToCart ? 'IN YOUR BAG' : 'ADD TO BAG'}</span>
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 py-8 border-y border-slate-100">
                 <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                       <i className="fa-solid fa-earth-americas"></i>
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400">Low Impact</p>
                       <p className="text-xs font-bold">Climate Neutral</p>
                    </div>
                 </div>
                 <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                       <i className="fa-solid fa-box-open"></i>
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase text-slate-400">Packaging</p>
                       <p className="text-xs font-bold">100% Recyclable</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div>
            <span className="text-slate-500 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[0.9]">CONSCIOUS <br/><span className="text-slate-600">PROTECTION</span></h2>
            <div className="space-y-8">
               {FEATURES.map((feat, i) => (
                 <div key={i} className="flex space-x-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition">
                       <i className={`fa-solid ${feat.icon} text-xl text-slate-400 group-hover:text-white transition`}></i>
                    </div>
                    <div>
                       <h3 className="text-lg font-bold mb-2">{feat.title}</h3>
                       <p className="text-slate-400 leading-relaxed text-sm max-w-sm">{feat.description}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-transparent z-10"></div>
             <img 
               src={PRODUCT_IMAGE_URL} 
               alt="Interior View" 
               className="w-full opacity-40 scale-125 translate-x-12"
             />
             <div className="absolute bottom-12 left-0 p-8 border border-white/10 rounded-3xl backdrop-blur-xl bg-white/5 z-20">
                <p className="text-sm font-light text-slate-300 mb-4 max-w-xs italic">
                  "The Velora One isn't just a helmet, it's a testament to the fact that we don't have to sacrifice style for sustainability."
                </p>
                <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 rounded-full bg-slate-700"></div>
                   <div>
                      <p className="text-xs font-bold">Marcus Vane</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Lead Designer</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-32 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 mb-16 text-center tracking-tighter uppercase">Technical Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 px-4 border-l-2 border-slate-900">Composition</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-baseline group">
                  <span className="text-slate-500 text-sm group-hover:text-slate-900 transition font-medium uppercase tracking-widest">Weight</span>
                  <div className="flex-1 border-b border-dotted border-slate-200 mx-4"></div>
                  <span className="font-black text-slate-900">0.5 kg</span>
                </div>
                <div className="flex justify-between items-baseline group">
                  <span className="text-slate-500 text-sm group-hover:text-slate-900 transition font-medium uppercase tracking-widest">Outer Shell</span>
                  <div className="flex-1 border-b border-dotted border-slate-200 mx-4"></div>
                  <span className="font-black text-slate-900">High-Strength Polymer</span>
                </div>
                <div className="flex justify-between items-baseline group">
                  <span className="text-slate-500 text-sm group-hover:text-slate-900 transition font-medium uppercase tracking-widest">Liner</span>
                  <div className="flex-1 border-b border-dotted border-slate-200 mx-4"></div>
                  <span className="font-black text-slate-900">Recycled EPS</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 px-4 border-l-2 border-slate-900">Maintenance</h4>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-2xl flex space-x-4">
                   <i className="fa-solid fa-water text-slate-400 mt-1"></i>
                   <p className="text-xs text-slate-600 leading-relaxed font-medium">Clean the shell with a damp cloth and mild soap; avoid harsh chemicals that degrade the finish.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl flex space-x-4">
                   <i className="fa-solid fa-soap text-slate-400 mt-1"></i>
                   <p className="text-xs text-slate-600 leading-relaxed font-medium">Liner pads should be hand washed and air dried fully to preserve the textile integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Packing Callout */}
      <section className="py-24 px-6 bg-velora-earth">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] p-12 lg:p-24 shadow-sm border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
              <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Zero Waste Packaging</h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 font-light">
                 Your Velora One arrives in 100% biodegradable kraft paper. No plastic wrap, no non-recyclable coatings. Just protection that turns into fertilizer.
              </p>
              <ul className="space-y-4">
                 <li className="flex items-center space-x-3 text-slate-900 font-bold">
                    <i className="fa-solid fa-circle-check text-green-500"></i>
                    <span>Soy-based inks only</span>
                 </li>
                 <li className="flex items-center space-x-3 text-slate-900 font-bold">
                    <i className="fa-solid fa-circle-check text-green-500"></i>
                    <span>No plastic tapes or adhesives</span>
                 </li>
              </ul>
           </div>
           <div className="relative flex items-center justify-center p-8 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 aspect-video">
              <div className="text-center">
                 <i className="fa-solid fa-box text-6xl text-slate-200 mb-4"></i>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Environmentally Responsible Delivery</p>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24">
            <div className="col-span-1">
              <h3 className="text-2xl font-black mb-8 tracking-tighter italic">VELORA ONE</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                Designing for the future of mountain sports. We believe safety shouldn't cost the Earth.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">Collections</span>
               <a href="#" className="text-sm font-bold text-slate-900 hover:opacity-50 transition">The One Helmet</a>
               <a href="#" className="text-sm font-bold text-slate-900 hover:opacity-50 transition">Alpine Goggles</a>
               <a href="#" className="text-sm font-bold text-slate-900 hover:opacity-50 transition">Base Layers</a>
            </div>
            <div>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">Updates</span>
               <form className="flex">
                  <input type="text" placeholder="Your Email" className="flex-1 border-b border-slate-200 py-3 text-sm focus:outline-none focus:border-slate-900 transition" />
                  <button className="px-6 font-black text-xs uppercase tracking-widest hover:translate-x-1 transition">Join</button>
               </form>
            </div>
          </div>
          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase">
             <p>© 2024 VELORA SPORTS GMBH</p>
             <div className="flex space-x-8 mt-6 md:mt-0">
                <a href="#">Privacy</a>
                <a href="#">Ethics</a>
                <a href="#">Support</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
