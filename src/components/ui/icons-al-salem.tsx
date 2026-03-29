"use client";

import { motion } from "framer-motion";

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      duration: 2, 
      ease: "easeInOut" 
    } 
  }
};

export const IconCrescent = ({ className }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <motion.path 
      variants={pathVariants}
      d="M50 10C35.5 10 22.5 18.5 16.5 31.5C10.5 44.5 12.5 59.5 21.5 70.5C30.5 81.5 45.5 85.5 59 80.5C51 84.5 41.5 84.5 33.5 80.5C21.5 74.5 14.5 61.5 16.5 48.5C18.5 35.5 28.5 24.5 41.5 21.5C44.5 20.8 47.5 20.5 50.5 20.5" 
      stroke="currentColor"
      strokeWidth="0.5"
    />
    <motion.path 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      d="M50 10C35.5 10 22.5 18.5 16.5 31.5C10.5 44.5 12.5 59.5 21.5 70.5C30.5 81.5 45.5 85.5 59 80.5C51 84.5 41.5 84.5 33.5 80.5C21.5 74.5 14.5 61.5 16.5 48.5C18.5 35.5 28.5 24.5 41.5 21.5C44.5 20.8 47.5 20.5 50.5 20.5C50 17 50 13.5 50 10Z" 
      fill="currentColor"
    />
    <motion.circle 
      cx="70" cy="30" r="2" 
      fill="var(--color-accent)"
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </motion.svg>
);

export const IconMinaret = ({ className }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    whileInView="visible"
  >
    <motion.rect variants={pathVariants} x="42" y="30" width="16" height="60" stroke="currentColor" strokeWidth="1" />
    <motion.path variants={pathVariants} d="M35 30L50 10L65 30H35Z" stroke="currentColor" strokeWidth="1" />
    <motion.path 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1.5, ease: "circOut" }}
        style={{ originY: 1 }}
        d="M44 32h12v56H44z" 
        fill="currentColor" 
        opacity="0.2" 
    />
  </motion.svg>
);

export const GeometricPattern = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M50 0L61.2 38.8L100 50L61.2 61.2L50 100L38.8 61.2L0 50L38.8 38.8L50 0Z" 
      fill="currentColor" 
      fillOpacity="0.05"
    />
    <motion.path 
      animate={{ 
        rotate: [0, 90],
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      style={{ originX: "50px", originY: "50px" }}
      d="M50 15L58.5 41.5L85 50L58.5 58.5L50 85L41.5 58.5L15 50L41.5 41.5L50 15Z" 
      stroke="currentColor" 
      strokeWidth="0.5"
      strokeDasharray="4 4"
    />
  </svg>
);
