import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { COLLECTIONS } from '../data/hampersData';

function CollectionCard({ collection, index, onSelect }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 0.2s ease-out',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(collection)}
      className="group relative rounded-2xl overflow-hidden bg-[#181614] border border-[rgba(201,164,92,0.18)] hover:border-[#C9A45C]/60 transition-all duration-500 shadow-xl cursor-pointer flex flex-col justify-between h-[390px] sm:h-[420px]"
    >
      {/* Background Imagery with Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.75] group-hover:brightness-[0.9]"
          loading="lazy"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />
        <div className="absolute inset-0 bg-[#111111]/30 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Top Header Information */}
      <div className="relative z-10 p-6 flex items-start justify-between">
        <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#111111]/85 backdrop-blur-md text-[#C9A45C] border border-[#C9A45C]/35">
          {collection.accent}
        </span>
        <div className="w-9 h-9 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[rgba(201,164,92,0.3)] flex items-center justify-center text-[#F7F1E7] group-hover:text-[#111111] group-hover:bg-[#C9A45C] group-hover:scale-110 transition-all duration-300">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 text-left transform transition-transform duration-500 group-hover:-translate-y-1">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#D8C7AD]/80 mb-1 font-sans font-medium">
          {collection.tagline}
        </p>
        <h3 className="font-serif text-2xl font-normal text-[#F7F1E7] group-hover:text-[#FFF0D4] transition-colors mb-2">
          {collection.title}
        </h3>
        <p className="text-xs text-[#D8C7AD]/90 font-light leading-relaxed line-clamp-2 mb-3">
          {collection.description}
        </p>

        {/* Highlights Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10 opacity-80 group-hover:opacity-100 transition-opacity">
          {collection.highlights.map((h, i) => (
            <span key={i} className="text-[9px] uppercase tracking-wider text-[#C9A45C]/90">
              • {h}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Edge Gold Accent */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function Collections({ onOpenEnquiryWithCollection }) {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Curations' },
    { id: 'personal', label: 'Personal & Romance' },
    { id: 'heritage', label: 'Kerala Heritage' },
    { id: 'corporate', label: 'Corporate & Hospitality' },
    { id: 'festive', label: 'Festive Celebrations' }
  ];

  const filteredCollections = COLLECTIONS.filter((col) => {
    if (filter === 'all') return true;
    if (filter === 'personal') return col.type === 'personal' || col.categoryKey === 'birthdays' || col.categoryKey === 'weddings' || col.categoryKey === 'anniversaries';
    if (filter === 'heritage') return col.categoryKey === 'heritage' || col.id === 'kerala-heritage';
    if (filter === 'corporate') return col.type === 'corporate' || col.categoryKey === 'corporate' || col.categoryKey === 'tours';
    if (filter === 'festive') return col.categoryKey === 'festive' || col.categoryKey === 'custom';
    return true;
  });

  return (
    <section id="collections" className="py-24 lg:py-36 bg-[#111111] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(201,164,92,0.04)] blur-[160px] pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-[#C9A45C]/30 text-[#C9A45C] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Collections</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-[#F7F1E7] mb-4">
            THOUGHTFULLY ASSEMBLED. <br />
            <span className="italic font-normal text-gold-gradient">
              BEAUTIFULLY PRESENTED.
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-[#D8C7AD] font-light leading-relaxed">
            Explore our signature curation themes designed for life’s grandest celebrations and intimate gratitude. Each hamper can be personalized to your exact preference.
          </p>
        </div>

        {/* BoxUp Inspired Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 border ${
                filter === opt.id
                  ? 'bg-[#C9A45C] text-[#111111] border-[#C9A45C] font-semibold shadow-md'
                  : 'bg-[#181614] text-[#D8C7AD] border-white/10 hover:border-[#C9A45C]/40 hover:text-[#F7F1E7]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Collection Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          <AnimatePresence>
            {filteredCollections.map((col, index) => (
              <CollectionCard
                key={col.id}
                collection={col}
                index={index}
                onSelect={(item) => onOpenEnquiryWithCollection(item)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Helper */}
        <div className="mt-14 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-[#D8C7AD]/60 font-sans">
            Looking for something fully custom? Select any collection or use our Bespoke Hamper Builder.
          </p>
        </div>

      </div>
    </section>
  );
}
