import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple spy to highlight current section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 100)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-midnight/80 backdrop-blur-md shadow-lg py-4 border-b border-white/5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter group cursor-pointer">
          <a href="#home" className="flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-400 group-hover:from-purple-300 group-hover:to-orange-300 transition-all">
              ALL INSIGHT
            </span>
            <span className="text-white/60 text-xs font-light tracking-widest hidden md:block">| 奥因塞特</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                activeSection === item.href.substring(1) ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-300 group-hover:w-full ${activeSection === item.href.substring(1) ? 'w-full' : ''}`}></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-midnight/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg text-gray-300 hover:text-white hover:pl-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;