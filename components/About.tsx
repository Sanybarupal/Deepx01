
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-12 glass-card rounded-[40px] border-white/50 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-100 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
                  Design is a <br />
                  <span className="text-blue-600 font-serif-italic font-normal">Team Sport</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  At DeepX, we don't believe in solo geniuses. We believe in high-performance collectives where strategy, aesthetics, and engineering collide to create legendary products.
                </p>
                <div className="space-y-6">
                  <AboutFeature icon={<Users size={20} />} title="Collective Genius" desc="15+ specialized designers and engineers working as one." />
                  <AboutFeature icon={<Target size={20} />} title="Market Focused" desc="Every pixel is measured against conversion and user growth." />
                  <AboutFeature icon={<Zap size={20} />} title="Rapid Iteration" desc="High-speed delivery without sacrificing elite quality." />
                </div>
              </div>
            </motion.div>
            
            {/* Background 3D element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-32 h-32 glass-card rounded-2xl flex items-center justify-center opacity-40 blur-[1px]"
            >
              <div className="w-16 h-1 bg-blue-200 rounded-full rotate-45" />
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-[0.3em] mb-4">The DeepX DNA</h3>
            <h4 className="text-5xl font-black text-slate-900 mb-8 leading-tight">
              A decade of <span className="text-gradient">digital excellence.</span>
            </h4>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 glass-card rounded-3xl">
                <div className="text-5xl font-black text-slate-900 mb-2">12+</div>
                <div className="text-sm font-bold text-slate-400 uppercase">Years Experience</div>
              </div>
              <div className="p-8 glass-card rounded-3xl bg-blue-600 text-white border-none shadow-blue-200 shadow-xl">
                <div className="text-5xl font-black mb-2">50+</div>
                <div className="text-sm font-bold opacity-80 uppercase">Creative Awards</div>
              </div>
            </div>
            <p className="mt-12 text-slate-600 text-lg">
              Born from a desire to bridge the gap between "looking good" and "working well", DeepX Design has evolved into a global powerhouse for Web3 and SaaS innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutFeature = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-4">
    <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
      {icon}
    </div>
    <div>
      <h5 className="font-bold text-slate-900 mb-1">{title}</h5>
      <p className="text-sm text-slate-500 leading-snug">{desc}</p>
    </div>
  </div>
);

export default About;
