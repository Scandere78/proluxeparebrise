# Proluxe Pare-brise — Site vitrine

Site one-page premium pour le centre de réparation et remplacement de pare-brise **Proluxe Pare-brise** à Épône (78680).

## Stack

- **Next.js 15** — App Router, TypeScript
- **Tailwind CSS 3.4** — config personnalisée (`tailwind.config.ts`)
- **Framer Motion** — apparitions au scroll, hover, header
- **shadcn/ui** — Button, Card, Accordion, Input, Textarea, Select, Label, Badge, Separator
- **Lenis** — smooth scroll
- **react-hook-form** + **zod** — formulaire RDV validé
- **next/font/google** — Syne (display) + DM Sans (body)
- **lucide-react** + **react-icons** — icônes

## Démarrage

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        # fonts + Lenis provider + metadata
  page.tsx          # assemblage des sections
components/
  sections/         # un fichier par section
  ui/               # composants shadcn
  providers/        # SmoothScrollProvider (Lenis)
lib/
  utils.ts          # cn()
  motion.ts         # variants Framer Motion réutilisables
styles/
  globals.css       # tokens shadcn + utilitaires custom
```

## Identité visuelle

- **Palette** : noir profond + bleu glace (`#3AA7FF`) + champagne (`#E8C690`)
- **Typo** : Syne (display) / DM Sans (body)
- **Effets** : fond radial spot, motif "pare-brise fissuré" SVG, glassmorphism, shine sur CTA principal

## Contenu personnalisable

Toutes les données client (adresse, horaires, numéro de téléphone, FAQ) sont dans les fichiers `components/sections/*.tsx`. Le numéro placeholder `+33000000000` est à remplacer.
