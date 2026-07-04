import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useTransform, useScroll } from "framer-motion";
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem, fadeUpItem, staggerContainer } from "@/components/Reveal";
import { ARTICLES } from "@/lib/articles";
import heroOne from "@/assets/hero-oneretail.jpeg";
import brandFranprix from "@/assets/brands/franprix.png";
import brandMonoprix from "@/assets/brands/monoprix.png";
import brandVenezia from "@/assets/brands/venezia-ice.png";
import brandBricolage from "@/assets/brands/image (6).png";
import brandBeauty from "@/assets/brands/beautyforyou.png";
import brandFlormar from "@/assets/brands/flormar.png";
import brandDahab from "@/assets/brands/dahab.png";
import brandHS from "@/assets/brands/hns-group-logo.png";
import heroImg from "@/assets/hero-retail.jpg";
import presidentImg from "@/assets/president-photo.png";
import ambitionImg from "@/assets/ambition.jpg";
import svcLifestyle from "@/assets/svc-lifestyle.jpg";
import svcRestauration from "@/assets/svc-restauration.jpg";
import svcBeauty from "@/assets/svc-beauty.jpg";
import svcBricolage from "@/assets/svc-bricolage.jpg";
import { useTranslation } from "react-i18next";

const services = [
  {
    key: "lifestyle",
    label: "Lifestyle",
    to: "/services/lifestyle",
    img: svcLifestyle,
    desc: "Alimentation de proximité, supermarché urbain et essentiels du quotidien Franprix & Monoprix.",
  },
  {
    key: "restauration",
    label: "Restauration",
    to: "/services/restauration",
    img: svcRestauration,
    desc: "Coffee, sweet, salé et glaces artisanales. Une pause savoureuse signée Venezia-Ice & Dahab Coffee.",
  },
  {
    key: "beauty",
    label: "Beauty",
    to: "/services/beauty",
    img: svcBeauty,
    desc: "Make-up, haircare et soins livrés en un clic. Votre destination beauté avec BeautyForYou & Flormar.",
  },
  {
    key: "bricolage",
    label: "Bricolage",
    to: "/services/bricolage",
    img: svcBricolage,
    desc: "La référence DIY & Pro pour créer, rénover et améliorer la maison Mr.Bricolage Maroc.",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One Retail — Au cœur du commerce marocain moderne" },
      { name: "description", content: "One Retail réunit des enseignes complémentaires au Maroc : lifestyle, beauté, restauration et bricolage." },
      { property: "og:title", content: "One Retail — Au cœur du commerce marocain moderne" },
      { property: "og:description", content: "Quatre univers, une exigence — One Retail." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const values = [
  {
    title: "Ownership",
    body: "Nous agissons en entrepreneurs responsables, où chaque collaborateur est acteur de la réussite collective.",
  },
  {
    title: "Agility",
    body: "Face aux changements, nous transformons chaque défi en opportunité grâce à notre adaptation rapide.",
  },
  {
    title: "Simplicity",
    body: "Nous privilégions la clarté et l'efficacité, en transformant la complexité en solutions accessibles.",
  },
  {
    title: "Integrity",
    body: "L'honnêteté, le respect et la transparence guident chacune de nos décisions et renforcent la confiance.",
  },
  {
    title: "Sustainability",
    body: "Nous intégrons la responsabilité sociale et environnementale pour créer une valeur durable et partagée.",
  },
];

const missions = [
  {
    title: "Proximité",
    body: "Des enseignes au cœur des villes, accessibles et adaptées aux nouveaux modes de vie.",
  },
  {
    title: "Qualité & fiabilité",
    body: "Une exigence constante dans l'offre, le service et la gestion opérationnelle.",
  },
  {
    title: "Innovation & digitalisation",
    body: "Un modèle omnicanal moderne, pensé pour simplifier et enrichir chaque expérience client.",
  },
];

const brandLogos = [
  { name: "Franprix", img: brandFranprix },
  { name: "Monoprix", img: brandMonoprix },
  { name: "Venezia-Ice", img: brandVenezia },
  { name: "Mr.Bricolage", img: brandBricolage },
  { name: "BeautyForYou", img: brandBeauty },
  { name: "Flormar", img: brandFlormar },
  { name: "Dahab", img: brandDahab },
  { name: "H&S Group", img: brandHS },
];

const titleReveal = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: VIEWPORT,
  transition: { duration: 0.9, ease: EASE },
};

function Eyebrow({
  children,
  className = "",
  lineClassName = "bg-brand",
}: {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
}) {
  return (
    <motion.div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] ${className}`}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <motion.span
        className={`h-px w-10 origin-left ${lineClassName}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
      />
      {children}
    </motion.div>
  );
}

// Le preloader global (__root) se retire après ~1.8s : les animations d'intro du hero démarrent à ce moment-là.
const INTRO = 1.8;

function Home() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Hero />
      <TrustedMarquee />
      <About />
      <PresidentQuote />
      <OurSolution />
      <ValuesSection />
      <Ambition />
      <News />
      <ContactCTA />
    </div>
  );
}

function HeroTitle() {
  const words: { text: string; brand?: boolean; breakBefore?: boolean }[] = [
    { text: "Au" },
    { text: "cœur" },
    { text: "du" },
    { text: "commerce", brand: true },
    { text: "marocain", breakBefore: true },
    { text: "moderne." },
  ];
  return (
    <h1 className="font-display text-[clamp(2rem,8vw,7rem)] leading-[0.95] text-cream">
      {words.map((w, i) => (
        <Fragment key={i}>
          {w.breakBefore && <br className="hidden sm:block" />}
          <motion.span
            className={`inline-block ${w.brand ? "text-brand" : ""}`}
            initial={{ opacity: 0, y: "0.5em", filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: EASE, delay: INTRO + 0.35 + i * 0.09 }}
          >
            {w.text}
          </motion.span>{" "}
        </Fragment>
      ))}
    </h1>
  );
}

function Hero() {
  return (
    <section className="relative mx-2 mt-2 pt-10 overflow-hidden rounded-2xl sm:mx-4 sm:mt-4 sm:rounded-[2rem]">
      <motion.img
        src={heroImg}
        alt="Supermarché moderne One Retail"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE, delay: INTRO - 0.6 }}
      />
      <div className="absolute inset-0 hero-vignette" />
      <div className="relative flex min-h-[65vh] flex-col justify-end px-4 py-8 sm:min-h-[78vh] sm:justify-between sm:px-6 sm:py-10 md:px-14 md:py-14">
        <div className="max-w-5xl">
          <HeroTitle />
          <motion.p
            className="mt-3 max-w-xl text-sm text-cream/85 sm:mt-4 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: INTRO + 0.95 }}
          >
            One Retail réunit des enseignes complémentaires qui accompagnent le consommateur dans tous les moments de la vie quotidienne : alimentation, restauration, beauté, e-commerce et bricolage.
          </motion.p>
          <motion.div
            className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap sm:gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: INTRO + 1.15 }}
          >
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream px-5 py-3 text-sm font-semibold text-ink transition hover:bg-brand hover:text-cream sm:px-6 sm:py-3.5"
            >
              Découvrir nos enseignes
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              to="/a-propos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-5 py-3 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10 sm:px-6 sm:py-3.5"
            >
              Qui sommes-nous
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustedMarquee() {
  const items = [...brandLogos, ...brandLogos];
  return (
    <section className="bg-white pt-10 sm:pt-16">
      <Reveal y={24}>
        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap sm:gap-12 md:gap-16">
            {items.map((b, i) => (
              <img
                key={i}
                src={b.img}
                alt={b.name}
                loading="lazy"
                className="h-8 w-auto shrink-0 object-contain mix-blend-multiply sm:h-9 md:h-11"
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function About() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);
  return (
    <section id="about" ref={ref} className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <Eyebrow className="mb-6 text-brand sm:mb-8">Qui sommes-nous</Eyebrow>
      <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm leading-relaxed text-ink-soft md:text-base">{t("home.about.body")}</p>
          </Reveal>
          <Reveal delay={0.1} id="quote-about">
            <div className="relative">
              <div className="relative aspect-[6/5] overflow-hidden rounded-3xl shadow-xl">
                <motion.img style={{ y }} src={heroOne} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
              </div>
            </div>
          </Reveal>
        </div>
    </section>
  );
}

function PresidentQuote() {
  return (
    <section className="relative mx-2 mb-10 overflow-hidden rounded-2xl bg-[#640705] sm:mx-4 sm:mb-16 sm:rounded-[2rem]">
      <div className="mx-auto px-4 pt-10 sm:px-6 sm:pt-14 md:px-10 md:pt-20">
        <Eyebrow className="mb-6 text-cream/70 sm:mb-8" lineClassName="bg-cream/50">
          Mot du Président
        </Eyebrow>
        <div className="grid items-end gap-6 md:grid-cols-12">
          <div className="order-2 self-end md:order-1 md:col-span-5 h-full">
            <motion.img
              src={presidentImg}
              alt="Moncef Belkhayat, Président de H&S Group"
              loading="lazy"
              width={600}
              height={600}
              className="object-cover w-full h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] sm:drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 1, ease: EASE }}
            />
          </div>
          <div className="order-1 pb-6 md:order-2 md:col-span-7 md:pb-14 lg:pb-20">
            <motion.span
              className="font-display block text-5xl leading-none text-cream/60 sm:text-7xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE }}
            >
              "
            </motion.span>
            <motion.blockquote
              {...titleReveal}
              className="font-display -mt-3 text-xl leading-snug text-cream sm:-mt-4 sm:text-2xl md:text-4xl"
            >
              One Retail incarne notre vision d'un retail marocain moderne, structuré et orienté expérience. Notre objectif est clair : bâtir un retail innovant, accessible, ambitieux et durable.
            </motion.blockquote>
            <Reveal delay={0.25} y={24}>
              <div className="mt-4 border-t border-cream/15 pt-3 sm:mt-6 sm:pt-4">
                <div className="text-sm font-semibold text-cream sm:text-base">Moncef Belkhayat</div>
                <div className="text-xs text-cream/60 sm:text-sm">Président de H&S Group</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurSolution() {
  const [idx, setIdx] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const total = services.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);
  const active = services[idx];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Largeur de carte et gouttière selon la taille d'écran (doit matcher w-[75%]/sm:w-[66%]).
  const cardWidth = isSmallScreen ? 75 : 66;
  const gap = isSmallScreen ? "0.75rem" : "1.25rem";

  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:gap-10 sm:px-6 sm:py-14 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5 md:pt-4">
          <Eyebrow className="mb-4 text-brand sm:mb-6">Nos services</Eyebrow>
          <motion.h2
            {...titleReveal}
            className="font-display text-4xl leading-[1.02] text-ink sm:text-5xl md:text-7xl"
          >
            Our <br /> Solution
          </motion.h2>
          <AnimatePresence mode="wait">
            <motion.p
              key={active.key}
              className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 sm:mt-5 sm:text-base"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {active.desc}
            </motion.p>
          </AnimatePresence>

          <motion.div
            className="mt-5 sm:mt-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
          >
            <Link
              to={active.to}
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-brand-deep"
            >
              En Savoir Plus
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <Reveal className="relative md:col-span-7" y={56} delay={0.15}>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                gap,
                transform: `translateX(calc(${-idx} * (${cardWidth}% + ${gap})))`,
              }}
            >
              {services.map((s, i) => (
                <Link
                  key={s.key}
                  to={s.to}
                  className="relative aspect-[3/4] w-[75%] shrink-0 overflow-hidden rounded-2xl bg-ink/5 sm:w-[66%] sm:rounded-[2rem]"
                >
                  <img
                    src={s.img}
                    alt={s.label}
                    loading="lazy"
                    width={800}
                    height={1100}
                    className={`h-full w-full object-cover transition duration-700 ${
                      i === idx ? "scale-100" : "scale-105 opacity-70"
                    }`}
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-cream/95 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink sm:bottom-4 sm:left-4 sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-[0.2em]">
                    {s.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 sm:mt-6">
            <motion.button
              onClick={prev}
              aria-label="Précédent"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-10 w-12 place-items-center rounded-full bg-brand text-cream transition hover:bg-brand-deep sm:h-11 sm:w-14"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
            <motion.button
              onClick={next}
              aria-label="Suivant"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-10 w-12 place-items-center rounded-full bg-brand text-cream transition hover:bg-brand-deep sm:h-11 sm:w-14"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.button>
            <div className="ml-2 font-display text-xs text-ink/60 sm:ml-4 sm:text-sm">
              <span className="text-ink">0{idx + 1}</span> <span className="text-ink/30">/ 0{total}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section id="values" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">
      <Eyebrow className="mb-6 text-brand sm:mb-8">Nos valeurs</Eyebrow>
      <motion.h2
        {...titleReveal}
        className="font-display max-w-5xl text-3xl leading-[1.05] text-ink sm:text-4xl md:text-6xl"
      >
        Nos engagements et convictions définissent qui nous sommes et guident chaque décision vers un succès durable.
      </motion.h2>

      <Stagger
        className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:mt-10 sm:rounded-3xl md:grid-cols-3"
        stagger={0.1}
      >
        {values.map((v, i) => (
          <StaggerItem
            key={v.title}
            className="group relative bg-cream p-5 transition hover:bg-brand hover:text-cream sm:p-6"
          >
            <span className="font-display text-xs text-brand transition group-hover:text-cream/70 sm:text-sm">
              0{i + 1}
            </span>
            <h3 className="font-display mt-2 text-2xl sm:mt-3 sm:text-3xl">{v.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-ink/70 transition group-hover:text-cream/85 sm:mt-4 sm:text-sm">
              {v.body}
            </p>
          </StaggerItem>
        ))}
        <StaggerItem className="flex flex-col justify-between bg-ink p-5 text-cream sm:p-6 md:col-span-1">
          <Sparkles className="h-5 w-5 text-brand sm:h-6 sm:w-6" />
          <p className="font-display mt-4 text-xl leading-tight sm:mt-6 sm:text-2xl">
            Cinq convictions, un même engagement : bâtir un retail marocain
            ambitieux et durable.
          </p>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

function Ambition() {
  return (
    <section id="ambition" className="relative mx-2 overflow-hidden rounded-2xl sm:mx-4 sm:rounded-[2rem]">
      <motion.img
        src={ambitionImg}
        alt="Ambition régionale One Retail"
        loading="lazy"
        width={1400}
        height={900}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink/95" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:px-10 md:py-20">
        <div className="grid gap-6 sm:gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow className="mb-3 text-brand sm:mb-4">Notre ambition & mission</Eyebrow>
            <motion.h2
              {...titleReveal}
              className="font-display text-3xl leading-[1.05] text-cream sm:text-4xl md:text-6xl"
            >
              Construire un écosystème retail moderne, agile et durable une référence régionale.
            </motion.h2>
            <Reveal delay={0.2}>
              <p className="mt-3 max-w-xl text-sm text-cream/70 sm:mt-4 sm:text-base">
                Apporter aux Marocains un retail moderne, pratique et inspirant : des lieux, des services et des expériences qui simplifient le quotidien, améliorent le confort de vie et créent du lien.
              </p>
            </Reveal>
          </div>
          <motion.ul
            className="space-y-3 self-end sm:space-y-4 md:col-span-5"
            variants={staggerContainer(0.12, 0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {[
              "Déployer un réseau multi-enseignes dans toutes les grandes villes.",
              "Renforcer l'implantation dans les capitales régionales africaines.",
              "Étendre le modèle omnicanal pour toucher de nouveaux marchés.",
              "Nouer des partenariats stratégiques avec des acteurs internationaux.",
            ].map((t, i) => (
              <motion.li
                key={i}
                variants={fadeUpItem}
                className="flex items-start gap-3 rounded-xl border border-cream/15 bg-cream/[0.06] p-4 text-cream backdrop-blur sm:gap-4 sm:rounded-2xl sm:p-5"
              >
                <span className="font-display text-xl text-brand sm:text-2xl">0{i + 1}</span>
                <span className="text-xs leading-relaxed text-cream/90 sm:text-sm">{t}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Stagger className="mt-6 grid gap-3 border-t border-cream/10 pt-6 sm:mt-10 sm:gap-5 sm:pt-8 md:grid-cols-3" stagger={0.15}>
          {missions.map((m, i) => (
            <StaggerItem
              key={m.title}
              className="rounded-xl border border-cream/10 bg-cream/[0.04] p-5 text-cream backdrop-blur sm:rounded-2xl sm:p-6"
            >
              {/* <span className="font-display text-2xl text-brand sm:text-3xl">0{i + 1}</span> */}
              <h3 className="font-display mt-2 text-xl sm:mt-3 sm:text-2xl">{m.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-cream/75 sm:mt-3 sm:text-sm">{m.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function News() {
  const items = ARTICLES.slice(0, 3);
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);
  return (
    <section id="news" ref={ref} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 md:py-20">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-end sm:gap-6">
        <div>
          <Eyebrow className="mb-3 text-brand sm:mb-4">Actualités</Eyebrow>
          <motion.h2
            {...titleReveal}
            className="font-display max-w-3xl text-3xl leading-[1.05] text-ink sm:text-4xl md:text-6xl"
          >
            Les dernières nouvelles de notre écosystème.
          </motion.h2>
        </div>
        <Reveal delay={0.25} y={24}>
          <div className="flex justify-start mt-10">
            <Link to="/actualites" className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-brand-deep">
              {t("cta.viewAll")}
              <ArrowUpRight size={14} className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>

      <Stagger className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.15}>
        {items.map((n) => (
          <motion.article
            key={n.slug}
            variants={fadeUpItem}
            whileHover={{ y: -8 }}
            className="group flex flex-col"
          >
            <Link to="/actualites/$slug" params={{ slug: n.slug }} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ink/5 sm:rounded-2xl">
                <img
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-brand sm:left-4 sm:top-4 sm:px-3 sm:text-[0.65rem] sm:tracking-[0.2em]">
                  {n.category}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.18em] text-ink/50 sm:mt-5 sm:gap-3 sm:text-xs sm:tracking-[0.2em]">
                <span>{n.date}</span>
                <span className="h-px flex-1 bg-ink/15" />
              </div>
              <h3 className="font-display mt-2 text-xl leading-tight text-ink group-hover:text-brand sm:mt-3 sm:text-2xl">
                {n.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-ink/70 sm:mt-3 sm:text-sm">{n.excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand transition group-hover:gap-3 sm:mt-4 sm:text-xs sm:tracking-[0.25em]">
                Lire l'article
                <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </Link>
          </motion.article>
        ))}
      </Stagger>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="px-2 pb-6 sm:px-4 sm:pb-8">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-brand-deep px-4 py-10 sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-14 md:py-20"
        initial={{ opacity: 0, y: 64, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(245,240,230,0.25), transparent 40%), radial-gradient(circle at 85% 80%, rgba(171,45,38,0.6), transparent 45%)",
          }}
        />
        <div className="relative grid items-center gap-6 sm:gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow className="mb-3 text-cream/70 sm:mb-4" lineClassName="bg-cream/50">
              Contact
            </Eyebrow>
            <motion.h2
              {...titleReveal}
              className="font-display text-3xl leading-[1.05] text-cream sm:text-4xl md:text-6xl"
            >
              Parlons de votre projet retail.
            </motion.h2>
            <Reveal delay={0.2}>
              <p className="mt-3 max-w-xl text-sm text-cream/75 sm:mt-4 sm:text-base">
                Partenariat, franchise, presse ou opportunités professionnelles : notre équipe One Retail vous accompagne à chaque étape.
              </p>
            </Reveal>
          </div>
          <Stagger className="flex flex-col gap-3 md:col-span-4 md:items-end" delay={0.3} stagger={0.15}>
            <StaggerItem className="w-full md:w-4/5">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand hover:text-cream sm:px-10 sm:py-4"
              >
                Nous contacter
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </StaggerItem>
            <StaggerItem className="w-full md:w-4/5">
              <Link
                to="/franchise"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/30 px-6 py-3.5 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10 sm:px-10 sm:py-4"
              >
                Devenir franchisé
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </motion.div>
    </section>
  );
}
