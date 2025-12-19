
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

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
    <section id="process" className="py-24 bg-white/30 backdrop-blur-sm border-y border-white/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-16">
          <div className="md:w-1/2 sticky top-32">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">Our Methodology</h2>
            <h3 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              A refined process <br /> for <span className="text-blue-600">elite results.</span>
            </h3>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We don't just design; we architect digital experiences that solve complex business challenges through elegant simplicity.
            </p>
            <div className="p-8 glass-card rounded-3xl border border-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <span className="font-bold text-slate-900">Available for Q2 Projects</span>
              </div>
              <p className="text-sm text-slate-500">Currently taking 2 more high-impact clients for the upcoming quarter.</p>
            </div>
          </div>

          <div className="md:w-1/2 space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-12 border-l-2 border-slate-100"
              >
                <div className="absolute left-[-11px] top-0 w-5 h-5 bg-white border-4 border-blue-600 rounded-full shadow-lg" />
                <div className="mb-2 text-6xl font-black text-slate-50/80 absolute right-0 top-0 pointer-events-none">0{idx + 1}</div>
                
                <div className="w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-slate-100 group">
                   {React.cloneElement(step.icon, { size: 24 })}
                </div>
                <h4 className="text-2xl font-extrabold text-slate-900 mb-3">{step.title}</h4>
                <p className="text-slate-600 leading-relaxed max-w-md">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
