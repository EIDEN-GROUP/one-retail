import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import contactHero from "@/assets/about-casablanca.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact One Retail Maroc | Nous Contacter & Service Client" },
      {
        name: "description",
        content:
          "Contactez One Retail : partenariats, franchise, presse et opportunités. 409 route d'Eljadida, Casablanca.",
      },
      { property: "og:title", content: "Contact One Retail Maroc | Nous Contacter & Service Client" },
      {
        property: "og:description",
        content: "Nous sommes à votre écoute. Contactez les équipes One Retail.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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

function ContactPage() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ContactHero />
      <MapSection />
    </div>
  );
}

function HeroTitle() {
  const { t } = useTranslation();
  const words = t("contact.heroTitle").split(" ");
  return (
    <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] text-cream">
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
  );
}

function ContactHero() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-[2rem] bg-ink">
      <motion.img
        src={contactHero}
        alt="Contact One Retail"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE, delay: Math.max(0, INTRO - 0.6) }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <div className="relative px-6 pt-20 pb-16 md:px-14 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <HeroTitle />
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl items-start gap-10 md:grid-cols-12 md:gap-14">
          {/* Left: info */}
          <div className="md:col-span-5 md:pt-4">
            <motion.div
              className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand"
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
              {t("contact.eyebrow")}
            </motion.div>
            <motion.h2
              {...titleReveal}
              className="font-display text-4xl leading-[1.05] text-cream md:text-5xl"
            >
              {t("contact.listenTitle")}
            </motion.h2>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
                {t("contact.intro")}
              </p>
            </Reveal>

            <Stagger className="mt-10 grid gap-6 sm:grid-cols-1" stagger={0.15} delay={0.25}>
              <StaggerItem>
                <InfoItem
                  icon={<Phone className="h-5 w-5" />}
                  label={t("contact.info.phone")}
                  value="05 20 40 07 31"
                  href="tel:+212520400731"
                />
              </StaggerItem>
              <StaggerItem>
                <InfoItem
                  icon={<Mail className="h-5 w-5" />}
                  label={t("contact.info.email")}
                  value="contact@oneretail.ma"
                  href="mailto:contact@oneretail.ma"
                />
              </StaggerItem>
              <StaggerItem>
                <InfoItem
                  icon={<MapPin className="h-5 w-5" />}
                  label={t("contact.info.address")}
                  value="409 route d'Eljadida, Casablanca 20232"
                />
              </StaggerItem>
              <StaggerItem>
                <InfoItem
                  icon={<LinkedInIcon className="h-5 w-5" />}
                  label="LinkedIn"
                  value="One Retail"
                  href="https://www.linkedin.com/company/one-retail-ma/"
                />
              </StaggerItem>
            </Stagger>
          </div>

          {/* Right: form card */}
          <Reveal className="md:col-span-7" y={56} delay={0.15}>
            <div className="rounded-3xl bg-brand-deep p-6 md:p-10 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.55),0_12px_30px_-10px_rgba(0,0,0,0.35)]">
              <div className="mb-2 text-xs uppercase tracking-[0.3em] text-brand">
                {t("contact.writeUs")}
              </div>
              <h3 className="font-display text-3xl text-cream md:text-4xl">
                {t("contact.question")}
              </h3>
              <p className="mt-3 max-w-md text-sm text-cream/70">
                {t("contact.formIntro")}
              </p>

              <Stagger className="mt-8" stagger={0.08} delay={0.3}>
                <form onSubmit={onSubmit} className="space-y-4">
                  <StaggerItem>
                    <FormInput
                      placeholder={t("contact.form.name")}
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      required
                      maxLength={100}
                    />
                  </StaggerItem>
                  <StaggerItem>
                    <FormInput
                      type="email"
                      placeholder={t("contact.form.email")}
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      required
                      maxLength={255}
                    />
                  </StaggerItem>
                  <StaggerItem>
                    <FormInput
                      placeholder={t("contact.form.subject")}
                      value={form.subject}
                      onChange={(v) => setForm({ ...form, subject: v })}
                      required
                      maxLength={150}
                    />
                  </StaggerItem>
                  <StaggerItem>
                    <textarea
                      placeholder={t("contact.form.message")}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      maxLength={1000}
                      rows={5}
                      className="w-full resize-none rounded-xl border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    />
                  </StaggerItem>
                  <StaggerItem>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-brand-deep"
                    >
                      {t("cta.send")}
                      <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </motion.button>
                  </StaggerItem>
                  {sent && (
                    <motion.p
                      className="text-xs text-brand"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: EASE }}
                    >
                      {t("contact.sent")}
                    </motion.p>
                  )}
                </form>
              </Stagger>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-brand/60 text-brand">
        {icon}
      </span>
      <div>
        <div className="text-[0.7rem] uppercase tracking-[0.25em] text-cream/50">{label}</div>
        <div className="mt-1 text-sm text-cream">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="transition hover:opacity-80">
      {inner}
    </a>
  ) : (
    inner
  );
}

function FormInput({
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

function MapSection() {
  return (
    <section className="px-4 py-8">
      <Reveal y={48}>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-ink/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
          <iframe
            title="One Retail — Casablanca"
            src="https://www.google.com/maps?q=409+Rte+d'El+Jadida+Casablanca+20410+Morocco&output=embed"
            width="100%"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </div>
      </Reveal>
    </section>
  );
}
