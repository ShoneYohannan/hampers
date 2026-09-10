import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Gift } from 'lucide-react';

export default function FinalCTA({ onStartCuration, onExploreCollections }) {
  return (
    <section className="relative py-32 lg:py-44 bg-[#0E0C0B] overflow-hidden text-center">
      {/* Cinematic Golden Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,164,92,0.12)_0%,rgba(74,24,36,0.08)_50%,transparent_75%)] blur-[120px] pointer-events-none" />

      {/* Decorative Outer Framing */}
      <div className="absolute inset-x-8 top-8 bottom-8 border border-[#C9A45C]/15 rounded-3xl pointer-events-none hidden md:block" />

      <div className="site-container-narrow relative z-10">
        
        {/* Monogram / Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-16 h-16 rounded-full border border-[#C9A45C]/50 bg-[#171513] mx-auto flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(201,164,92,0.2)]"
        >
          <Gift className="w-7 h-7 text-[#C9A45C]" />
        </motion.div>

        {/* Serif Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F7F1E7] tracking-tight leading-[1.08] mb-6"
        >
          MAKE THE NEXT <br />
          <span className="italic font-normal text-gold-gradient">
            GIFT UNFORGETTABLE.
          </span>
        </motion.h2>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-sans text-base sm:text-xl text-[#D8C7AD] font-light max-w-xl mx-auto leading-relaxed mb-12"
        >
          Because the best gifts aren't simply opened. <br />
          <span className="text-[#F7F1E7] font-medium">They're remembered.</span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onStartCuration}
            className="btn-gold !py-4 !px-8 !text-xs tracking-[0.2em] group w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4 text-[#111111]" />
            <span>Start Your Curation</span>
          </button>

          <button
            onClick={onExploreCollections}
            className="btn-outline-gold !py-4 !px-8 !text-xs tracking-[0.2em] group w-full sm:w-auto"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Delivery note */}
        <p className="text-[11px] uppercase tracking-[0.3em] text-[#D8C7AD]/50 mt-14 font-sans">
          Bespoke Gifting Atelier &bull; Kochi, Kerala
        </p>

      </div>
    </section>
  );
}
