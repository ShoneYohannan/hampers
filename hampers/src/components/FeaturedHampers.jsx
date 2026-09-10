import React from 'react';
import { motion } from 'framer-motion';
import { Check, MessageSquare, Sparkles } from 'lucide-react';
import { FEATURED_HAMPERS } from '../data/hampersData';

export default function FeaturedHampers({ onEnquireHamper }) {
  return (
    <section className="py-24 lg:py-32 bg-[#171513] relative overflow-hidden">
      {/* Editorial Decorative divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/25 to-transparent" />
      
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1px] bg-[#C9A45C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
                Spotlight Hampers
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F1E7] tracking-tight">
              CURATED WITH <br />
              <span className="italic font-normal text-gold-gradient">INTENTION.</span>
            </h2>
          </div>

          <p className="text-sm text-[#D8C7AD] font-light max-w-md leading-relaxed">
            A glimpse into actual bespoke creations handcrafted by our atelier for weddings, corporate delegations, and family milestones in Kochi.
          </p>
        </div>

        {/* Featured Hampers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_HAMPERS.map((hamper, idx) => (
            <motion.div
              key={hamper.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group rounded-2xl bg-[#1C1916] border border-[rgba(201,164,92,0.2)] hover:border-[#C9A45C]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-2xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111111]">
                  <img
                    src={hamper.image}
                    alt={hamper.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1916] via-transparent to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] bg-[#111111]/85 backdrop-blur-md text-[#C9A45C] border border-[#C9A45C]/40">
                      {hamper.badge}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-3 left-5">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#D8C7AD]/70 font-mono">
                      {hamper.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F7F1E7] group-hover:text-[#FFF0D4] transition-colors mb-3">
                    {hamper.name}
                  </h3>
                  
                  <p className="text-xs text-[#D8C7AD] font-light leading-relaxed mb-6">
                    {hamper.description}
                  </p>

                  {/* Inclusion Checklist */}
                  <div className="space-y-2 pt-4 border-t border-white/10 mb-6">
                    {hamper.details.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#D8C7AD]/90">
                        <Check className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer with Enquire Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onEnquireHamper(hamper)}
                  className="w-full py-3 px-4 rounded-xl border border-[#C9A45C]/40 hover:border-[#C9A45C] bg-[rgba(201,164,92,0.06)] hover:bg-[#C9A45C] text-[#F7F1E7] hover:text-[#111111] font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A45C] group-hover/btn:text-[#111111] transition-colors" />
                  <span>Enquire for This Hamper</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
