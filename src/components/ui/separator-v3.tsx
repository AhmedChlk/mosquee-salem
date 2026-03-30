"use client";

import React from "react";
import { motion } from "framer-motion";

export const SeparatorV3 = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center w-full py-16 opacity-40 ${className || ""}`}>
      <div className="h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent to-accent" />
      
      <motion.svg 
        initial={{ rotate: -90, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mx-6 text-accent"
      >
        <path 
          d="M50 15L55 45L85 50L55 55L50 85L45 55L15 50L45 45Z" 
          stroke="currentColor" 
          strokeWidth="1" 
        />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
        <circle cx="50" cy="50" r="2" fill="currentColor" />
      </motion.svg>

      <div className="h-[1px] w-full max-w-[200px] bg-gradient-to-l from-transparent to-accent" />
    </div>
  );
};
