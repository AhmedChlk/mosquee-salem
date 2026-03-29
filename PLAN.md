# Plan de Développement : Mosquée Al-Salem (Premium Edition)

Ce document sert de fil conducteur pour l'implémentation de l'interface "Luxury Islamic". Les tâches seront cochées au fur et à mesure de l'avancement.

## Vision Design (Synthèse Apple/Nike)
- **Minimalisme Radical :** Espaces blancs généreux, typographie 'Amiri' royale.
- **Grille de Performance :** Layout 3-colonnes type Nike pour les services et événements.
- **Palette :** Bleu Nuit Profond, Sable Léger, Or Brossé.
- **Zéro Standard :** Chaque composant doit avoir un détail unique (micro-interactions Framer Motion).

---

## 📋 TODO List

### Phase 1 : Fondations & Design System
- [x] Initialisation Next.js (App Router) + TypeScript.
- [x] Configuration Tailwind CSS avec la palette personnalisée (Bleu Nuit, Sable, Or).
- [x] Configuration de la typographie : 'Amiri' (Titres) et 'Outfit'/'Inter' (Corps).
- [x] Installation et personnalisation de `shadcn/ui` (styles uniques).

### Phase 2 : Structure de l'Interface "Majestueuse"
- [x] **Header "Glassmorphism" :** Navigation transparente avec effet de flou (backdrop-blur).
- [x] **Hero Section :** Impact visuel fort, typographie élégante, animation d'entrée fluide.
- [x] **Widget Horaires de Prière :** Design minimaliste et dynamique (prochaine prière en avant).
- [x] **Footer Élégant :** Liens rapides, réseaux sociaux et informations de contact.

### Phase 3 : Fonctionnalités & Grilles (Données Mockées)
- [ ] **Grille d'Événements (Nike-inspired) :** Cartes 3-colonnes pour actus/conférences.
- [ ] **Interface de Lecture (Durous) :** Mode "Focus" épuré pour les transcriptions.
- [ ] **Flux de Dons Premium :** Formulaire multi-étapes minimaliste (Accent Or brossé).
- [ ] **Inscriptions & Cours :** Formulaires sans friction pour l'école et les activités.

### Phase 4 : Raffinement & Polissage (L'Expérience Al-Salem)
- [ ] Animations d'entrée (Staggered) avec Framer Motion.
- [ ] Détails visuels : Séparateurs géométriques islamiques fins (SVG personnalisés).
- [ ] Micro-interactions sur tous les boutons et cartes (Hover effects).
- [ ] Optimisation Mobile & Tablette (Responsive de luxe).
