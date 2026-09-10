import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export default function Intro({ onOpenEnquiry }) {
  return (
    <section id="about" className="relative py-24 lg:py-36 bg-[#151311] overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A45C]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="w-full text-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-[#C9A45C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
                Philosophy & Craft
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F7F1E7] tracking-tight leading-[1.12] mb-8">
              THE ART OF <br />
              <span className="italic text-gold-gradient font-normal">
                THOUGHTFUL GIVING.
              </span>
            </h2>

            <div className="space-y-6 text-[#D8C7AD] font-sans font-light text-base sm:text-lg leading-relaxed mb-10">
              <p>
                At <span className="text-[#F7F1E7] font-medium">Hampers Kochi</span>, we believe every gift should tell a story. True gifting is not about convenience or mass-produced boxes—it is about the unspoken connection between two people.
              </p>
              <p>
                Every hamper is thoughtfully assembled around the person, the occasion, and the genuine feeling behind the gesture. From handpicked artisanal treats and authentic Kerala delicacies to personalized handwritten keepsakes, we curate every detail to evoke wonder and cherished memories.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[rgba(201,164,92,0.18)]">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[rgba(201,164,92,0.1)] border border-[#C9A45C]/30 text-[#C9A45C] mt-1 shrink-0">
                  <Feather className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#F7F1E7] mb-1">
                    Personalized Keepsakes
                  </h4>
                  <p className="text-xs text-[#D8C7AD]/80 leading-relaxed">
                    Custom messages, bespoke tags, and locally crafted wooden souvenirs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-[rgba(201,164,92,0.1)] border border-[#C9A45C]/30 text-[#C9A45C] mt-1 shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#F7F1E7] mb-1">
                    Occasion & Budget Aligned
                  </h4>
                  <p className="text-xs text-[#D8C7AD]/80 leading-relaxed">
                    Hand-curated tiers tailored precisely to your celebration scale.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Layered Editorial Product Photography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="w-full relative flex justify-center"
          >
            <div className="relative w-full max-w-[440px]">
              
              {/* Main Primary Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-[#C9A45C]/30 shadow-2xl bg-[#1a1715] aspect-[4/5] w-full group">
                <img
                  src="/images/hampers/floral-celebration-basket.png"
                  alt="Hampers Kochi Luxury Celebration Basket"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-left">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
                    Couture Packaging
                  </span>
                  <p className="font-serif text-lg text-[#F7F1E7]">
                    Hand-tied florals & embroidered tulle
                  </p>
                </div>
              </div>

              {/* Secondary Layered Image (Authentic Kerala Delicacy Hamper) */}
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 z-20 w-[55%] rounded-xl overflow-hidden border border-[#C9A45C]/40 shadow-2xl bg-[#141210] aspect-square group hidden sm:block"
              >
                <img
                  src="/images/hampers/kerala-heritage-delicacies.png"
                  alt="Kerala Heritage Hamper by Hampers Kochi"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold">
                    Local Heritage
                  </span>
                  <p className="font-serif text-xs text-[#F7F1E7] leading-tight">
                    Traditional Kuzhalappam & crafts
                  </p>
                </div>
              </motion.div>

              {/* Floating Decorative Gold Badge */}
              <div className="absolute -top-4 -right-4 z-20 bg-[#1e1b17] border border-[#C9A45C]/40 p-4 rounded-full shadow-2xl hidden sm:flex flex-col items-center justify-center w-24 h-24 text-center animate-slow-float">
                <span className="font-script text-xl text-[#DFBA73] -mb-1">Handpicked</span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-[#D8C7AD]">
                  in Kochi
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
