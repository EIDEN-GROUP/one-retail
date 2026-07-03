import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/about-casablanca.jpg";
import qsnImg from "@/assets/Supermarche-aesthetic.jpg";
import ambitions from "@/assets/ambitions.jpg";
import president from "@/assets/president-portrait.jpg";
import hnsLogo from "@/assets/hns-group-logo.png";
import oneRetailLogo from "@/assets/one-retail-logo.png";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — One Retail" },
      { name: "description", content: "Qui sommes-nous, notre organigramme, le mot du président, nos ambitions et nos valeurs — découvrez One Retail." },
      { property: "og:title", content: "À propos — One Retail" },
      { property: "og:description", content: "Quatre univers, une exigence — découvrez One Retail." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AProposPage,
});

const PILLARS = [
  { label: "Lifestyle", brands: ["Monoprix", "Franprix"] },
  { label: "Beauty", brands: ["Flormar", "Beauty For You"] },
  { label: "Restauration", brands: ["Venezia Ice", "Dahab Coffee"] },
  { label: "Bricolage", brands: ["Mr Bricolage"] },
] as const;

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden bg-ink text-pearl">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroImg} alt="One Retail" className="h-full w-full object-cover opacity-80" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16 pt-40">
        <Reveal>
          <span className="font-label text-[10px] text-pearl/70">— À propos</span>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] md:text-8xl">
            One Retail, l'art de la <span className="italic text-pearl/80">distribution</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-pearl/75 md:text-lg">
            Une filiale de H&S Group qui orchestre des enseignes de référence au Maroc — lifestyle, beauté, restauration et bricolage.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function QuiSommesNousSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section id="qui-sommes-nous" ref={ref} className="px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="font-label text-[10px] text-wine-deep">— {t("home.about.eyebrow")}</span>
            <h2 className="mt-5 whitespace-pre-line font-display text-4xl leading-tight md:text-6xl">
              {t("home.about.title")}
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft">{t("home.about.body")}</p>
          </Reveal>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-ink/10">
          <motion.img style={{ y }} src={qsnImg} alt="One Retail" className="h-[120%] w-full object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function OrganigramSection() {
  return (
    <section className="border-y border-ink/10 bg-pearl-deep/30 px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">— Organigramme</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight md:text-6xl">Une structure claire, un cap commun.</h2>
        </Reveal>

        <div className="mt-20 flex flex-col items-center">
          <Reveal>
            <div className="flex w-[220px] flex-col items-center rounded-2xl border border-ink/10 bg-card px-6 py-6 text-center shadow-sm">
              <img src={hnsLogo} alt="H&S Group" className="h-10 w-auto object-contain" loading="lazy" />
              <h3 className="mt-4 font-display text-xl">H&S Group</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-ink-soft/70">Maison mère</p>
            </div>
          </Reveal>

          <div className="h-12 w-px bg-ink/15" />

          <Reveal delay={0.06}>
            <div className="flex w-[240px] flex-col items-center rounded-2xl border border-wine-deep/30 bg-wine-deep px-6 py-6 text-center shadow-lg">
              <img src={oneRetailLogo} alt="One Retail" className="h-9 w-auto object-contain brightness-0 invert" loading="lazy" />
              <h3 className="mt-4 font-display text-xl text-pearl">One Retail</h3>
              <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-pearl/60">Filiale retail</p>
            </div>
          </Reveal>

          <div className="h-12 w-px bg-ink/15" />

          <div className="relative w-full max-w-4xl">
            <div className="absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-ink/15 md:block" />
            <div className="grid gap-8 pt-0 md:grid-cols-4 md:gap-6 md:pt-12">
              {PILLARS.map((p, idx) => (
                <div key={p.label} className="relative flex flex-col items-center">
                  <div className="absolute -top-12 hidden h-12 w-px bg-ink/15 md:block" />
                  <Reveal delay={idx * 0.06}>
                    <div className="flex w-full flex-col items-center rounded-2xl border border-ink/10 bg-card px-5 py-6 text-center">
                      <h3 className="font-display text-lg">{p.label}</h3>
                      <div className="mt-3 flex flex-col gap-1.5">
                        {p.brands.map((b) => (
                          <span key={b} className="text-xs text-ink-soft">{b}</span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PresidentSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (
    <section className="px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="mb-20 flex flex-col justify-center">
          <Reveal>
            <span className="font-label text-[10px] text-wine-deep">— {t("home.president.eyebrow")}</span>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">{t("home.president.sectionTitle")}</h2>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative flex flex-col items-stretch sm:flex-row sm:items-stretch">
            <div
              className="relative z-10 mx-auto w-[200px] overflow-hidden rounded-[999px] border-4 border-pearl-deep bg-wine-deep/10 shadow-xl sm:mx-0 sm:w-[300px] sm:-mr-40"
              style={{ minHeight: "300px" }}
            >
              <motion.img style={{ y }} src={president} alt="Président" loading="lazy" className="h-[120%] w-full object-cover" />
              <div className="absolute inset-0 bg-wine-deep/8 mix-blend-multiply" />
            </div>

            <div className="relative flex flex-1 flex-col justify-between rounded-br-3xl rounded-tr-3xl bg-[#640705] px-8 pb-8 pt-8 shadow-sm sm:pl-48 sm:pr-10 sm:pt-10 sm:pb-10">
              <span
                className="font-display leading-none text-pearl select-none"
                style={{ fontSize: "clamp(4rem, 8vw, 6rem)", lineHeight: 1 }}
                aria-hidden
              >
                &#8220;
              </span>
              <blockquote className="-mt-2 font-display text-base leading-relaxed text-pearl sm:text-lg md:text-xl">
                {t("home.president.quote")}
              </blockquote>
              <div className="mt-8 border-t border-pearl/10 pt-6">
                <div className="font-display text-base text-pearl">{t("home.president.name")}</div>
                <div className="mt-1 text-[10px] text-pearl/40 font-medium">{t("home.president.title")}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AmbitionsMissionsSection() {
  const { t } = useTranslation();
  const items = t("home.pillars.items", { returnObjects: true }) as { t: string; d: string }[];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-ink px-6 py-28 text-pearl md:py-40 grain">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
          <div>
            <Reveal>
              <span className="font-label text-[10px] text-ember">— {t("home.ambitions.eyebrow")}</span>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">{t("home.ambitions.title")}</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-pearl/70">{t("home.ambitions.body")}</p>
            </Reveal>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <motion.img style={{ y }} src={ambitions} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mt-20 grid gap-8 border-t border-pearl/10 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <Reveal key={it.t} delay={idx * 0.06}>
              <h3 className="font-display text-xl text-pearl">{it.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pearl/60">{it.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValeursSection() {
  const { t } = useTranslation();
  const items = t("home.values.items", { returnObjects: true }) as { n: string; t: string; d: string }[];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">— {t("home.values.eyebrow")}</span>
          <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight md:text-6xl">{t("home.values.title")}</h2>
        </Reveal>
        <div className="relative mt-20 grid gap-16 md:grid-cols-[120px_1fr]">
          <div className="hidden md:block">
            <div className="sticky top-32">
              <div className="relative h-[60vh] w-px bg-ink/10">
                <motion.div style={{ height: lineH }} className="absolute left-0 top-0 w-px bg-wine-deep" />
              </div>
            </div>
          </div>
          <div className="space-y-24">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-baseline">
                  <span className="font-display text-6xl text-wine-deep/30 md:text-8xl">{it.n}</span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl">{it.t}</h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">{it.d}</p>
                  </div>
                </div>
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
  return (
    <section className="relative overflow-hidden bg-wine-deep px-6 py-10 text-pearl md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pearl/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/20 blur-[100px]" />
      </div>

      <Reveal>
        <div className="relative z-10 mx-auto text-center">
          <h2 className="font-display text-4xl leading-tight text-pearl sm:text-5xl md:text-6xl">{t("home.bannerCta.sectionTitle")}</h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-pearl/65 sm:text-base">{t("home.bannerCta.body")}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/franchise" className="inline-flex items-center gap-3 rounded-full bg-pearl px-8 py-3.5 text-[11px] uppercase tracking-[0.2em] text-wine-deep transition hover:bg-pearl-deep">
              {t("cta.becomeFranchisee")}
              <ArrowRight className="h-3.5 w-3.5" />
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

function AProposPage() {
  return (
    <main className="grain min-h-screen">
      <Hero />
      <QuiSommesNousSection />
      <OrganigramSection />
      <PresidentSection />
      <AmbitionsMissionsSection />
      <ValeursSection />
      <BannerCta />
    </main>
  );
}
