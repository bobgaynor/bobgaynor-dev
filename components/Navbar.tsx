
import React, { useState, useEffect, useRef } from 'react';
import { UI_CONFIG } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > UI_CONFIG.NAVBAR_SCROLL_THRESHOLD);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#focus' },
    { name: 'Featured', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors">
          bobgaynor<span className="text-primary">.dev</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm font-medium text-slate-300 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button Placeholder - Simple Implementation for brevity */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none focus:ring-2 focus:ring-primary rounded"
          aria-label="Open navigation menu"
          onClick={() => {/* Mobile menu functionality to be implemented */}}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;