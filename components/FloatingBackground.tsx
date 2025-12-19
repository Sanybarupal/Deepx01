
import React from 'react';
import { motion } from 'framer-motion';

const FloatingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Soft Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-40 animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-50 rounded-full blur-[100px] opacity-50" />
      
      {/* Floating 3D Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-32 h-32 glass-card rounded-full shadow-2xl flex items-center justify-center border border-white/40"
      >
        <div className="w-16 h-16 bg-blue-400 rounded-full blur-2xl opacity-20" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[10%] w-24 h-24 glass-card rounded-xl rotate-12 shadow-2xl flex items-center justify-center"
      >
        <div className="w-12 h-12 bg-indigo-300 rounded-full blur-xl opacity-30" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border-[1px] border-blue-200/20 rounded-full"
      />
    </div>
  );
};

export default FloatingBackground;
