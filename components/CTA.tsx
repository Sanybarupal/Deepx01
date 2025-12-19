
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative glass-card rounded-[48px] p-12 md:p-24 text-center border-white overflow-hidden shadow-2xl"
        >
          {/* Animated background glow */}
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-blue-400 rounded-full blur-[150px] opacity-20 animate-pulse" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-indigo-400 rounded-full blur-[150px] opacity-20" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 glass-card rounded-full mb-8 text-blue-600 font-bold text-sm uppercase tracking-widest"
            >
              <Sparkles size={16} />
              Ready for the Future?
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-10 tracking-tight">
              Let's create something <br /> <span className="text-gradient">legendary together.</span>
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-4 pl-2.5 pr-10 py-2.5 bg-blue-600 text-white font-bold rounded-full shadow-2xl shadow-blue-200 group"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm group-hover:rotate-12 transition-transform">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </div>
                <span>Schedule an Intro Call</span>
              </motion.button>
              
              <button className="px-10 py-5 glass-card rounded-2xl text-slate-900 font-bold border border-white/50 hover:bg-white/60 transition-all">
                Send an Inquiry
              </button>
            </div>
            
            <p className="mt-12 text-slate-500 font-medium italic">
              "They don't just deliver designs; they deliver masterpieces that move the needle." — CEO, FutureFinance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
