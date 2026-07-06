import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CreditCard,
  Database,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Puzzle,
  Rocket,
  Send,
  Settings,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  Truck,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { FRANCHISES } from "@/lib/franchises";
import heroImg from "@/assets/franchise-hero.jpg";
import brandFranprix from "@/assets/brands/franprix.png";
import brandMonoprix from "@/assets/brands/monoprix.png";
import brandVenezia from "@/assets/brands/venezia-ice.png";
import brandBricolage from "@/assets/brands/image (6).png";
import brandBeauty from "@/assets/brands/beautyforyou.png";
import brandFlormar from "@/assets/brands/flormar.png";
import brandDahab from "@/assets/brands/dahab.png";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Devenir franchisé — One Retail" },
      {
        name: "description",
        content:
          "Investissez dans le futur du retail au Maroc. Premier écosystème retail franchisé multi-enseignes : une fenêtre d'opportunité unique 2026–2030.",
      },
      { property: "og:title", content: "Devenir franchisé — One Retail" },
      {
        property: "og:description",
        content: "Premier écosystème retail franchisé multi-enseignes au Maroc.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: FranchisePage,
});

const INTRO = typeof window !== "undefined" && performance.now() < 1800 ? 1.8 : 0;

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

const STATS = [
  { value: 5 },
  { value: 7 },
  { value: 700, prefix: "+" },
  { value: 10, hasUnit: true },
];

const WHY_ICONS = [Puzzle, TrendingUp, ShieldCheck, Rocket];
const ECOSYSTEM_ICONS = [ShoppingCart, Truck, Megaphone, Database, Settings, CreditCard];

const brandLogos = [
  { name: "Franprix", img: brandFranprix },
  { name: "Monoprix", img: brandMonoprix },
  { name: "Venezia-Ice", img: brandVenezia },
  { name: "Mr.Bricolage", img: brandBricolage },
  { name: "BeautyForYou", img: brandBeauty },
  { name: "Flormar", img: brandFlormar },
  { name: "Dahab", img: brandDahab },
];

function FranchisePage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero />
      <KeyFigures />
      <WhyOneRetail />
      <Ecosystem />
      <BrandsMarquee />
      <InvestmentModels />
      <SupportProgram />
      <ApplySection />
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  const words = t("joinFranchise.heroTitle").split(" ");

  return (
    <section className="relative mx-2 mt-2 overflow-hidden rounded-2xl bg-ink sm:mx-4 sm:mt-4 sm:rounded-[2rem]">
      <motion.img
        src={heroImg}
        alt={t("joinFranchise.heroTitle")}
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE, delay: Math.max(0, INTRO - 0.6) }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.88) 100%)" }}
      />
      <div className="relative px-6 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            className="mx-auto flex items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-cream/70 sm:text-xs"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: INTRO }}
          >
            <span className="h-px w-10 bg-brand" />
            {t("joinFranchise.heroEyebrow")}
            <span className="h-px w-10 bg-brand" />
          </motion.div>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.98] text-cream">
            {words.map((w, i) => (
              <Fragment key={i}>
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: "0.5em", filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, ease: EASE, delay: INTRO + 0.2 + i * 0.09 }}
                >
                  {w}
                </motion.span>{" "}
              </Fragment>
            ))}
          </h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/75 md:text-base"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: INTRO + 0.8 }}
          >
            {t("joinFranchise.heroSub")}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: INTRO + 1.1 }}
          >
            <a
              href="#candidater"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-cream transition hover:bg-brand-deep"
            >
              {t("joinFranchise.heroCta")}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#investissement"
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition hover:border-cream hover:bg-cream/10"
            >
              {t("joinFranchise.heroCta2")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Counter({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix]);

  return <span ref={ref}>{prefix}0</span>;
}

function KeyFigures() {
  const { t } = useTranslation();
  const labels = t("joinFranchise.stats.labels", { returnObjects: true }) as string[];
  const bullets = t("joinFranchise.stats.bullets", { returnObjects: true }) as string[];
  return (
    <section className="px-2 pt-6 sm:px-4 sm:pt-8">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-brand-deep px-4 py-10 sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-14 md:py-16"
        initial={{ opacity: 0, y: 48, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 15% 15%, rgba(245,240,230,0.2), transparent 40%), radial-gradient(circle at 85% 85%, rgba(171,45,38,0.6), transparent 45%)",
          }}
        />
        <div className="relative">
          <Eyebrow className="mb-8 text-cream/70" lineClassName="bg-cream/50">
            {t("joinFranchise.stats.eyebrow")}
          </Eyebrow>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-cream/15 md:grid-cols-4">
            {STATS.map((s, i) => (
              <div key={labels[i]} className="flex flex-col items-center bg-brand-deep px-4 py-6 text-center sm:py-8">
                <div className="font-display text-4xl text-cream sm:text-5xl md:text-6xl">
                  <Counter to={s.value} prefix={s.prefix} />
                  {s.hasUnit && <span className="ml-1 text-lg text-cream/70 sm:text-2xl">{t("joinFranchise.stats.unit")}</span>}
                </div>
                <div className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/60 sm:text-xs">{labels[i]}</div>
              </div>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-sm text-cream/80 md:text-base">{t("joinFranchise.stats.tagline")}</p>
          </Reveal>
          <Stagger className="mt-5 flex flex-wrap items-center justify-center gap-3" delay={0.3} stagger={0.1}>
            {bullets.map((b) => (
              <StaggerItem
                key={b}
                className="rounded-full border border-cream/20 bg-cream/[0.06] px-4 py-2 text-xs text-cream/85 backdrop-blur sm:text-sm"
              >
                {b}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </motion.div>
    </section>
  );
}

function WhyOneRetail() {
  const { t } = useTranslation();
  const items = t("joinFranchise.why.items", { returnObjects: true }) as { t: string; d: string }[];
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:pt-28">
      <Eyebrow className="mb-6 text-brand sm:mb-8">{t("joinFranchise.why.eyebrow")}</Eyebrow>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <motion.h2 {...titleReveal} className="font-display max-w-3xl text-4xl leading-[1.02] text-ink sm:text-5xl md:text-6xl">
          {t("joinFranchise.why.title")}
        </motion.h2>
        <Reveal delay={0.15}>
          <p className="max-w-md text-sm leading-relaxed text-ink/70 md:text-base">{t("joinFranchise.why.sub")}</p>
        </Reveal>
      </div>

      <Stagger
        className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:mt-12 sm:rounded-3xl md:grid-cols-2 lg:grid-cols-4"
        stagger={0.1}
      >
        {items.map((w, i) => {
          const Icon = WHY_ICONS[i];
          return (
            <StaggerItem key={w.t} className="group relative flex h-full flex-col bg-white p-6 transition hover:bg-brand hover:text-cream sm:p-7">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-brand transition group-hover:text-cream" />
                <span className="font-display text-sm text-brand/60 transition group-hover:text-cream/70">0{i + 1}</span>
              </div>
              <h3 className="font-display mt-5 text-2xl leading-tight sm:mt-6">{w.t}</h3>
              <p className="mt-3 text-xs leading-relaxed text-ink/70 transition group-hover:text-cream/85 sm:text-sm">{w.d}</p>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

function Ecosystem() {
  const { t } = useTranslation();
  const items = t("joinFranchise.ecosystem.items", { returnObjects: true }) as string[];
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:pt-28">
      <motion.div
        className="overflow-hidden rounded-2xl bg-white px-4 py-10 sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-14 md:py-16"
        initial={{ opacity: 0, y: 48, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE }}
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <Eyebrow className="mb-6 text-brand">{t("joinFranchise.ecosystem.eyebrow")}</Eyebrow>
            <motion.h2 {...titleReveal} className="font-display text-3xl leading-[1.05] text-ink sm:text-4xl md:text-5xl">
              {t("joinFranchise.ecosystem.title")}
            </motion.h2>
            <Reveal delay={0.15}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 md:text-base">{t("joinFranchise.ecosystem.sub")}</p>
            </Reveal>
          </div>
          <Stagger className="grid gap-3 sm:grid-cols-2 md:col-span-7" delay={0.15} stagger={0.08}>
            {items.map((label, i) => {
              const Icon = ECOSYSTEM_ICONS[i];
              return (
                <StaggerItem
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-cream p-5 transition hover:border-brand/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-ink">{label}</span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </motion.div>
    </section>
  );
}

function BrandsMarquee() {
  const { t } = useTranslation();
  const items = [...brandLogos, ...brandLogos];
  return (
    <section className="pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Eyebrow className="mb-6 text-brand sm:mb-8">{t("joinFranchise.brands.eyebrow")}</Eyebrow>
        <Reveal y={24}>
          <div className="relative overflow-hidden rounded-2xl border border-ink/10 bg-white px-4 py-8 sm:rounded-3xl sm:px-6 sm:py-10">
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
      </div>
    </section>
  );
}

function InvestmentModels() {
  const { t } = useTranslation();
  const directBullets = t("joinFranchise.invest.direct.bullets", { returnObjects: true }) as string[];
  const cardBullets = t("joinFranchise.invest.card.bullets", { returnObjects: true }) as string[];
  return (
    <section id="investissement" className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:pt-28">
      <Eyebrow className="mb-6 text-brand sm:mb-8">{t("joinFranchise.invest.eyebrow")}</Eyebrow>
      <motion.h2 {...titleReveal} className="font-display max-w-3xl text-4xl leading-[1.02] text-ink sm:text-5xl md:text-6xl">
        {t("joinFranchise.invest.title")}
      </motion.h2>

      <div className="mt-8 grid gap-5 sm:mt-12 md:grid-cols-2">
        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 sm:rounded-3xl sm:p-10">
            <div className="text-xs uppercase tracking-[0.25em] text-brand">{t("joinFranchise.invest.direct.label")}</div>
            <h3 className="font-display mt-4 text-3xl text-ink">{t("joinFranchise.invest.direct.title")}</h3>
            <p className="mt-3 text-sm text-ink/70">{t("joinFranchise.invest.direct.sub")}</p>
            <div className="mt-8">
              <div className="font-display text-5xl text-ink sm:text-6xl">
                350 K <span className="text-2xl text-ink/60">MAD</span>
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-ink/50">{t("joinFranchise.invest.direct.priceNote")}</div>
            </div>
            <ul className="mt-8 space-y-3">
              {directBullets.map((li) => (
                <li key={li} className="flex items-start gap-3 text-sm text-ink/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {li}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-10">
              <a
                href="#candidater"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream"
              >
                {t("joinFranchise.invest.direct.cta")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="h-full">
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink p-7 text-cream sm:rounded-3xl sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "radial-gradient(circle at 85% 10%, rgba(171,45,38,0.5), transparent 50%)" }}
            />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs uppercase tracking-[0.25em] text-brand">{t("joinFranchise.invest.card.label")}</div>
                <span className="rounded-full bg-brand px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-cream">
                  {t("joinFranchise.invest.card.badge")}
                </span>
              </div>
              <h3 className="font-display mt-4 text-3xl">{t("joinFranchise.invest.card.title")}</h3>
              <p className="mt-3 text-sm text-cream/70">{t("joinFranchise.invest.card.sub")}</p>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-cream/15">
                <div className="bg-ink px-4 py-5 text-center">
                  <div className="font-display text-4xl text-cream sm:text-5xl">-10%</div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.15em] text-cream/60">
                    {t("joinFranchise.invest.card.d2")}
                  </div>
                </div>
                <div className="bg-ink px-4 py-5 text-center">
                  <div className="font-display text-4xl text-cream sm:text-5xl">-25%</div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.15em] text-cream/60">
                    {t("joinFranchise.invest.card.d3")}
                  </div>
                </div>
              </div>
              <ul className="mt-8 space-y-3">
                {cardBullets.map((li) => (
                  <li key={li} className="flex items-start gap-3 text-sm text-cream/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative mt-auto pt-10">
              <a
                href="#candidater"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-cream transition hover:bg-brand-deep"
              >
                {t("joinFranchise.invest.card.cta")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SupportProgram() {
  const { t } = useTranslation();
  const steps = t("joinFranchise.support.steps", { returnObjects: true }) as { title: string; metric: string; desc: string }[];
  return (
    <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 md:pt-28">
      <Eyebrow className="mb-6 text-brand sm:mb-8">{t("joinFranchise.support.eyebrow")}</Eyebrow>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <motion.h2 {...titleReveal} className="font-display max-w-2xl text-4xl leading-[1.02] text-ink sm:text-5xl md:text-6xl">
          {t("joinFranchise.support.title")}
        </motion.h2>
        <Reveal delay={0.15}>
          <p className="max-w-md text-sm leading-relaxed text-ink/70 md:text-base">{t("joinFranchise.support.sub")}</p>
        </Reveal>
      </div>

      <Stagger className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {steps.map((s, i) => (
          <StaggerItem key={s.title} className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-6 sm:p-7">
            <span className="font-display text-5xl text-brand/25">0{i + 1}</span>
            <h3 className="font-display mt-6 text-2xl leading-tight text-ink">{s.title}</h3>
            <div className="mt-4 inline-flex self-start rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {s.metric}
            </div>
            <p className="mt-3 text-sm text-ink/70">{s.desc}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

function ApplySection() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", brand: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    setForm({ name: "", email: "", phone: "", city: "", brand: "", message: "" });
  };

  return (
    <section id="candidater" className="px-4 py-20 md:py-28">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <motion.div
            className="relative flex flex-col justify-between p-6 sm:p-8 md:col-span-5 md:p-12 lg:p-14"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "radial-gradient(circle at 10% 90%, rgba(171,45,38,0.45), transparent 55%)" }}
            />
            <div className="relative">
              <Eyebrow className="mb-6 text-cream/70" lineClassName="bg-brand">
                {t("joinFranchise.apply.eyebrow")}
              </Eyebrow>
              <h2 className="font-display text-4xl leading-[1.05] text-cream md:text-5xl">{t("joinFranchise.apply.title")}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">{t("joinFranchise.apply.sub")}</p>
            </div>
            <div className="relative mt-10 space-y-5 border-t border-cream/15 pt-8">
              <div>
                <div className="text-sm font-semibold text-cream">Ryad Bendouro</div>
                <div className="text-xs text-cream/60">{t("joinFranchise.apply.contactRole")}</div>
              </div>
              <a href="mailto:r.bendouro@oneretail.ma" className="flex items-center gap-3 text-sm text-cream/80 transition hover:text-cream">
                <Mail className="h-4 w-4 text-brand" /> r.bendouro@oneretail.ma
              </a>
              <a href="tel:+212520400731" className="flex items-center gap-3 text-sm text-cream/80 transition hover:text-cream">
                <Phone className="h-4 w-4 text-brand" /> 05 20 40 07 31
              </a>
              <div className="flex items-center gap-3 text-sm text-cream/80">
                <MapPin className="h-4 w-4 text-brand" /> 409 route d'Eljadida, Casablanca 20232
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-cream/10 p-6 sm:p-8 md:col-span-7 md:border-l md:border-t-0 md:p-12 lg:p-14"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Stagger className="space-y-4" delay={0.2} stagger={0.08}>
              <form onSubmit={onSubmit} className="contents">
                <StaggerItem>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FieldInput placeholder={t("joinFranchise.apply.form.name")} value={form.name} onChange={(v) => setForm({ ...form, name: v })} required maxLength={120} />
                    <FieldInput type="email" placeholder={t("joinFranchise.apply.form.email")} value={form.email} onChange={(v) => setForm({ ...form, email: v })} required maxLength={255} />
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FieldInput type="tel" placeholder={t("joinFranchise.apply.form.phone")} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required maxLength={40} />
                    <FieldInput placeholder={t("joinFranchise.apply.form.city")} value={form.city} onChange={(v) => setForm({ ...form, city: v })} maxLength={80} />
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div>
                    <label className="block text-[0.7rem] uppercase tracking-[0.25em] text-cream/50">{t("joinFranchise.apply.form.brandLabel")}</label>
                    <select
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      className="mt-2 w-full rounded-full border border-cream/20 bg-transparent px-5 py-3 text-sm text-cream focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                      <option value="" className="bg-ink">{t("joinFranchise.apply.form.brandDefault")}</option>
                      {FRANCHISES.map((f) => (
                        <option key={f.slug} value={f.name} className="bg-ink">
                          {f.name}
                        </option>
                      ))}
                      <option value="Franchise Card" className="bg-ink">{t("joinFranchise.apply.form.brandMulti")}</option>
                    </select>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <textarea
                    placeholder={t("joinFranchise.apply.form.message")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    maxLength={1500}
                    rows={5}
                    className="w-full resize-none rounded-xl border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </StaggerItem>
                <StaggerItem>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-brand-deep"
                    >
                      {t("joinFranchise.apply.form.submit")}
                      <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                    {sent && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-xs text-brand"
                      >
                        {t("joinFranchise.apply.form.sent")}
                      </motion.p>
                    )}
                  </div>
                </StaggerItem>
              </form>
            </Stagger>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function FieldInput({
  type = "text",
  placeholder,
  value,
  onChange,
  required,
  maxLength,
}: {
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      maxLength={maxLength}
      className="w-full rounded-full border border-cream/20 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/40 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
    />
  );
}
