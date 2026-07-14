import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { ARTICLES, FEATURED, localizeArticle, type Article } from "@/lib/articles";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités One Retail Maroc | News, Événements & Nouveautés" },
      {
        name: "description",
        content:
          "Toute l'actualité de One Retail et de ses enseignes : acquisitions, événements et nouveautés.",
      },
      { property: "og:title", content: "Actualités   One Retail" },
      {
        property: "og:description",
        content: "Toute l'actualité de One Retail et de ses enseignes.",
      },
      { property: "og:image", content: FEATURED.image },
    ],
  }),
  component: NewsPage,
});

const INTRO = typeof window !== "undefined" && performance.now() < 1800 ? 1.8 : 0;

const ALL = "all";

function NewsPage() {
  const { t, i18n } = useTranslation();
  const [cat, setCat] = useState<string>(ALL);
  const articles = ARTICLES.map((a) => localizeArticle(a, i18n.language));
  const featured = localizeArticle(FEATURED, i18n.language);
  const categories = [...new Set(articles.map((a) => a.category))];
  const showFeatured = cat === ALL;
  const list = cat === ALL ? articles.slice(1) : articles.filter((a) => a.category === cat);

  // Category labels are localized, so a stale selection would filter to nothing
  // after a language switch   reset to "all" whenever the language changes.
  useEffect(() => {
    setCat(ALL);
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero />

      {/* Parcourir : filtres par catégorie */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal y={16}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-ink/10 py-6">
            <span className="font-display text-xl italic text-ink">{t("news.browse")}</span>
            <FilterButton active={cat === ALL} onClick={() => setCat(ALL)}>
              {t("careers.all")}
            </FilterButton>
            {categories.map((c) => (
              <FilterButton key={c} active={cat === c} onClick={() => setCat(c)}>
                {c}
              </FilterButton>
            ))}
          </div>
        </Reveal>
      </section>

      {showFeatured && <FeaturedArticle featured={featured} />}

      <section className="mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 md:pb-32 md:pt-20">
        <Stagger
          key={cat}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 md:gap-8"
          stagger={0.1}
        >
          {list.map((a) => (
            <StaggerItem key={a.slug}>
              <Link
                to="/actualites/$slug"
                params={{ slug: a.slug }}
                className="group block cursor-pointer"
              >
                <div className="flex gap-3">
                  <span
                    className="shrink-0 self-start pt-1 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-brand"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {a.category}
                  </span>
                  <div className="aspect-4/5 w-full overflow-hidden rounded-2xl border border-ink/10 bg-white transition-colors duration-500 group-hover:border-brand/30">
                    <motion.img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="mt-6 px-2 text-center">
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/50">
                    {a.date}
                  </span>
                  <h3 className="font-display mx-auto mt-2 max-w-sm text-xl leading-tight transition group-hover:text-brand md:text-2xl">
                    {a.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink/70 line-clamp-3">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-display text-sm italic text-ink transition-all group-hover:gap-3 group-hover:text-brand">
                    {t("news.read")}{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative mx-2 mt-2 overflow-hidden rounded-2xl bg-ink sm:mx-4 sm:mt-4 sm:rounded-4xl">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(171,45,38,0.4), transparent 45%), radial-gradient(circle at 88% 100%, rgba(245,240,230,0.1), transparent 45%)",
        }}
      />
      <div className="relative px-6 py-20 text-center md:py-28">
        <motion.span
          className="mx-auto flex items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-cream/60 sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: INTRO }}
        >
          <span className="h-px w-10 bg-brand" />
          One Retail
          <span className="h-px w-10 bg-brand" />
        </motion.span>
        <motion.h1
          className="mt-5 font-display text-[clamp(3rem,10vw,7rem)] leading-none text-cream"
          initial={{ opacity: 0, y: "0.3em", filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: EASE, delay: INTRO + 0.2 }}
        >
          {t("news.title")}
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-lg text-[0.65rem] uppercase leading-relaxed tracking-[0.25em] text-cream/60 sm:text-xs"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: INTRO + 0.6 }}
        >
          {t("news.tagline")}
        </motion.p>
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative pb-1 text-xs font-semibold uppercase tracking-[0.25em] transition ${
        active ? "text-brand" : "text-ink/60 hover:text-ink"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-px w-full origin-left bg-brand transition-transform duration-500 ${
          active ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </button>
  );
}

function FeaturedArticle({ featured }: { featured: Article }) {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <Link
          to="/actualites/$slug"
          params={{ slug: featured.slug }}
          className="group block cursor-pointer"
        >
          <div className="md:grid md:grid-cols-12">
            <div className="relative md:col-span-8 md:col-start-1 md:row-start-1">
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl border border-ink/10 bg-white transition-colors duration-500 group-hover:border-brand/25 sm:rounded-3xl">
                <motion.img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-4 left-4 z-10 grid h-24 w-24 rotate-[-8deg] place-items-center rounded-full bg-ink p-3 text-center text-[0.55rem] font-semibold uppercase leading-relaxed tracking-[0.2em] text-cream shadow-xl sm:-top-5 sm:h-28 sm:w-28">
                {t("news.featured")}
              </div>
            </div>
            <div className="relative z-10 -mt-12 px-3 md:col-span-6 md:col-start-7 md:row-start-1 md:mt-0 md:self-center md:px-0">
              <div className="rounded-2xl bg-white p-7 shadow-[0_30px_80px_-40px_rgba(26,26,26,0.4)] sm:p-10 md:p-12">
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-brand">
                  {featured.category} · {featured.date}
                </span>
                <h2 className="font-display mt-4 text-2xl leading-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-ink/70 line-clamp-4">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition group-hover:border-ink group-hover:bg-ink group-hover:text-cream">
                  {t("cta.readMore")}
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
