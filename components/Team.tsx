
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Globe, ArrowUpRight } from 'lucide-react';

const teamMembers = [
  {
    name: "Alex Sterling",
    role: "Founding Partner / Creative Director",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Elena Rossi",
    role: "Head of Product Design",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Marcus Chen",
    role: "Senior UX Architect",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop"
  },
  {
    name: "Sarah Jenkins",
    role: "Engineering Lead",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-32 relative overflow-hidden bg-white/40">
      {/* Background accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-blue-600 uppercase tracking-[0.4em] mb-4"
            >
              The Collective
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1]"
            >
              Elite Minds, <br />
              <span className="text-gradient">United Vision.</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block pb-4"
          >
            <p className="text-slate-500 text-lg max-w-xs font-medium italic">
              "We hire the top 1% of talent to ensure your project receives nothing but masterpieces."
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} index={idx} />
          ))}

          {/* Join Us Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative h-full min-h-[420px] glass-card rounded-[40px] border-dashed border-blue-200 flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-xl shadow-blue-200">
              <ArrowUpRight size={32} />
            </div>
            <h4 className="text-2xl font-black text-slate-900 mb-2">Join the Force</h4>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              We're always looking for elite designers and technical architects.
            </p>
            <button className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
              Apply Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }: { member: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -15 }}
      className="group relative"
    >
      <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl bg-slate-200 mb-6">
        <img 
          src={member.img} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover Social Bar */}
        <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
          <TeamSocialIcon icon={<Linkedin size={16} />} />
          <TeamSocialIcon icon={<Twitter size={16} />} />
        </div>
      </div>

      {/* Floating Info Panel */}
      <div className="absolute -bottom-4 left-6 right-6 p-6 glass-card rounded-[32px] border-white/60 shadow-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <h4 className="text-xl font-black text-slate-900 tracking-tight leading-tight">{member.name}</h4>
        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1 opacity-80">{member.role}</p>
      </div>
    </motion.div>
  );
};

const TeamSocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-10 h-10 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
    {icon}
  </div>
);

export default Team;
