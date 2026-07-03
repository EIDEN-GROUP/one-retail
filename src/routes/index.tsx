import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroOne from "@/assets/hero-oneretail.jpeg";
import heroMonoprix from "@/assets/franchise-monoprix.jpg";
import heroFranprix from "@/assets/franchise-franprix.jpg";
import heroVenezia from "@/assets/franchise-venezia.jpg";
import heroDahab from "@/assets/cofe-hero.jpg";
import heroFlormar from "@/assets/franchise-flormar.jpg";
import heroBeauty from "@/assets/franchise-beauty4you.jpg";
import heroBrico from "@/assets/franchise-mrbricolage.jpg";
import aboutImg from "@/assets/oneretail_lifestyle_1782505665102.jpg";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/lib/articles";

type Slide = {
  kicker: string;
  title: string;
  sub: string;
  image: string;
  href: string;
  ctaLabel: string;
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One Retail L'art de la distribution au Maroc" },
      { name: "description", content: "Quatre univers, une exigence : lifestyle, beauté, restauration, bricolage. Découvrez One Retail." },
      { property: "og:title", content: "One Retail L'art de la distribution au Maroc" },
      { property: "og:description", content: "Quatre univers, une exigence — One Retail." },
      { property: "og:image", content: heroOne },
    ],
  }),
  component: HomePage,
});

function Hero() {
  const { t } = useTranslation();
  const slides: Slide[] = [
    {
      kicker: "One Retail Maroc",
      title: "One Retail",
      sub: "Quatre univers, une exigence. Lifestyle, beauté, restauration et bricolage orchestrés avec précision au Maroc.",
      image: heroOne,
      href: "#about",
      ctaLabel: "Qui sommes-nous",
    },
    { kicker: "Lifestyle", title: "Monoprix", sub: "Qualité garantie, fraîcheur au rendez-vous et variété à volonté.", image: heroMonoprix, href: "/services/lifestyle/monoprix", ctaLabel: t("cta.explore") },
    { kicker: "Lifestyle", title: "Franprix", sub: "Votre one-stop-shop de quartier", image: heroFranprix, href: "/services/lifestyle/franprix", ctaLabel: t("cta.explore") },
    { kicker: "Restauration", title: "Venezia Ice", sub: "L’adresse gourmande par excellence : coffee, sweet, salé et glaces.", image: heroVenezia, href: "/services/restauration/venezia-ice", ctaLabel: t("cta.explore") },
    { kicker: "Restauration", title: "Dahab Coffee", sub: "Le café d'auteur, entre rituel oriental et signature contemporaine.", image: heroDahab, href: "/services/restauration/dahab-coffee", ctaLabel: t("cta.explore") },
    { kicker: "Beauty", title: "Flormar", sub: "L'audace cosmétique d'Istanbul, à portée de toutes les envies.", image: heroFlormar, href: "/services/beauty/flormar", ctaLabel: t("cta.explore") },
    { kicker: "Beauty", title: "Beauty For You", sub: "Votre destination beauté en ligne : simple, rapide et tendance.", image: heroBeauty, href: "/services/beauty/beauty-for-you", ctaLabel: t("cta.explore") },
    { kicker: "Bricolage", title: "Mr Bricolage", sub: "La référence DIY & Pro pour la maison.", image: heroBrico, href: "/services/bricolage/mr-bricolage", ctaLabel: t("cta.explore") },
  ];
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, [slides.length]);

  const next = () => setI(v => (v + 1) % slides.length);
  const prev = () => setI(v => (v - 1 + slides.length) % slides.length);
  const s = slides[i];
  const upcoming = Array.from({ length: slides.length - 1 }, (_, k) => slides[(i + 1 + k) % slides.length]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-noir">
      <style>{`
        @keyframes smoke-drift-1 {
          0%   { transform: translate(0%, 0%) scale(1);   opacity: 0.18; }
          50%  { transform: translate(4%, -8%) scale(1.15); opacity: 0.28; }
          100% { transform: translate(0%, 0%) scale(1);   opacity: 0.18; }
        }
        @keyframes smoke-drift-2 {
          0%   { transform: translate(0%, 0%) scale(1.1); opacity: 0.12; }
          60%  { transform: translate(-5%, 6%) scale(1.25); opacity: 0.22; }
          100% { transform: translate(0%, 0%) scale(1.1); opacity: 0.12; }
        }
        @keyframes smoke-drift-3 {
          0%   { transform: translate(0%, 0%) scale(0.9); opacity: 0.08; }
          45%  { transform: translate(6%, -4%) scale(1.05); opacity: 0.16; }
          100% { transform: translate(0%, 0%) scale(0.9); opacity: 0.08; }
        }
      `}</style>

      <motion.div style={{ y, scale }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={s.image}
            src={s.image}
            alt={s.title}
            width={1920} height={1280}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.7, 0, 0.2, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        {/* CSS smoke overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(255,255,255,0.09) 0%, transparent 70%)",
              filter: "blur(40px)",
              animation: "smoke-drift-1 18s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 60% 80% at 70% 60%, rgba(255,255,255,0.07) 0%, transparent 65%)",
              filter: "blur(55px)",
              animation: "smoke-drift-2 24s ease-in-out infinite",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse 90% 50% at 50% 80%, rgba(255,255,255,0.06) 0%, transparent 60%)",
              filter: "blur(70px)",
              animation: "smoke-drift-3 30s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>

      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[2px] bg-pearl/10">
        <motion.div
          key={`top-${i}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6.5, ease: "linear" }}
          className="h-full bg-[#640705]"
        />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 grid h-full grid-cols-1 lg:grid-cols-12 gap-8 px-6 pt-16 md:pt-28 pb-28 sm:px-10 md:px-16 lg:px-20 md:mt-20">
        {/* Left: main content */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-pearl/70" />
                <span className="text-[0.7rem] uppercase tracking-[0.35em] text-pearl/80">{s.kicker}</span>
              </div>
              <h1 className="serif-display text-pearl leading-[0.95] text-[3.25rem] sm:text-7xl md:text-8xl lg:text-[6.5rem]">
                {s.title}
              </h1>
              <p className="mt-6 max-w-md text-sm text-pearl/75 sm:text-base">{s.sub}</p>
              <div className="mt-8 flex items-center gap-4">
                {s.href?.startsWith("#") ? (
                  <button
                    onClick={() => document.getElementById(s.href!.slice(1))?.scrollIntoView({ behavior: "smooth" })}
                    className="group inline-flex items-center gap-3 rounded-full border border-pearl/50 px-7 py-3 text-[0.7rem] uppercase tracking-[0.3em] text-pearl backdrop-blur transition hover:border-[#640705] hover:bg-[#640705] hover:text-pearl"
                  >
                    {s.ctaLabel}
                    <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
                  </button>
                ) : s.href ? (
                  <Link
                    to={s.href}
                    className="group inline-flex items-center gap-3 rounded-full border border-pearl/50 px-7 py-3 text-[0.7rem] uppercase tracking-[0.3em] text-pearl backdrop-blur transition hover:border-[#640705] hover:bg-[#640705] hover:text-pearl"
                  >
                    {s.ctaLabel}
                    <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
                  </Link>
                ) : null}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: upcoming cards */}
        {/* <div className="lg:col-span-7 flex items-center min-h-0">
          <div className="relative w-full">
            <div className="flex gap-4 overflow-x-auto pb-2 pr-6 snap-x snap-mandatory lg:overflow-visible">
              <AnimatePresence mode="popLayout">
                {upcoming.map((card, idx) => (
                  <motion.button
                    key={`${card.title}-${i}`}
                    layout
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.7, delay: idx * 0.06, ease: [0.7, 0, 0.2, 1] }}
                    onClick={() => setI((i + 1 + idx) % slides.length)}
                    className="group relative shrink-0 snap-start overflow-hidden rounded-[1.25rem] border border-pearl/15 shadow-2xl"
                    style={{ width: "clamp(160px, 18vw, 230px)", height: "clamp(220px, 26vw, 310px)" }}
                  >
                    <img src={card.image} alt={card.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4 text-pearl">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-px w-5 bg-pearl/80" />
                        <span className="text-[0.6rem] uppercase tracking-[0.25em] text-pearl/80">{card.kicker}</span>
                      </div>
                      <h3 className="serif-display text-lg leading-tight md:text-xl">{card.title}</h3>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div> */}
      </motion.div>

      {/* Bottom nav */}
      <motion.div style={{ opacity }} className="absolute bottom-8 left-0 right-0 z-10 px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="flex items-center gap-5">
          <button onClick={prev} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-pearl/50 text-pearl transition hover:bg-pearl hover:text-ink">
            <ChevronLeft size={16} />
          </button>
          <button onClick={next} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-pearl/50 text-pearl transition hover:bg-pearl hover:text-ink">
            <ChevronRight size={16} />
          </button>
          <div className="relative mx-2 hidden h-px flex-1 bg-pearl/25 sm:block">
            <motion.span
              key={`bar-${i}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 6.5, ease: "linear" }}
              className="absolute inset-y-0 left-0 bg-rouge"
            />
          </div>
          <span className="serif-display text-3xl tabular-nums text-pearl sm:text-4xl md:text-5xl">
            {String(i + 1).padStart(2, "0")}
            <span className="ml-2 text-base text-pearl/40">/ {String(slides.length).padStart(2, "0")}</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);
  return (
    <section ref={ref} id="about" className="bg-pearl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-8 text-left">
            <span className="font-label text-[10px] text-wine-deep">{t("home.about.eyebrow")}</span>
            <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl text-[#640705]">{t("home.about.title")}</h2>
            <h3 className="mt-3 font-display font-medium text-sm leading-tight md:text-md">{t("home.about.subtitle")}</h3>
            <div className="mt-4 h-0.5 w-16 bg-wine-deep flex " />
          </div>
        </Reveal>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm leading-relaxed text-ink-soft md:text-base">{t("home.about.body")}</p>
            <div className="flex justify-start mt-10">
              <Link to="/a-propos" className="group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.3em] bg-[#640705] text-pearl backdrop-blur transition hover:bg-[#ab2d26]">
                {t("cta.apropos")}
                <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1} id="quote-about">
            <div className="relative">
              <div className="relative aspect-[6/5] overflow-hidden rounded-3xl shadow-xl">
                <motion.img style={{ y }} src={heroOne} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
              </div>
              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-xl bg-wine-deep p-6 shadow-lg">
                <p className="text-sm italic text-pearl/90">"{t("home.president.quote").slice(0, 100)}..."</p>
                <p className="mt-2 text-xs font-medium text-pearl/50">{t("home.president.name")}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    key: "lifestyle",
    to: "/services/lifestyle",
    label: "Lifestyle",
    brands: ["Monoprix", "Franprix"],
    sub: "La grande distribution repensée avec soin et ambition.",
    img: heroMonoprix,
  },
  {
    key: "beauty",
    to: "/services/beauty",
    label: "Beauty",
    brands: ["Flormar", "Beauty For You"],
    sub: "L'univers cosmétique à portée de tous, avec exigence.",
    img: heroFlormar,
  },
  {
    key: "restauration",
    to: "/services/restauration",
    label: "Restauration",
    brands: ["Venezia Ice", "Dahab Coffee"],
    sub: "Des concepts de restauration qui éveillent les sens.",
    img: heroVenezia,
  },
  {
    key: "bricolage",
    to: "/services/bricolage",
    label: "Bricolage",
    brands: ["Mr Bricolage"],
    sub: "L'équipement de la maison et du quotidien, accessible.",
    img: heroBrico,
  },
] as const;

function ServicesSection() {
  const { t } = useTranslation();
  const items = [
    { ...SERVICES[0], num: "01" },
    { ...SERVICES[1], num: "02" },
    { ...SERVICES[2], num: "03" },
    { ...SERVICES[3], num: "04" },
  ];

  return (
    <section className="pb-24 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="font-label text-[10px] text-wine-deep">{t("home.pillars.eyebrow")}</span>
              <h2 className="mt-6 max-w-2xl font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">{t("home.pillars.title")}</h2>
              <div className="mt-4 h-0.5 w-16 bg-wine-deep flex " />
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.7, 0, 0.2, 1] }}
            >
              <Link
                to={it.to}
                className="group relative block overflow-hidden rounded-[1.5rem] border border-ink/10"
              >
                <div className="relative h-[360px] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

                  {/* Number */}
                  <div className="absolute left-5 top-5 font-label text-[0.65rem] tracking-[0.3em] text-pearl/70">
                    {it.num}
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-pearl/40 text-pearl transition-colors duration-300 group-hover:bg-pearl group-hover:text-ink">
                    <ArrowUpRight size={14} />
                  </div>

                  {/* Label + desc */}
                  <div className="absolute inset-x-5 bottom-5 text-pearl">
                    <h3 className="font-display text-2xl">{it.label}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-pearl/75">{it.sub}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to="/franchise" className="group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[0.7rem] uppercase tracking-[0.3em] bg-[#640705] text-pearl backdrop-blur transition hover:bg-[#ab2d26]">
            {t("cta.becomeFranchisee")}
            <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
          </Link>
        </div>
      </div>
    </section>
  );
}


function NewsSection() {
  const { t } = useTranslation();
  const items = ARTICLES.slice(0, 3);

  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 overflow-hidden rounded-[2rem] bg-ink p-8 text-pearl grain md:grid-cols-[0.85fr_2fr] md:gap-12 md:p-14">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <span className="font-label text-[10px] text-ember">{t("home.news.eyebrow")}</span>
              <h2 className="mt-5 font-display text-3xl leading-tight md:text-4xl">{t("home.news.title")}</h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-pearl/65">{t("home.news.body")}</p>
              <Link
                to="/actualites"
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-pearl px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-ink transition hover:text-pearl hover:bg-[#640705]"
              >
                {t("home.news.cta")}
                <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3">
            {items.map((a, idx) => (
              <Reveal key={a.slug} delay={idx * 0.08}>
                <Link
                  to="/actualites/$slug"
                  params={{ slug: a.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-pearl/10 bg-pearl/[0.04]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-label truncate text-[9px] text-ember">{a.category}</span>
                      <span className="shrink-0 text-[9px] text-pearl/40">{a.date}</span>
                    </div>
                    <h3 className="mt-2 line-clamp-2 font-display text-base leading-snug">{a.title}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-pearl/60">{a.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-pearl/80 transition group-hover:text-pearl">
                      {t("cta.readMore")} 
                      <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BannerCta() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section ref={ref} className="relative overflow-hidden bg-wine-deep px-6 py-10 text-pearl md:py-16">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pearl/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/20 blur-[100px]" />
      </div>

      <Reveal>
        <div className="relative z-10 mx-auto text-center">
          <h2 className="font-display text-4xl leading-tight text-pearl sm:text-5xl md:text-6xl">{t("home.bannerCta.sectionTitle")}</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-pearl/65 sm:text-base">{t("home.bannerCta.body")}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/franchise" className="group inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] bg-pearl text-[#640705] backdrop-blur transition hover:text-pearl hover:bg-[#ab2d26]">
              {t("cta.becomeFranchisee")}
              <ArrowUpRight size={14} className="transition group-hover:rotate-45" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full border border-pearl/25 px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-pearl/80 transition hover:border-pearl/60 hover:text-pearl">
              {t("cta.contactUs")}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HomePage() {
  return (
    <main className="grain">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <NewsSection />
      <BannerCta />
    </main>
  );
}
