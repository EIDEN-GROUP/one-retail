import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { EASE } from "@/components/Reveal";

import hsLogo from "@/assets/brands/hns-group-logo.png";
import dislogLogo from "@/assets/brands/logo_dislog-e1739792037672.png";
import voieLogo from "@/assets/brands/la-voie-express.webp";
import wbLogo from "@/assets/brands/wb-africa.png";
import gidnaLogo from "@/assets/brands/HQ_gidna_logo-min (1).png";
import kayaLogo from "@/assets/brands/kaya.png";
import chariLogo from "@/assets/brands/logo (1).png";
import oneRetailLogo from "@/assets/one-retail-logo.png";

/* ── Data   exact hierarchy from the H&S organigram ─────────── */

type NodeSize = "hs" | "md" | "hero" | "sm";

type Entity = {
  id: string;
  name: string;
  logo: string;
  size: NodeSize;
  /** center position as a percentage of the stage (desktop layout) */
  x: number;
  y: number;
  /** logo asset is white   render on a dark card so it stays visible */
  dark?: boolean;
};

const HS: Entity = { id: "hs", name: "H&S Group", logo: hsLogo, size: "hs", x: 50, y: 10 };

// Top row of sub-holdings + One Retail (drawn lower & larger, as in the original).
const HOLDINGS: Entity[] = [
  { id: "dislog", name: "Dislog Group", logo: dislogLogo, size: "md", x: 10, y: 37 },
  { id: "voie", name: "La Voie Express", logo: voieLogo, size: "md", x: 27, y: 37, dark: true },
  { id: "wb", name: "WB Group", logo: wbLogo, size: "md", x: 44, y: 37 },
  { id: "gidna", name: "Gidna", logo: gidnaLogo, size: "md", x: 61, y: 37 },
  { id: "chari", name: "Chari", logo: chariLogo, size: "md", x: 92, y: 37 },
  { id: "one-retail", name: "One Retail", logo: oneRetailLogo, size: "hero", x: 76, y: 61 },
];

const KAYA: Entity = { id: "kaya", name: "Kaya Immobilier", logo: kayaLogo, size: "sm", x: 61, y: 54 };

const SECTORS = ["lifestyle", "restauration", "bricolage", "beauty", "ecommerce"] as const;

// Which nodes stay bright when a given entity is highlighted.
const GROUP: Record<string, string[]> = {
  hs: ["hs"],
  dislog: ["dislog", "hs"],
  voie: ["voie", "hs"],
  wb: ["wb", "hs"],
  gidna: ["gidna", "kaya", "hs"],
  chari: ["chari", "hs"],
  "one-retail": ["one-retail", "hs", ...SECTORS.map((s) => `sector-${s}`)],
};

/* ── Connector geometry (SVG viewBox 1000×800, matches stage) ── */

const VB = { w: 1000, h: 800 };
type Line = { id: string; pts: string; owner: string; struct?: boolean };
const CONNECTORS: Line[] = [
  { id: "trunk", pts: "500,118 500,176", owner: "hs", struct: true },
  { id: "bus", pts: "100,176 920,176", owner: "hs", struct: true },
  { id: "d-dislog", pts: "100,176 100,266", owner: "dislog" },
  { id: "d-voie", pts: "270,176 270,266", owner: "voie" },
  { id: "d-wb", pts: "440,176 440,266", owner: "wb" },
  { id: "d-gidna", pts: "610,176 610,266", owner: "gidna" },
  { id: "d-chari", pts: "920,176 920,266", owner: "chari" },
  { id: "d-one", pts: "760,176 760,428", owner: "one-retail" },
  { id: "gidna-kaya", pts: "610,326 610,404", owner: "gidna" },
  { id: "one-sectors", pts: "760,540 760,566", owner: "one-retail" },
];

/* ── Card ───────────────────────────────────────────────────── */

function LogoCard({ e, bright }: { e: Entity; bright: boolean }) {
  const h =
    e.size === "hero"
      ? "h-11 md:h-14"
      : e.size === "hs"
        ? "h-9 md:h-11"
        : e.size === "sm"
          ? "h-6 md:h-7"
          : "h-7 md:h-9";
  const pad = e.size === "hero" ? "px-6 py-5 md:px-8 md:py-6" : e.size === "sm" ? "px-3 py-2" : "px-4 py-3";
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border ${pad} transition-colors duration-300 ${
        e.dark ? "bg-ink" : "bg-white"
      } ${
        bright
          ? `${e.dark ? "border-ember/50" : "border-brand/40"} shadow-[0_18px_45px_-18px_rgba(171,45,38,0.45)]`
          : "border-ink/10 shadow-[0_12px_30px_-14px_rgba(26,26,26,0.28)]"
      }`}
    >
      <img src={e.logo} alt={e.name} loading="lazy" className={`${h} w-auto max-w-full object-contain`} />
      <span className="sr-only">{e.name}</span>
    </div>
  );
}

/* ── Node (positioned, animated, dimmable) ──────────────────── */

function StageNode({
  e,
  inView,
  delay,
  bright,
  float,
  onHover,
  onLeave,
}: {
  e: Entity;
  inView: boolean;
  delay: number;
  bright: boolean;
  float?: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const widthClass =
    e.size === "hero"
      ? "w-[168px] md:w-[210px]"
      : e.size === "hs"
        ? "w-[132px] md:w-[156px]"
        : e.size === "sm"
          ? "w-[104px] md:w-[118px]"
          : "w-[104px] md:w-[124px]";
  return (
    <motion.div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${e.x}%`, top: `${e.y}%`, zIndex: e.size === "hero" || e.size === "hs" ? 20 : 10 }}
      animate={{ opacity: bright ? 1 : 0.26 }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 14 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: EASE, delay }}
      >
        <motion.button
          type="button"
          className={`${widthClass} block cursor-pointer`}
          onHoverStart={onHover}
          onHoverEnd={onLeave}
          onFocus={onHover}
          onBlur={onLeave}
          onClick={onHover}
          whileHover={{ y: -6, scale: 1.04 }}
          animate={float ? { y: [0, -6, 0] } : undefined}
          transition={
            float
              ? { y: { duration: 6, repeat: Infinity, ease: "easeInOut" }, default: { duration: 0.35, ease: EASE } }
              : { duration: 0.35, ease: EASE }
          }
        >
          <LogoCard e={e} bright={bright} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

/* ── Sector chip ────────────────────────────────────────────── */

function SectorChip({ label, bright, delay, inView }: { label: string; bright: boolean; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      animate={inView ? { opacity: bright ? 1 : 0.26, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay }}
      whileHover={{ y: -3 }}
      className="rounded-full border border-ink/10 bg-ink px-5 py-2.5 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream shadow-[0_10px_24px_-12px_rgba(26,26,26,0.5)]"
    >
      {label}
    </motion.div>
  );
}

/* ── Desktop stage ──────────────────────────────────────────── */

function Stage({
  inView,
  highlight,
  setHover,
}: {
  inView: boolean;
  highlight: string | null;
  setHover: (id: string | null) => void;
}) {
  const { t } = useTranslation();
  const isBright = (id: string) => highlight === null || (GROUP[highlight]?.includes(id) ?? false);
  const lineBright = (l: Line) => highlight === null || l.struct || (GROUP[highlight]?.includes(l.owner) ?? false);

  return (
    <div className="relative mx-auto w-full max-w-5xl" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
      {/* Connectors */}
      <svg
        viewBox={`0 0 ${VB.w} ${VB.h}`}
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
      >
        {CONNECTORS.map((l, i) => {
          const on = lineBright(l);
          return (
            <motion.polyline
              key={l.id}
              points={l.pts}
              stroke={on ? "var(--brick)" : "var(--line)"}
              strokeWidth={on && !l.struct && highlight ? 2.4 : 1.4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? { pathLength: 1, opacity: on ? 0.9 : 0.35 } : {}}
              transition={{
                pathLength: { duration: 0.6, ease: EASE, delay: 0.4 + i * 0.05 },
                opacity: { duration: 0.4, ease: EASE, delay: 0.4 + i * 0.05 },
                stroke: { duration: 0.3 },
                strokeWidth: { duration: 0.3 },
              }}
            />
          );
        })}
      </svg>

      {/* H&S */}
      <StageNode
        e={HS}
        inView={inView}
        delay={0}
        bright={isBright("hs")}
        float
        onHover={() => setHover("hs")}
        onLeave={() => setHover(null)}
      />

      {/* Sub-holdings */}
      {HOLDINGS.map((e, i) => (
        <StageNode
          key={e.id}
          e={e}
          inView={inView}
          delay={0.6 + i * 0.1}
          bright={isBright(e.id)}
          float={e.id === "one-retail"}
          onHover={() => setHover(e.id)}
          onLeave={() => setHover(null)}
        />
      ))}

      {/* Kaya (under Gidna) */}
      <StageNode
        e={KAYA}
        inView={inView}
        delay={1.35}
        bright={isBright("kaya")}
        onHover={() => setHover("gidna")}
        onLeave={() => setHover(null)}
      />

      {/* One Retail sectors */}
      <div
        className="absolute -translate-x-1/2"
        style={{ left: "76%", top: "70.5%", width: "min(46%, 320px)" }}
      >
        <div className="flex flex-col gap-2">
          {SECTORS.map((s, i) => (
            <SectorChip
              key={s}
              label={t(`home.ecosystem.sectors.${s}`)}
              bright={isBright("one-retail")}
              inView={inView}
              delay={2 + i * 0.1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mobile stacked layout (tap-to-expand) ──────────────────── */

function MobileCard({ e, expandable, expanded, onTap }: { e: Entity; expandable?: boolean; expanded?: boolean; onTap?: () => void }) {
  const isHero = e.size === "hero";
  return (
    <motion.button
      type="button"
      onClick={onTap}
      whileTap={{ scale: 0.97 }}
      className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left shadow-[0_12px_30px_-16px_rgba(26,26,26,0.3)] transition-colors ${
        e.dark ? "bg-ink" : "bg-white"
      } ${isHero ? "border-brand/40" : e.dark ? "border-ink" : "border-ink/10"}`}
    >
      <img src={e.logo} alt={e.name} loading="lazy" className={`${isHero ? "h-10" : "h-7"} w-auto max-w-[60%] object-contain`} />
      {expandable && (
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-brand">
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      )}
      <span className="sr-only">{e.name}</span>
    </motion.button>
  );
}

function MobileEcosystem() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<string | null>("one-retail");
  const toggle = (id: string) => setOpen((cur) => (cur === id ? null : id));
  const topRow = HOLDINGS.filter((h) => h.id !== "one-retail");
  const oneRetail = HOLDINGS.find((h) => h.id === "one-retail")!;

  return (
    <div className="mx-auto max-w-md space-y-4">
      {/* H&S */}
      <div className="flex justify-center">
        <div className="w-44">
          <MobileCard e={HS} />
        </div>
      </div>
      <div className="mx-auto h-6 w-px bg-ink/15" />

      {/* Holdings grid */}
      <div className="grid grid-cols-2 gap-3">
        {topRow.map((h) => (
          <div key={h.id}>
            <MobileCard e={h} expandable={h.id === "gidna"} expanded={open === h.id} onTap={() => toggle(h.id)} />
            <AnimatePresence initial={false}>
              {h.id === "gidna" && open === "gidna" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 rounded-xl border border-ink/10 bg-pearl-deep/40 px-3 py-3">
                    <img src={KAYA.logo} alt={KAYA.name} className="mx-auto h-6 w-auto object-contain" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mx-auto h-6 w-px bg-ink/15" />

      {/* One Retail   emphasized */}
      <MobileCard e={oneRetail} expandable expanded={open === "one-retail"} onTap={() => toggle("one-retail")} />
      <AnimatePresence initial={false}>
        {open === "one-retail" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mt-1 grid grid-cols-2 gap-2 pb-1">
              {SECTORS.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-ink px-3 py-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cream"
                >
                  {t(`home.ecosystem.sectors.${s}`)}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */

export function Ecosystem() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [hover, setHover] = useState<string | null>(null);
  const [focusMode, setFocusMode] = useState(false);

  // After the build sequence completes, focus on One Retail by fading the rest.
  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setFocusMode(true), 2600);
    return () => clearTimeout(id);
  }, [inView]);

  const highlight = hover ?? (focusMode ? "one-retail" : null);

  return (
    <section ref={ref} className="relative overflow-hidden bg-pearl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="h-px w-8 bg-brand" />
          {t("home.ecosystem.eyebrow")}
          <span className="h-px w-8 bg-brand" />
        </motion.span>
        <motion.h2
          className="mt-5 font-display text-4xl leading-[1.05] text-ink md:text-6xl"
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
        >
          {t("home.ecosystem.title")}
        </motion.h2>
        <motion.p
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        >
          {t("home.ecosystem.body")}
        </motion.p>
      </div>

      {/* Desktop stage */}
      <div className="mt-14 hidden lg:block">
        <Stage inView={inView} highlight={highlight} setHover={setHover} />
      </div>

      {/* Mobile / tablet */}
      <div className="mt-12 lg:hidden">
        <MobileEcosystem />
      </div>

      {/* Hint */}
      <motion.p
        className="mt-10 text-center text-[0.7rem] uppercase tracking-[0.22em] text-ink/40"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE, delay: 2.4 }}
      >
        <span className="hidden lg:inline">{t("home.ecosystem.hintDesktop")}</span>
        <span className="lg:hidden">{t("home.ecosystem.hintMobile")}</span>
      </motion.p>
    </section>
  );
}
