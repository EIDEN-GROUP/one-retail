import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Franchise } from "@/lib/franchises";
import { FranchiseBanner } from "./FranchiseBanner";
import { Reveal } from "./Reveal";
import { useTranslation } from "react-i18next";

export function CategoryPage({
  eyebrow,
  title,
  intro,
  franchises,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  franchises: Franchise[];
}) {
  const { t } = useTranslation();
  return (
    <main className="grain min-h-screen pt-32">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">— {eyebrow}</span>
          <h1 className="mt-5 font-display text-5xl leading-[1] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">{intro}</p>
        </Reveal>
      </section>

      <section className="px-6">
        <div className={`mx-auto grid max-w-6xl gap-8 ${franchises.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1 md:max-w-3xl"}`}>
          {franchises.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.1}>
              <Link to="/franchise/$slug" params={{ slug: f.slug }} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-ink/10 bg-pearl-deep">
                  <motion.img
                    src={f.image}
                    alt={f.name}
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
                        <span className="font-label text-[10px] text-pearl/70">{f.category}</span>
                        <h3 className="mt-2 font-display text-3xl md:text-4xl">{f.name}</h3>
                        <p className="mt-2 max-w-sm text-sm text-pearl/75">{f.tagline}</p>
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
            </Reveal>
          ))}
        </div>
      </section>

      <FranchiseBanner />
    </main>
  );
}
