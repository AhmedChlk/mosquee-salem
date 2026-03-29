"use client";

import { motion } from "framer-motion";
import { LuxuryButton, MagneticButton } from "@/components/ui/luxury-button";
import { 
  IconCrescentV3, 
  IconMosqueV3, 
  IconTextureV3 
} from "@/components/ui/icons-salem-v3";
import React from "react";

// Mock Data
const prayerTimes = [
  { name: "Fajr", time: "05:42", active: false },
  { name: "Shorooq", time: "07:15", active: false },
  { name: "Dhuhr", time: "12:45", active: true },
  { name: "Asr", time: "15:30", active: false },
  { name: "Maghrib", time: "18:12", active: false },
  { name: "Isha", time: "19:45", active: false },
];

const news = [
  {
    title: "Conférence Spéciale : La Paix Intérieure",
    date: "24 Mars 2024",
    category: "Événement",
    image: "/news-1.jpg", // Placeholder logic in CSS if needed
    excerpt: "Une exploration profonde de la sérénité à travers les textes sacrés et la méditation."
  },
  {
    title: "Ouverture des Inscriptions École Arabe",
    date: "15 Mars 2024",
    category: "Éducation",
    excerpt: "Les inscriptions pour le prochain semestre sont désormais ouvertes pour tous les niveaux."
  },
  {
    title: "Projet d'Expansion : Nouveau Centre Culturel",
    date: "10 Mars 2024",
    category: "Projet",
    excerpt: "Découvrez les plans de notre futur espace dédié aux arts et à la culture islamique."
  }
];

const transitionSlow = { duration: 1.5, ease: [0.22, 1, 0.36, 1] };

export default function HomePage() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      
      {/* 1. HERO BANNER - SILENT LUXURY */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden px-8">
        {/* Subtle background texture */}
        <IconTextureV3 className="absolute inset-0 w-full h-full text-primary/[0.01] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionSlow}
          className="text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mb-12 flex justify-center"
          >
            <IconCrescentV3 className="w-16 h-16 text-accent/60" />
          </motion.div>

          <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-accent mb-6 block">
            Bienvenue à la Maison Al-Salem
          </span>
          
          <h1 className="text-6xl md:text-9xl font-serif text-primary leading-tight tracking-tighter mb-12">
            La Sérénité <br /> 
            <span className="italic">par l&apos;Essentiel.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <MagneticButton>
              <LuxuryButton variant="primary" className="px-16">
                Découvrir la Mosquée
              </LuxuryButton>
            </MagneticButton>
            <MagneticButton>
              <LuxuryButton variant="outline" className="px-16">
                Horaires de Prière
              </LuxuryButton>
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      {/* 2. PRAYER TIMES - ARCHITECTURAL PRECISION */}
      <section className="px-8 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 space-y-8">
            <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase block">Aujourd&apos;hui</span>
            <h2 className="text-5xl font-serif text-primary leading-none">
              Les Temps de <br /> <span className="italic">Connexion.</span>
            </h2>
            <p className="text-sm font-light text-primary/40 leading-relaxed max-w-xs">
              Alignez votre journée sur le rythme sacré. Précision calculée pour la ville de Paris.
            </p>
            <div className="h-[1px] w-12 bg-accent/30" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-px bg-primary/5 border border-primary/5">
            {prayerTimes.map((prayer, i) => (
              <motion.div 
                key={prayer.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className={`p-12 flex flex-col items-center justify-center gap-4 transition-all duration-700 bg-background hover:bg-primary/5 group ${prayer.active ? 'ring-1 ring-accent/20' : ''}`}
              >
                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${prayer.active ? 'text-accent' : 'text-primary/30 group-hover:text-primary/60'}`}>
                  {prayer.name}
                </span>
                <span className={`text-3xl font-serif tracking-tight ${prayer.active ? 'text-primary font-bold' : 'text-primary/60'}`}>
                  {prayer.time}
                </span>
                {prayer.active && (
                  <motion.div 
                    layoutId="active-prayer"
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                  />
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. LATEST NEWS - EDITORIAL GRID */}
      <section className="px-8 md:px-12 py-32 bg-primary/2">
        <div className="max-w-[1400px] mx-auto space-y-24">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <span className="text-accent font-bold text-[10px] tracking-[0.4em] uppercase block">Actualités</span>
              <h2 className="text-5xl font-serif text-primary leading-none">
                Vie de la <span className="italic">Communauté.</span>
              </h2>
            </div>
            <LuxuryButton variant="outline" className="px-12">Voir tout</LuxuryButton>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {news.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1 }}
                className="group cursor-pointer flex flex-col gap-8 p-8 border border-primary/5 hover:border-accent/20 transition-all duration-700"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-accent">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-medium uppercase text-primary/30">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif leading-tight text-primary group-hover:text-accent transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-sm font-light text-primary/50 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="pt-4 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary group-hover:translate-x-2 transition-transform duration-500 inline-block">
                    Lire la suite →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CALL TO ACTION - MINIMALIST */}
      <section className="px-8 md:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-2xl space-y-12">
          <IconMosqueV3 className="w-16 h-16 text-accent/20 mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
            Soutenez votre <br /> <span className="italic text-accent">Lieu de Paix.</span>
          </h2>
          <p className="text-sm font-light text-primary/40 leading-relaxed">
            Chaque geste contribue à faire vivre ce projet unique au service de tous. 
            Découvrez nos projets en cours et comment vous pouvez aider.
          </p>
          <MagneticButton>
            <LuxuryButton variant="primary" className="px-24">Contribuer maintenant</LuxuryButton>
          </MagneticButton>
        </div>
      </section>

    </div>
  );
}
