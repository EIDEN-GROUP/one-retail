import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { Franchise } from "@/lib/franchises";
import { FranchiseBanner } from "./FranchiseBanner";
import { Reveal } from "./Reveal";

export function FranchiseSingle({ franchise, backTo, backLabel }: { franchise: Franchise; backTo: string; backLabel: string }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <main className="grain min-h-screen">
      <section ref={heroRef} className="relative h-[88vh] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={franchise.image} alt={franchise.name} className="h-full w-full object-cover" />
        </motion.div>
        <motion.div style={{ opacity }} className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/70" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 text-pearl md:pb-24">
          <div className="mx-auto w-full max-w-6xl">
            <Link to={backTo} className="inline-flex items-center gap-2 font-label text-[10px] text-pearl/80 link-underline">
              <ArrowLeft className="h-3.5 w-3.5" /> {backLabel}
            </Link>
            <h1 className="mt-6 font-display text-5xl leading-[1] md:text-8xl">{franchise.name}</h1>
            <p className="mt-4 max-w-xl text-base text-pearl/80 md:text-lg">{franchise.tagline}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.3fr_1fr] md:py-32">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">  L'enseigne</span>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">{franchise.tagline}</h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">{franchise.story}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-ink/10 bg-card p-8">
            <span className="font-label text-[10px] text-ink/50">Fiche enseigne</span>
            <ul className="mt-6 divide-y divide-ink/10">
              {franchise.specs.map((s) => (
                <li key={s.label} className="flex items-center justify-between py-3 text-sm">
                  <span className="text-ink/60">{s.label}</span>
                  <span className="font-medium text-ink">{s.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">  Galerie</span>
          <h3 className="mt-4 font-display text-3xl md:text-4xl">L'expérience en images.</h3>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {franchise.gallery.map((g, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={`overflow-hidden rounded-2xl border border-ink/10 ${i === 0 ? "md:aspect-[3/4]" : "aspect-square"}`}>
                <motion.img src={g} alt="" className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }} loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FranchiseBanner />
    </main>
  );
}
