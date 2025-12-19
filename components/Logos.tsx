
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "Nebula", "Apex", "Flow", "Stellar", "Vortex", "Horizon", "Zephyr", "Aura"
];

const Logos: React.FC = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.4em]">Propelling Innovation at</p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <div className="py-8 glass-card border-y border-white/40 shadow-sm flex items-center gap-12 animate-scroll-logos whitespace-nowrap min-w-full">
          {/* Repeating for seamless loop */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center gap-2 px-8 opacity-40 hover:opacity-100 transition-opacity cursor-default grayscale hover:grayscale-0">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                {logo[0]}
              </div>
              <span className="text-xl font-bold text-slate-800">{logo}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-logos {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-scroll-logos {
          animation: scroll-logos 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Logos;
