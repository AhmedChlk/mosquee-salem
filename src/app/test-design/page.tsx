"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { LuxuryButton, MagneticButton } from "@/components/ui/luxury-button";
import { 
  IconCrescentV3, 
  IconMosqueV3, 
  IconScriptureV3, 
  IconCompassV3, 
  IconTextureV3 
} from "@/components/ui/icons-salem-v3";
import React, { useState, useEffect } from "react";

// Timings de luxe : Rapide pour l'action, lent pour la contemplation
const transitionFast = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
const transitionSlow = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

export default function LuxuryExperiencePage() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  // Le parallaxe ne commence qu'après 100px de scroll pour ne pas tuer l'entrée
  const opacity = useTransform(scrollY, [100, 400], [1, 0]);
  const yHero = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-background min-h-[400vh] selection:bg-accent/30 selection:text-primary">
      
      {/* OVERLAY: FINE TECHNICAL GRID (STYLISME) */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* SECTION 1: THE SNAP OPENING (SAINT LAURENT / GUCCI) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-8">
        <motion.div 
            style={{ opacity, y: yHero }} 
            className="text-center flex flex-col items-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-24"
            >
                <IconCrescentV3 className="w-16 h-16 text-accent" />
            </motion.div>

            <div className="relative mb-12">
                <motion.div
                    initial={{ opacity: 0, letterSpacing: "1.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.8em" }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="text-[10px] font-bold uppercase text-primary/40 mb-4"
                >
                    Maison Al-Salem
                </motion.div>
                
                <h1 className="text-[14vw] md:text-[10rem] font-serif text-primary leading-[0.75] tracking-[-0.05em] overflow-hidden">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        SILENCE
                    </motion.span>
                </h1>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="space-y-12 flex flex-col items-center"
            >
                <p className="max-w-xs font-sans text-[11px] font-medium leading-relaxed tracking-[0.2em] uppercase text-primary/50">
                    L&apos;architecture du sacré <br /> par le minimalisme.
                </p>
                
                <div className="h-16 w-[1px] bg-gradient-to-b from-accent to-transparent" />
                
                <MagneticButton>
                    <LuxuryButton variant="primary" className="border-l-0 border-b-[1px] border-accent px-20">
                        Explorer
                    </LuxuryButton>
                </MagneticButton>
            </motion.div>
        </motion.div>

        {/* Floating Reference (Technical) */}
        <div className="absolute right-12 bottom-12 text-[9px] font-mono text-primary/20 uppercase tracking-widest text-right">
            Model: v3.0.4 <br />
            Status: Eternal
        </div>
      </section>

      {/* SECTION 2: THE BLUEPRINT COLLECTION (HIGH-FIDELITY ICONS) */}
      <section className="py-64 px-8 md:px-24">
        <div className="max-w-7xl mx-auto space-y-48">
            <div className="grid md:grid-cols-2 gap-24 items-end">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={transitionSlow}
                    className="space-y-8"
                >
                    <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase">01 / Collection</span>
                    <h2 className="text-6xl font-serif text-primary leading-none">
                        Lignes de <br /> <span className="italic">Lumière.</span>
                    </h2>
                </motion.div>
                <p className="font-sans text-sm font-light leading-loose text-primary/60 max-w-sm">
                    Une série d&apos;icônes conçue comme des bijoux techniques. 
                    Chaque tracé est une intention, chaque vide une respiration.
                </p>
            </div>

            {/* Icon Showcase - Clean & Sharp */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-primary/5 border border-primary/5">
                {[
                    { Icon: IconCrescentV3, label: "Astre" },
                    { Icon: IconMosqueV3, label: "Sanctuaire" },
                    { Icon: IconScriptureV3, label: "Sagesse" },
                    { Icon: IconCompassV3, label: "Direction" }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
                        className="p-16 flex flex-col items-center gap-12 group transition-colors duration-700"
                    >
                        <item.Icon className="w-20 h-20 text-primary/80 group-hover:text-accent transition-colors duration-700" />
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-30 group-hover:opacity-100 transition-opacity">
                            {item.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 3: EDITORIAL GRID (SAINT LAURENT VIBE) */}
      <section className="bg-primary text-white py-64 overflow-hidden">
        <div className="px-8 md:px-24 grid md:grid-cols-12 gap-24">
            <div className="md:col-span-4 space-y-12">
                <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase">02 / Services</span>
                <h3 className="text-7xl font-serif tracking-tighter italic">L&apos;Essentiel.</h3>
                <div className="w-12 h-[1px] bg-accent" />
            </div>

            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                    { title: "Enseignement", desc: "La transmission du savoir dans un écrin de pureté." },
                    { title: "Engagement", desc: "Porter la vision Al-Salem au-delà des murs." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ...transitionFast, delay: i * 0.2 }}
                        className="space-y-8 p-12 border border-white/5 hover:border-white/20 transition-all duration-700"
                    >
                        <h4 className="text-3xl font-serif">{item.title}</h4>
                        <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                        <LuxuryButton variant="outline" className="border-white/10 text-white hover:border-accent w-full">
                            Consulter
                        </LuxuryButton>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* SECTION 4: THE MANIFESTO (RITZ PARIS FEEL) */}
      <section className="h-screen flex items-center justify-center text-center px-8 relative">
        <IconTextureV3 className="absolute inset-0 w-full h-full text-primary/[0.02] pointer-events-none" />
        
        <div className="space-y-16 relative z-10">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={transitionSlow}
                className="text-5xl md:text-8xl font-serif text-primary leading-[1.1] max-w-5xl"
            >
                La beauté est une <br /> <span className="text-accent italic">forme de prière.</span>
            </motion.h2>
            <div className="flex justify-center gap-12">
                <MagneticButton>
                    <LuxuryButton variant="gold" className="px-24 bg-accent/5 hover:bg-accent/10">Soutenir</LuxuryButton>
                </MagneticButton>
            </div>
        </div>
      </section>

    </div>
  );
}
