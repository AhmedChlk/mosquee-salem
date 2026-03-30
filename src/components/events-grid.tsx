"use client";

import React from "react";
import { motion } from "framer-motion";

const events = [
  {
    title: "Les Nuits de l'Excellence",
    date: "Mars — Avril 2024",
    category: "Spiritualité",
    image: "/event-1.jpg",
    description: "Plongez dans l'intimité du Sacré à travers nos veillées spirituelles. Une quête de sens guidée par la récitation mélodieuse et la méditation profonde, pour retrouver la paix intérieure au cœur de notre sanctuaire."
  },
  {
    title: "L'Art du Trait Divin",
    date: "15 Avril 2024",
    category: "Art & Culture",
    image: "/event-2.jpg",
    description: "Une exploration contemplative de la calligraphie arabe, où chaque courbe devient une prière. Apprenez à tracer l'invisible et à donner corps au Verbe sous la direction de maîtres renommés de l'art traditionnel."
  },
  {
    title: "Savoir & Héritage",
    date: "Cycles Hebdomadaires",
    category: "Éducation",
    image: "/event-3.jpg",
    description: "Forger les esprits de demain sur l'enclume des valeurs millénaires. Nos ateliers éducatifs allient rigueur intellectuelle et bienveillance spirituelle pour accompagner l'épanouissement de la nouvelle génération."
  }
];

export const EventsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {events.map((event, i) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="group flex flex-col h-full bg-white border border-primary/5 hover:border-accent/20 transition-all duration-700"
        >
          {/* Image Container with strict Aspect Ratio */}
          <div className="relative aspect-[4/5] overflow-hidden bg-primary/[0.02]">
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent z-10" />
            
            {/* Luxury Tag */}
            <div className="absolute top-8 left-8 z-20">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase bg-white/90 backdrop-blur-sm px-5 py-2.5 text-primary border border-primary/5">
                {event.category}
              </span>
            </div>

            {/* Placeholder for content - will scale on hover */}
            <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-[2s] ease-out">
               <div className="w-12 h-12 rounded-full border border-primary/5 flex items-center justify-center">
                 <div className="w-1 h-1 rounded-full bg-accent/40" />
               </div>
            </div>
          </div>
          
          {/* Content Area - p-8 and justify-between */}
          <div className="flex flex-col justify-between flex-grow p-8 space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] block">
                {event.date}
              </span>
              <h3 className="text-3xl font-serif text-primary leading-[1.1] transition-all duration-500 group-hover:text-accent">
                {event.title}
              </h3>
              <p className="text-sm font-light text-primary/60 leading-relaxed italic">
                {event.description}
              </p>
            </div>
            
            <div className="pt-4 border-t border-primary/5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary/30 group-hover:text-primary transition-colors">En savoir plus</span>
              <div className="w-8 h-[1px] bg-primary/10 group-hover:w-12 group-hover:bg-accent transition-all duration-500" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
