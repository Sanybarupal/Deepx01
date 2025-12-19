
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Team', href: '#team' },
  ];

  const scrollToIndex = (id: string) => {
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleStartProject = () => {
    scrollToIndex('contact');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? 'mt-4 mx-4 md:mx-auto md:max-w-4xl' : ''
      }`}
    >
      <div 
        className={`flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-2xl ${
          scrolled 
            ? 'glass-card shadow-lg border border-white/50 backdrop-blur-xl' 
            : 'bg-transparent'
        }`}
      >
        <button onClick={scrollToTop} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg glow-blue group-hover:scale-110 transition-transform">
            D
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">DeepX<span className="text-blue-600">Design</span></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToIndex(link.href)}
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </button>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartProject}
            className="flex items-center gap-3 pl-2 pr-6 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-200 transition-all hover:bg-blue-700"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-purple-600">
              <ArrowUpRight size={16} strokeWidth={3} />
            </div>
            <span>Start Project</span>
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 p-8 glass-card rounded-[32px] shadow-2xl z-40 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => scrollToIndex(link.href)}
                  className="text-2xl font-black text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={handleStartProject}
                className="flex items-center justify-center gap-4 pl-2 pr-8 py-3 bg-blue-600 text-white font-black rounded-full shadow-lg"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </div>
                <span>Start Project</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
