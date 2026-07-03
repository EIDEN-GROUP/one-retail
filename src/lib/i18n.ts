import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        apropos: "À propos",
        services: "Services",
        lifestyle: "Lifestyle",
        beauty: "Beauty",
        restauration: "Restauration / Cafés",
        bricolage: "Bricolage",
        franchise: "Franchise",
        carriere: "Carrière",
        contact: "Contact",
        actualites: "Actualités",
      },
      cta: {
        discover: "Découvrir",
        explore: "Explorer l'univers",
        becomeFranchisee: "Devenir franchisé",
        apropos: "En savoir plus",
        contactUs: "Nous contacter",
        viewAll: "Voir tout",
        readMore: "Lire l'article",
        apply: "Postuler",
        send: "Envoyer",
      },
      home: {
        eyebrow: "One Retail — Maroc",
        heroTitleA: "L'art de la distribution,",
        heroTitleB: "à l'échelle des grandes signatures.",
        heroSub:
          "Quatre univers, une exigence. One Retail orchestre des enseignes de référence au Maroc — lifestyle, beauté, restauration et bricolage.",
        about: {
          eyebrow: "Qui sommes-nous ?",
          title: "One Retail,",
          subtitle: "Filiale de H&S Group",
          body: "Acteur majeur du commerce moderne au Maroc, One Retail réunit des enseignes complémentaires qui accompagnent le consommateur dans tous les moments de la vie quotidienne: alimentation de proximité, restauration, glaces & pâtisserie, beauté, e-commerce, maison et bricolage. Nos enseignes: Franprix, Monoprix, Venezia-Ice, BeautyForYou, Mr.Bricolage Maroc, Flormar et Dahab forment un écosystème cohérent, accessible et innovant, pensé pour répondre aux besoins essentiels comme aux expériences plaisir. À travers un modèle intégré, One Retail place l’expérience client, la proximité, la qualité et l’innovation au cœur de son engagement.",
        },
        pillars: {
          eyebrow: "Quatre Piliers d'Excellence",
          title: "Nos Domaines d'Activité",
          items: [
            { t: "Exigence", d: "Standards opérationnels alignés sur les meilleures pratiques internationales." },
            { t: "Cohérence", d: "Un même soin du détail à travers toutes nos enseignes." },
            { t: "Proximité", d: "Une connaissance fine des bassins de consommation marocains." },
            { t: "Engagement", d: "Des équipes qui portent chaque marque comme la leur." },
          ],
        },
        values: {
          eyebrow: "Nos Valeurs",
          title: "Ce qui nous tient debout.",
          items: [
            { n: "01", t: "Intégrité", d: "Transparence absolue avec nos partenaires, nos équipes et nos clients." },
            { n: "02", t: "Excellence", d: "L'obsession du juste — du concept jusqu'à l'expérience en point de vente." },
            { n: "03", t: "Audace", d: "Oser des concepts neufs, des formats inédits, des géographies nouvelles." },
            { n: "04", t: "Respect", d: "Du métier, du temps, des hommes — et de ce qui les rassemble." },
          ],
        },
        ambitions: {
          eyebrow: "Ambitions & Missions",
          title: "Faire du Maroc une scène de référence pour le retail moderne.",
          body:
            "Nous portons des enseignes internationales et nationales avec la conviction que la distribution est un service noble. Notre mission : offrir à chaque client une expérience pensée, à chaque collaborateur un cadre exigeant, à chaque partenaire un opérateur fiable.",
        },
        president: {
          sectionTitle: "Mot du Président",
          eyebrow: "Le Mot du Président",
          quote:
            "One Retail incarne notre vision d’un retail marocain moderne, structuré et orienté expérience. Nous avons rassemblé des enseignes fortes et complémentaires afin d’accompagner la transformation des habitudes de consommation, d’apporter davantage de proximité, de qualité et de services aux Marocains, et de créer un véritable écosystème lifestyle. Notre objectif est clair : bâtir un retail innovant, accessible, ambitieux et durable.",
          name: "Moncef Belkhayat",
          title: "Président de H&S Group",
        },
        bannerCta: {
          sectionTitle: "Rejoignez la Révolution du Retail",
          body: "Devenez ambassadeur ou partenaire de franchise d’une marque synonyme d’excellence et de modernité au Maroc, conçue sous une direction artistique de premier ordre.",
        },
        news: {
          eyebrow: "Actualités",
          title: "L'actualité du groupe.",
          body: "Ouvertures, nouveautés produits et engagements suivez ce qui fait bouger nos enseignes.",
          cta: "Voir toutes les actualités",
        },
      },
      services: {
        intro: "Une enseigne, un récit. Découvrez nos marques.",
        gallery: "Galerie",
        about: "L'enseigne",
        single: "Découvrir",
      },
      franchise: {
        title: "Devenir franchisé One Retail",
        sub: "Un partenariat exigeant, conçu pour durer.",
      },
      careers: {
        title: "Bâtissez votre carrière chez One Retail",
        search: "Rechercher un poste",
        all: "Tous",
        spontaneous: "Candidature spontanée",
      },
      news: { title: "Actualités", featured: "À la une", other: "Autres articles" },
      contact: { title: "Contact", form: { name: "Nom", email: "Email", phone: "Téléphone", subject: "Sujet", message: "Message" } },
      loading: "Chargement",
    },
  },
  en: {
    translation: {
      nav: { home: "Home", apropos: "About", services: "Services", lifestyle: "Lifestyle", beauty: "Beauty", restauration: "Food & Cafés", bricolage: "DIY", franchise: "Franchise", carriere: "Careers", contact: "Contact", actualites: "News" },
      cta: { discover: "Discover", explore: "Explore", becomeFranchisee: "Become a franchisee", contactUs: "Contact us", viewAll: "View all", readMore: "Read article", apply: "Apply", send: "Send" },
      home: {
        eyebrow: "One Retail — Morocco",
        heroTitleA: "The art of distribution,",
        heroTitleB: "at the scale of great signatures.",
        heroSub: "Four worlds, one standard. One Retail orchestrates landmark brands across Morocco — lifestyle, beauty, food and DIY.",
        about: {
          eyebrow: "About",
          title: "Retail as a coherent narrative.",
          body: "One Retail is a Moroccan operator dedicated to developing and running premier franchise banners. We build emotionally rich brands, backed by jeweler-grade operational discipline.",
          subtitle: "An ecosystem built for everyday life in Morocco.",
          description: "A major player in modern retail in Morocco, One Retail brings together complementary banners that support consumers through every moment of daily life: neighborhood grocery, food service, ice cream & pastry, beauty, e-commerce, home and DIY.",
          brands: "Our banners — Franprix, Monoprix, Venezia-Ice, BeautyForYou, Mr.Bricolage Maroc, Flormar and Dahab — form a coherent, accessible and innovative ecosystem, designed to meet both essential needs and moments of pleasure.",
          commitment: "Through an integrated model, One Retail places customer experience, proximity, quality and innovation at the heart of its commitment.",
        },
        pillars: { eyebrow: "Four Pillars of Excellence", title: "One method, four constants.", items: [ { t: "Standards", d: "Operations aligned with international best practice." }, { t: "Consistency", d: "Care for detail across every banner." }, { t: "Proximity", d: "Deep knowledge of Moroccan consumer basins." }, { t: "Commitment", d: "Teams who carry each brand as their own." } ] },
        values: { eyebrow: "Our Values", title: "What keeps us standing.", items: [ { n: "01", t: "Integrity", d: "Absolute transparency with partners, teams and customers." }, { n: "02", t: "Excellence", d: "Obsession with the right answer — from concept to retail floor." }, { n: "03", t: "Boldness", d: "Daring new concepts, formats and territories." }, { n: "04", t: "Respect", d: "For craft, time, people — and what gathers them." } ] },
        ambitions: { eyebrow: "Ambitions & Mission", title: "Make Morocco a reference stage for modern retail.", body: "We carry international and national banners with the conviction that distribution is a noble service. Our mission: a considered experience for every customer, a demanding frame for every teammate, a reliable operator for every partner." },
        video: { eyebrow: "The Film", title: "The One Retail spirit, in motion." },
        president: { eyebrow: "From the President", quote: "We believe in precision retail, rooted in respect for the customer and rigor of the craft. That conviction carries us, and will guide our next decade.", name: "The President", title: "One Retail" },
        news: {
          eyebrow: "News",
          title: "The group's latest news.",
          body: "Openings, product news and commitments — follow what moves our banners forward.",
          cta: "View all news",
        },
      },
      services: { intro: "One banner, one story. Meet our brands.", gallery: "Gallery", about: "The brand", single: "Discover" },
      franchise: { title: "Become a One Retail franchisee", sub: "A demanding partnership, built to last." },
      careers: { title: "Build your career at One Retail", search: "Search a role", all: "All", spontaneous: "Spontaneous application" },
      news: { title: "News", featured: "Featured", other: "Other articles" },
      contact: { title: "Contact", form: { name: "Name", email: "Email", phone: "Phone", subject: "Subject", message: "Message" } },
      loading: "Loading",
    },
  },
  ar: {
    translation: {
      nav: { home: "الرئيسية", apropos: "من نحن", services: "الخدمات", lifestyle: "نمط الحياة", beauty: "الجمال", restauration: "المطاعم والمقاهي", bricolage: "أدوات منزلية", franchise: "الامتياز", carriere: "الوظائف", contact: "اتصل بنا", actualites: "أخبار" },
      cta: { discover: "اكتشف", explore: "استكشف", becomeFranchisee: "كن صاحب امتياز", contactUs: "تواصل معنا", viewAll: "عرض الكل", readMore: "اقرأ المقال", apply: "تقدم", send: "إرسال" },
      home: {
        eyebrow: "ون ريتيل — المغرب",
        heroTitleA: "فن التوزيع،",
        heroTitleB: "بمستوى أرقى العلامات.",
        heroSub: "أربعة عوالم ومعيار واحد. ون ريتيل تدير علامات بارزة في المغرب — نمط الحياة، الجمال، المطاعم والأدوات.",
        about: {
          eyebrow: "من نحن",
          title: "تجارة التجزئة كرواية متماسكة.",
          body: "ون ريتيل هي مشغل مغربي متخصص في تطوير وإدارة علامات الامتياز الرائدة. نبني علامات تحمل قوة عاطفية، مدعومة بانضباط تشغيلي دقيق.",
          subtitle: "منظومة صُممت لمرافقة الحياة اليومية للمغاربة.",
          description: "بصفتها فاعلاً رئيسياً في التجارة الحديثة بالمغرب، تجمع ون ريتيل بين علامات متكاملة ترافق المستهلك في كل لحظات حياته اليومية: تجارة القرب، المطاعم، المثلجات والحلويات، الجمال، التجارة الإلكترونية، المنزل والأدوات.",
          brands: "علاماتنا — فرانبري، مونوبري، فينيسيا آيس، بيوتي فور يو، مستر بريكولاج المغرب، فلورمار ودهب — تشكل منظومة متماسكة وسهلة المنال ومبتكرة، مصممة لتلبية الاحتياجات الأساسية وتجارب المتعة.",
          commitment: "من خلال نموذج متكامل، تضع ون ريتيل تجربة العميل والقرب والجودة والابتكار في صميم التزامها.",
        },
        pillars: { eyebrow: "أربعة أعمدة للتميز", title: "منهج واحد وأربع ثوابت.", items: [ { t: "الإتقان", d: "معايير تشغيلية تتماشى مع أفضل الممارسات الدولية." }, { t: "الاتساق", d: "اهتمام بالتفاصيل عبر كل علاماتنا." }, { t: "القرب", d: "معرفة عميقة بالسوق المغربي." }, { t: "الالتزام", d: "فرق تعتبر كل علامة كأنها لها." } ] },
        values: { eyebrow: "قيمنا", title: "ما يبقينا واقفين.", items: [ { n: "٠١", t: "النزاهة", d: "شفافية مطلقة مع شركائنا وفرقنا وزبائننا." }, { n: "٠٢", t: "التميز", d: "هاجس الإتقان من المفهوم حتى نقطة البيع." }, { n: "٠٣", t: "الجرأة", d: "نجرؤ على المفاهيم والصيغ والجغرافيات الجديدة." }, { n: "٠٤", t: "الاحترام", d: "للحرفة وللوقت وللإنسان." } ] },
        ambitions: { eyebrow: "طموحاتنا ورسالتنا", title: "جعل المغرب مرجعاً للتجزئة الحديثة.", body: "نحمل علامات دولية ووطنية بقناعة أن التوزيع خدمة نبيلة. مهمتنا: تجربة مدروسة لكل زبون، إطار صارم لكل موظف، شريك موثوق لكل متعاون." },
        video: { eyebrow: "الفيلم", title: "روح ون ريتيل في حركة." },
        president: { eyebrow: "كلمة الرئيس", quote: "نؤمن بتجزئة دقيقة، متجذرة في احترام الزبون وصرامة الحرفة. هذه القناعة هي ما يحملنا وما سيقود عقدنا القادم.", name: "الرئيس", title: "ون ريتيل" },
        news: {
          eyebrow: "الأخبار",
          title: "آخر أخبار المجموعة.",
          body: "افتتاحات ومستجدات المنتجات والتزاماتنا — تابع كل ما يحرك علاماتنا.",
          cta: "عرض جميع الأخبار",
        },
      },
      services: { intro: "علامة واحدة، قصة واحدة. تعرف على علاماتنا.", gallery: "المعرض", about: "العلامة", single: "اكتشف" },
      franchise: { title: "كن صاحب امتياز ون ريتيل", sub: "شراكة صارمة مبنية للاستمرار." },
      careers: { title: "ابنِ مسيرتك مع ون ريتيل", search: "ابحث عن وظيفة", all: "الكل", spontaneous: "ترشح تلقائي" },
      news: { title: "أخبار", featured: "في الواجهة", other: "مقالات أخرى" },
      contact: { title: "اتصل بنا", form: { name: "الاسم", email: "البريد", phone: "الهاتف", subject: "الموضوع", message: "الرسالة" } },
      loading: "جار التحميل",
    },
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "fr",
      supportedLngs: ["fr", "en", "ar"],
      interpolation: { escapeValue: false },
      detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
    });
}

export default i18n;
