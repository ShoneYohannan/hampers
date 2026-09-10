import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 350);
          return 100;
        }
        // Smooth progression
        return prev + Math.floor(Math.random() * 18) + 8;
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111111] text-[#F7F1E7]"
      style={{
        backgroundImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(201, 164, 92, 0.1), transparent 70%)',
      }}
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Monogram emblem */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-16 h-16 rounded-full border border-[rgba(201,164,92,0.4)] flex items-center justify-center mb-6 relative"
        >
          <div className="absolute inset-0 rounded-full bg-[rgba(201,164,92,0.06)] animate-pulse-glow" />
          <span className="font-serif text-2xl font-bold text-[#C9A45C] tracking-widest">H</span>
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-serif text-2xl md:text-3xl font-normal tracking-[0.25em] text-[#F7F1E7] uppercase mb-2"
        >
          Hampers Kochi
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-sans text-xs uppercase tracking-[0.3em] text-[#C9A45C] mb-8"
        >
          The Art of Thoughtful Giving
        </motion.p>

        {/* Thin Gold Progress Line */}
        <div className="w-48 h-[2px] bg-[rgba(247,241,231,0.1)] rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-[#DFBA73] to-[#C9A45C]"
            style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.15s ease-out' }}
          />
        </div>

        <span className="mt-3 text-[10px] tracking-widest text-[#D8C7AD]/60 font-mono">
          {Math.min(progress, 100)}%
        </span>
      </div>
    </motion.div>
  );
}
