
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Search className="text-blue-600" />,
    title: "Discovery & Insights",
    desc: "We dive deep into your target audience, competitors, and market trends to find the unique edge."
  },
  {
    icon: <PenTool className="text-blue-600" />,
    title: "Strategic Design",
    desc: "Crafting wireframes and high-fidelity prototypes that balance aesthetics with flawless functionality."
  },
  {
    icon: <Code className="text-blue-600" />,
    title: "Engineering Excellence",
    desc: "Bringing designs to life with pixel-perfect, lightning-fast, and responsive front-end code."
  },
  {
    icon: <Rocket className="text-blue-600" />,
    title: "Launch & Evolution",
    desc: "Iterative testing and refinement to ensure your product thrives long after the first launch."
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-white/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-20">
          <div className="lg:w-1/2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Our Methodology</h2>
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                A refined journey <br /> to <span className="text-gradient">perfection.</span>
              </h3>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Our approach combines rigorous research with creative intuition to deliver products that don't just look good, but drive massive growth.
              </p>
              
              <div className="p-10 glass-card rounded-[40px] border-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10 flex items-center gap-6 mb-6">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                  <span className="font-black text-slate-900 text-lg">Currently Onboarding for Q3</span>
                </div>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">We take only 2 high-impact projects per month to ensure obsessive attention to detail.</p>
                <button className="flex items-center gap-3 text-blue-600 font-bold hover:gap-5 transition-all">
                  Claim your slot <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 space-y-16 relative">
            {/* Timeline Line */}
            <div className="absolute left-[31px] top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600 via-blue-100 to-transparent rounded-full hidden md:block" />

            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="relative pl-0 md:pl-20 group"
              >
                {/* Step Marker */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 z-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 hidden md:flex">
                   {React.cloneElement(step.icon, { size: 28, className: "group-hover:text-white transition-colors" })}
                </div>
                
                {/* Mobile Icon */}
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 md:hidden">
                   {step.icon}
                </div>

                <div className="bg-white/40 p-10 rounded-[40px] border border-white/60 hover:border-blue-200 transition-all shadow-lg hover:shadow-2xl">
                  <div className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4 opacity-50">Phase 0{idx + 1}</div>
                  <h4 className="text-3xl font-black text-slate-900 mb-4">{step.title}</h4>
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
