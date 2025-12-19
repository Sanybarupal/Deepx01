
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const feedback = [
  {
    name: "Jonathan Wick",
    role: "CEO, Apex Systems",
    text: "DeepX Design didn't just build a website; they built a brand identity that positioned us as a market leader in weeks. Their attention to detail is frightening.",
    avatar: "https://i.pravatar.cc/150?u=jon"
  },
  {
    name: "Sarah Chen",
    role: "Founder, Nebula AI",
    text: "Working with them was the best investment we made for our seed round. The UI is cinematic and the UX is intuitive. Simply the best.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Aurelius",
    role: "Product Lead, Zen dApp",
    text: "Truly next-gen. They understand the Web3 space better than most crypto-native teams I've worked with. Elite delivery every single time.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Quote className="text-blue-100 mx-auto mb-6" size={64} />
          <h2 className="text-5xl font-black text-slate-900 leading-tight">Word on the <span className="text-blue-600">Digital Street.</span></h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {feedback.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 glass-card rounded-[40px] flex flex-col shadow-xl hover:shadow-blue-50 transition-all border border-white"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-slate-600 text-lg leading-relaxed italic mb-8 flex-grow">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img src={item.avatar} className="w-12 h-12 rounded-full border-2 border-white shadow-md" alt={item.name} />
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
