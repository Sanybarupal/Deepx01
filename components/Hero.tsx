
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, CheckCircle, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Trustpilot Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 glass-card rounded-lg mb-8 shadow-sm border border-slate-200/50">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center">
                <Star size={14} className="text-blue-600 fill-blue-600" />
              </div>
              <span className="text-sm font-bold text-slate-800 tracking-tight">
                4.9 <span className="text-slate-500 font-normal">on Clutch</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-8">
              Design the <br />
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span>Future</span>
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i+20}`} className="w-10 h-10 lg:w-14 lg:h-14 rounded-full border-4 border-white shadow-lg" alt="Team" />
                  ))}
                </div>
                <span className="text-blue-600 font-serif-italic font-normal">Brand</span>
              </div>
              With Purpose
            </h1>

            {/* Subheading */}
            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-medium">
              We craft high-end digital interfaces that transform vision into market dominance. Elevate your startup with elite UI/UX design.
            </p>

            {/* Primary Action Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 pl-2.5 pr-10 py-2.5 bg-blue-600 text-white font-bold rounded-full shadow-2xl shadow-blue-200 mx-auto lg:mx-0 hover:bg-blue-700 transition-all text-lg mb-20"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm">
                <ArrowUpRight size={24} strokeWidth={3} />
              </div>
              <span>Start Your Project — <span className="opacity-80 font-medium">Free Discovery</span></span>
            </motion.button>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-slate-200/50 max-w-2xl">
              <StatItem value="100%" label="Satisfaction Rate" />
              <StatItem value="12+" label="Years of Expertise" />
              <StatItem value="250+" label="Live Products" />
            </div>
          </motion.div>

          {/* Right Content - Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative w-full max-w-2xl"
          >
            {/* Main Image Container */}
            <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-white p-4">
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=1000" 
                  className="w-full h-full object-cover" 
                  alt="Agency Representative" 
                />
                
                {/* Dot Pattern Overlay */}
                <div className="absolute top-0 right-0 p-8">
                  <div className="grid grid-cols-6 gap-2 opacity-20">
                    {[...Array(36)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            
            {/* Top Left Badge: Success Rate */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 md:-left-12 p-6 bg-blue-600 rounded-3xl shadow-2xl text-white max-w-[180px] z-20"
            >
              <div className="text-3xl font-black mb-1">50+</div>
              <div className="text-xs font-semibold opacity-80 leading-tight uppercase tracking-wider">Design Awards Won Globally</div>
            </motion.div>

            {/* Floating Options Badge (Checkmarks) */}
            <div className="absolute top-20 -right-4 md:-right-8 flex flex-col gap-3 z-20">
              <BadgeWithCheck label="Full Brand Strategy" />
              <BadgeWithCheck label="High-Fidelity UI" />
            </div>

            {/* Skills / Tags Badge */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-24 -left-8 md:-left-20 p-6 glass-card rounded-3xl shadow-2xl border border-white/80 z-20"
            >
              <div className="text-slate-800 font-bold mb-3">Our Core Skills</div>
              <div className="flex flex-wrap gap-2">
                <SkillTag label="+ UI/UX" />
                <SkillTag label="+ Motion" />
                <SkillTag label="+ Web3" />
              </div>
            </motion.div>

            {/* Bottom Right Blue Card */}
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-6 md:-right-10 p-6 bg-blue-600 rounded-3xl shadow-2xl text-white max-w-[200px] z-20"
            >
              <div className="text-3xl font-black mb-1">1500+</div>
              <div className="text-xs font-semibold opacity-80 leading-tight uppercase tracking-wider">Project Assets for Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ value, label }: { value: string, label: string }) => (
  <div className="text-center lg:text-left">
    <div className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{value}</div>
    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const BadgeWithCheck = ({ label }: { label: string }) => (
  <div className="flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50">
    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
      <CheckCircle size={14} className="text-white fill-blue-600" />
    </div>
    <span className="text-sm font-bold text-slate-800 whitespace-nowrap">{label}</span>
  </div>
);

const SkillTag = ({ label }: { label: string }) => (
  <div className="px-3 py-1.5 rounded-full border border-blue-600/20 text-blue-600 text-xs font-bold flex items-center gap-1 hover:bg-blue-50 transition-colors">
    {label}
  </div>
);

export default Hero;
