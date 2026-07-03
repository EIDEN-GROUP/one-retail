import featured from "@/assets/news-featured.jpg";
import lifestyle from "@/assets/hero-lifestyle.jpg";
import beauty from "@/assets/hero-beauty.jpg";
import restauration from "@/assets/hero-restauration.jpg";
import bricolage from "@/assets/hero-bricolage.jpg";
import ambitions from "@/assets/ambitions.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  date: string;
  image: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "ouverture-monoprix-casablanca",
    title: "Monoprix inaugure un nouveau format à Casablanca",
    excerpt: "Un format urbain repensé, pensé pour la mobilité du quotidien.",
    body: "One Retail accompagne l'ouverture d'un nouveau format Monoprix à Casablanca. Sur 1 200 m², l'enseigne déploie une offre alimentaire élargie, un corner mode resserré et une expérience pensée pour la vie urbaine.",
    category: "Lifestyle",
    date: "12.05.2026",
    image: lifestyle,
  },
  {
    slug: "flormar-collection-printemps",
    title: "Flormar dévoile sa collection printanière",
    excerpt: "Une palette signature, pensée pour la lumière marocaine.",
    body: "La nouvelle collection Flormar arrive en boutique. Des nuances chaudes, des textures veloutées, et un parti pris affirmé : la précision du geste.",
    category: "Beauty",
    date: "02.05.2026",
    image: beauty,
  },
  {
    slug: "venezia-ice-rabat",
    title: "Venezia Ice s'installe à Rabat",
    excerpt: "Le gelato vénitien continue sa route marocaine.",
    body: "Nouvelle adresse pour Venezia Ice à Rabat. Une carte courte, des recettes ré-écrites chaque saison, et une expérience comptoir qui ralentit la ville.",
    category: "Restauration",
    date: "18.04.2026",
    image: restauration,
  },
  {
    slug: "mr-bricolage-tanger",
    title: "Mr Bricolage ouvre un nouveau centre à Tanger",
    excerpt: "Un point de vente de 4 000 m² au cœur du nord.",
    body: "Mr Bricolage poursuit son maillage du territoire avec une ouverture stratégique à Tanger. Conseil expert, gamme étendue, ateliers DIY.",
    category: "Bricolage",
    date: "30.03.2026",
    image: bricolage,
  },
  {
    slug: "engagement-rse",
    title: "One Retail dévoile sa feuille de route RSE",
    excerpt: "Trois engagements concrets pour les cinq prochaines années.",
    body: "Sourcing responsable, sobriété énergétique, formation des équipes : One Retail rend publique sa trajectoire RSE 2026-2030.",
    category: "Groupe",
    date: "10.03.2026",
    image: ambitions,
  },
  {
    slug: "dahab-marrakech",
    title: "Dahab Coffee s'invite à Marrakech",
    excerpt: "Le café d'auteur retrouve les ruelles de la médina.",
    body: "Nouvelle adresse Dahab Coffee à Marrakech. Un design qui dialogue avec l'artisanat local, une carte signature, une intention claire : ralentir.",
    category: "Restauration",
    date: "20.02.2026",
    image: restauration,
  },
];

export const FEATURED = { ...ARTICLES[0], image: featured };

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
