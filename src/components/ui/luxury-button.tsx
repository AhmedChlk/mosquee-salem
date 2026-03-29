"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";

interface LuxuryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "gold";
  children: React.ReactNode;
}

export const LuxuryButton = ({ variant = "primary", className, children, ...props }: LuxuryButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const variants = {
    primary: "bg-primary text-primary-foreground",
    outline: "bg-transparent text-primary border-primary/10 hover:border-primary/40",
    gold: "bg-accent/10 text-primary border-accent/30 hover:bg-accent/20",
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.995 }}
      className={cn(
        "relative overflow-hidden group px-12 py-6 font-sans text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-1000 border border-transparent",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* Subtle Spotlight (Rolls-Royce Interior Lighting inspired) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(100px circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`
          ),
        }}
      />

      {/* Thin Line Animation (Saint Laurent Detail) */}
      <motion.div 
        className="absolute top-0 left-0 h-full w-[1px] bg-accent/40"
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: "circOut" }}
      />

      <span className="relative z-10 flex items-center justify-center gap-6">
        {children}
        <motion.div 
            className="w-8 h-[1px] bg-current opacity-20 group-hover:w-12 group-hover:opacity-100 transition-all duration-700 ease-[0.22, 1, 0.36, 1]"
        />
      </span>

      {/* Reveal Border Effect */}
      <div className="absolute inset-0 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.button>
  );
};

export const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.2 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.15);
    y.set((clientY - centerY) * 0.15);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      className={cn("relative group inline-block", className)}
    >
      {children}
    </motion.div>
  );
};
