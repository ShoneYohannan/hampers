import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Star, MapPin, Heart, Briefcase, Building2 } from 'lucide-react';
import GiftBoxScene from './3d/GiftBoxScene';
import { BUSINESS_INFO } from '../data/hampersData';

export default function Hero({ onOpenEnquiry, onExploreCollections }) {
  const [activeMode, setActiveMode] = useState('personal'); // 'personal' | 'corporate'

  const scrollToCorporate = () => {
    const el = document.getElementById('corporate-atelier');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else onOpenEnquiry({ title: 'Corporate & Bulk Inquiry' });
  };

  return (
    <section
      id="hero"
      className="relative w-full flex items-center justify-center py-10 sm:py-14 lg:py-16 overflow-hidden bg-[#111111] min-h-[calc(100vh-80px)]"
    >
      {/* Cinematic Ambient Background Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(201,164,92,0.07)] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[rgba(74,24,36,0.1)] blur-[130px] pointer-events-none" />

      {/* Subtle Grid / Editorial Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,241,231,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,241,231,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="site-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">
        
        {/* Left Editorial Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col justify-center text-left"
        >
          {/* Dual-Track BoxUp Mode Switcher */}
          <div className="inline-flex p-1 rounded-full bg-[#1A1815] border border-[#C9A45C]/35 mb-6 w-fit shadow-md">
            <button
              onClick={() => setActiveMode('personal')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeMode === 'personal'
                  ? 'bg-[#C9A45C] text-[#111111] font-semibold shadow-sm'
                  : 'text-[#D8C7AD] hover:text-[#F7F1E7]'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Personal Atelier</span>
            </button>

            <button
              onClick={() => setActiveMode('corporate')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeMode === 'corporate'
                  ? 'bg-[#C9A45C] text-[#111111] font-semibold shadow-sm'
                  : 'text-[#D8C7AD] hover:text-[#F7F1E7]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Corporate & Bulk</span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeMode === 'personal' ? (
              <motion.div
                key="personal-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1px] w-8 bg-[#C9A45C]" />
                  <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
                    HAMPERS KOCHI &bull; BESPOKE ATELIER
                  </span>
                </div>

                {/* Large Headline */}
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#F7F1E7] leading-[1.08] mb-6">
                  EVERY GIFT <br />
                  <span className="italic font-normal text-gold-gradient">TELLS A STORY.</span>
                </h1>

                {/* Supporting Text */}
                <p className="font-sans text-[#D8C7AD] text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10">
                  Thoughtfully curated gift hampers for birthdays, weddings, anniversaries, and homecoming celebrations. Handcrafted with intention in Kochi, Kerala.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
                  <button
                    onClick={onExploreCollections}
                    className="btn-gold group"
                  >
                    <span>Explore Collections</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry()}
                    className="btn-outline-gold group"
                  >
                    <Sparkles className="w-4 h-4 text-[#C9A45C]" />
                    <span>Make Your Own Hamper</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="corporate-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-[1px] w-8 bg-[#C9A45C]" />
                  <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
                    B2B & HOSPITALITY &bull; KOCHI DELEGATIONS
                  </span>
                </div>

                {/* Large Headline */}
                <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#F7F1E7] leading-[1.08] mb-6">
                  ELEVATE EVERY <br />
                  <span className="italic font-normal text-gold-gradient">PARTNERSHIP.</span>
                </h1>

                {/* Supporting Text */}
                <p className="font-sans text-[#D8C7AD] text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10">
                  Executive welcome hampers, Kakkanad Infopark summit kits, branded logo ribbons, and hotel guest hospitality curations delivered punctually across Kochi.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
                  <button
                    onClick={scrollToCorporate}
                    className="btn-gold group"
                  >
                    <Building2 className="w-4 h-4" />
                    <span>Corporate Bulk Desk</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry({ title: 'Corporate Delegate Hamper' })}
                    className="btn-outline-gold group"
                  >
                    <Sparkles className="w-4 h-4 text-[#C9A45C]" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center text-[#DFBA73]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#F7F1E7] tracking-wider">
                  4.9 ★ Rating
                </span>
                <span className="text-[10px] text-[#D8C7AD]/70 uppercase tracking-widest">
                  18+ Google Reviews
                </span>
              </div>
            </div>

            <div className="h-6 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C9A45C]" />
              <span className="text-xs text-[#D8C7AD] font-medium tracking-wide">
                Delivery across Kochi & Kerala
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Interactive Hamper Experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full relative h-[440px] sm:h-[500px] lg:h-[560px] flex items-center justify-center"
        >
          {/* Subtle 3D Tag */}
          <div className="absolute top-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 bg-[#191715]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A45C]/30 text-[11px] text-[#D8C7AD] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C9A45C] animate-ping" />
            <span>Interactive 3D Atelier</span>
          </div>

          {/* 3D Scene */}
          <GiftBoxScene />

          {/* Bottom helper cue */}
          <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
            <p className="text-[11px] tracking-[0.25em] text-[#D8C7AD]/50 uppercase font-sans">
              Hover & Move Cursor to Inspect Handcrafted Details
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
