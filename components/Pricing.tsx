
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';

const plans = [
  {
    name: "Growth",
    price: "$4,900",
    desc: "Perfect for early-stage startups needing an elite MVP.",
    features: ["UI/UX Audit", "10 Premium Screens", "Design System Core", "Interactive Prototype", "2 Rounds of Polish"],
    highlight: false
  },
  {
    name: "Scale",
    price: "$9,500",
    desc: "Full product design ecosystem for high-growth brands.",
    features: ["Full Product Ecosystem", "Advanced Design System", "Unlimited Revisions", "Development Handoff", "Motion & Interactions", "Weekly Strategy Sync"],
    highlight: true
  },
  {
    name: "Elite",
    price: "Custom",
    desc: "Your dedicated design powerhouse for long-term scale.",
    features: ["Embedded Design Team", "Continuous Iteration", "Marketing Assets", "3D & Brand Refresh", "Dedicated Slack Channel", "Monthly Retainer"],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-white/40">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[140px] opacity-60 -z-10" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4"
          >
            Investment
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-tight"
          >
            Simple, <span className="text-gradient">Premium.</span>
          </motion.h3>
          <p className="text-slate-500 mt-6 text-lg font-medium">No hidden fees. Just elite design that moves the needle.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className={`relative p-12 rounded-[56px] flex flex-col shadow-2xl transition-all duration-700 ${
                plan.highlight 
                  ? 'bg-slate-900 text-white min-h-[720px] shadow-blue-200/40' 
                  : 'glass-card border border-white min-h-[660px]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg flex items-center gap-2">
                  <Sparkles size={14} /> Most Chosen
                </div>
              )}
              
              <div className="mb-10">
                <h4 className="text-3xl font-black mb-3">{plan.name}</h4>
                <p className={`text-sm font-medium leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
              </div>
              
              <div className="flex items-baseline gap-2 mb-12">
                <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                {plan.price !== "Custom" && <span className={`text-sm font-bold ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>/ starting</span>}
              </div>

              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-4 group">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${plan.highlight ? 'bg-blue-600' : 'bg-blue-100'}`}>
                      <Check size={14} strokeWidth={3} className={plan.highlight ? 'text-white' : 'text-blue-600'} />
                    </div>
                    <span className="text-base font-bold tracking-tight">{f}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-between pl-3 pr-10 py-3 rounded-full font-black transition-all group ${
                plan.highlight 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-slate-900 text-white hover:bg-blue-600'
              }`}>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg group-hover:rotate-12 transition-transform">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </div>
                <span className="text-lg">Select Plan</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">
            Need something completely unique? <button className="text-blue-600 hover:underline">Let's build a custom scope.</button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
