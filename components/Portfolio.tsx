
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';

const projects = [
  {
    title: "EtherPulse Finance",
    category: "Web3 / DeFi",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    description: "Next-gen liquidity protocol dashboard for decentralized assets."
  },
  {
    title: "Nebula Dashboard",
    category: "SaaS / AI",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Enterprise-grade AI analytics interface for data science teams."
  },
  {
    title: "Aura Mobile",
    category: "Fintech / App",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    description: "Luxury digital banking experience with biometric security."
  },
  {
    title: "Zenith Commerce",
    category: "E-Commerce / UX",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "High-conversion headless checkout platform for premium brands."
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Case Studies</h2>
            <h3 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]">Elite Proof <br /> of <span className="text-gradient">Work.</span></h3>
          </div>
          <button className="flex items-center gap-3 px-8 py-4 glass-card rounded-2xl font-bold text-slate-900 border border-slate-100 hover:bg-slate-50 transition-all">
            Browse All Projects <Zap size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[56px] shadow-2xl bg-white p-4">
                <div className="relative overflow-hidden rounded-[40px] aspect-[4/3]">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-2xl border border-white/50"
                    >
                      <ArrowUpRight size={32} strokeWidth={3} />
                    </motion.div>
                  </div>
                </div>

                {/* Info Card */}
                <div className="p-8 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">{project.category}</span>
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-2">{project.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
