"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { IconCrescentV3 } from "@/components/ui/icons-salem-v3";
import { LuxuryButton, MagneticButton } from "@/components/ui/luxury-button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Prière", href: "/priere" },
  { name: "Enseignements", href: "/enseignements" },
  { name: "Actualités", href: "/actualites" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // On scroll effects
  const headerHeight = useTransform(scrollY, [0, 100], ["120px", "80px"]);

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.header
      style={{ height: headerHeight }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[1000] flex items-center transition-colors duration-700 px-8 md:px-12",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-primary/5" : "bg-transparent"
      )}
    >
      <div className="max-w-[1800px] w-full mx-auto flex items-center justify-between">
        {/* LOGO SECTION */}
        <Link href="/" className="group flex items-center gap-4">
          <IconCrescentV3 className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-700" />
          <div className="flex flex-col">
            <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-primary leading-none">
              Al-Salem
            </span>
            <span className="text-[8px] tracking-[0.2em] uppercase text-primary/40 mt-1">
              Mosquée &amp; Centre
            </span>
          </div>
        </Link>

        {/* NAVIGATION - DESKTOP */}
        <nav className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative group"
            >
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-500">
                {link.name}
              </span>
              <motion.div 
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-700 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-8">
          <MagneticButton>
            <LuxuryButton variant="gold" className="px-8 py-4 hidden sm:flex">
              Faire un don
            </LuxuryButton>
          </MagneticButton>
          
          {/* MOBILE MENU TRIGGER (Visual only for now) */}
          <button className="lg:hidden group flex flex-col gap-1.5 p-2">
            <div className="w-6 h-[1px] bg-primary group-hover:w-8 transition-all duration-500" />
            <div className="w-8 h-[1px] bg-primary group-hover:w-6 transition-all duration-500" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};
