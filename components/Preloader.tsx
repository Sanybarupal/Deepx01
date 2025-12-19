
import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]" />
        
        {/* 3D-style Logo Animation */}
        <motion.div
          animate={{
            rotateY: [0, 360],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 bg-blue-600 rounded-[24px] flex items-center justify-center text-white font-black text-4xl shadow-[0_20px_40px_rgba(37,99,235,0.4)] relative z-10"
        >
          D
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center gap-2"
        >
          <span className="text-xl font-bold text-slate-900 tracking-tight">DeepX</span>
          <span className="text-xl font-bold text-blue-600 tracking-tight">Design</span>
        </motion.div>
        
        {/* Progress bar effect */}
        <div className="mt-4 w-32 h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-blue-600"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
