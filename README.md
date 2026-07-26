# LCDP — La Centrale Des Pneus · Site vitrine

Site one-page premium pour le centre de réparation et remplacement de pare-brise **LCDP — La Centrale Des Pneus** à Épône (78680).

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

Nom de marque, téléphone, e-mail, adresse et horaires sont centralisés dans **`lib/site.ts`** (constante `SITE`) — modifier ce fichier met à jour la nav, le hero, les CTA, le footer et le SEO d'un coup.

Le reste du contenu éditorial (services, avantages, avis, FAQ) est dans `components/sections/*.tsx`.
