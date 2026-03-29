"use client";

import { motion } from "framer-motion";

const strokeVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const fillVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } }
};

/* Architectural Crescent - Sharp, precise lines */
export const IconCrescentV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      variants={strokeVariants}
      initial="hidden"
      whileInView="visible"
      d="M50 15C35 15 22 25 18 38C14 51 18 65 28 75C38 85 53 87 65 82C55 86 42 84 34 78C22 70 16 55 18 42C20 29 28 18 40 15" 
      stroke="currentColor" 
      strokeWidth="0.8" 
    />
    <motion.circle variants={fillVariants} initial="hidden" whileInView="visible" cx="75" cy="25" r="1.5" fill="var(--color-accent)" />
  </motion.svg>
);

/* Mosque Blueprint - Inspired by high-end architectural drawings */
export const IconMosqueV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M20 90H80" stroke="currentColor" strokeWidth="0.5" />
    <motion.rect variants={strokeVariants} initial="hidden" whileInView="visible" x="35" y="45" width="30" height="45" stroke="currentColor" strokeWidth="0.5" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M35 45C35 35 42 25 50 25C58 25 65 35 65 45" stroke="currentColor" strokeWidth="0.5" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M15 30L15 90M85 30L85 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M10 30L20 20L30 30H10Z" stroke="currentColor" strokeWidth="0.5" />
  </motion.svg>
);

/* Sacred Scripture - Minimalist scroll / line approach */
export const IconScriptureV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M30 20H70C75 20 80 25 80 30V70C80 75 75 80 70 80H30C25 80 20 75 20 70V30C20 25 25 20 30 20Z" stroke="currentColor" strokeWidth="0.5" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M30 40H70M30 50H70M30 60H50" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    <motion.path variants={fillVariants} initial="hidden" whileInView="visible" d="M70 20V80" stroke="var(--color-accent)" strokeWidth="1" />
  </motion.svg>
);

/* The Compass (Qibla) - High-tech precision like Rolls-Royce dashboard */
export const IconCompassV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle variants={strokeVariants} initial="hidden" whileInView="visible" cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M50 10V20M50 80V90M10 50H20M80 50H90" stroke="currentColor" strokeWidth="0.5" />
    <motion.path 
      animate={{ rotate: 360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      style={{ originX: "50px", originY: "50px" }}
      d="M50 30L55 50L50 70L45 50L50 30Z" 
      fill="var(--color-accent)" 
    />
    <circle cx="50" cy="50" r="2" fill="currentColor" />
  </motion.svg>
);

/* Sub-texture Geometric - Quiet and meaningful */
export const IconTextureV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
        variants={strokeVariants} 
        initial="hidden" 
        whileInView="visible" 
        d="M0 50H100M50 0V100" 
        stroke="currentColor" 
        strokeWidth="0.1" 
        opacity="0.2" 
    />
    <motion.circle 
        variants={strokeVariants} 
        initial="hidden" 
        whileInView="visible" 
        cx="50" cy="50" r="30" 
        stroke="currentColor" 
        strokeWidth="0.2" 
        strokeDasharray="2 10" 
    />
  </motion.svg>
);
