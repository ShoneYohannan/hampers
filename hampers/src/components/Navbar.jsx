import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hampersData';

export default function Navbar({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Bespoke Studio', href: '#bespoke' },
    { label: 'Corporate & Bulk', href: '#corporate-atelier' },
    { label: 'Occasions', href: '#occasions' },
    { label: 'Kochi Delivery', href: '#kochi' },
    { label: 'Reviews', href: '#reviews' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#111111]/90 backdrop-blur-xl border-b border-[rgba(201,164,92,0.18)] py-3.5 shadow-2xl'
            : 'bg-[#111111]/60 backdrop-blur-md py-5 border-b border-white/5'
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-9 h-9 rounded-full border border-[#C9A45C]/50 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-[rgba(201,164,92,0.08)]">
              <span className="font-serif text-lg font-bold text-[#C9A45C]">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] uppercase font-semibold text-[#F7F1E7] group-hover:text-[#C9A45C] transition-colors leading-tight">
                Hampers
              </span>
              <span className="font-sans text-[9px] uppercase tracking-[0.38em] text-[#D8C7AD]/80 font-medium">
                Kochi • Atelier
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs uppercase tracking-[0.18em] text-[#D8C7AD] hover:text-[#C9A45C] transition-colors duration-200 font-medium relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A45C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="btn-gold !py-2.5 !px-5 !text-[11px] flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#111111]" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F7F1E7] hover:text-[#C9A45C] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[68px] z-30 bg-[#141210]/95 backdrop-blur-2xl border-b border-[#C9A45C]/20 px-6 py-8 shadow-2xl md:hidden flex flex-col gap-5"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm uppercase tracking-[0.2em] text-[#F7F1E7] hover:text-[#C9A45C] py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-gold w-full text-center"
              >
                Start Hamper Curation
              </button>

              <p className="text-[11px] text-[#D8C7AD]/60 text-center tracking-wider pt-2">
                Curated in Kochi • Delivered with Care
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
