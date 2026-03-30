"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LuxuryButton } from "@/components/ui/luxury-button";
import { Input } from "@/components/ui/input";
import { IconCrescentV3 } from "@/components/ui/icons-salem-v3";

const steps = ["Montant", "Détails", "Confirmation"];
const amounts = [20, 50, 100, 200];

export const DonationFlow = () => {
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState<number | string>(50);
  const [isCustom, setIsCustom] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSuccess, setIsSuccess] = useState(false);

  const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleDonate = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center space-y-8 py-12"
      >
        <div className="flex justify-center">
          <motion.div
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <IconCrescentV3 className="w-20 h-20 text-accent" />
          </motion.div>
        </div>
        <h3 className="text-4xl font-serif text-primary">Merci pour votre générosité.</h3>
        <p className="text-primary/50 font-light max-w-md mx-auto">
          Votre contribution aide à maintenir ce lieu de paix et de savoir. 
          Un reçu a été envoyé à votre adresse email.
        </p>
        <LuxuryButton variant="outline" onClick={() => { setIsSuccess(false); setStep(0); }} className="px-12">
          Retour à l&apos;accueil
        </LuxuryButton>
      </motion.div>
    );
  }

  return (
    <div className="max-w-xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="flex justify-between mb-12 px-4">
        {steps.map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div 
              className={`h-[2px] w-12 transition-colors duration-700 ${i <= step ? 'bg-accent' : 'bg-primary/5'}`} 
            />
            <span className={`text-[9px] uppercase tracking-widest font-bold ${i === step ? 'text-accent' : 'text-primary/20'}`}>
              {s}
            </span>
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 space-y-8">
              
              {step === 0 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    {amounts.map((a) => (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        key={a}
                        onClick={() => { setAmount(a); setIsCustom(false); }}
                        className={`py-8 text-2xl font-serif transition-all duration-500 border ${amount === a && !isCustom ? 'border-accent text-accent bg-accent/5' : 'border-primary/5 text-primary/40 hover:border-primary/20'}`}
                      >
                        {a}€
                      </motion.button>
                    ))}
                  </div>
                  <div className="relative">
                    <Input 
                      placeholder="Montant personnalisé" 
                      type="number"
                      value={isCustom ? amount : ""}
                      onChange={(e) => { setAmount(e.target.value); setIsCustom(true); }}
                      className="text-center text-xl font-serif h-16"
                    />
                    {isCustom && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-accent">€</span>}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">Nom Complet</label>
                    <Input 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/40">Email</label>
                    <Input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com" 
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 text-center py-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-accent">Récapitulatif</span>
                    <div className="text-6xl font-serif text-primary italic">
                      {amount}€
                    </div>
                  </div>
                  <div className="h-[1px] w-12 bg-accent/20 mx-auto" />
                  <div className="text-sm font-light text-primary/60">
                    Soutien de <span className="text-primary font-medium">{formData.name || "Donateur Anonyme"}</span>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                {step > 0 && (
                  <LuxuryButton variant="outline" onClick={prevStep} className="flex-1">
                    Retour
                  </LuxuryButton>
                )}
                <LuxuryButton 
                  variant="primary" 
                  onClick={step === 2 ? handleDonate : nextStep} 
                  className="flex-1"
                >
                  {step === 2 ? "Confirmer le don" : "Suivant"}
                </LuxuryButton>
              </div>

            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
