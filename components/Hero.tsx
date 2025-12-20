
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, CheckCircle2, Plus } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#fdfdfd]"
    >
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-slate-50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content Column */}
          <div className="flex-1 text-left">
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white shadow-sm border border-slate-100 rounded-lg mb-8"
            >
              <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center text-white">
                <Star size={12} fill="currentColor" />
              </div>
              <span className="text-sm font-bold text-slate-700">
                <span className="text-slate-900">4.9</span> on TrustPilot
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[84px] font-black text-slate-900 leading-[1.05] mb-8 tracking-tight"
            >
              Connect with <br />
              the <div className="inline-flex items-center gap-3">
                <div className="flex -space-x-3 mb-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/100?u=${i + 50}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-blue-600 font-serif-italic ml-2">World</span>
              </div> <br />
              Through Words
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-lg text-lg md:text-xl text-slate-500 mb-10 leading-relaxed font-medium"
            >
              Learn to express yourself confidently and open doors to new opportunities everywhere.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-20"
            >
              <button className="px-10 py-4 bg-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 text-lg">
                Get Started - For Free!
              </button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100"
            >
              <div>
                <div className="text-3xl font-black text-slate-900">100%</div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">12+</div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">100K+</div>
                <div className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Active Students</div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-[540px] mx-auto">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-[64px] overflow-hidden border-[12px] border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop" 
                  alt="Student using laptop" 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>

              {/* Floating UI Badges - Top Right Checkmarks */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 z-20 space-y-3"
              >
                <FloatingCheckmark text="Group Courses" />
                <FloatingCheckmark text="One-to-One Session" />
              </motion.div>

              {/* Floating UI Badges - Center Left Support */}
              <motion.div 
                animate={{ x: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -left-16 z-20 p-6 bg-blue-500 rounded-[32px] shadow-2xl text-white max-w-[140px]"
              >
                <div className="text-3xl font-black mb-1">50+</div>
                <div className="text-[10px] font-bold opacity-90 uppercase tracking-[0.2em] leading-tight">Global Language Support</div>
              </motion.div>

              {/* Floating UI Badges - Bottom Center Skill Selector */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-16 -left-12 z-20 p-8 bg-white/95 backdrop-blur-md rounded-[40px] shadow-2xl border border-white/50 min-w-[280px]"
              >
                <div className="text-sm font-black text-slate-900 mb-4">Add your skills</div>
                <div className="flex gap-2">
                  <SkillTag text="Listening" />
                  <SkillTag text="Reading" />
                  <SkillTag text="Speaking" />
                </div>
              </motion.div>

              {/* Floating UI Badges - Bottom Right Lessons */}
              <motion.div 
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-4 -right-12 z-20 p-8 bg-blue-500 rounded-[40px] shadow-2xl text-white max-w-[180px]"
              >
                <div className="text-4xl font-black mb-1">1500+</div>
                <div className="text-[11px] font-bold opacity-90 uppercase tracking-[0.2em] leading-tight">free Lessons for Student</div>
              </motion.div>

              {/* Background Shapes */}
              <div className="absolute -top-10 -left-10 w-full h-full bg-blue-50 rounded-[80px] -z-10 rotate-3" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FloatingCheckmark = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50 text-sm font-bold text-slate-700 whitespace-nowrap">
    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white">
      <CheckCircle2 size={14} />
    </div>
    {text}
  </div>
);

const SkillTag = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 border border-blue-200 rounded-full text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50">
    <Plus size={10} strokeWidth={4} />
    {text}
  </div>
);

export default Hero;
