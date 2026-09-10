import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Sparkles, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/hampersData';

export default function KochiSection() {
  const deliveryHubs = [
    { area: "Edappally & Thrikkakara", detail: "Atelier Home Base (Seaport - Airport Rd)" },
    { area: "Kakkanad & InfoPark", detail: "Corporate & Tech Gifting Deliveries" },
    { area: "Fort Kochi & Mattancherry", detail: "Heritage Tour Groups & Destination Weddings" },
    { area: "Marine Drive & Panampilly Nagar", detail: "Luxury Residences & Private Celebrations" },
    { area: "Aluva & Cochin Airport (COK)", detail: "Inbound Airport Welcome Kits" },
    { area: "Greater Ernakulam", detail: "Doorstep Delivery Across The District" }
  ];

  return (
    <section id="kochi" className="py-24 lg:py-36 bg-[#161412] relative overflow-hidden">
      {/* Subtle Botanical / Warm Texture Backdrop */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(201,164,92,0.07),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,45,35,0.12),transparent_70%)] pointer-events-none" />

      <div className="site-container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Kerala Aesthetic Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full text-left"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-5 h-[1px] bg-[#C9A45C]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#C9A45C]">
                Kerala Heritage & Heart
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F7F1E7] tracking-tight leading-[1.1] mb-6">
              CURATED IN KOCHI. <br />
              <span className="italic font-normal text-gold-gradient">
                DELIVERED WITH CARE.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#D8C7AD] font-light leading-relaxed mb-8">
              Rooted on the historic trade lines of Kochi, our curation honors Kerala’s celebrated gifting heritage—where fragrant spices, golden banana chips crisped in pure coconut oil, and artisanal woven leaf platters meet contemporary boutique presentation.
            </p>

            {/* Atelier Address Card */}
            <div className="p-6 rounded-2xl bg-[#1C1916] border border-[#C9A45C]/30 shadow-xl mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-[rgba(201,164,92,0.12)] text-[#C9A45C] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold block mb-1">
                    Atelier Location
                  </span>
                  <p className="text-sm text-[#F7F1E7] font-medium leading-relaxed mb-2">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#D8C7AD]/70 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span>Seaport - Airport Rd Corridor, Thrikkakara, Kochi</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Delivery Promise */}
            <div className="flex items-center gap-3 text-xs text-[#D8C7AD] font-light">
              <Truck className="w-4 h-4 text-[#C9A45C] shrink-0" />
              <span>Prompt, secure hand-delivery across all corners of Kochi and Ernakulam.</span>
            </div>
          </motion.div>

          {/* Right: Kochi Coverage Grid & Regional Accents */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-full"
          >
            <div className="rounded-3xl bg-[#1a1714] border border-[#C9A45C]/25 p-7 sm:p-9 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-semibold">
                    Service Network
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F7F1E7] font-light mt-0.5">
                    Delivery Across Kochi
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[rgba(201,164,92,0.1)] border border-[#C9A45C]/30 flex items-center justify-center text-[#C9A45C]">
                  <Compass className="w-5 h-5 animate-spin-slow" />
                </div>
              </div>

              {/* Delivery Hubs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliveryHubs.map((hub, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#141210] border border-white/5 hover:border-[#C9A45C]/30 transition-all text-left"
                  >
                    <h4 className="text-xs font-semibold text-[#F7F1E7] mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                      {hub.area}
                    </h4>
                    <p className="text-[11px] text-[#D8C7AD]/70 leading-snug">
                      {hub.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Note on coordination */}
              <div className="mt-6 pt-5 border-t border-white/10 text-left flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <p className="text-xs text-[#D8C7AD]/80 leading-relaxed font-light">
                  Whether coordinated directly to event venues, tour bus coaches, or residential doorsteps, every hamper arrives impeccably secured and camera-ready.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
