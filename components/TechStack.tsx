
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Layers, Shield, Zap } from 'lucide-react';

const techGroups = [
  {
    category: "Frontend",
    icon: <Globe size={20} />,
    items: ["React", "Next.js", "Three.js", "Tailwind"]
  },
  {
    category: "Design",
    icon: <Layers size={20} />,
    items: ["Figma", "Framer", "Adobe CC", "Blender"]
  },
  {
    category: "Backend",
    icon: <Database size={20} />,
    items: ["Node.js", "PostgreSQL", "Redis", "GraphQL"]
  },
  {
    category: "Infrastructure",
    icon: <Cpu size={20} />,
    items: ["AWS", "Vercel", "Docker", "Kubernetes"]
  }
];

const TechStack: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Decorative 3D background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4"
          >
            Tech Arsenal
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black text-slate-900 leading-tight"
          >
            Powering the <span className="text-gradient">impossible.</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {techGroups.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 glass-card rounded-[32px] border-white/60 hover:border-blue-200 transition-all flex items-center gap-6"
              >
                <div className="w-14 h-14 bg-white shadow-xl rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {group.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-3">{group.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/50 border border-slate-100 rounded-full text-xs font-bold text-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden lg:block">
            {/* 3D Visual representation */}
            <div className="relative aspect-square flex items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-blue-200 rounded-full opacity-40"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-20 border-[1px] border-dashed border-indigo-200 rounded-full opacity-40"
              />
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="w-48 h-48 bg-white glass-card rounded-[40px] shadow-2xl flex items-center justify-center relative z-10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600/5 animate-pulse" />
                <Zap size={64} className="text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
              </motion.div>

              {/* Floating orbit icons */}
              <FloatingIcon icon={<Cpu className="text-indigo-400" />} top="10%" left="20%" delay={0} />
              <FloatingIcon icon={<Shield className="text-blue-400" />} top="70%" left="15%" delay={1} />
              <FloatingIcon icon={<Globe className="text-sky-400" />} top="40%" left="80%" delay={2} />
              <FloatingIcon icon={<Layers className="text-blue-500" />} top="15%" left="75%" delay={0.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingIcon = ({ icon, top, left, delay }: { icon: any, top: string, left: string, delay: number }) => (
  <motion.div
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className="absolute glass-card w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-white"
    style={{ top, left }}
  >
    {icon}
  </motion.div>
);

export default TechStack;
