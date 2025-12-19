
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Codepen, Terminal, Fingerprint, Sparkles, Zap, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: <Layout />,
    title: "UI/UX Strategy",
    description: "Deep user research and aesthetic design systems that convert visitors into loyal customers.",
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    icon: <Codepen />,
    title: "Web3 Ecosystems",
    description: "Specialized design for dApps, wallets, and decentralized protocols with ultra-clean interfaces.",
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    icon: <Terminal />,
    title: "Product Design",
    description: "End-to-end product development focusing on scalability, usability, and technical performance.",
    color: "text-purple-600",
    bg: "bg-purple-50"
  },
  {
    icon: <Fingerprint />,
    title: "Brand Identity",
    description: "Creating premium digital identities that stand out in the competitive startup landscape.",
    color: "text-sky-600",
    bg: "bg-sky-50"
  },
  {
    icon: <Sparkles />,
    title: "Motion & 3D",
    description: "Cinematic animations and 3D assets that bring your digital products to life with realism.",
    color: "text-pink-600",
    bg: "bg-pink-50"
  },
  {
    icon: <Zap />,
    title: "SaaS Design",
    description: "Focusing on dashboard clarity, user onboarding flows, and long-term engagement metrics.",
    color: "text-amber-600",
    bg: "bg-amber-50"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(219,234,254,0.3)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight"
          >
            Digital craftsmanship that <br /> <span className="text-gradient">scales brands.</span>
          </motion.h3>
          <p className="text-slate-500 font-medium text-lg">We combine psychological triggers with elite aesthetics to drive growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative p-10 glass-card rounded-[48px] border-white/60 shadow-xl transition-all duration-500 overflow-hidden"
    >
      {/* Animated hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-50/0 group-hover:from-blue-50/50 transition-all duration-500" />
      
      <div className={`relative z-10 w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
        {React.cloneElement(service.icon, { size: 32, className: service.color })}
      </div>
      
      <div className="relative z-10">
        <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {service.title}
        </h4>
        <p className="text-slate-500 leading-relaxed font-medium">
          {service.description}
        </p>
      </div>
      
      <div className="relative z-10 mt-10 pt-8 border-t border-slate-100/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-blue-600 transition-colors">Explore Scope</span>
          <ArrowUpRight size={14} className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
          <Zap size={16} />
        </div>
      </div>

      {/* Glass reflection effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
    </motion.div>
  );
};

export default Services;
