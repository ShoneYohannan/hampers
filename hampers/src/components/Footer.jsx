import React from 'react';
import { MapPin, Globe, ArrowUp, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hampersData';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Occasions', href: '#occasions' },
    { label: 'Bespoke Studio', href: '#bespoke' },
    { label: 'Kerala Heritage', href: '#kochi' },
    { label: 'Client Reviews', href: '#reviews' },
    { label: 'Atelier Gallery', href: '#gallery' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#0A0908] border-t border-[rgba(201,164,92,0.18)] pt-20 pb-12 relative text-left">
      <div className="site-container">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C9A45C]/60 flex items-center justify-center bg-[rgba(201,164,92,0.08)]">
                <span className="font-serif text-xl font-bold text-[#C9A45C]">H</span>
              </div>
              <div>
                <span className="font-serif text-xl uppercase tracking-[0.2em] font-semibold text-[#F7F1E7]">
                  Hampers Kochi
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C9A45C]">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#D8C7AD]/80 font-light leading-relaxed max-w-sm">
              Custom gift hampers thoughtfully curated in Kochi, Kerala. Crafting meaningful stories for birthdays, weddings, corporate celebrations, and milestone moments.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="btn-outline-gold !py-2.5 !px-5 !text-[11px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
                <span>Start Bespoke Curation</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-base text-[#F7F1E7] tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-xs uppercase tracking-wider text-[#D8C7AD]/80 hover:text-[#C9A45C] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Atelier Address */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base text-[#F7F1E7] tracking-wider mb-4">
              Atelier & Deliveries
            </h4>

            <div className="flex items-start gap-3 text-xs text-[#D8C7AD]/90 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#D8C7AD]/90">
              <Globe className="w-4 h-4 text-[#C9A45C] shrink-0" />
              <a
                href={`https://${BUSINESS_INFO.website}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#C9A45C] transition-colors"
              >
                {BUSINESS_INFO.website}
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-[#141210] border border-white/5 text-[11px] text-[#D8C7AD]/70">
              <p className="font-medium text-[#F7F1E7] mb-0.5">Delivery Coverage</p>
              <p>Hand-delivered across Kochi, Ernakulam, Kakkanad, Fort Kochi, and surrounding Kerala destinations.</p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C7AD]/50">
          <p>© 2026 {BUSINESS_INFO.name}. All rights reserved.</p>

          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Handcrafted in Kochi with</span>
            <Heart className="w-3 h-3 text-[#C9A45C] fill-current" />
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-[#D8C7AD] hover:text-[#C9A45C] transition-colors"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
