import monoprix from "@/assets/franchise-monoprix.jpg";
import franprix from "@/assets/franchise-franprix.jpg";
import venezia from "@/assets/franchise-venezia.jpg";
import dahab from "@/assets/franchise-dahab.jpg";
import flormar from "@/assets/franchise-flormar.jpg";
import beauty4you from "@/assets/franchise-beauty4you.jpg";
import mrbricolage from "@/assets/franchise-mrbricolage.jpg";

export type Franchise = {
  slug: string;
  category: "lifestyle" | "beauty" | "restauration" | "bricolage";
  name: string;
  tagline: string;
  story: string;
  image: string;
  gallery: string[];
  specs: { label: string; value: string }[];
};

export const FRANCHISES: Franchise[] = [
  {
    slug: "monoprix",
    category: "lifestyle",
    name: "Monoprix",
    tagline: "L'art de vivre quotidien, signé.",
    story:
      "Référence française du commerce de proximité, Monoprix réunit alimentaire, mode et maison dans un même geste éditorial. Au Maroc, l'enseigne incarne un quotidien plus juste — pensé, sourcé, raconté.",
    image: monoprix,
    gallery: [monoprix, monoprix, monoprix],
    specs: [
      { label: "Surface type", value: "800 — 2 500 m²" },
      { label: "Univers", value: "Alimentaire · Mode · Maison" },
      { label: "Présence", value: "Multi-villes" },
    ],
  },
  {
    slug: "franprix",
    category: "lifestyle",
    name: "Franprix",
    tagline: "L'épicerie urbaine, sans détour.",
    story:
      "Format de proximité, Franprix répond à la vie urbaine d'aujourd'hui : sélection courte, qualité tenue, fluidité du passage. Une enseigne qui se mérite à la marche, et se garde au quotidien.",
    image: franprix,
    gallery: [franprix, franprix, franprix],
    specs: [
      { label: "Surface type", value: "200 — 600 m²" },
      { label: "Format", value: "Proximité urbaine" },
      { label: "Présence", value: "Quartiers premium" },
    ],
  },
  {
    slug: "venezia-ice",
    category: "restauration",
    name: "Venezia Ice",
    tagline: "Le gelato comme un rituel italien.",
    story:
      "Glaces artisanales à l'italienne, recettes vénitiennes, dressage à la main. Venezia Ice fait du gelato une parenthèse — un moment de joie tranquille, qui se partage à toute heure.",
    image: venezia,
    gallery: [venezia, venezia, venezia],
    specs: [
      { label: "Spécialité", value: "Gelato artisanal" },
      { label: "Format", value: "Comptoir · Salon" },
      { label: "Présence", value: "Maroc · International" },
    ],
  },
  {
    slug: "dahab-coffee",
    category: "restauration",
    name: "Dahab Coffee",
    tagline: "Un café d'auteur, ancré dans la ville.",
    story:
      "Dahab Coffee fait dialoguer la précision du café de spécialité et la chaleur du salon marocain. Une carte signature, un design méticuleux, une intention claire : ralentir.",
    image: dahab,
    gallery: [dahab, dahab, dahab],
    specs: [
      { label: "Spécialité", value: "Specialty Coffee" },
      { label: "Format", value: "Café · Lounge" },
      { label: "Présence", value: "Casablanca · Rabat" },
    ],
  },
  {
    slug: "flormar",
    category: "beauty",
    name: "Flormar",
    tagline: "La couleur comme langage.",
    story:
      "Marque internationale de maquillage, Flormar propose des collections à fort caractère — textures, pigments, finis. Une promesse simple : la qualité accessible, sans concessions sur l'expression.",
    image: flormar,
    gallery: [flormar, flormar, flormar],
    specs: [
      { label: "Catégorie", value: "Maquillage · Soin" },
      { label: "Format", value: "Boutique · Corner" },
      { label: "Présence", value: "Maroc · 100+ pays" },
    ],
  },
  {
    slug: "beauty-for-you",
    category: "beauty",
    name: "Beauty For You",
    tagline: "La beauté éditoriale, à portée de main.",
    story:
      "Concept multi-marques pensé comme une rédaction beauté : sélections pointues, mises en scène généreuses, conseil exigeant. La beauté comme un récit, pas comme un rayon.",
    image: beauty4you,
    gallery: [beauty4you, beauty4you, beauty4you],
    specs: [
      { label: "Catégorie", value: "Soin · Capillaire · Parfum" },
      { label: "Format", value: "Boutique multi-marques" },
      { label: "Présence", value: "Maroc" },
    ],
  },
  {
    slug: "mr-bricolage",
    category: "bricolage",
    name: "Mr Bricolage",
    tagline: "Le geste juste, l'outil juste.",
    story:
      "Enseigne historique du bricolage, Mr Bricolage accompagne chaque projet — du plus quotidien au plus ambitieux. Conseil expert, gamme étendue, écosystème complet.",
    image: mrbricolage,
    gallery: [mrbricolage, mrbricolage, mrbricolage],
    specs: [
      { label: "Surface type", value: "1 500 — 6 000 m²" },
      { label: "Catégorie", value: "Bricolage · Maison · Jardin" },
      { label: "Présence", value: "Multi-villes" },
    ],
  },
];

export const getByCategory = (cat: Franchise["category"]) => FRANCHISES.filter((f) => f.category === cat);
export const getBySlug = (slug: string) => FRANCHISES.find((f) => f.slug === slug);
