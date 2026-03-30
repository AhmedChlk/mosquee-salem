"use client";

import { motion } from "framer-motion";
import { LuxuryButton, MagneticButton } from "@/components/ui/luxury-button";
import { 
  IconCrescentV3, 
  IconMosqueV3, 
  IconTextureV3 
} from "@/components/ui/icons-salem-v3";
import { SeparatorV3 } from "@/components/ui/separator-v3";
import dynamic from "next/dynamic";
import React from "react";

// Lazy loaded components for performance optimization
const EventsGrid = dynamic(() => import("@/components/events-grid").then(mod => mod.EventsGrid), { 
  loading: () => <div className="h-64 flex items-center justify-center text-primary/20 text-xs uppercase tracking-widest font-bold">Chargement des événements...</div> 
});

const DonationFlow = dynamic(() => import("@/components/donation-flow").then(mod => mod.DonationFlow), { 
  loading: () => <div className="h-96 flex items-center justify-center text-primary/20 text-xs uppercase tracking-widest font-bold">Chargement...</div> 
});

// Mock Data
const prayerTimes = [
  { name: "Fajr", time: "05:42", active: false },
  { name: "Shorooq", time: "07:15", active: false },
  { name: "Dhuhr", time: "12:45", active: true },
  { name: "Asr", time: "15:30", active: false },
  { name: "Maghrib", time: "18:12", active: false },
  { name: "Isha", time: "19:45", active: false },
];

const transitionSlow = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

export default function HomePage() {
  return (
    <div className="flex flex-col">
      
      {/* 1. HERO BANNER - MAJESTIC MANIFESTO */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden px-8 py-24">
        {/* Subtle background texture */}
        <IconTextureV3 className="absolute inset-0 w-full h-full text-primary/[0.01] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSlow}
          className="max-w-5xl w-full text-center z-10 flex flex-col items-center gap-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex justify-center"
          >
            <IconCrescentV3 className="w-12 h-12 text-accent/40" />
          </motion.div>

          <div className="space-y-8">
            <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-accent block">
              Maison Al-Salem — Sanctuaire de Lumière
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-primary leading-[0.9] tracking-tighter">
              L&apos;Éveil de l&apos;Âme <br /> 
              <span className="italic text-primary/80">dans le Silence.</span>
            </h1>

            <p className="text-lg md:text-xl font-light text-primary/50 leading-relaxed max-w-3xl mx-auto italic">
              &quot;Au-delà des murs et des voûtes, la Maison Al-Salem se dresse comme un sanctuaire de paix intérieure. 
              Nous croyons que la spiritualité s&apos;épanouit dans l&apos;épure, et que chaque détail architectural doit être 
              une invitation à la contemplation. Ici, le temps suspend son vol pour laisser place à l&apos;essentiel.&quot;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
            <MagneticButton>
              <LuxuryButton variant="primary" className="px-16 py-8">
                Explorer le Sanctuaire
              </LuxuryButton>
            </MagneticButton>
            <MagneticButton>
              <LuxuryButton variant="outline" className="px-16 py-8">
                Les Heures Sacrées
              </LuxuryButton>
            </MagneticButton>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-primary/20">Découvrir</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-accent/40 to-transparent" />
        </motion.div>
      </section>

      <SeparatorV3 />

      {/* 2. PRAYER TIMES - TEMPORAL ARCHITECTURE */}
      <section className="px-8 md:px-12 max-w-[1400px] mx-auto w-full py-32">
        <div className="grid lg:grid-cols-12 gap-24 items-center">
          
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-accent font-bold text-[10px] tracking-[0.5em] uppercase block">Temporalité</span>
              <h2 className="text-5xl md:text-6xl font-serif text-primary leading-tight">
                Le Rythme <br /> <span className="italic">du Divin.</span>
              </h2>
            </div>
            
            <p className="text-base font-light text-primary/60 leading-relaxed">
              La prière est une ancre dans le flux incessant du monde. À Al-Salem, nous honorons ces rendez-vous célestes 
              avec une précision mathématique et une dévotion profonde. Alignez votre cœur sur les cycles du soleil, 
              calculés avec soin pour notre communauté parisienne.
            </p>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="h-[1px] w-16 bg-accent" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary/40">Horaires du 30 Mars 2024</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-px bg-primary/10 border border-primary/10 shadow-2xl shadow-primary/5">
            {prayerTimes.map((prayer, i) => (
              <motion.div 
                key={prayer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                className={`p-16 flex flex-col items-center justify-center gap-6 transition-all duration-700 bg-white group cursor-default relative overflow-hidden ${prayer.active ? 'z-10 shadow-xl' : ''}`}
              >
                {prayer.active && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />
                )}
                <span className={`text-[10px] font-bold tracking-[0.4em] uppercase transition-colors duration-500 ${prayer.active ? 'text-accent' : 'text-primary/30 group-hover:text-primary/60'}`}>
                  {prayer.name}
                </span>
                <span className={`text-4xl font-serif tracking-tight ${prayer.active ? 'text-primary' : 'text-primary/60'}`}>
                  {prayer.time}
                </span>
                {prayer.active && (
                  <motion.span 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="text-[9px] font-bold tracking-widest text-accent uppercase"
                  >
                    Actuel
                  </motion.span>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <SeparatorV3 />

      {/* 3. UPCOMING EVENTS - CURATED EXPERIENCES */}
      <section className="px-8 md:px-12 py-32 bg-primary/[0.01]">
        <div className="max-w-[1400px] mx-auto space-y-32">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-primary/5 pb-12">
            <div className="space-y-6 max-w-2xl">
              <span className="text-accent font-bold text-[10px] tracking-[0.5em] uppercase block">Transmission</span>
              <h2 className="text-5xl md:text-6xl font-serif text-primary leading-[1.1]">
                Événements & <br /> <span className="italic">Rencontres.</span>
              </h2>
              <p className="text-base font-light text-primary/50 leading-relaxed pt-4">
                La Maison Al-Salem est un carrefour de savoirs et de spiritualité. Découvrez nos cycles de conférences, 
                ateliers d&apos;art et veillées de méditation conçus pour élever l&apos;esprit.
              </p>
            </div>
            <MagneticButton>
              <LuxuryButton variant="outline" className="px-12 py-6">Voir l&apos;Agenda Complet</LuxuryButton>
            </MagneticButton>
          </div>

          <EventsGrid />

        </div>
      </section>

      <SeparatorV3 />

      {/* 4. DONATION SECTION - THE ART OF GIVING */}
      <section id="donation" className="px-8 md:px-12 py-32 flex flex-col items-center bg-white">
        <div className="max-w-5xl w-full space-y-24">
          <div className="text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block"
            >
              <IconMosqueV3 className="w-20 h-20 text-accent/20 mx-auto" />
            </motion.div>
            
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif text-primary leading-tight">
                Pérenniser la <br /> <span className="italic text-accent">Noble Demeure.</span>
              </h2>
              <p className="text-lg font-light text-primary/60 leading-relaxed max-w-2xl mx-auto italic">
                &quot;Celui qui construit une mosquée pour Allah, Allah lui construit une demeure au Paradis.&quot;
                <br />
                <span className="not-italic text-sm text-primary/40 mt-4 block">
                  Votre contribution n&apos;est pas un simple don, c&apos;est une pierre angulaire de notre héritage commun. 
                  Ensemble, faisons de la Maison Al-Salem un phare de paix pour les générations futures.
                </span>
              </p>
            </div>
          </div>
          
          <div className="p-1 shadow-2xl shadow-primary/5 bg-primary/5">
            <div className="bg-white p-8 md:p-16">
              <DonationFlow />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
