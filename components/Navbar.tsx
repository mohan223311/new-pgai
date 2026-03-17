import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#features' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact Us', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    window.location.href = 'https://api.leadconnectorhq.com/widget/bookings/profitgrowthai';
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-6">
        <nav 
          className={`
            w-full max-w-6xl transition-all duration-300 ease-in-out
            rounded-full px-2 pl-6 py-2 flex items-center justify-between
            glass-nav border border-black/10 shadow-sm
            ${scrolled ? 'bg-white/90 shadow-md' : 'bg-white/50'}
          `}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <img src="/logo.png" alt="Profitgrowth AI Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-extrabold tracking-tight text-slate-heading font-sans group-hover:text-brand-primary transition-colors">Profitgrowth AI</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-body hover:text-brand-primary transition-colors font-sans"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={handleCtaClick}
              className="bg-brand-primary hover:bg-brand-dark text-white px-6 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 font-sans shadow-brand"
            >
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center pr-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-heading hover:text-brand-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-semibold text-slate-heading hover:text-brand-primary font-sans"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6">
              <button 
                onClick={handleCtaClick}
                className="w-full bg-brand-primary text-white px-5 py-4 rounded-full font-bold text-lg font-sans shadow-brand"
              >
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;