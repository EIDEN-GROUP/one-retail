import acquisitionFlormar from "@/assets/news-acquisition-flormar.png";
import franchiseAward from "@/assets/news-franchise-award.jpg";
import franchiseExhibition from "@/assets/news-franchise-exhibition.jpg";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullets"; intro?: string; items: string[] }
  | { type: "quote"; text: string; author?: string; role?: string }
  | { type: "stats"; items: { value: string; label: string }[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  date: string;
  image: string;
  richContent?: ContentBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "one-retail-finalise-lacquisition-de-flormar",
    title: "One Retail finalise l'acquisition de Flormar",
    excerpt:
      "One Retail annonce la finalisation de l'acquisition de 100 % de B5 Cosmetics, détenteur exclusif de la franchise Flormar au Maroc, et renforce son pôle Beauté.",
    body: "One Retail, filiale de H&S Group, annonce la finalisation de l'acquisition de 100 % de B5 Cosmetics, détenteur exclusif de la franchise Flormar MA au Maroc. Cette opération stratégique vient renforcer le positionnement du groupe sur le segment de la beauté et accélérer sa stratégie de développement multi-enseignes.\n\nÀ travers cette acquisition, One Retail confirme son ambition de bâtir un acteur de référence du retail de proximité au Maroc, structuré autour d'enseignes fortes et complémentaires. L'opération s'inscrit dans la dynamique de build-up menée par le groupe afin de consolider sa présence sur des segments à forte valeur ajoutée, notamment celui de la beauté accessible.\n\nPrésente au Maroc depuis 2012, Flormar s'est imposée comme une marque incontournable du marché de la beauté grâce à un réseau de plus de 50 points de vente répartis dans 19 villes du Royaume, combinant succursales et franchises.\n\nAvec cette acquisition, One Retail entend accompagner Flormar dans une nouvelle phase de croissance, en s'appuyant sur son expertise en expansion de réseaux, excellence opérationnelle et transformation digitale. Les principaux leviers de développement identifiés incluent : l'accélération du déploiement national du réseau, le renforcement de la stratégie omnicanale et du e-commerce, l'optimisation logistique et l'intégration de la supply chain, et l'amélioration continue de l'expérience client.\n\nCette intégration permettra également de créer des synergies avec les autres enseignes du portefeuille One Retail, notamment en matière de digitalisation, marketing et performance opérationnelle. À travers cette opération, One Retail renforce significativement son pôle Beauté, dans un marché marocain en pleine transformation porté par l'évolution des habitudes de consommation, l'urbanisation et l'essor du digital.\n\nSelon Hicham Kitane, CEO de One Retail, cette acquisition vient renforcer le modèle de build-up du groupe avec une ambition claire : constituer d'ici fin 2026 un pôle retail solide et rentable composé de 7 entreprises, 300 magasins et 1 000 collaborateurs.\n\nEn intégrant Flormar à son portefeuille, One Retail poursuit la construction d'un modèle retail moderne combinant réseau physique, e-commerce, franchise et digitalisation des parcours clients. Cette acquisition marque une nouvelle étape dans le développement du groupe et confirme sa volonté d'accompagner l'évolution des usages de consommation au Maroc, tout en renforçant l'attractivité de marques internationales à fort potentiel sur le marché national.",
    category: "Acquisition",
    date: "12.05.2026",
    image: acquisitionFlormar,
    richContent: [
      {
        type: "paragraph",
        text: "One Retail, filiale de H&S Group, annonce la finalisation de l'acquisition de 100 % de B5 Cosmetics, détenteur exclusif de la franchise Flormar MA au Maroc. Cette opération stratégique vient renforcer le positionnement du groupe sur le segment de la beauté et accélérer sa stratégie de développement multi-enseignes.",
      },
      {
        type: "stats",
        items: [
          { value: "+50", label: "Points de vente" },
          { value: "19", label: "Villes du Royaume" },
          { value: "2012", label: "Présence au Maroc" },
        ],
      },
      {
        type: "heading",
        text: "Une nouvelle étape dans la stratégie de croissance de One Retail",
      },
      {
        type: "paragraph",
        text: "À travers cette acquisition, One Retail confirme son ambition de bâtir un acteur de référence du retail de proximité au Maroc, structuré autour d'enseignes fortes et complémentaires.",
      },
      {
        type: "paragraph",
        text: "L'opération s'inscrit dans la dynamique de build-up menée par le groupe afin de consolider sa présence sur des segments à forte valeur ajoutée, notamment celui de la beauté accessible.",
      },
      {
        type: "paragraph",
        text: "Présente au Maroc depuis 2012, Flormar s'est imposée comme une marque incontournable du marché de la beauté grâce à un réseau de plus de 50 points de vente répartis dans 19 villes du Royaume, combinant succursales et franchises.",
      },
      {
        type: "heading",
        text: "Accélération du développement et transformation omnicanale",
      },
      {
        type: "paragraph",
        text: "Avec cette acquisition, One Retail entend accompagner Flormar dans une nouvelle phase de croissance, en s'appuyant sur son expertise en expansion de réseaux, excellence opérationnelle et transformation digitale.",
      },
      {
        type: "bullets",
        intro: "Les principaux leviers de développement identifiés incluent :",
        items: [
          "L'accélération du déploiement national du réseau",
          "Le renforcement de la stratégie omnicanale et du e-commerce",
          "L'optimisation logistique et l'intégration de la supply chain",
          "L'amélioration continue de l'expérience client",
        ],
      },
      {
        type: "paragraph",
        text: "Cette intégration permettra également de créer des synergies avec les autres enseignes du portefeuille One Retail, notamment en matière de digitalisation, marketing et performance opérationnelle.",
      },
      {
        type: "heading",
        text: "Une ambition forte dans le retail beauté",
      },
      {
        type: "paragraph",
        text: "À travers cette opération, One Retail renforce significativement son pôle Beauté, dans un marché marocain en pleine transformation porté par l'évolution des habitudes de consommation, l'urbanisation et l'essor du digital.",
      },
      {
        type: "paragraph",
        text: "Le groupe poursuit ainsi la structuration d'un écosystème retail intégré articulé autour de plusieurs pôles stratégiques : restauration, beauté, textile, bricolage et alimentation.",
      },
      {
        type: "quote",
        text: "Cette acquisition vient renforcer le modèle de build-up du groupe avec une ambition claire : constituer d'ici fin 2026 un pôle retail solide et rentable composé de 7 entreprises, 300 magasins et 1 000 collaborateurs.",
        author: "Hicham Kitane",
        role: "CEO, One Retail",
      },
      {
        type: "heading",
        text: "Une vision tournée vers le retail de demain",
      },
      {
        type: "paragraph",
        text: "En intégrant Flormar à son portefeuille, One Retail poursuit la construction d'un modèle retail moderne combinant réseau physique, e-commerce, franchise et digitalisation des parcours clients.",
      },
      {
        type: "paragraph",
        text: "Cette acquisition marque une nouvelle étape dans le développement du groupe et confirme sa volonté d'accompagner l'évolution des usages de consommation au Maroc, tout en renforçant l'attractivité de marques internationales à fort potentiel sur le marché national.",
      },
    ],
  },
  {
    slug: "one-retail-prime-franchise-exhibition-morocco",
    title: "One Retail primé au Franchise Exhibition Morocco et confirme son positionnement comme acteur clé du retail au Maroc",
    excerpt:
      "À l'occasion du Franchise Exhibition Morocco, One Retail a marqué les esprits en présentant la richesse de son écosystème et en se distinguant par une reconnaissance majeure.",
    body: "À l'occasion du Franchise Exhibition Morocco, One Retail a marqué les esprits en présentant la richesse de son écosystème et en se distinguant par une reconnaissance majeure lors de l'événement.\n\nPendant trois jours, One Retail a accueilli sur son stand de nombreux investisseurs, entrepreneurs et porteurs de projets venus découvrir des concepts innovants et à fort potentiel. Le groupe a mis en avant un portefeuille diversifié, couvrant plusieurs univers complémentaires : Food & Beverage avec Venezia Ice, Retail de proximité avec Franprix Maroc et Monoprix Maroc, Beauté avec Flormar MA et BeautyForYou, ainsi que Do it yourself avec Mr. Bricolage Maroc. Cette diversité illustre la capacité de One Retail à proposer des solutions adaptées à différents profils d'investisseurs, tout en s'appuyant sur des modèles éprouvés.\n\nLa participation de One Retail a été couronnée par l'obtention de distinctions lors du salon, venant saluer la pertinence de sa stratégie, la qualité de ses concepts et son engagement en faveur du développement de la franchise au Maroc. Ces récompenses renforcent la crédibilité du groupe et confirment son rôle d'acteur structurant dans l'écosystème retail et franchise.\n\nAu-delà de cette reconnaissance, One Retail poursuit une ambition claire : accélérer le développement de ses enseignes au Maroc et à l'international, accompagner ses partenaires franchisés dans la réussite de leurs projets, et proposer des concepts différenciants, performants et durables. La forte affluence sur le stand et la qualité des échanges témoignent d'un intérêt croissant pour des modèles structurés et accompagnés, dans un marché en pleine transformation.\n\nSi le salon marque une étape clé, il ouvre surtout la voie à de nouvelles collaborations et à des projets concrets. One Retail confirme ainsi sa volonté de construire, aux côtés de ses partenaires, une nouvelle génération de concepts retail, capables de répondre aux attentes d'un marché en constante évolution.",
    category: "Événement",
    date: "22.04.2026",
    image: franchiseAward,
  },
  {
    slug: "one-retail-participe-franchise-exhibition-morocco",
    title: "One Retail participe au Franchise Exhibition Morocco et dévoile un écosystème de marques en pleine expansion",
    excerpt:
      "Du 15 au 17 avril, One Retail invite investisseurs, entrepreneurs et futurs franchisés à découvrir un écosystème unique, structuré autour de plusieurs expertises complémentaires.",
    body: "Le développement en franchise s'impose aujourd'hui comme un levier stratégique majeur pour les marques ambitieuses souhaitant accélérer leur croissance et renforcer leur présence sur le marché.\n\nC'est dans cette dynamique que One Retail participe au Franchise Exhibition Morocco, qui se tiendra du 15 au 17 avril. À cette occasion, le groupe invite investisseurs, entrepreneurs et futurs franchisés à découvrir un écosystème unique, structuré autour de plusieurs expertises complémentaires.\n\nSur son stand, One Retail mettra en avant l'ensemble de ses univers, illustrant la richesse et la complémentarité de son offre : Food & Beverage avec Venezia Ice, Retail de proximité avec Franprix Maroc et Monoprix Maroc, Beauté avec Flormar MA et BeautyForYou, ainsi que Do it yourself avec Mr. Bricolage Maroc. Cette diversité permet au groupe de proposer des concepts adaptés à différents profils d'investisseurs, tout en capitalisant sur des marques reconnues et des modèles éprouvés.\n\nÀ travers sa participation à cet événement, One Retail affirme sa volonté de proposer des concepts solides, différenciants et performants, d'accompagner ses partenaires franchisés à chaque étape de leur développement, et d'accélérer son expansion, au Maroc comme à l'international. L'approche du groupe repose sur un accompagnement structuré et une vision long terme, visant à garantir la réussite de ses partenaires tout en consolidant la croissance de ses enseignes.\n\nLe Franchise Exhibition Morocco constitue une opportunité privilégiée pour échanger autour de projets concrets, découvrir des concepts innovants et identifier des opportunités à fort potentiel. Les visiteurs sont invités à rencontrer les équipes One Retail sur leur stand afin d'explorer les différentes possibilités de collaboration et de rejoindre une dynamique de croissance portée par des marques fortes.",
    category: "Événement",
    date: "10.04.2026",
    image: franchiseExhibition,
  },
];

export const FEATURED = ARTICLES[0];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
