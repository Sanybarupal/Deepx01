
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    name: "Growth",
    price: "$4,900",
    desc: "For early-stage startups needing a premium MVP design.",
    features: ["UI Design (10 screens)", "Basic Design System", "2 Rounds Revision", "2 Weeks Delivery"],
    highlight: false
  },
  {
    name: "Scale",
    price: "$9,500",
    desc: "Comprehensive product design for growing companies.",
    features: ["Full Product UI/UX", "Extensive Design System", "Unlimited Revisions", "Development Handoff", "Motion Prototypes"],
    highlight: true
  },
  {
    name: "Elite",
    price: "Custom",
    desc: "Dedicated design team for enterprise-scale platforms.",
    features: ["Monthly Retainer", "Dedicated Lead Designer", "Ongoing Support", "Strategy & Analytics", "3D Asset Creation"],
    highlight: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">Investment</h2>
          <h3 className="text-5xl font-black text-slate-900">Simple, <span className="text-gradient">Transparent Pricing.</span></h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[40px] flex flex-col shadow-2xl transition-all duration-500 ${
                plan.highlight 
                  ? 'bg-slate-900 text-white scale-105 z-10' 
                  : 'glass-card border border-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                  Recommended
                </div>
              )}
              
              <h4 className="text-2xl font-black mb-2">{plan.name}</h4>
              <p className={`text-sm mb-8 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-black">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-sm opacity-60">/ project</span>}
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-blue-600' : 'bg-blue-100'}`}>
                      <Check size={12} className={plan.highlight ? 'text-white' : 'text-blue-600'} />
                    </div>
                    <span className="text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`flex items-center gap-4 pl-2 pr-8 py-2 rounded-full font-bold transition-all ${
                plan.highlight 
                  ? 'bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-900/40' 
                  : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
                  <ArrowUpRight size={20} strokeWidth={3} />
                </div>
                <span>Choose {plan.name}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
