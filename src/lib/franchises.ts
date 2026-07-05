import monoprix from "@/assets/franchise-monoprix.jpg";
import franprix from "@/assets/franchise-franprix.jpg";
import venezia from "@/assets/franchise-venezia.jpg";
import dahab from "@/assets/franchise-dahab.jpg";
import flormar from "@/assets/franchise-flormar.jpg";
import beauty4you from "@/assets/franchise-beauty4you.jpg";
import mrbricolage from "@/assets/franchise-mrbricolage.jpg";

import monoprixInterior from "@/assets/monoprix_interior_1782567171711.jpg";
import monoprixBags from "@/assets/monoprix_bags_1782567156680.jpg";
import monoprixFashion from "@/assets/monoprix_fashion_1782567274312.jpg";
import monoprixAlt from "@/assets/franchise-mono.jpg";
import franprixSign from "@/assets/franprix_sign_1782567213038.jpg";
import supermarcheAesthetic from "@/assets/Supermarche-aesthetic.jpg";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import svcLifestyle from "@/assets/svc-lifestyle.jpg";
import lifestyleShot from "@/assets/oneretail_lifestyle_1782505665102.jpg";
import veneziaParlor from "@/assets/venezia_parlor_1782567315321.jpg";
import veneziaAlt from "@/assets/franchise-venezia-11.jpg";
import heroRestauration from "@/assets/hero-restauration.jpg";
import svcRestauration from "@/assets/svc-restauration.jpg";
import cafeShot from "@/assets/oneretail_cafe_1782505689472.jpg";
import dahabStadium from "@/assets/dahab_stadium_1782565290498.jpg";
import dahabIcedCoffee from "@/assets/dahab_iced_coffee_1782565340556.jpg";
import dahabChocolate from "@/assets/dahab_miniature_chocolate_1782565323903.jpg";
import dahabKiosk from "@/assets/dahab_penguin_kiosk_1782565357639.jpg";
import cafeHero from "@/assets/cofe-hero.jpg";
import flormarInterior from "@/assets/flormar_interior_1782567240559.jpg";
import flormarProduct from "@/assets/flormar_product_1782567253827.jpg";
import flormarPoolside from "@/assets/flormar_poolside_1782567286133.jpg";
import heroBeauty from "@/assets/hero-beauty.jpg";
import beautyShot from "@/assets/oneretail_beauty_1782505677599.jpg";
import beautyAlt from "@/assets/franchise-beauty.jpg";
import svcBeauty from "@/assets/svc-beauty.jpg";
import heroBricolage from "@/assets/hero-bricolage.jpg";
import svcBricolage from "@/assets/svc-bricolage.jpg";
import bricolageShot from "@/assets/oneretail_bricolage_1782505702785.jpg";
import heroRetail from "@/assets/hero-retail.jpg";

export type Franchise = {
  slug: string;
  category: "lifestyle" | "beauty" | "restauration" | "bricolage";
  name: string;
  tagline: string;
  story: string;
  arrival: string;
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
    arrival: "Septembre 2025",
    image: monoprix,
    gallery: [monoprix, monoprixInterior, monoprixBags, monoprixFashion, monoprixAlt, heroLifestyle],
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
    arrival: "Juin 2025",
    image: franprix,
    gallery: [franprix, franprixSign, supermarcheAesthetic, lifestyleShot, svcLifestyle, heroLifestyle],
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
    arrival: "Disponible",
    image: venezia,
    gallery: [venezia, veneziaParlor, veneziaAlt, heroRestauration, svcRestauration, cafeShot],
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
    arrival: "Mars 2026",
    image: dahab,
    gallery: [dahab, dahabStadium, dahabIcedCoffee, dahabChocolate, dahabKiosk, cafeHero],
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
    arrival: "Disponible",
    image: flormar,
    gallery: [flormar, flormarInterior, flormarProduct, flormarPoolside, heroBeauty, beautyShot],
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
    arrival: "Janvier 2026",
    image: beauty4you,
    gallery: [beauty4you, beautyAlt, svcBeauty, heroBeauty, beautyShot, flormarInterior],
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
    arrival: "Disponible",
    image: mrbricolage,
    gallery: [mrbricolage, heroBricolage, svcBricolage, bricolageShot, heroRetail, supermarcheAesthetic],
    specs: [
      { label: "Surface type", value: "1 500 — 6 000 m²" },
      { label: "Catégorie", value: "Bricolage · Maison · Jardin" },
      { label: "Présence", value: "Multi-villes" },
    ],
  },
];

export const getByCategory = (cat: Franchise["category"]) => FRANCHISES.filter((f) => f.category === cat);
export const getBySlug = (slug: string) => FRANCHISES.find((f) => f.slug === slug);
