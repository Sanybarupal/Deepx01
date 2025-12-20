
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Layers, Shield, Zap, Box, Compass, Code2, Cloud } from 'lucide-react';

const techGroups = [
  {
    category: "Frontend",
    icon: <Globe size={24} />,
    items: ["React", "Next.js", "Three.js", "Tailwind"],
    color: "from-blue-400 to-cyan-400"
  },
  {
    category: "Design",
    icon: <Layers size={24} />,
    items: ["Figma", "Framer", "Adobe CC", "Blender"],
    color: "from-indigo-400 to-purple-400"
  },
  {
    category: "Backend",
    icon: <Database size={24} />,
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL"],
    color: "from-emerald-400 to-teal-400"
  },
  {
    category: "Infrastructure",
    icon: <Cpu size={24} />,
    items: ["AWS", "Vercel", "Docker", "Kubernetes"],
    color: "from-orange-400 to-rose-400"
  }
];

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-32 relative overflow-hidden bg-slate-50/50">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[140px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4"
          >
            Engineering Power
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-tight"
          >
            The Tech <span className="text-gradient">Arsenal.</span>
          </motion.h3>
          <p className="text-slate-500 mt-6 text-lg font-medium">We build with future-proof technologies that ensure scalability and performance.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {techGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 glass-card rounded-[40px] border-white/80 hover:border-blue-200 transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center gap-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* 3D Icon Container */}
                <div className="relative w-20 h-20 shrink-0 perspective-1000">
                  <motion.div 
                    whileHover={{ rotateY: 20, rotateX: -10, translateZ: 20 }}
                    className="w-full h-full flex items-center justify-center relative transform-style-3d transition-transform duration-500"
                  >
                    {/* Background Layers for 3D effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${group.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity`} />
                    <div className="absolute inset-2 bg-white rounded-2xl shadow-lg border border-white" />
                    <div className={`absolute -bottom-1 -right-1 w-full h-full rounded-2xl bg-slate-200 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform`} />
                    
                    {/* The Icon */}
                    <div className="relative z-10 text-slate-800 group-hover:text-blue-600 transition-colors transform translate-z-10">
                      {/* Fixed: Added <any> to React.ReactElement to allow cloning with custom icon props */}
                      {React.cloneElement(group.icon as React.ReactElement<any>, { size: 32, strokeWidth: 2.5 })}
                    </div>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-2">{group.category}</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map(tech => (
                      <span key={tech} className="px-4 py-1.5 bg-white/60 border border-slate-100 rounded-xl text-sm font-bold text-slate-700 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden lg:block h-[600px]">
            {/* Central 3D Visualizer */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Spinning Rings */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[450px] h-[450px] border-[1.5px] border-dashed border-blue-200/60 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-[350px] h-[350px] border-[1.5px] border-dashed border-indigo-200/60 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[550px] h-[550px] border-[1px] border-blue-100/40 rounded-full"
              />
              
              {/* Central Core */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="w-56 h-56 glass-card rounded-[56px] shadow-2xl flex items-center justify-center relative z-20 border-white group"
              >
                <div className="absolute inset-0 bg-blue-600/5 rounded-[56px] animate-pulse" />
                <motion.div
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="p-8 bg-blue-600 rounded-3xl shadow-[0_20px_40px_rgba(37,99,235,0.4)] text-white"
                >
                  <Zap size={64} fill="currentColor" />
                </motion.div>
              </motion.div>

              {/* Floating 3D Elements */}
              <FloatingOrb icon={<Box className="text-blue-400" />} top="15%" left="20%" delay={0} />
              <FloatingOrb icon={<Code2 className="text-indigo-400" />} top="75%" left="15%" delay={1.5} />
              <FloatingOrb icon={<Cloud className="text-cyan-400" />} top="45%" left="85%" delay={0.5} />
              <FloatingOrb icon={<Compass className="text-purple-400" />} top="10%" left="75%" delay={2} />
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .translate-z-10 { transform: translateZ(10px); }
      `}</style>
    </section>
  );
};

const FloatingOrb = ({ icon, top, left, delay }: { icon: any, top: string, left: string, delay: number }) => (
  <motion.div
    animate={{ 
      y: [0, -30, 0],
      x: [0, 10, 0],
      rotate: [0, 15, 0]
    }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute glass-card w-20 h-20 rounded-[24px] flex items-center justify-center shadow-2xl border border-white/60 z-10 backdrop-blur-xl"
    style={{ top, left }}
  >
    {/* Fixed: Added <any> to React.ReactElement to allow cloning with custom icon props */}
    {React.cloneElement(icon as React.ReactElement<any>, { size: 28 })}
  </motion.div>
);

export default TechStack;
