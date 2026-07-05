import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { MapPin, Mail, Phone } from "lucide-react";

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — One Retail" },
      { name: "description", content: "Contactez One Retail. Casablanca, Maroc." },
      { property: "og:title", content: "Contact — One Retail" },
      { property: "og:description", content: "Contactez les équipes One Retail." },
    ],
  }),
  component: ContactPage,
});

const LINKEDIN_URL = "https://www.linkedin.com/company/one-retail";
// 409 Route d'El Jadida, Casablanca (quartier Oasis)
const HQ_COORDS = { lat: 33.5563, lon: -7.6412 };
const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${HQ_COORDS.lon - 0.012}%2C${HQ_COORDS.lat - 0.007}%2C${HQ_COORDS.lon + 0.012}%2C${HQ_COORDS.lat + 0.007}&layer=mapnik&marker=${HQ_COORDS.lat}%2C${HQ_COORDS.lon}`;

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] ${className}`}
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
      {children}
    </motion.div>
  );
}

const INFOS = [
  { icon: Mail, label: "Email", value: "contact@oneretail.ma", href: "mailto:contact@oneretail.ma" },
  { icon: Phone, label: "Téléphone", value: "05 20 40 07 31", href: "tel:+212520400731" },
  { icon: MapPin, label: "Adresse", value: "409 route d'Eljadida, Casablanca 20232", href: undefined },
] as const;

function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-28 text-ink sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <Eyebrow className="mb-6 text-brand sm:mb-8">Contactez-Nous</Eyebrow>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="font-display text-4xl leading-[1.02] sm:text-5xl md:text-7xl"
            >
              Nous sommes à votre <span className="text-brand">écoute</span>
            </motion.h1>
            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:mt-6 sm:text-base">
                Que vous soyez un partenaire, un client, un fournisseur ou simplement intéressé par notre activité, n’hésitez pas à nous contacter. Nos équipes vous répondront dans les plus brefs délais.
              </p>
            </Reveal>
            <Reveal delay={0.3} y={24}>
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn One Retail"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="mt-6 grid h-11 w-11 place-items-center rounded-full bg-brand text-cream transition-colors hover:bg-brand-deep sm:mt-8"
              >
                <LinkedinIcon className="h-5 w-5" />
              </motion.a>
            </Reveal>
          </div>

          <Stagger className="grid content-start gap-4 self-center md:col-span-7 sm:gap-5" stagger={0.12}>
            {INFOS.map((info) => (
              <StaggerItem
                key={info.label}
                className="group flex items-center gap-4 rounded-2xl bg-cream p-5 transition hover:bg-brand hover:text-cream sm:gap-5 sm:p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-cream transition group-hover:bg-cream group-hover:text-brand sm:h-12 sm:w-12">
                  <info.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-ink/45 transition group-hover:text-cream/70">
                    {info.label}
                  </span>
                  {info.href ? (
                    <a href={info.href} className="mt-1 block text-sm font-medium sm:text-base">
                      {info.value}
                    </a>
                  ) : (
                    <span className="mt-1 block text-sm font-medium sm:text-base">{info.value}</span>
                  )}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-2 pb-8 sm:mx-4">
        <Reveal y={40}>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem]">
            <iframe
              title="Siège One Retail — Casablanca"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 grayscale transition duration-700 hover:grayscale-0 sm:h-[440px]"
            />
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-cream/95 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink sm:left-6 sm:top-6 sm:text-xs">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              409 route d'Eljadida, Casablanca 20232
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
