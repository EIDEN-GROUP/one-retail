import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export type LocationType = "own" | "franchise" | "boutique" | "concept";

export interface Location {
  name: string;
  city: string;
  type: LocationType;
  coords: { x: number; y: number };
}

interface LocationMapProps {
  locations: Location[];
  title: string;
  description?: string;
  mapImage?: string;
  stats?: { value: string; label: string }[];
}

// Couleurs officielles des pins de la carte Venezia (légende de l'image).
const LEGEND: { type: LocationType; color: string; label: string; letter: string }[] = [
  { type: "own", color: "#E5007D", label: "Point de vente propre", letter: "V" },
  { type: "franchise", color: "#F7941E", label: "Point de vente franchise", letter: "V" },
  { type: "boutique", color: "#1D6A73", label: "Boutique Bakery", letter: "B" },
  { type: "concept", color: "#29B8A8", label: "Venezia Ice & Bakery", letter: "VB" },
];

const legendByType = Object.fromEntries(LEGEND.map((l) => [l.type, l])) as Record<
  LocationType,
  (typeof LEGEND)[number]
>;

function Pin({ color, letter, className }: { color: string; letter: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} aria-hidden="true">
      <path
        d="M12 0C5.37 0 0 5.37 0 12c0 8.55 12 20 12 20s12-11.45 12-20C24 5.37 18.63 0 12 0Z"
        fill={color}
      />
      <circle cx="12" cy="11.6" r="7.4" fill="#fff" />
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={letter.length > 1 ? 6.2 : 9}
        fontWeight="700"
        fill={color}
        fontFamily="Inter, ui-sans-serif, sans-serif"
      >
        {letter}
      </text>
    </svg>
  );
}

export function LocationMap({ locations, title, description, mapImage, stats }: LocationMapProps) {
  const { t } = useTranslation();
  const cities = [...new Set(locations.map((l) => l.city))];
  // Les labels des stats sont des clés i18n ; t() renvoie le label tel quel s'il n'en est pas une.
  const displayStats = stats ?? [
    { value: `${locations.length}+`, label: "franchisePage.pointsOfSale" },
    { value: `${cities.length}+`, label: "franchisePage.cities" },
  ];

  // Légère parallaxe de la carte au défilement, comme le hero de la page.
  const mapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: mapRef, offset: ["start end", "end start"] });
  const mapY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-24">
      <motion.div
        className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <motion.span
          className="h-px w-10 origin-left bg-brand"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
        />
        {t("franchisePage.presence")}
      </motion.div>

      <motion.h2
        className="mt-4 max-w-2xl font-display text-3xl leading-[1.05] sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={VIEWPORT}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {title}
      </motion.h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">{description}</p>
        </Reveal>
      )}

      <div className="mt-8 grid gap-4 sm:gap-6 md:mt-12 md:grid-cols-[1fr_1.5fr]">
        <Stagger className="flex flex-col gap-4" stagger={0.15}>
          <StaggerItem>
            <div className="grid grid-cols-2 divide-x divide-cream/15 rounded-2xl bg-brand-deep p-5 text-cream sm:p-6">
              {displayStats.map((stat, idx) => (
                <div key={stat.label} className={idx === 0 ? "pr-4" : "pl-4"}>
                  <div className="font-display text-3xl sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.25em] text-cream/60">
                    {t(stat.label)}
                  </div>
                </div>
              ))}
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span key={city} className="chip">
                  {city}
                </span>
              ))}
            </div>
          </StaggerItem>
        </Stagger>

        <motion.div
          ref={mapRef}
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="group overflow-hidden rounded-2xl border border-ink/10 bg-card sm:rounded-[2rem]"
        >
          {mapImage ? (
            <figure className="flex h-full flex-col">
              <div className="overflow-hidden">
                {/* Pins, villes et légende déjà intégrés à l'image ; multiply fond le blanc dans la carte. */}
                <motion.div style={{ y: mapY }}>
                  <motion.img
                    src={mapImage}
                    alt={t("franchisePage.mapAlt")}
                    loading="lazy"
                    initial={{ scale: 1.12, opacity: 0 }}
                    whileInView={{ scale: 1.04, opacity: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
                    className="h-auto w-full mix-blend-multiply p-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] sm:p-4"
                  />
                </motion.div>
              </div>
              <figcaption className="mt-auto flex items-center justify-between gap-4 border-t border-ink/10 px-5 py-4 sm:px-6">
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-ink/50">{t("franchisePage.morocco")}</span>
                <span className="text-xs text-ink-soft">{t("franchisePage.network")}</span>
              </figcaption>
            </figure>
          ) : (
            <div className="relative aspect-[4/5] w-full">
              {locations.map((location, idx) => {
                const entry = legendByType[location.type];
                return (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5, ease: EASE }}
                    style={{ left: `${location.coords.x}%`, top: `${location.coords.y}%` }}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                  >
                    <Pin color={entry.color} letter={entry.letter} className="h-10 w-8 drop-shadow" />
                    <span className="mt-1 whitespace-nowrap rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-ink shadow">
                      {location.city.toUpperCase()}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
