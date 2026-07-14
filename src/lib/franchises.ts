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
import veneziaLocationsMap from "@/assets/venezia-locations-map.png";
import dahabLocationsMap from "@/assets/dahab-locations-map.png";

export type LocationType = "own" | "franchise" | "boutique" | "concept";

export interface Location {
  name: string;
  city: string;
  type: LocationType;
  coords: { x: number; y: number };
}

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
  locations?: Location[];
  locationsMapImage?: string;
  locationsStats?: { value: string; label: string }[];
};

export const FRANCHISES: Franchise[] = [
  {
    slug: "monoprix",
    category: "lifestyle",
    name: "Monoprix",
    tagline: "L'art de vivre quotidien, signé.",
    story:
      "Monoprix est une enseigne lifestyle de centre-ville qui conjugue qualité, modernité et inspiration. Elle propose une expérience d’achat globale et différenciante, mêlant alimentaire, mode, beauté et maison, dans un environnement soigné et inspirant. Au-delà des courses du quotidien, Monoprix accompagne les consommateurs dans leur art de vivre : sélection de produits tendance, marques propres créatives, collections exclusives et attention particulière portée au design, à l’innovation et à l’expérience en magasin.",
    arrival: "1 Juin 2025",
    image: monoprix,
    gallery: [monoprix, monoprixInterior, monoprixBags, monoprixFashion, monoprixAlt, heroLifestyle],
    specs: [
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
      "Franprix est une enseigne de proximité urbaine, pensée pour répondre aux besoins immédiats du quotidien. Implantée au cœur des quartiers, elle accompagne les consommateurs dans leurs routines de vie grâce à une offre essentielle, pratique et accessible. L’enseigne se distingue par des formats compacts, un parcours d’achat rapide et des services utiles pensés pour le rythme de vie citadin : achats de dépannage, repas prêts à consommer, produits frais du quotidien, solutions rapides aux moments clés de la journée.",
    arrival: "1 Septembre 2025",
    image: franprix,
    gallery: [franprix, franprixSign, supermarcheAesthetic, lifestyleShot, svcLifestyle, heroLifestyle],
    specs: [
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
      "Créée en 1999, Venezia-Ice s’est imposée au fil des années comme une enseigne emblématique de la gourmandise au Maroc. Forte de son héritage et de son savoir-faire historique, la marque propose aujourd’hui un univers complet mêlant pause café, snacking sucré salé tout en passant par les douceurs glacées. Avec plus de deux décennies de présence et une identité profondément ancrée dans le quotidien des Marocains, Venezia-Ice continue de rassembler toutes les générations autour de moments de plaisir, de partage et de convivialité.",
    arrival: "Disponible",
    image: venezia,
    gallery: [venezia, veneziaParlor, veneziaAlt, heroRestauration, svcRestauration, cafeShot],
    specs: [
      { label: "Format", value: "Comptoir · Salon" },
      { label: "Présence", value: "Maroc · International" },
    ],
    locations: [
      { name: "Venezia Ice", city: "Casablanca", type: "own", coords: { x: 30, y: 40 } },
      { name: "Venezia Ice Gauthier", city: "Casablanca", type: "own", coords: { x: 31, y: 41 } },
      { name: "Venezia Ice Franchise", city: "Rabat", type: "franchise", coords: { x: 32, y: 32 } },
      { name: "Venezia Ice Franchise", city: "Marrakech", type: "franchise", coords: { x: 27, y: 50 } },
      { name: "Venezia Boutique", city: "Fes", type: "boutique", coords: { x: 40, y: 35 } },
      { name: "Venezia Ice", city: "Tangier", type: "franchise", coords: { x: 32, y: 20 } },
      { name: "Venezia Ice Salon", city: "Agadir", type: "franchise", coords: { x: 25, y: 55 } },
      { name: "Venezia Boutique", city: "Meknes", type: "boutique", coords: { x: 38, y: 40 } },
    ],
    locationsMapImage: veneziaLocationsMap,
  },
  {
    slug: "dahab-coffee",
    category: "restauration",
    name: "Dahab Coffee",
    tagline: "Un café d'auteur, ancré dans la ville.",
    story:
      "Créée pour offrir une expérience café authentique et accessible, Dahab Coffee s’impose comme une enseigne moderne dédiée aux amateurs de moments simples et chaleureux. Portée par une sélection soignée de cafés et une attention particulière à la qualité des produits, la marque propose un univers convivial mêlant boissons chaudes, pauses gourmandes et instants de détente au quotidien. Pensée pour accompagner les rythmes urbains, Dahab Coffee s’inscrit naturelement dans les habitudes de consommation actueles, en offrant des espaces accueilants où se retrouvent plaisir, partage et authenticité.",
    arrival: "Mars 2026",
    image: dahab,
    gallery: [dahab, dahabStadium, dahabIcedCoffee, dahabChocolate, dahabKiosk, cafeHero],
    specs: [
      { label: "Format", value: "Café · Lounge" },
      { label: "Présence", value: "Casablanca · Rabat" },
    ],
    locations: [
      { name: "Dahab Coffee", city: "Tanger", type: "franchise", coords: { x: 32, y: 6 } },
      { name: "Dahab Coffee", city: "Tétouan", type: "franchise", coords: { x: 36, y: 7 } },
      { name: "Dahab Coffee", city: "Fnideq", type: "franchise", coords: { x: 37, y: 5 } },
      { name: "Dahab Coffee", city: "Mdiq", type: "franchise", coords: { x: 37, y: 6 } },
      { name: "Dahab Coffee", city: "Martil", type: "franchise", coords: { x: 37, y: 7 } },
      { name: "Dahab Coffee", city: "Al Hoceima", type: "franchise", coords: { x: 44, y: 8 } },
      { name: "Dahab Coffee", city: "Chefchaouen", type: "franchise", coords: { x: 38, y: 10 } },
      { name: "Dahab Coffee", city: "Ouazzane", type: "franchise", coords: { x: 37, y: 14 } },
      { name: "Dahab Coffee", city: "Larache", type: "franchise", coords: { x: 32, y: 10 } },
      { name: "Dahab Coffee", city: "Kénitra", type: "franchise", coords: { x: 33, y: 18 } },
      { name: "Dahab Coffee", city: "Salé", type: "franchise", coords: { x: 33, y: 20 } },
      { name: "Dahab Coffee", city: "Rabat", type: "franchise", coords: { x: 32, y: 21 } },
      { name: "Dahab Coffee", city: "Temara", type: "franchise", coords: { x: 32, y: 22 } },
      { name: "Dahab Coffee", city: "Bouznika", type: "franchise", coords: { x: 31, y: 23 } },
      { name: "Dahab Coffee", city: "Mohammedia", type: "franchise", coords: { x: 30, y: 24 } },
      { name: "Dahab Coffee", city: "Casablanca", type: "franchise", coords: { x: 29, y: 25 } },
      { name: "Dahab Coffee", city: "Al Jadida", type: "franchise", coords: { x: 26, y: 28 } },
      { name: "Dahab Coffee", city: "Fez", type: "franchise", coords: { x: 43, y: 17 } },
      { name: "Dahab Coffee", city: "Meknes", type: "franchise", coords: { x: 41, y: 18 } },
      { name: "Dahab Coffee", city: "Beni Mellal", type: "franchise", coords: { x: 38, y: 30 } },
      { name: "Dahab Coffee", city: "Marrakech", type: "franchise", coords: { x: 33, y: 36 } },
      { name: "Dahab Coffee", city: "Laayoune", type: "franchise", coords: { x: 18, y: 60 } },
    ],
    locationsMapImage: dahabLocationsMap,
    // Les labels sont des clés i18n résolues par LocationMap.
    locationsStats: [
      { value: "+100", label: "franchisePage.pointsOfSale" },
      { value: "+21", label: "franchisePage.citiesMorocco" },
    ],
  },
  {
    slug: "flormar",
    category: "beauty",
    name: "Flormar",
    tagline: "La couleur comme langage.",
    story:
      "Chez Flormar, la beauté s’exprime avec audace, créativité et simplicité. Inspirée par la diversité des styles et des personnalités, la marque propose une large gamme de produits de maquillage alliant qualité, innovation et accessibilité. Chaque collection est pensée pour sublimer toutes les carnations et accompagner chaque moment de la journée, du plus naturel au plus sophistiqué. Flormar célèbre une beauté libre, joyeuse et sans compromis, où chacun peut affirmer son identité avec confiance.",
    arrival: "Disponible",
    image: flormar,
    gallery: [flormar, flormarInterior, flormarProduct, flormarPoolside, heroBeauty, beautyShot],
    specs: [
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
      "BeautyForYou est la plateforme beauté de One Retail, pensée pour offrir une expérience en ligne simple, fluide et accessible à tous. L’enseigne propose une sélection complète de skincare, maquillage, haircare et soins essentiels, réunissant marques fiables, nouveautés et produits tendances. Grâce à une navigation intuitive, des conseils experts et une livraison rapide, BeautyForYou donne accès à la beauté en un clic, au rythme des routines modernes.",
    arrival: "Janvier 2026",
    image: beauty4you,
    gallery: [beauty4you, beautyAlt, svcBeauty, heroBeauty, beautyShot, flormarInterior],
    specs: [
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
      "Enseigne historique du bricolage, Mr Bricolage accompagne chaque projet   du plus quotidien au plus ambitieux. Conseil expert, gamme étendue, écosystème complet.",
    arrival: "Disponible",
    image: mrbricolage,
    gallery: [mrbricolage, heroBricolage, svcBricolage, bricolageShot, heroRetail, supermarcheAesthetic],
    specs: [
      { label: "Catégorie", value: "Bricolage · Maison · Jardin" },
      { label: "Présence", value: "Multi-villes" },
    ],
  },
];

export const getByCategory = (cat: Franchise["category"]) => FRANCHISES.filter((f) => f.category === cat);
export const getBySlug = (slug: string) => FRANCHISES.find((f) => f.slug === slug);
