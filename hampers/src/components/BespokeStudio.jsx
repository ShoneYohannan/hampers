import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Package, Feather, Truck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BespokeStudio({ onOpenEnquiry }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      icon: Calendar,
      title: "CHOOSE THE OCCASION",
      subtitle: "The Inspiration",
      description: "Tell us whether you're commemorating a wedding, anniversary milestone, executive corporate delegation, or a warm homecoming in Kochi.",
      detailList: [
        "Select occasion & recipient vibe",
        "Define target budget tier",
        "Estimated recipient date & location in Kochi"
      ],
      visual: {
        stage: "Stage 1: Foundation Selected",
        badge: "Eco-Kraft or Matte Obsidian Base",
        image: "/images/hampers/kerala-heritage-delicacies.png"
      }
    },
    {
      num: "02",
      icon: Package,
      title: "CURATE THE DETAILS",
      subtitle: "The Artisanal Blend",
      description: "Handpick the perfect balance between authentic Kerala gourmet treats (Kuzhalappam, pure coconut oil chips, jaggery cookies) and luxury confections.",
      detailList: [
        "Artisanal Kerala snacks & savories",
        "Fine chocolates & botanical sips",
        "Handcrafted keepsakes (wooden crafts, souvenirs)"
      ],
      visual: {
        stage: "Stage 2: Handpicked Fillings Arranged",
        badge: "Gourmet Flavors & Souvenirs",
        image: "/images/hampers/curated-delicacy-collection.png"
      }
    },
    {
      num: "03",
      icon: Feather,
      title: "PERSONALIZE THE PRESENTATION",
      subtitle: "The Signature Touch",
      description: "Choose your packaging aesthetic: netted blush tulle, gold metallic satin bows, custom branded tags, or handwritten calligraphy greeting cards.",
      detailList: [
        "Embroidered ribbons & floral clusters",
        "Handwritten wax-sealed greeting note",
        "Bespoke company or event branding"
      ],
      visual: {
        stage: "Stage 3: Draped & Sealed",
        badge: "Blush Tulle & Gold Ribbon Tied",
        image: "/images/hampers/floral-celebration-basket.png"
      }
    },
    {
      num: "04",
      icon: Truck,
      title: "DELIVER THE EXPERIENCE",
      subtitle: "The Lasting Memory",
      description: "Hand-delivered with pristine care across Kochi—from Seaport-Airport Road and Kakkanad to Fort Kochi—or coordinated for your event.",
      detailList: [
        "Direct delivery to venue, hotel, or doorstep",
        "Tour bus group welcome coordination",
        "Pristine condition guarantee"
      ],
      visual: {
        stage: "Stage 4: Handed Over with Warmth",
        badge: "Delivered Across Kochi & Kerala",
        image: "/images/hampers/group-welcome-tour.png"
      }
    }
  ];

  return (
    <section id="bespoke" className="py-24 lg:py-36 bg-[#141210] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-[rgba(201,164,92,0.06)] blur-[140px] pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1b18] border border-[#C9A45C]/30 text-[#C9A45C] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bespoke Hamper Studio</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F1E7] tracking-tight mb-4">
            YOUR VISION. <br />
            <span className="italic font-normal text-gold-gradient">
              OUR CRAFT.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D8C7AD] font-light leading-relaxed">
            Every bespoke hamper undergoes our 4-step artisanal curation process, ensuring a personalized experience that tells your recipient’s unique story.
          </p>
        </div>

        {/* Interactive 4-Step Process & Visual Assembly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Step Selection Cards */}
          <div className="w-full space-y-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl transition-all duration-400 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#1e1b18] border-[#C9A45C] shadow-[0_8px_30px_rgba(201,164,92,0.15)] translate-x-2'
                      : 'bg-[#171513]/60 border-white/5 hover:border-[#C9A45C]/30 hover:bg-[#1a1815]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold transition-colors ${
                      isSelected
                        ? 'bg-[#C9A45C] text-[#111111]'
                        : 'bg-white/5 text-[#D8C7AD] border border-white/10'
                    }`}>
                      {step.num}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-mono">
                          {step.subtitle}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] uppercase tracking-wider text-[#DFBA73] flex items-center gap-1 font-semibold">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Active Step
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F7F1E7] mt-1 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-xs text-[#D8C7AD]/80 font-light leading-relaxed">
                        {step.description}
                      </p>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pt-4 mt-4 border-t border-[rgba(201,164,92,0.2)] space-y-1.5"
                        >
                          {step.detailList.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-[#DFBA73]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Visual Assembly Stage */}
          <div className="w-full">
            <div className="relative rounded-3xl overflow-hidden bg-[#1a1714] border border-[#C9A45C]/30 p-4 sm:p-6 shadow-2xl">
              
              {/* Assembly Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C9A45C] animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.2em] text-[#F7F1E7] font-medium">
                    Atelier Assembly Preview
                  </span>
                </div>
                <span className="text-xs text-[#C9A45C] font-mono">
                  Step {steps[activeStep].num} of 04
                </span>
              </div>

              {/* Dynamic Step Visualization */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#111111] mb-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={steps[activeStep].visual.image}
                      alt={steps[activeStep].visual.stage}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5 text-left">
                      <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold bg-[#111111]/85 border border-[#C9A45C]/40 text-[#C9A45C] mb-2">
                        {steps[activeStep].visual.stage}
                      </span>
                      <p className="font-serif text-lg sm:text-xl text-[#F7F1E7]">
                        {steps[activeStep].visual.badge}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Trigger */}
              <div className="p-2 text-center">
                <button
                  onClick={() => onOpenEnquiry()}
                  className="btn-gold w-full !py-3.5 !text-xs tracking-[0.2em]"
                >
                  <Sparkles className="w-4 h-4 text-[#111111]" />
                  <span>Start Your Bespoke Hamper Consultation</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
