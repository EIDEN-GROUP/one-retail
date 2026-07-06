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
  /** Per-language overrides of the textual fields. French is the base. */
  translations?: Partial<Record<"en" | "ar", ArticleTranslation>>;
};

export type ArticleTranslation = Partial<
  Pick<Article, "title" | "excerpt" | "body" | "category" | "richContent">
>;

/**
 * Returns the article with its textual fields resolved for `lang`.
 * French is the base; unavailable fields fall back to French.
 */
export function localizeArticle(a: Article, lang: string): Article {
  const key = lang.split("-")[0];
  if (key === "fr" || !a.translations) return a;
  const tr = a.translations[key as "en" | "ar"];
  return tr ? { ...a, ...tr } : a;
}

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
    translations: {
      en: {
        title: "One Retail finalizes the acquisition of Flormar",
        excerpt:
          "One Retail announces the completion of the acquisition of 100% of B5 Cosmetics, exclusive holder of the Flormar franchise in Morocco, strengthening its Beauty division.",
        category: "Acquisition",
        richContent: [
          {
            type: "paragraph",
            text: "One Retail, a subsidiary of H&S Group, announces the completion of the acquisition of 100% of B5 Cosmetics, the exclusive holder of the Flormar MA franchise in Morocco. This strategic operation strengthens the group's positioning in the beauty segment and accelerates its multi-banner development strategy.",
          },
          {
            type: "stats",
            items: [
              { value: "+50", label: "Points of sale" },
              { value: "19", label: "Cities in Morocco" },
              { value: "2012", label: "Presence in Morocco" },
            ],
          },
          { type: "heading", text: "A new step in One Retail's growth strategy" },
          {
            type: "paragraph",
            text: "Through this acquisition, One Retail confirms its ambition to build a benchmark player in convenience retail in Morocco, structured around strong, complementary banners.",
          },
          {
            type: "paragraph",
            text: "The operation is part of the build-up momentum led by the group to consolidate its presence in high-value-added segments, notably accessible beauty.",
          },
          {
            type: "paragraph",
            text: "Present in Morocco since 2012, Flormar has established itself as a must-have brand in the beauty market thanks to a network of more than 50 points of sale across 19 cities in the Kingdom, combining owned stores and franchises.",
          },
          { type: "heading", text: "Accelerated development and omnichannel transformation" },
          {
            type: "paragraph",
            text: "With this acquisition, One Retail intends to support Flormar in a new growth phase, drawing on its expertise in network expansion, operational excellence and digital transformation.",
          },
          {
            type: "bullets",
            intro: "The main development levers identified include:",
            items: [
              "Accelerating the national rollout of the network",
              "Strengthening the omnichannel and e-commerce strategy",
              "Optimizing logistics and integrating the supply chain",
              "Continuously improving the customer experience",
            ],
          },
          {
            type: "paragraph",
            text: "This integration will also create synergies with the other banners in the One Retail portfolio, particularly in digitalization, marketing and operational performance.",
          },
          { type: "heading", text: "A strong ambition in beauty retail" },
          {
            type: "paragraph",
            text: "Through this operation, One Retail significantly strengthens its Beauty division, in a Moroccan market undergoing full transformation driven by changing consumption habits, urbanization and the rise of digital.",
          },
          {
            type: "paragraph",
            text: "The group thus continues to structure an integrated retail ecosystem built around several strategic divisions: food service, beauty, textile, DIY and food.",
          },
          {
            type: "quote",
            text: "This acquisition strengthens the group's build-up model with a clear ambition: to build, by the end of 2026, a solid and profitable retail division made up of 7 companies, 300 stores and 1,000 employees.",
            author: "Hicham Kitane",
            role: "CEO, One Retail",
          },
          { type: "heading", text: "A vision turned toward the retail of tomorrow" },
          {
            type: "paragraph",
            text: "By integrating Flormar into its portfolio, One Retail continues to build a modern retail model combining physical network, e-commerce, franchising and digitalization of customer journeys.",
          },
          {
            type: "paragraph",
            text: "This acquisition marks a new step in the group's development and confirms its determination to support the evolution of consumption habits in Morocco, while enhancing the appeal of high-potential international brands on the national market.",
          },
        ],
      },
      ar: {
        title: "ون ريتيل تُتمّ الاستحواذ على Flormar",
        excerpt:
          "تعلن ون ريتيل عن إتمام الاستحواذ على 100% من شركة B5 Cosmetics، الحاملة الحصرية لامتياز Flormar في المغرب، وتعزّز قطب الجمال لديها.",
        category: "استحواذ",
        richContent: [
          {
            type: "paragraph",
            text: "تعلن ون ريتيل، وهي فرع من مجموعة H&S، عن إتمام الاستحواذ على 100% من شركة B5 Cosmetics، الحاملة الحصرية لامتياز Flormar MA في المغرب. تأتي هذه العملية الاستراتيجية لتعزيز مكانة المجموعة في قطاع الجمال وتسريع استراتيجيتها للتطوير متعدد العلامات.",
          },
          {
            type: "stats",
            items: [
              { value: "+50", label: "نقطة بيع" },
              { value: "19", label: "مدينة في المملكة" },
              { value: "2012", label: "الحضور في المغرب" },
            ],
          },
          { type: "heading", text: "خطوة جديدة في استراتيجية نمو ون ريتيل" },
          {
            type: "paragraph",
            text: "من خلال هذا الاستحواذ، تؤكد ون ريتيل طموحها في بناء فاعل مرجعي في تجارة القرب بالمغرب، منظّم حول علامات قوية ومتكاملة.",
          },
          {
            type: "paragraph",
            text: "تندرج العملية ضمن دينامية البناء (build-up) التي تقودها المجموعة لتعزيز حضورها في القطاعات ذات القيمة المضافة العالية، ولا سيما قطاع الجمال في المتناول.",
          },
          {
            type: "paragraph",
            text: "حاضرة في المغرب منذ سنة 2012، فرضت Flormar نفسها كعلامة لا غنى عنها في سوق الجمال بفضل شبكة تضم أكثر من 50 نقطة بيع موزعة على 19 مدينة في المملكة، تجمع بين الفروع والامتيازات.",
          },
          { type: "heading", text: "تسريع التطوير والتحول متعدد القنوات" },
          {
            type: "paragraph",
            text: "بهذا الاستحواذ، تعتزم ون ريتيل مرافقة Flormar في مرحلة نمو جديدة، بالاعتماد على خبرتها في توسيع الشبكات والتميز التشغيلي والتحول الرقمي.",
          },
          {
            type: "bullets",
            intro: "تشمل أبرز روافع التطوير المحددة ما يلي:",
            items: [
              "تسريع الانتشار الوطني للشبكة",
              "تعزيز استراتيجية القنوات المتعددة والتجارة الإلكترونية",
              "تحسين اللوجستيك ودمج سلسلة الإمداد",
              "التحسين المستمر لتجربة العميل",
            ],
          },
          {
            type: "paragraph",
            text: "سيتيح هذا الاندماج أيضاً خلق أوجه تآزر مع باقي علامات محفظة ون ريتيل، لا سيما في مجالات الرقمنة والتسويق والأداء التشغيلي.",
          },
          { type: "heading", text: "طموح قوي في تجارة تجزئة الجمال" },
          {
            type: "paragraph",
            text: "من خلال هذه العملية، تعزز ون ريتيل بشكل كبير قطب الجمال لديها، في سوق مغربي يعرف تحولاً عميقاً مدفوعاً بتغير عادات الاستهلاك والتحضر وصعود الرقمنة.",
          },
          {
            type: "paragraph",
            text: "وهكذا تواصل المجموعة هيكلة منظومة تجزئة متكاملة تتمحور حول عدة أقطاب استراتيجية: المطاعم، والجمال، والنسيج، والأعمال اليدوية، والتغذية.",
          },
          {
            type: "quote",
            text: "يأتي هذا الاستحواذ لتعزيز نموذج البناء لدى المجموعة بطموح واضح: تكوين قطب تجزئة متين ومربح بحلول نهاية 2026 يتألف من 7 شركات و300 متجر و1000 موظف.",
            author: "هشام كيتان",
            role: "الرئيس التنفيذي، ون ريتيل",
          },
          { type: "heading", text: "رؤية موجهة نحو تجزئة الغد" },
          {
            type: "paragraph",
            text: "بدمج Flormar في محفظتها، تواصل ون ريتيل بناء نموذج تجزئة عصري يجمع بين الشبكة المادية والتجارة الإلكترونية والامتياز ورقمنة مسارات العملاء.",
          },
          {
            type: "paragraph",
            text: "يمثل هذا الاستحواذ خطوة جديدة في تطور المجموعة ويؤكد إرادتها في مواكبة تطور أنماط الاستهلاك بالمغرب، مع تعزيز جاذبية العلامات الدولية ذات الإمكانات العالية في السوق الوطنية.",
          },
        ],
      },
    },
  },
  {
    slug: "one-retail-prime-franchise-exhibition-morocco",
    title:
      "One Retail primé au Franchise Exhibition Morocco et confirme son positionnement comme acteur clé du retail au Maroc",
    excerpt:
      "À l'occasion du Franchise Exhibition Morocco, One Retail a marqué les esprits en présentant la richesse de son écosystème et en se distinguant par une reconnaissance majeure.",
    body: "À l'occasion du Franchise Exhibition Morocco, One Retail a marqué les esprits en présentant la richesse de son écosystème et en se distinguant par une reconnaissance majeure lors de l'événement.\n\nPendant trois jours, One Retail a accueilli sur son stand de nombreux investisseurs, entrepreneurs et porteurs de projets venus découvrir des concepts innovants et à fort potentiel. Le groupe a mis en avant un portefeuille diversifié, couvrant plusieurs univers complémentaires : Food & Beverage avec Venezia Ice, Retail de proximité avec Franprix Maroc et Monoprix Maroc, Beauté avec Flormar MA et BeautyForYou, ainsi que Do it yourself avec Mr. Bricolage Maroc. Cette diversité illustre la capacité de One Retail à proposer des solutions adaptées à différents profils d'investisseurs, tout en s'appuyant sur des modèles éprouvés.\n\nLa participation de One Retail a été couronnée par l'obtention de distinctions lors du salon, venant saluer la pertinence de sa stratégie, la qualité de ses concepts et son engagement en faveur du développement de la franchise au Maroc. Ces récompenses renforcent la crédibilité du groupe et confirment son rôle d'acteur structurant dans l'écosystème retail et franchise.\n\nAu-delà de cette reconnaissance, One Retail poursuit une ambition claire : accélérer le développement de ses enseignes au Maroc et à l'international, accompagner ses partenaires franchisés dans la réussite de leurs projets, et proposer des concepts différenciants, performants et durables. La forte affluence sur le stand et la qualité des échanges témoignent d'un intérêt croissant pour des modèles structurés et accompagnés, dans un marché en pleine transformation.\n\nSi le salon marque une étape clé, il ouvre surtout la voie à de nouvelles collaborations et à des projets concrets. One Retail confirme ainsi sa volonté de construire, aux côtés de ses partenaires, une nouvelle génération de concepts retail, capables de répondre aux attentes d'un marché en constante évolution.",
    category: "Événement",
    date: "22.04.2026",
    image: franchiseAward,
    richContent: [
      { type: "heading", text: "Une participation remarquée" },
      {
        type: "paragraph",
        text: "Pendant trois jours, One Retail a accueilli sur son stand de nombreux investisseurs, entrepreneurs et porteurs de projets venus découvrir des concepts innovants et à fort potentiel.",
      },
      {
        type: "bullets",
        intro: "Le groupe a mis en avant un portefeuille diversifié, couvrant plusieurs univers complémentaires :",
        items: [
          "Food & Beverage avec Venezia Ice",
          "Retail de proximité avec Franprix Maroc et Monoprix Maroc",
          "Beauté avec Flormar MA et BeautyForYou",
          "Do it yourself avec Mr. Bricolage Maroc",
        ],
      },
      {
        type: "paragraph",
        text: "Cette diversité illustre la capacité de One Retail à proposer des solutions adaptées à différents profils d'investisseurs, tout en s'appuyant sur des modèles éprouvés.",
      },
      { type: "heading", text: "Une reconnaissance qui confirme une dynamique de croissance" },
      {
        type: "paragraph",
        text: "La participation de One Retail a été couronnée par l'obtention de distinctions lors du salon, venant saluer la pertinence de sa stratégie, la qualité de ses concepts et son engagement en faveur du développement de la franchise au Maroc.",
      },
      {
        type: "paragraph",
        text: "Ces récompenses renforcent la crédibilité du groupe et confirment son rôle d'acteur structurant dans l'écosystème retail et franchise.",
      },
      { type: "heading", text: "Une vision tournée vers l'avenir" },
      {
        type: "bullets",
        intro: "Au-delà de cette reconnaissance, One Retail poursuit une ambition claire :",
        items: [
          "Accélérer le développement de ses enseignes au Maroc et à l'international",
          "Accompagner ses partenaires franchisés dans la réussite de leurs projets",
          "Proposer des concepts différenciants, performants et durables",
        ],
      },
      {
        type: "paragraph",
        text: "La forte affluence sur le stand et la qualité des échanges témoignent d'un intérêt croissant pour des modèles structurés et accompagnés, dans un marché en pleine transformation.",
      },
      { type: "heading", text: "Une dynamique qui se poursuit" },
      {
        type: "paragraph",
        text: "Si le salon marque une étape clé, il ouvre surtout la voie à de nouvelles collaborations et à des projets concrets.",
      },
      {
        type: "paragraph",
        text: "One Retail confirme ainsi sa volonté de construire, aux côtés de ses partenaires, une nouvelle génération de concepts retail, capables de répondre aux attentes d'un marché en constante évolution.",
      },
    ],
    translations: {
      en: {
        title:
          "One Retail honored at Franchise Exhibition Morocco, confirming its position as a key retail player in Morocco",
        excerpt:
          "At Franchise Exhibition Morocco, One Retail made its mark by showcasing the richness of its ecosystem and standing out with a major distinction.",
        category: "Event",
        richContent: [
          { type: "heading", text: "A noticed participation" },
          {
            type: "paragraph",
            text: "For three days, One Retail welcomed to its stand many investors, entrepreneurs and project leaders who came to discover innovative, high-potential concepts.",
          },
          {
            type: "bullets",
            intro: "The group highlighted a diversified portfolio spanning several complementary worlds:",
            items: [
              "Food & Beverage with Venezia Ice",
              "Convenience retail with Franprix Maroc and Monoprix Maroc",
              "Beauty with Flormar MA and BeautyForYou",
              "Do it yourself with Mr. Bricolage Maroc",
            ],
          },
          {
            type: "paragraph",
            text: "This diversity illustrates One Retail's ability to offer solutions tailored to different investor profiles, while relying on proven models.",
          },
          { type: "heading", text: "A recognition that confirms a growth momentum" },
          {
            type: "paragraph",
            text: "One Retail's participation was crowned by the distinctions received during the show, saluting the relevance of its strategy, the quality of its concepts and its commitment to developing franchising in Morocco.",
          },
          {
            type: "paragraph",
            text: "These awards strengthen the group's credibility and confirm its role as a structuring player in the retail and franchise ecosystem.",
          },
          { type: "heading", text: "A vision turned toward the future" },
          {
            type: "bullets",
            intro: "Beyond this recognition, One Retail pursues a clear ambition:",
            items: [
              "Accelerate the development of its banners in Morocco and internationally",
              "Support its franchise partners in the success of their projects",
              "Offer differentiating, high-performing and sustainable concepts",
            ],
          },
          {
            type: "paragraph",
            text: "The strong turnout at the stand and the quality of the exchanges reflect a growing interest in structured and supported models, in a market undergoing full transformation.",
          },
          { type: "heading", text: "A momentum that continues" },
          {
            type: "paragraph",
            text: "While the show marks a key milestone, it above all paves the way for new collaborations and concrete projects.",
          },
          {
            type: "paragraph",
            text: "One Retail thus confirms its determination to build, alongside its partners, a new generation of retail concepts capable of meeting the expectations of a constantly evolving market.",
          },
        ],
      },
      ar: {
        title:
          "ون ريتيل تُكرَّم في معرض الامتياز التجاري بالمغرب وتؤكد مكانتها كفاعل رئيسي في تجارة التجزئة بالمغرب",
        excerpt:
          "بمناسبة معرض الامتياز التجاري بالمغرب، تركت ون ريتيل بصمتها من خلال إبراز غنى منظومتها والتميّز بحصولها على تكريم بارز.",
        category: "فعالية",
        richContent: [
          { type: "heading", text: "مشاركة لافتة" },
          {
            type: "paragraph",
            text: "على مدى ثلاثة أيام، استقبلت ون ريتيل في جناحها العديد من المستثمرين ورواد الأعمال وأصحاب المشاريع الذين جاؤوا لاكتشاف مفاهيم مبتكرة وذات إمكانات عالية.",
          },
          {
            type: "bullets",
            intro: "أبرزت المجموعة محفظة متنوعة تغطي عدة عوالم متكاملة:",
            items: [
              "المأكولات والمشروبات مع Venezia Ice",
              "تجارة القرب مع Franprix Maroc وMonoprix Maroc",
              "الجمال مع Flormar MA وBeautyForYou",
              "الأعمال اليدوية مع Mr. Bricolage Maroc",
            ],
          },
          {
            type: "paragraph",
            text: "يجسّد هذا التنوع قدرة ون ريتيل على تقديم حلول ملائمة لمختلف أنماط المستثمرين، بالاعتماد على نماذج مُثبتة.",
          },
          { type: "heading", text: "تكريم يؤكد دينامية النمو" },
          {
            type: "paragraph",
            text: "تُوِّجت مشاركة ون ريتيل بالحصول على تكريمات خلال المعرض، تقديراً لوجاهة استراتيجيتها وجودة مفاهيمها والتزامها بتطوير الامتياز التجاري في المغرب.",
          },
          {
            type: "paragraph",
            text: "تعزّز هذه الجوائز مصداقية المجموعة وتؤكد دورها كفاعل بنيوي في منظومة التجزئة والامتياز التجاري.",
          },
          { type: "heading", text: "رؤية موجهة نحو المستقبل" },
          {
            type: "bullets",
            intro: "وأبعد من هذا التكريم، تواصل ون ريتيل طموحاً واضحاً:",
            items: [
              "تسريع تطوير علاماتها في المغرب وعلى الصعيد الدولي",
              "مرافقة شركائها من أصحاب الامتياز في إنجاح مشاريعهم",
              "تقديم مفاهيم متميزة وفعّالة ومستدامة",
            ],
          },
          {
            type: "paragraph",
            text: "يشهد الإقبال الكبير على الجناح وجودة النقاشات على اهتمام متزايد بالنماذج المنظمة والمصحوبة بالمرافقة، في سوق يعرف تحولاً عميقاً.",
          },
          { type: "heading", text: "دينامية مستمرة" },
          {
            type: "paragraph",
            text: "وإذا كان المعرض يشكل محطة أساسية، فإنه يفتح قبل كل شيء الطريق أمام شراكات جديدة ومشاريع ملموسة.",
          },
          {
            type: "paragraph",
            text: "بذلك تؤكد ون ريتيل عزمها على أن تبني، إلى جانب شركائها، جيلاً جديداً من مفاهيم التجزئة القادرة على تلبية تطلعات سوق في تطور مستمر.",
          },
        ],
      },
    },
  },
  {
    slug: "one-retail-participe-franchise-exhibition-morocco",
    title:
      "One Retail participe au Franchise Exhibition Morocco et dévoile un écosystème de marques en pleine expansion",
    excerpt:
      "Du 15 au 17 avril, One Retail invite investisseurs, entrepreneurs et futurs franchisés à découvrir un écosystème unique, structuré autour de plusieurs expertises complémentaires.",
    body: "Le développement en franchise s'impose aujourd'hui comme un levier stratégique majeur pour les marques ambitieuses souhaitant accélérer leur croissance et renforcer leur présence sur le marché.\n\nC'est dans cette dynamique que One Retail participe au Franchise Exhibition Morocco, qui se tiendra du 15 au 17 avril. À cette occasion, le groupe invite investisseurs, entrepreneurs et futurs franchisés à découvrir un écosystème unique, structuré autour de plusieurs expertises complémentaires.\n\nSur son stand, One Retail mettra en avant l'ensemble de ses univers, illustrant la richesse et la complémentarité de son offre : Food & Beverage avec Venezia Ice, Retail de proximité avec Franprix Maroc et Monoprix Maroc, Beauté avec Flormar MA et BeautyForYou, ainsi que Do it yourself avec Mr. Bricolage Maroc. Cette diversité permet au groupe de proposer des concepts adaptés à différents profils d'investisseurs, tout en capitalisant sur des marques reconnues et des modèles éprouvés.\n\nÀ travers sa participation à cet événement, One Retail affirme sa volonté de proposer des concepts solides, différenciants et performants, d'accompagner ses partenaires franchisés à chaque étape de leur développement, et d'accélérer son expansion, au Maroc comme à l'international. L'approche du groupe repose sur un accompagnement structuré et une vision long terme, visant à garantir la réussite de ses partenaires tout en consolidant la croissance de ses enseignes.\n\nLe Franchise Exhibition Morocco constitue une opportunité privilégiée pour échanger autour de projets concrets, découvrir des concepts innovants et identifier des opportunités à fort potentiel. Les visiteurs sont invités à rencontrer les équipes One Retail sur leur stand afin d'explorer les différentes possibilités de collaboration et de rejoindre une dynamique de croissance portée par des marques fortes.",
    category: "Événement",
    date: "10.04.2026",
    image: franchiseExhibition,
    translations: {
      en: {
        title:
          "One Retail takes part in Franchise Exhibition Morocco and unveils a rapidly expanding brand ecosystem",
        excerpt:
          "From April 15 to 17, One Retail invites investors, entrepreneurs and future franchisees to discover a unique ecosystem built around several complementary areas of expertise.",
        category: "Event",
        body: "Franchise development has now become a major strategic lever for ambitious brands seeking to accelerate their growth and strengthen their market presence.\n\nIt is within this momentum that One Retail is taking part in Franchise Exhibition Morocco, held from April 15 to 17. On this occasion, the group invites investors, entrepreneurs and future franchisees to discover a unique ecosystem built around several complementary areas of expertise.\n\nAt its stand, One Retail will showcase all of its worlds, illustrating the richness and complementarity of its offer: Food & Beverage with Venezia Ice, convenience retail with Franprix Maroc and Monoprix Maroc, Beauty with Flormar MA and BeautyForYou, as well as Do it yourself with Mr. Bricolage Maroc. This diversity allows the group to offer concepts tailored to different investor profiles, while capitalizing on recognized brands and proven models.\n\nThrough its participation in this event, One Retail affirms its determination to offer solid, differentiating and high-performing concepts, to support its franchise partners at every stage of their development, and to accelerate its expansion, in Morocco as well as internationally. The group's approach is based on structured support and a long-term vision, aiming to guarantee the success of its partners while consolidating the growth of its banners.\n\nFranchise Exhibition Morocco is a privileged opportunity to discuss concrete projects, discover innovative concepts and identify high-potential opportunities. Visitors are invited to meet the One Retail teams at their stand to explore the various possibilities for collaboration and join a growth momentum driven by strong brands.",
      },
      ar: {
        title:
          "ون ريتيل تشارك في معرض الامتياز التجاري بالمغرب وتكشف عن منظومة علامات في توسّع مستمر",
        excerpt:
          "من 15 إلى 17 أبريل، تدعو ون ريتيل المستثمرين ورواد الأعمال وأصحاب الامتياز المستقبليين لاكتشاف منظومة فريدة مبنية على عدة خبرات متكاملة.",
        category: "فعالية",
        body: "أصبح التطوير عبر الامتياز التجاري اليوم رافعة استراتيجية أساسية للعلامات الطموحة الراغبة في تسريع نموها وتعزيز حضورها في السوق.\n\nوضمن هذه الدينامية، تشارك ون ريتيل في معرض الامتياز التجاري بالمغرب، الذي يُقام من 15 إلى 17 أبريل. وبهذه المناسبة، تدعو المجموعة المستثمرين ورواد الأعمال وأصحاب الامتياز المستقبليين لاكتشاف منظومة فريدة مبنية على عدة خبرات متكاملة.\n\nفي جناحها، ستُبرز ون ريتيل مجمل عوالمها، بما يعكس غنى عرضها وتكامله: المأكولات والمشروبات مع Venezia Ice، وتجارة القرب مع Franprix Maroc وMonoprix Maroc، والجمال مع Flormar MA وBeautyForYou، إضافة إلى الأعمال اليدوية مع Mr. Bricolage Maroc. يتيح هذا التنوع للمجموعة تقديم مفاهيم ملائمة لمختلف أنماط المستثمرين، مع الاستفادة من علامات معترف بها ونماذج مُثبتة.\n\nمن خلال مشاركتها في هذا الحدث، تؤكد ون ريتيل عزمها على تقديم مفاهيم متينة ومتميزة وفعّالة، ومرافقة شركائها من أصحاب الامتياز في كل مرحلة من مراحل تطورهم، وتسريع توسّعها في المغرب كما على الصعيد الدولي. ترتكز مقاربة المجموعة على مرافقة منظمة ورؤية بعيدة المدى، تهدف إلى ضمان نجاح شركائها مع تعزيز نمو علاماتها.\n\nيشكّل معرض الامتياز التجاري بالمغرب فرصة متميزة للتحاور حول مشاريع ملموسة واكتشاف مفاهيم مبتكرة وتحديد فرص ذات إمكانات عالية. والزوار مدعوون للقاء فرق ون ريتيل في جناحها لاستكشاف مختلف إمكانات التعاون والانضمام إلى دينامية نمو تقودها علامات قوية.",
      },
    },
  },
];

export const FEATURED = ARTICLES[0];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
