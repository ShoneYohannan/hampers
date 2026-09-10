import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hampersData';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 lg:py-36 bg-[#111111] relative overflow-hidden">
      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-[#C9A45C]/30 text-[#C9A45C] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atelier Gallery</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F1E7] tracking-tight mb-4">
            THE LITTLE DETAILS <br />
            <span className="italic font-normal text-gold-gradient">
              MATTER.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D8C7AD] font-light leading-relaxed">
            Close-up captures of our handwritten notes, traditional snack pouches, delicate tulle drapes, and handcrafted Kerala keepsakes.
          </p>
        </div>

        {/* Masonry / Grid Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#181614] border border-[#C9A45C]/20 hover:border-[#C9A45C]/60 transition-all duration-500 cursor-pointer shadow-xl aspect-[4/3] w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#111111]/80 backdrop-blur-md border border-[#C9A45C]/40 flex items-center justify-center text-[#F7F1E7] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                <Maximize2 className="w-4 h-4 text-[#C9A45C]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-left transform transition-transform duration-400 group-hover:-translate-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold block mb-1">
                  Atelier Detail
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#F7F1E7] font-normal mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8C7AD]/80 font-light line-clamp-2">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-[#070706]/95 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-[#181614] border border-[#C9A45C]/40 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#111111]/80 border border-white/20 text-[#F7F1E7] flex items-center justify-center hover:bg-[#C9A45C] hover:text-[#111111] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-[#111111] flex items-center justify-center">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-[#181614] border-t border-white/10 text-left">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
                  Hampers Kochi Showcase
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-[#F7F1E7] mt-0.5">
                  {selectedImage.title}
                </h4>
                <p className="text-xs text-[#D8C7AD] font-light mt-1">
                  {selectedImage.subtitle}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
