"use client";

import React from "react";
import Link from "next/link";
import { IconCrescentV3, IconMosqueV3 } from "@/components/ui/icons-salem-v3";

const footerLinks = {
  mosquee: [
    { name: "La Mosquée", href: "/mosquee" },
    { name: "Horaires de Prière", href: "/priere" },
    { name: "Services", href: "/services" },
    { name: "Bibliothèque", href: "/bibliotheque" },
  ],
  education: [
    { name: "École Arabe", href: "/ecole-arabe" },
    { name: "Cours de Coran", href: "/coran" },
    { name: "Conférences", href: "/conferences" },
    { name: "Jeunesse", href: "/jeunesse" },
  ],
  legal: [
    { name: "Mentions Légales", href: "/legal" },
    { name: "Confidentialité", href: "/privacy" },
    { name: "Dons &amp; Fiscalité", href: "/dons-fiscalite" },
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-32 px-8 md:px-12 border-t border-white/5">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 md:gap-24">
        
        {/* BRAND SECTION */}
        <div className="lg:col-span-4 space-y-12">
          <div className="flex items-center gap-6">
            <IconCrescentV3 className="w-12 h-12 text-accent" />
            <div className="flex flex-col">
              <span className="text-xl font-serif italic tracking-tight">Al-Salem</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Lumière &amp; Paix</span>
            </div>
          </div>
          
          <p className="text-sm font-light leading-relaxed opacity-40 max-w-sm">
            Un espace sacré dédié à la spiritualité, à l&apos;éducation et au vivre-ensemble. 
            Inspiré par la tradition, tourné vers l&apos;avenir.
          </p>

          <div className="flex gap-8">
            {["Instagram", "Facebook", "Youtube"].map((social) => (
              <Link key={social} href="#" className="text-[10px] font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors duration-500">
                {social}
              </Link>
            ))}
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="lg:col-span-2 space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">L&apos;Institution</span>
          <ul className="space-y-4">
            {footerLinks.mosquee.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-light opacity-60 hover:opacity-100 hover:text-accent transition-all duration-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Éducation</span>
          <ul className="space-y-4">
            {footerLinks.education.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm font-light opacity-60 hover:opacity-100 hover:text-accent transition-all duration-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT & LOCATION */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent">Nous Rendre Visite</span>
            <div className="space-y-4">
              <p className="text-lg font-serif italic">12 Rue de l&apos;Espace, 75000 Paris</p>
              <div className="flex flex-col gap-2">
                <a href="mailto:contact@mosquee-salem.fr" className="text-sm font-light opacity-60 hover:opacity-100 transition-opacity underline decoration-accent/20 underline-offset-8">
                  contact@mosquee-salem.fr
                </a>
                <span className="text-sm font-light opacity-60">+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-12 bg-accent/20" />

          <p className="text-[9px] uppercase tracking-[0.3em] opacity-30">
            © 2024 Maison Al-Salem. Tous droits réservés.
          </p>
        </div>

      </div>
      
      {/* Decorative Blueprint Icon in background */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none translate-x-1/4 translate-y-1/4">
        <IconMosqueV3 className="w-[800px] h-[800px]" />
      </div>
    </footer>
  );
};
