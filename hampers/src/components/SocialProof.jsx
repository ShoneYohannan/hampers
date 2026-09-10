import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Award } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/hampersData';

export default function SocialProof() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextReview = () => {
    setCurrentIdx((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 lg:py-36 bg-[#12100E] relative overflow-hidden">
      <div className="site-container relative z-10">
        
        {/* Top: Google Rating Trust Moment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#1A1715] via-[#1E1B18] to-[#1A1715] border border-[#C9A45C]/35 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gold decorative background rings */}
          <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full border border-[#C9A45C]/10 pointer-events-none" />
          <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border border-[#C9A45C]/15 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            
            {/* Big Rating Number */}
            <div className="md:col-span-4 flex items-center gap-6 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
              <div className="font-serif text-6xl sm:text-7xl font-light text-gold-gradient tracking-tight">
                4.9
              </div>
              <div className="space-y-1">
                <div className="flex items-center text-[#DFBA73] gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#D8C7AD] font-semibold">
                  18+ Google Reviews
                </p>
                <p className="text-[11px] text-[#D8C7AD]/60 font-sans">
                  Kochi, Kerala
                </p>
              </div>
            </div>

            {/* Philosophy & Trust statement */}
            <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F1E7] font-normal mb-1">
                  Thoughtfully curated gifts. <br />
                  <span className="italic text-[#C9A45C]">Beautifully delivered.</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#D8C7AD]/80 font-light mt-1">
                  Verified customer satisfaction across weddings, corporate events, and milestone celebrations in Kochi.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C9A45C] bg-[rgba(201,164,92,0.1)] px-4 py-2 rounded-full border border-[#C9A45C]/30 shrink-0">
                <Award className="w-4 h-4" />
                <span>Premier Gifting Atelier</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1px] bg-[#C9A45C]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
              Client Voices
            </span>
            <span className="w-5 h-[1px] bg-[#C9A45C]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F1E7] tracking-tight mb-12">
            LOVED BY <br />
            <span className="italic font-normal text-gold-gradient">
              THOSE WHO GIFT.
            </span>
          </h2>

          {/* Testimonial Display */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#181513] border border-[rgba(201,164,92,0.25)] shadow-2xl">
            <Quote className="w-10 h-10 text-[#C9A45C]/20 mx-auto mb-6" />

            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Highlight Tag */}
              <span className="inline-block px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold bg-[#C9A45C]/15 border border-[#C9A45C]/40 text-[#DFBA73]">
                “{REVIEWS[currentIdx].tag}”
              </span>

              {/* Verified Quote Text */}
              <p className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-[#F7F1E7] leading-relaxed italic">
                "{REVIEWS[currentIdx].quote}"
              </p>

              {/* Reviewer Context */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F7F1E7]">
                  {REVIEWS[currentIdx].author}
                </p>
                <p className="text-[11px] text-[#D8C7AD]/70 tracking-wider">
                  {REVIEWS[currentIdx].context} &bull; Verified Feedback
                </p>
              </div>
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-8 pt-4">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full border border-[#C9A45C]/30 hover:border-[#C9A45C] text-[#F7F1E7] hover:text-[#111111] hover:bg-[#C9A45C] flex items-center justify-center transition-all"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentIdx === idx ? 'w-6 bg-[#C9A45C]' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full border border-[#C9A45C]/30 hover:border-[#C9A45C] text-[#F7F1E7] hover:text-[#111111] hover:bg-[#C9A45C] flex items-center justify-center transition-all"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
