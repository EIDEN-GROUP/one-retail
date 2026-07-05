import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CalendarDays, ChevronLeft, ChevronRight, X } from "lucide-react";
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem, fadeUpItem } from "@/components/Reveal";
import { FranchiseBanner } from "@/components/FranchiseBanner";
import { FRANCHISES, getBySlug } from "@/lib/franchises";

export const Route = createFileRoute("/franchise_/$slug")({
  loader: ({ params }) => {
    const f = getBySlug(params.slug);
    if (!f) throw notFound();
    return f;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Franchise ${loaderData.name} | One Retail` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: `Franchise ${loaderData.name} | One Retail` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  component: FranchiseSlugPage,
});

// Sur un chargement direct, le preloader global (__root) couvre la page ~1.8s :
// on retarde les animations d'intro comme sur la home. En navigation SPA, pas d'attente.
const INTRO = typeof window !== "undefined" && performance.now() < 1800 ? 1.8 : 0;

const titleReveal = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: VIEWPORT,
  transition: { duration: 0.9, ease: EASE },
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <motion.div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] ${light ? "text-cream/70" : "text-brand"}`}
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <motion.span
        className={`h-px w-10 origin-left ${light ? "bg-cream/50" : "bg-brand"}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
      />
      {children}
    </motion.div>
  );
}

function FranchiseSlugPage() {
  const f = Route.useLoaderData();

  // Remonter en haut et re-jouer les animations d'entrée quand on passe
  // d'une franchise à une autre (même route, slug différent).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [f.slug]);

  return (
    <motion.main
      key={f.slug}
      className="grain min-h-screen bg-cream text-ink"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <Hero />
      <IntroSection />
      <GallerySection />
      <SuggestionsSection />
      <FranchiseBanner />
    </motion.main>
  );
}

function Hero() {
  const f = Route.useLoaderData();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const words = f.name.split(" ");

  return (
    <section ref={ref} className="relative mx-2 mt-2 h-[70vh] overflow-hidden rounded-2xl bg-ink sm:mx-4 sm:mt-4 sm:h-[85vh] sm:rounded-[2rem]">
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.img
          src={f.image}
          alt={f.name}
          className="h-[115%] w-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: EASE, delay: Math.max(0, INTRO - 0.6) }}
        />
      </motion.div>
      <div className="absolute inset-0 hero-vignette" />
      <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-10 text-cream sm:px-6 sm:pb-16 md:px-14 md:pb-20">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: INTRO + 0.2 }}
          >
            <Link
              to="/franchise"
              className="link-underline inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-cream/80"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Franchise
            </Link>
          </motion.div>
          <h1 className="mt-5 font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.95]">
            {words.map((w, i) => (
              <Fragment key={i}>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.5em", filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, ease: EASE, delay: INTRO + 0.35 + i * 0.09 }}
                >
                  {w}
                </motion.span>{" "}
              </Fragment>
            ))}
          </h1>
          <motion.p
            className="mt-3 max-w-xl text-sm text-cream/80 sm:mt-4 sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: INTRO + 0.8 }}
          >
            {f.tagline}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  const f = Route.useLoaderData();
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr] md:gap-14 md:py-24">
      <div>
        <Eyebrow>L'enseigne</Eyebrow>
        <motion.h2 {...titleReveal} className="mt-4 font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
          {f.tagline}
        </motion.h2>
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:mt-6 sm:text-base">{f.story}</p>
        </Reveal>
      </div>
      <Stagger className="flex flex-col gap-4" stagger={0.15} delay={0.2}>
        <StaggerItem>
          <div className="flex items-center gap-4 rounded-2xl bg-brand-deep p-5 text-cream sm:p-6">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/30 text-cream">
              <CalendarDays className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[0.65rem] uppercase tracking-[0.25em] text-cream/60">Date d'arrivage</div>
              <div className="mt-1 font-display text-2xl sm:text-3xl">{f.arrival}</div>
            </div>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="rounded-2xl border border-ink/10 bg-card p-6 sm:p-8">
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/50">Fiche enseigne</span>
            <ul className="mt-4 divide-y divide-ink/10 sm:mt-6">
              {f.specs.map((s) => (
                <li key={s.label} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <span className="text-ink/60">{s.label}</span>
                  <span className="text-right font-medium text-ink">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

// Disposition éditoriale façon "photos on sale" : portrait haut à gauche,
// panoramique en tête, carrés, dernière tuile large. Se répète au-delà de 6 visuels.
const GALLERY_SPANS = [
  "col-span-1 row-span-2",
  "col-span-1 sm:col-span-2",
  "col-span-1",
  "col-span-1",
  "col-span-1",
  "col-span-1 sm:col-span-2",
];

function GallerySection() {
  const f = Route.useLoaderData();
  return (
    <section className="relative mx-2 overflow-hidden rounded-2xl bg-wine-deep sm:mx-4 sm:rounded-[2rem]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <Eyebrow className="!text-cream/75">Galerie</Eyebrow>
        <motion.h3 {...titleReveal} className="mt-4 font-display text-3xl leading-[1.05] text-cream sm:text-4xl md:text-5xl">
          L'expérience en images.
        </motion.h3>
        <Stagger
          className="mt-8 grid grid-flow-dense grid-cols-2 auto-rows-[150px] gap-3 sm:grid-cols-3 sm:auto-rows-[190px] sm:gap-4 md:mt-10 md:auto-rows-[230px]"
          stagger={0.1}
        >
          {f.gallery.map((g, i) => (
            <StaggerItem key={i} className={GALLERY_SPANS[i % GALLERY_SPANS.length]}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-cream/10 bg-ink-soft">
                <img
                  src={g}
                  alt={`${f.name} — visuel ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-cream sm:p-5">
                  <div>
                    <div className="font-display text-lg leading-none sm:text-xl">0{i + 1}</div>
                    <div className="mt-1 text-[0.6rem] uppercase tracking-[0.2em] text-cream/75 sm:text-[0.65rem]">
                      {f.name}
                    </div>
                  </div>
                  <span className="h-px w-8 origin-right bg-cream/50 transition-all duration-500 group-hover:w-12 group-hover:bg-brand" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function SuggestionsSection() {
  const { t } = useTranslation();
  const f = Route.useLoaderData();
  const suggestions = FRANCHISES.filter((x) => x.slug !== f.slug)
    .sort((a, b) => (a.category === f.category ? -1 : 0) - (b.category === f.category ? -1 : 0))
    .slice(0, 2);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 md:pt-24">
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-end">
        <div>
          <Eyebrow>Suggestions</Eyebrow>
          <motion.h3 {...titleReveal} className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
            D'autres franchises à découvrir.
          </motion.h3>
        </div>
        <Reveal delay={0.2} y={24}>
          <Link
            to="/franchise"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-brand-deep"
          >
            Voir tout
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>

      <Stagger className="grid gap-8 md:grid-cols-2" stagger={0.15}>
        {suggestions.map((s) => (
          <motion.div key={s.slug} variants={fadeUpItem}>
            <Link to="/franchise/$slug" params={{ slug: s.slug }} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10 bg-pearl-deep">
                <motion.img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1] }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-pearl md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="font-label text-[10px] text-pearl/70">{s.category}</span>
                      <h4 className="mt-2 font-display text-3xl md:text-4xl">{s.name}</h4>
                      <p className="mt-2 max-w-sm text-sm text-pearl/75">{s.tagline}</p>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-pearl/40 transition group-hover:bg-pearl group-hover:text-ink">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-label text-[10px] text-ink/50">{t("services.about")}</span>
                <span className="link-underline text-ink-soft">{t("services.single")}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
