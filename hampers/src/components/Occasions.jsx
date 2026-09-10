import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { OCCASIONS_LIST } from '../data/hampersData';

export default function Occasions({ onSelectOccasion }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="occasions" className="py-24 lg:py-36 bg-[#13110F] relative overflow-hidden">
      <div className="site-container mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9A45C]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
              Celebration Milestones
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F7F1E7] tracking-tight">
            FOR EVERY <br />
            <span className="italic font-normal text-gold-gradient">
              MOMENT WORTH REMEMBERING.
            </span>
          </h2>
        </div>

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleScroll('left')}
            className="w-11 h-11 rounded-full border border-[#C9A45C]/30 hover:border-[#C9A45C] bg-[#191715]/80 text-[#F7F1E7] hover:text-[#111111] hover:bg-[#C9A45C] flex items-center justify-center transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            className="w-11 h-11 rounded-full border border-[#C9A45C]/30 hover:border-[#C9A45C] bg-[#191715]/80 text-[#F7F1E7] hover:text-[#111111] hover:bg-[#C9A45C] flex items-center justify-center transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scrolling Card Track */}
      <div
        ref={scrollRef}
        className="site-container flex gap-6 overflow-x-auto scrollbar-none pb-8 pt-2"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {OCCASIONS_LIST.map((occ, i) => (
          <motion.div
            key={occ.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={() => onSelectOccasion(occ.name)}
            className="group relative flex-none w-[280px] sm:w-[340px] h-[460px] rounded-2xl overflow-hidden bg-[#1a1714] border border-[rgba(201,164,92,0.18)] hover:border-[#C9A45C]/60 transition-all duration-500 cursor-pointer shadow-xl flex flex-col justify-end p-7"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Editorial Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src={occ.image}
                alt={occ.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.7] group-hover:brightness-[0.85]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
            </div>

            {/* Content Info */}
            <div className="relative z-10 text-left">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold mb-1 block">
                Occasion
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F1E7] group-hover:text-[#FFF0D4] transition-colors mb-2">
                {occ.name}
              </h3>
              <p className="text-xs text-[#D8C7AD] font-light leading-relaxed mb-4 line-clamp-2">
                {occ.description}
              </p>
              
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold group-hover:text-[#DFBA73] transition-colors">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curate For This Moment</span>
              </div>
            </div>

            {/* Top Index Marker */}
            <div className="absolute top-5 right-5 z-10 w-8 h-8 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-[10px] text-[#D8C7AD] font-mono">
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
