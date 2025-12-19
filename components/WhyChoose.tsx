
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Clock, Eye } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Unmatched Reliability",
    desc: "Our systems and designs are built on rock-solid foundations, ensuring zero downtime and maximum trust."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Conversion Focused",
    desc: "We don't just design pretty interfaces; we build funnels that drive real business growth and revenue."
  },
  {
    icon: <Clock size={32} />,
    title: "Speed to Market",
    desc: "Proprietary design frameworks allow us to deliver 10x faster than traditional high-end agencies."
  },
  {
    icon: <Eye size={32} />,
    title: "Strategic Clarity",
    desc: "We bring extreme focus to your product vision, stripping away noise to reveal the core value proposition."
  }
];

const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 bg-white/50 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4">The DeepX Advantage</h2>
          <h3 className="text-5xl font-black text-slate-900 leading-tight">Why founders choose <span className="text-blue-600">DeepX Design.</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 glass-card rounded-[32px] hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h4>
              <p className="text-slate-500 leading-relaxed text-sm">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
