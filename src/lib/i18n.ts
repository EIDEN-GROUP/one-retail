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
        about: "Qui sommes-nous ?",
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
        hero: {
          words: [
            { text: "Au" },
            { text: "cœur" },
            { text: "du" },
            { text: "commerce", brand: true },
            { text: "marocain", breakBefore: true },
            { text: "moderne." },
          ],
          sub: "One Retail réunit des enseignes complémentaires qui accompagnent le consommateur dans tous les moments de la vie quotidienne : alimentation, restauration, beauté, e-commerce et bricolage.",
        },
        about: {
          eyebrow: "Qui sommes-nous ?",
          title: "One Retail,",
          subtitle: "Filiale de H&S Group",
          body: "Acteur majeur du commerce moderne au Maroc, One Retail réunit des enseignes complémentaires qui accompagnent le consommateur dans tous les moments de la vie quotidienne: alimentation de proximité, restauration, glaces & pâtisserie, beauté, e-commerce, maison et bricolage. Nos enseignes: Franprix, Monoprix, Venezia-Ice, BeautyForYou, Mr.Bricolage Maroc, Flormar et Dahab forment un écosystème cohérent, accessible et innovant, pensé pour répondre aux besoins essentiels comme aux expériences plaisir. À travers un modèle intégré, One Retail place l’expérience client, la proximité, la qualité et l’innovation au cœur de son engagement.",
        },
        pillars: {
          eyebrow: "Quatre Piliers d'Excellence",
          title: "Nos Domaines d'Activité",
        },
        services: {
          lifestyle: { label: "Lifestyle", sub: "La grande distribution repensée avec soin et ambition." },
          beauty: { label: "Beauty", sub: "L'univers cosmétique à portée de tous, avec exigence." },
          restauration: { label: "Restauration", sub: "Des concepts de restauration qui éveillent les sens." },
          bricolage: { label: "Bricolage", sub: "L'équipement de la maison et du quotidien, accessible." },
        },
        values: {
          eyebrow: "Nos Valeurs",
          title: "Nos engagements et convictions définissent qui nous sommes et guident chaque décision vers un succès durable.",
          highlight: "Cinq convictions, un même engagement : bâtir un retail marocain ambitieux et durable.",
          items: [
            { n: "01", t: "Ownership", d: "Nous agissons en entrepreneurs responsables, où chaque collaborateur est acteur de la réussite collective et porteur des ambitions du groupe." },
            { n: "02", t: "Agility", d: "Face aux changements, nous transformons chaque défi en opportunité grâce à notre capacité d’adaptation rapide et flexible." },
            { n: "03", t: "Simplicity", d: "Nous privilégions la clarté et l’efficacité, en transformant la complexité en solutions concrètes et accessibles pour nos clients." },
            { n: "04", t: "Integrity", d: "L’honnêteté, le respect et la transparence guident chacune de nos décisions et renforcent la confiance avec nos partenaires." },
            { n: "05", t: "Sustainability", d: "Nous intégrons la responsabilité sociale et environnementale à notre stratégie pour créer une valeur durable et partagée." },
          ],
        },
        ambitions: {
          eyebrow: "Ambitions & Missions",
          title: "Faire du Maroc une scène de référence pour le retail moderne.",
          body:
            "One Retail construit un écosystème retail moderne, agile et durable, capable de devenir une référence régionale. Sa vision repose sur une croissance ambitieuse, une excellence opérationnelle globale et un engagement profond pour un impact positif et accessible à tous.",
          items: [
            { n: "01", d: "Déployer un réseau multi-enseignes dans toutes les grandes villes." },
            { n: "02", d: "Renforcer l’implantation dans les capitales régionales africaines." },
            { n: "03", d: "Étendre le modèle omnicanal pour toucher de nouveaux marchés." },
            { n: "04", d: "Nouer des partenariats stratégiques avec des acteurs internationaux." },
          ],
        },
        missions: {
          body: "Apporter aux Marocains un retail moderne, pratique et inspirant, en proposant des lieux, des services et des expériences qui simplifient le quotidien, améliorent le confort de vie et créent du lien.",
          items: [
            { t: "Proximité", d:"Des enseignes au cœur des villes, accessibles et adaptées aux nouveaux modes de vie."},
            { t: "Qualité & fiabilité", d:"Une exigence constante dans l’offre, le service et la gestion opérationnelle."},
            { t: "Innovation & digitalisation", d:"Un retail connecté, simple, omnicanal et tourné vers l’avenir."},
          ]
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
          title: "Les dernières nouvelles de notre écosystème.",
          body: "Ouvertures, nouveautés produits et engagements suivez ce qui fait bouger nos enseignes.",
          cta: "Voir toutes les actualités",
        },
        contactCta: {
          eyebrow: "Contact",
          title: "Parlons de votre projet retail.",
          body: "Partenariat, franchise, presse ou opportunités professionnelles : notre équipe One Retail vous accompagne à chaque étape.",
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
      contact: {
        title: "Contact",
        heroTitle: "Contactez-nous.",
        eyebrow: "Contact",
        listenTitle: "Nous sommes à votre écoute.",
        intro:
          "Que vous soyez un partenaire, un client, un fournisseur ou simplement intéressé par notre activité, n'hésitez pas à nous contacter. Nos équipes vous répondront dans les plus brefs délais.",
        info: { phone: "Téléphone", email: "Email", address: "Adresse" },
        writeUs: "Écrivez-nous",
        question: "Une question ?",
        formIntro: "Remplissez le formulaire, notre équipe reviendra vers vous rapidement.",
        form: { name: "Votre nom", email: "Votre email", subject: "Sujet", message: "Votre message" },
        sent: "Merci ! Votre message a bien été envoyé.",
      },
      footer: {
        navigation: "Navigation",
        headquarters: "Siège social",
        rights: "Tous les droits réservés © {{year}} H&S Invest Holding.",
      },
      loading: "Chargement",
    },
  },
  en: {
    translation: {
      nav: { home: "Home", apropos: "About", services: "Services", lifestyle: "Lifestyle", beauty: "Beauty", restauration: "Food & Cafés", bricolage: "DIY", franchise: "Franchise", carriere: "Careers", contact: "Contact", actualites: "News" },
      cta: { about: "Who we are", discover: "Discover", explore: "Explore", becomeFranchisee: "Become a franchisee", apropos: "Learn more", contactUs: "Contact us", viewAll: "View all", readMore: "Read article", apply: "Apply", send: "Send" },
      home: {
        eyebrow: "One Retail Morocco",
        heroTitleA: "The art of distribution,",
        heroTitleB: "at the scale of great signatures.",
        heroSub: "Four worlds, one standard. One Retail orchestrates landmark brands across Morocco — lifestyle, beauty, food and DIY.",
        hero: {
          words: [
            { text: "At" },
            { text: "the" },
            { text: "heart" },
            { text: "of" },
            { text: "modern", breakBefore: true },
            { text: "Moroccan" },
            { text: "retail.", brand: true },
          ],
          sub: "One Retail brings together complementary banners that support consumers in every moment of daily life: food, dining, beauty, e-commerce and DIY.",
        },
        about: {
          eyebrow: "Who we are",
          title: "One Retail,",
          subtitle: "A subsidiary of H&S Group",
          body: "A major player in modern commerce in Morocco, One Retail brings together complementary brands that support the consumer in all moments of daily life: local food, catering, ice cream & pastry, beauty, e-commerce, home and DIY. Our brands: Franprix, Monoprix, Venezia-Ice, BeautyForYou, Mr.Bricolage Maroc, Flormar and Dahab form a coherent, accessible and innovative ecosystem, designed to meet essential needs as well as pleasurable experiences. Through an integrated model, One Retail places customer experience, proximity, quality and innovation at the heart of its commitment.",
        },
        pillars: { eyebrow: "Four Pillars of Excellence", title: "Our Areas of Activity" },
        services: {
          lifestyle: { label: "Lifestyle", sub: "Mass retail rethought with care and ambition." },
          beauty: { label: "Beauty", sub: "The world of cosmetics within everyone's reach, with high standards." },
          restauration: { label: "Dining", sub: "Dining concepts that awaken the senses." },
          bricolage: { label: "DIY", sub: "Home and everyday equipment, made accessible." },
        },
        values: {
          eyebrow: "Our Values",
          title: "Our commitments and convictions define who we are and guide every decision toward lasting success.",
          highlight: "Five convictions, one commitment: building an ambitious and sustainable Moroccan retail.",
          items: [
            { n: "01", t: "Ownership", d: "We act as responsible entrepreneurs, where each employee is a stakeholder in the collective success and a bearer of the group's ambitions." },
            { n: "02", t: "Agility", d: "Faced with change, we transform every challenge into an opportunity thanks to our ability to adapt quickly and flexibly." },
            { n: "03", t: "Simplicity", d: "We prioritize clarity and efficiency, transforming complexity into concrete and accessible solutions for our clients." },
            { n: "04", t: "Integrity", d: "Honesty, respect and transparency guide each of our decisions and strengthen trust with our partners." },
            { n: "05", t: "Sustainability", d: "We integrate social and environmental responsibility into our strategy to create sustainable and shared value." },
          ],
        },
        ambitions: {
          eyebrow: "Ambitions & Missions",
          title: "Making Morocco a reference stage for modern retail.",
          body: "One Retail is building a modern, agile, and sustainable retail ecosystem capable of becoming a regional benchmark. Its vision is based on ambitious growth, overall operational excellence, and a deep commitment to a positive and accessible impact for all.",
          items: [
            { n: "01", d: "Deploy a multi-banner network across all major cities." },
            { n: "02", d: "Strengthen our presence in African regional capitals." },
            { n: "03", d: "Expanding the omnichannel model to reach new markets." },
            { n: "04", d: "Establish strategic partnerships with international players." },
          ],
        },
        missions: {
          body: "To bring Moroccans a modern, practical and inspiring retail experience, by offering places, services and experiences that simplify daily life, improve comfort and create connections.",
          items: [
            { t: "Proximity", d: "Stores in the heart of cities, accessible and adapted to new lifestyles." },
            { t: "Quality & reliability", d: "A constant requirement in the product, service and operational management." },
            { t: "Innovation & digitalization", d: "A connected, simple, omnichannel and future-oriented retail experience." },
          ],
        },
        president: {
          sectionTitle: "A Word from the President",
          eyebrow: "A Word from the President",
          quote: "One Retail embodies our vision of a modern, structured, experience-driven Moroccan retail. We have gathered strong, complementary banners to accompany the transformation of consumption habits, to bring Moroccans more proximity, quality and services, and to create a true lifestyle ecosystem. Our goal is clear: to build an innovative, accessible, ambitious and sustainable retail.",
          name: "Moncef Belkhayat",
          title: "President of H&S Group",
        },
        news: {
          eyebrow: "News",
          title: "The latest news from our ecosystem.",
          body: "Openings, product news and commitments — follow what moves our banners forward.",
          cta: "View all news",
        },
        contactCta: {
          eyebrow: "Contact",
          title: "Let's talk about your retail project.",
          body: "Partnership, franchise, press or career opportunities: the One Retail team supports you at every step.",
        },
      },
      services: { intro: "One banner, one story. Meet our brands.", gallery: "Gallery", about: "The brand", single: "Discover" },
      franchise: { title: "Become a One Retail franchisee", sub: "A demanding partnership, built to last." },
      careers: { title: "Build your career at One Retail", search: "Search a role", all: "All", spontaneous: "Spontaneous application" },
      news: { title: "News", featured: "Featured", other: "Other articles" },
      contact: {
        title: "Contact",
        heroTitle: "Contact Us.",
        eyebrow: "Contact",
        listenTitle: "We're here to listen.",
        intro:
          "Whether you are a partner, a customer, a supplier or simply interested in what we do, don't hesitate to reach out. Our teams will get back to you as soon as possible.",
        info: { phone: "Phone", email: "Email", address: "Address" },
        writeUs: "Write to us",
        question: "Have a question?",
        formIntro: "Fill in the form and our team will get back to you shortly.",
        form: { name: "Your name", email: "Your email", subject: "Subject", message: "Your message" },
        sent: "Thank you! Your message has been sent.",
      },
      footer: {
        navigation: "Navigation",
        headquarters: "Headquarters",
        rights: "All rights reserved © {{year}} H&S Invest Holding.",
      },
      loading: "Loading",
    },
  },
  ar: {
    translation: {
      nav: { home: "الرئيسية", apropos: "من نحن", services: "الخدمات", lifestyle: "نمط الحياة", beauty: "الجمال", restauration: "المطاعم والمقاهي", bricolage: "أدوات منزلية", franchise: "الامتياز", carriere: "الوظائف", contact: "اتصل بنا", actualites: "أخبار" },
      cta: { about: "من نحن", discover: "اكتشف", explore: "استكشف", becomeFranchisee: "كن صاحب امتياز", apropos: "اعرف المزيد", contactUs: "تواصل معنا", viewAll: "عرض الكل", readMore: "اقرأ المقال", apply: "تقدم", send: "إرسال" },
      home: {
        eyebrow: "ون ريتيل — المغرب",
        heroTitleA: "فن التوزيع،",
        heroTitleB: "بمستوى أرقى العلامات.",
        heroSub: "أربعة عوالم ومعيار واحد. ون ريتيل تدير علامات بارزة في المغرب — نمط الحياة، الجمال، المطاعم والأدوات.",
        hero: {
          words: [
            { text: "في" },
            { text: "قلب" },
            { text: "التجارة", brand: true },
            { text: "المغربية", breakBefore: true },
            { text: "الحديثة." },
          ],
          sub: "تجمع ون ريتيل علامات متكاملة ترافق المستهلك في كل لحظات الحياة اليومية: التغذية، المطاعم، الجمال، التجارة الإلكترونية والأدوات المنزلية.",
        },
        about: {
          eyebrow: "من نحن",
          title: "ون ريتيل،",
          subtitle: "فرع من مجموعة H&S",
          body: "تجمع شركة \"ون ريتيل\"، وهي لاعب رئيسي في التجارة الحديثة في المغرب، علامات تجارية متكاملة تدعم المستهلك في جميع لحظات الحياة اليومية: الأطعمة المحلية، وخدمات الطعام، والآيس كريم والمعجنات، ومستحضرات التجميل، والتجارة الإلكترونية، والأدوات المنزلية، ومستلزمات الأعمال اليدوية. تشكل علاماتنا التجارية: Franprix و Monoprix و Venezia-Ice و BeautyForYou و Mr.Bricolage Maroc و Flormar و Dahab نظامًا بيئيًا متماسكًا وسهل الوصول إليه ومبتكرًا، مصممًا لتلبية الاحتياجات الأساسية بالإضافة إلى التجارب الممتعة. من خلال نموذج متكامل، تضع شركة \"ون ريتيل\" تجربة العملاء والقرب والجودة والابتكار في صميم التزامها.",
        },
        pillars: { eyebrow: "أربعة أعمدة للتميز", title: "مجالات نشاطنا" },
        services: {
          lifestyle: { label: "نمط الحياة", sub: "التوزيع الكبير بمفهوم جديد يجمع العناية والطموح." },
          beauty: { label: "الجمال", sub: "عالم مستحضرات التجميل في متناول الجميع وبمعايير عالية." },
          restauration: { label: "المطاعم", sub: "مفاهيم مطاعم توقظ الحواس." },
          bricolage: { label: "الأدوات المنزلية", sub: "تجهيزات المنزل والحياة اليومية في المتناول." },
        },
        values: {
          eyebrow: "قيمنا",
          title: "التزاماتنا وقناعاتنا تحدد من نحن وتوجه كل قرار نحو نجاح مستدام.",
          highlight: "خمس قناعات والتزام واحد: بناء تجارة تجزئة مغربية طموحة ومستدامة.",
          items: [
            { n: "٠١", t: "ملكية", d: "نحن نتصرف كرواد أعمال مسؤولين، حيث يكون كل موظف صاحب مصلحة في النجاح الجماعي وحاملاً لطموحات المجموعة." },
            { n: "٠٢", t: "المرونة", d: "في مواجهة التغيير، نحول كل تحدٍ إلى فرصة بفضل قدرتنا على التكيف بسرعة ومرونة." },
            { n: "٠٣", t: "البساطة", d: "نحن نولي الأولوية للوضوح والكفاءة، ونحول التعقيد إلى حلول ملموسة وسهلة الوصول لعملائنا." },
            { n: "٠٤", t: "النزاهة", d: "إن الصدق والاحترام والشفافية توجه جميع قراراتنا وتعزز الثقة مع شركائنا." },
            { n: "٠٥", t: "الاستدامة", d: "ندمج المسؤولية الاجتماعية والبيئية في استراتيجيتنا لخلق قيمة مستدامة ومشتركة." },
          ],
        },
        ambitions: {
          eyebrow: "طموحاتنا ومهمتنا",
          title: "جعل المغرب مرجعاً لتجارة التجزئة الحديثة.",
          body: "تسعى شركة \"ون ريتيل\" إلى بناء منظومة تجزئة حديثة ومرنة ومستدامة قادرة على أن تصبح نموذجاً إقليمياً يُحتذى به. وتستند رؤيتها إلى نمو طموح، وتميز تشغيلي شامل، والتزام راسخ بإحداث تأثير إيجابي ومتاح للجميع.",
          items: [
            { n: "٠١", d: "نشر شبكة متعددة العلامات التجارية في جميع المدن الرئيسية." },
            { n: "٠٢", d: "تعزيز وجودنا في عواصم المناطق الأفريقية." },
            { n: "٠٣", d: "توسيع نموذج القنوات المتعددة للوصول إلى أسواق جديدة." },
            { n: "٠٤", d: "إقامة شراكات استراتيجية مع جهات فاعلة دولية." },
          ],
        },
        missions: {
          body: "تقديم تجربة تسوق عصرية وعملية وملهمة للمغاربة، من خلال توفير أماكن وخدمات وتجارب تبسط الحياة اليومية، وتحسن الراحة، وتخلق روابط.",
          items: [
            { t: "القرب", d: "متاجر في قلب المدن، يسهل الوصول إليها ومُكيّفة مع أنماط الحياة الجديدة." },
            { t: "الجودة والموثوقية", d: "مطلب أساسي في إدارة المنتجات والخدمات والعمليات." },
            { t: "الابتكار والرقمنة", d: "تجربة تسوق متصلة وبسيطة ومتعددة القنوات وموجهة نحو المستقبل." },
          ],
        },
        president: {
          sectionTitle: "كلمة الرئيس",
          eyebrow: "كلمة الرئيس",
          quote: "تجسد \"ون ريتيل\" رؤيتنا لقطاع تجزئة مغربي عصري ومنظم، يركز على تجربة المستهلك. لقد جمعنا علامات تجارية قوية ومتكاملة لدعم تحول عادات المستهلكين، وتوفير تجربة تسوق أكثر قرباً وجودة وخدمات أفضل للمغاربة، وخلق منظومة متكاملة لأسلوب حياة عصري. هدفنا واضح: بناء قطاع تجزئة مبتكر، سهل الوصول، طموح، ومستدام.",
          name: "منصف بلخياط",
          title: "رئيس مجموعة H&S",
        },
        news: {
          eyebrow: "الأخبار",
          title: "آخر مستجدات منظومتنا.",
          body: "افتتاحات ومستجدات المنتجات والتزاماتنا — تابع كل ما يحرك علاماتنا.",
          cta: "عرض جميع الأخبار",
        },
        contactCta: {
          eyebrow: "اتصل بنا",
          title: "لنتحدث عن مشروعك في التجزئة.",
          body: "شراكة، امتياز، صحافة أو فرص مهنية: فريق ون ريتيل يرافقكم في كل خطوة.",
        },
      },
      services: { intro: "علامة واحدة، قصة واحدة. تعرف على علاماتنا.", gallery: "المعرض", about: "العلامة", single: "اكتشف" },
      franchise: { title: "كن صاحب امتياز ون ريتيل", sub: "شراكة صارمة مبنية للاستمرار." },
      careers: { title: "ابنِ مسيرتك مع ون ريتيل", search: "ابحث عن وظيفة", all: "الكل", spontaneous: "ترشح تلقائي" },
      news: { title: "أخبار", featured: "في الواجهة", other: "مقالات أخرى" },
      contact: {
        title: "اتصل بنا",
        heroTitle: "تواصل معنا.",
        eyebrow: "اتصل بنا",
        listenTitle: "نحن في خدمتكم.",
        intro:
          "سواء كنت شريكًا أو عميلًا أو موردًا أو مهتمًا بنشاطنا، لا تتردد في التواصل معنا. ستجيبك فرقنا في أقرب وقت ممكن.",
        info: { phone: "الهاتف", email: "البريد الإلكتروني", address: "العنوان" },
        writeUs: "راسلنا",
        question: "لديك سؤال؟",
        formIntro: "املأ النموذج وسيعاود فريقنا التواصل معك قريبًا.",
        form: { name: "اسمك", email: "بريدك الإلكتروني", subject: "الموضوع", message: "رسالتك" },
        sent: "شكرًا! تم إرسال رسالتك بنجاح.",
      },
      footer: {
        navigation: "روابط",
        headquarters: "المقر الرئيسي",
        rights: "جميع الحقوق محفوظة © {{year}} H&S Invest Holding.",
      },
      loading: "جار التحميل",
    },
  },
};

const initPromise = i18n.isInitialized
  ? Promise.resolve()
  : i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: "fr",
        supportedLngs: ["fr", "en", "ar"],
        interpolation: { escapeValue: false },
        detection: { order: ["localStorage"], caches: ["localStorage"] },
      });

export { initPromise };
export default i18n;
