import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef, useEffect, forwardRef, Fragment, ReactNode } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, Clock, Briefcase, Upload, Send, Mail, Phone, Sparkles } from "lucide-react";
import { EASE, VIEWPORT, Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import careersHero from "@/assets/about-casablanca.jpg";
import careersTeam from "@/assets/careers-team.jpg";
import { Trans, useTranslation } from "react-i18next";

export const Route = createFileRoute("/carriere")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Carrières | One Retail" },
      {
        name: "description",
        content:
          "Rejoignez One Retail et construisons ensemble le retail de demain. Découvrez nos offres d'emploi et postulez en candidature spontanée.",
      },
      { property: "og:title", content: "Carrières | One Retail" },
      {
        property: "og:description",
        content: "Rejoindre One Retail, c'est intégrer un groupe en pleine croissance qui place ses collaborateurs au cœur de sa vision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const jobs = [
  { title: "Store Manager", brand: "Franprix", location: "Casablanca", type: "CDI", area: "Retail" },
  { title: "Category Manager Beauty", brand: "BeautyForYou", location: "Casablanca", type: "CDI", area: "Marketing" },
  { title: "Chef de Rayon Bricolage", brand: "Mr.Bricolage", location: "Rabat", type: "CDI", area: "Retail" },
  { title: "Responsable Supply Chain", brand: "One Retail", location: "Casablanca", type: "CDI", area: "Logistique" },
  { title: "Data Analyst Retail", brand: "One Retail", location: "Casablanca", type: "CDI", area: "Data & IT" },
  { title: "Barista & Équipier Venezia-Ice", brand: "Venezia-Ice", location: "Casablanca", type: "CDD", area: "Restauration" },
];

const INTRO = typeof window !== "undefined" && performance.now() < 1800 ? 1.8 : 0;

const titleReveal = {
  initial: { opacity: 0, y: 40, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: VIEWPORT,
  transition: { duration: 0.9, ease: EASE },
};

const fadeUpItem = {
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: VIEWPORT,
  transition: { duration: 0.8, ease: EASE },
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

const SPONTANEOUS = "Candidature spontanée";

function CareersPage() {
  const [selected, setSelected] = useState<string>(SPONTANEOUS);
  const formRef = useRef<HTMLDivElement | null>(null);

  const applyTo = (title: string) => {
    setSelected(title);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Hero />
      <JoinSection onApply={() => applyTo(SPONTANEOUS)} />
      <ValuesSection />
      <JobsSection onSelect={applyTo} selected={selected} />
      <ApplicationForm ref={formRef} selected={selected} onSelectedChange={setSelected} />
      <ContactCTA />
    </div>
  );
}

function Hero() {
  const { t } = useTranslation();
  const words = t("careersPage.heroTitle").split(" ");

  return (
    <section className="relative mx-4 mt-4 overflow-hidden rounded-[2rem] bg-ink">
      <motion.img
        src={careersHero}
        alt="Équipes One Retail"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: EASE, delay: Math.max(0, INTRO - 0.6) }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.9) 100%)" }}
      />
      <div className="relative px-6 py-24 md:px-14 md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] text-cream">
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
            className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/70 md:text-base"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: INTRO + 0.8 }}
          >
            {t("careersPage.heroSub")}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.25em] text-cream/60"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: INTRO + 1.1 }}
          >
            <a href="#offres" className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-cream hover:bg-brand-deep transition">
              {t("careersPage.seeOffers")} <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#postuler" className="text-cream/80 hover:text-cream">{t("careersPage.spontaneous")} →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function JoinSection({ onApply }: { onApply: () => void }) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["5%", "-20%"]);
  return (
    <section ref={ref} className="px-4 pt-20 md:pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={VIEWPORT}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="relative">
            <div className="relative aspect-[6/5] overflow-hidden rounded-3xl shadow-xl">
              <motion.img style={{ y }} src={careersTeam} alt="" className="h-[120%] w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
            </div>
          </div>
        </motion.div>
        <Stagger className="flex flex-col gap-6" delay={0.1} stagger={0.15}>
          <StaggerItem>
            <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand">
              <span className="h-px w-10 bg-brand" />
              {t("careersPage.join.eyebrow")}
            </div>
          </StaggerItem>
          <StaggerItem>
            <h2 className="font-display text-4xl leading-[1.05] md:text-5xl">
              {t("careersPage.join.title")}
            </h2>
          </StaggerItem>
          <StaggerItem className="mt-6 space-y-4 text-sm leading-relaxed text-ink/75 md:text-base">
            <p>
              <Trans i18nKey="careersPage.join.p1" components={{ strong: <strong className="text-ink" /> }} />
            </p>
            <p>{t("careersPage.join.p2")}</p>
            <p>{t("careersPage.join.p3")}</p>
            <p>{t("careersPage.join.p4")}</p>
          </StaggerItem>
          <StaggerItem>
              <button
              onClick={onApply}
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-brand"
            >
              {t("careersPage.join.cta")}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { t } = useTranslation();
  const values = t("home.values.items", { returnObjects: true }) as { n: string; t: string; d: string }[];
  return (
    <section id="values" className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 md:pt-20">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white px-4 py-10 sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-14 md:py-20"
        initial={{ opacity: 0, y: 64, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE }}
      >
        <Eyebrow className="mb-6 text-brand sm:mb-8">{t("home.values.eyebrow")}</Eyebrow>
        <motion.h2
          {...titleReveal}
          className="font-display max-w-5xl text-3xl leading-[1.05] text-ink sm:text-4xl md:text-6xl"
        >
          {t("home.values.title")}
        </motion.h2>

        <Stagger
          className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:mt-10 sm:rounded-3xl md:grid-cols-3"
          stagger={0.1}
        >
          {values.map((v) => (
            <StaggerItem
              key={v.t}
              className="group relative bg-cream p-5 transition hover:bg-brand hover:text-cream sm:p-6"
            >
              <span className="font-display text-xs text-brand transition group-hover:text-cream/70 sm:text-sm">
                {v.n}
              </span>
              <h3 className="font-display mt-2 text-2xl sm:mt-3 sm:text-3xl">{v.t}</h3>
              <p className="mt-3 text-xs leading-relaxed text-ink/70 transition group-hover:text-cream/85 sm:mt-4 sm:text-sm">
                {v.d}
              </p>
            </StaggerItem>
          ))}
          <StaggerItem className="flex flex-col justify-between bg-ink p-5 text-cream sm:p-6 md:col-span-1">
            <Sparkles className="h-5 w-5 text-brand sm:h-6 sm:w-6" />
            <p className="font-display mt-4 text-xl leading-tight sm:mt-6 sm:text-2xl">
              {t("home.values.highlight")}
            </p>
          </StaggerItem>
        </Stagger>
      </motion.div>
    </section>
  );
}

function JobsSection({ onSelect, selected }: { onSelect: (t: string) => void; selected: string }) {
  const { t } = useTranslation();
  return (
    <section id="offres" className="px-4 pt-20 md:pt-28">
      <div className="mx-auto max-w-7xl">
        <Stagger className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" delay={0.1} stagger={0.1}>
          <StaggerItem>
            <div>
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.7, ease: EASE }}
                className="text-xs uppercase tracking-[0.3em] text-brand"
              >
                {t("careersPage.jobs.eyebrow")}
              </motion.div>
              <motion.h2
                {...titleReveal}
                className="mt-3 font-display text-4xl md:text-5xl"
              >
                {t("careersPage.jobs.title")}
              </motion.h2>
              <motion.p
                {...fadeUpItem}
                className="mt-3 max-w-xl text-sm text-ink/70"
              >
                {t("careersPage.jobs.sub")}
              </motion.p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <motion.div
              {...fadeUpItem}
              className="text-xs uppercase tracking-[0.25em] text-ink/50"
            >
              {t("careersPage.jobs.available", { count: jobs.length })}
            </motion.div>
          </StaggerItem>
        </Stagger>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2" delay={0.2} stagger={0.1}>
          {jobs.map((j) => {
            const active = selected === j.title;
            return (
              <StaggerItem key={j.title}>
                <motion.button
                  {...fadeUpItem}
                  onClick={() => onSelect(j.title)}
                  className={`group w-full relative overflow-hidden rounded-2xl border p-6 text-left transition ${
                    active
                      ? "border-brand bg-brand text-cream shadow-[0_20px_50px_-20px_rgba(199,33,29,0.55)]"
                      : "border-ink/10 bg-white hover:border-brand/40 hover:shadow-[0_15px_40px_-25px_rgba(0,0,0,0.25)]"
                  }`}
                >
                  <div className={`flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.25em] ${active ? "text-cream/80" : "text-brand"}`}>
                    <Briefcase className="h-3.5 w-3.5" />
                    {j.area}
                  </div>
                  <h3 className={`mt-3 font-display text-2xl ${active ? "text-cream" : "text-ink"}`}>{j.title}</h3>
                  <div className={`mt-1 text-sm ${active ? "text-cream/80" : "text-ink/60"}`}>{j.brand}</div>
                  <div className={`mt-5 flex flex-wrap items-center gap-4 text-xs ${active ? "text-cream/80" : "text-ink/60"}`}>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{j.location}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{j.type}</span>
                  </div>
                  <div className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${active ? "text-cream" : "text-brand"}`}>
                    {active ? t("careersPage.jobs.selected") : t("careersPage.jobs.apply")} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </div>
                </motion.button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

type FormRef = React.ForwardedRef<HTMLDivElement>;
function ApplicationFormImpl(
  { selected, onSelectedChange }: { selected: string; onSelectedChange: (v: string) => void },
  ref: FormRef,
) {
  const { t } = useTranslation();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [fileName, setFileName] = useState<string>("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Ensure a default is set
    if (!selected) onSelectedChange(SPONTANEOUS);
  }, [selected, onSelectedChange]);

  const isSpontaneous = selected === SPONTANEOUS;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setFileName("");
  };

  return (
    <section id="postuler" ref={ref} className="px-4 py-24">
      <motion.div
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12">
          <motion.div
            className="relative col-span-1 max-h-80 sm:max-h-96 md:col-span-5 md:max-h-none md:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <img
              src={careersTeam}
              alt="Rejoignez One Retail"
              width={1024}
              height={1280}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          </motion.div>
          <motion.div
            className="md:col-span-7 p-6 sm:p-8 md:p-12 lg:p-14"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <motion.div
              className="mb-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className="h-px w-10 bg-brand" />
              {isSpontaneous ? t("careersPage.form.eyebrowSpontaneous") : t("careersPage.form.eyebrowJob")}
            </motion.div>
            <motion.h2
              {...titleReveal}
              className="font-display text-4xl leading-[1.05] text-cream md:text-5xl"
            >
              {isSpontaneous ? t("careersPage.form.titleSpontaneous") : selected}
            </motion.h2>
            <motion.p
              {...fadeUpItem}
              className="mt-4 max-w-lg text-sm text-cream/70"
            >
              {isSpontaneous ? t("careersPage.form.subSpontaneous") : t("careersPage.form.subJob")}
            </motion.p>

            <Stagger className="mt-6 space-y-5 sm:mt-8 sm:space-y-4" delay={0.2} stagger={0.08}>
              <form onSubmit={onSubmit} className="contents">
              <StaggerItem>
                <div>
                  <label className="block text-[0.7rem] uppercase tracking-[0.25em] text-cream/50">{t("careersPage.form.roleLabel")}</label>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <select
                      value={selected}
                      onChange={(e) => onSelectedChange(e.target.value)}
                      className="flex-1 min-w-[220px] rounded-full border border-cream/20 bg-transparent px-5 py-3 text-sm text-cream focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                      <option value={SPONTANEOUS} className="bg-ink">{t("careersPage.spontaneous")}</option>
                      {jobs.map((j) => (
                        <option key={j.title} value={j.title} className="bg-ink">
                          {j.title} — {j.brand}
                        </option>
                      ))}
                    </select>
                    {!isSpontaneous && (
                      <button
                        type="button"
                        onClick={() => onSelectedChange(SPONTANEOUS)}
                        className="text-xs uppercase tracking-[0.2em] text-cream/60 hover:text-cream"
                      >
                        {t("careersPage.form.clear")}
                      </button>
                    )}
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <FieldInput placeholder={t("careersPage.form.firstName")} value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} required maxLength={80} />
                  <FieldInput placeholder={t("careersPage.form.lastName")} value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} required maxLength={80} />
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  <FieldInput type="email" placeholder={t("careersPage.form.email")} value={form.email} onChange={(v) => setForm({ ...form, email: v })} required maxLength={255} />
                  <FieldInput type="tel" placeholder={t("careersPage.form.phone")} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required maxLength={40} />
                </div>
              </StaggerItem>

              <StaggerItem>
                <textarea
                  placeholder={isSpontaneous ? t("careersPage.form.msgSpontaneous") : t("careersPage.form.msgJob")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  maxLength={1500}
                  rows={5}
                  className="w-full resize-none rounded-xl border border-cream/20 bg-transparent px-4 py-3 text-sm text-cream placeholder:text-cream/40 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </StaggerItem>

              <StaggerItem>
                <label className="flex flex-wrap items-center gap-3 rounded-full border border-cream/20 bg-transparent px-2 py-2 text-sm text-cream/70">
                  <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs uppercase tracking-[0.2em] text-cream hover:bg-brand-deep">
                    <Upload className="h-3.5 w-3.5" /> {t("careersPage.form.cv")}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
                      required
                    />
                  </span>
                  <span className="truncate text-xs text-cream/60">{fileName || t("careersPage.form.noFile")}</span>
                </label>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-cream transition hover:bg-brand-deep"
                  >
                    {t("careersPage.form.submit")}
                    <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                  {sent && <AnimatePresence><motion.p key="sent" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="text-xs text-brand">{t("careersPage.form.sent")}</motion.p></AnimatePresence>}
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
const ApplicationForm = forwardRef(ApplicationFormImpl);

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
      className="w-full rounded-full mb-3 mt-3 border border-cream/20 bg-transparent px-5 py-3 text-sm text-cream placeholder:text-cream/40 transition focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
    />
  );
}

function ContactCTA() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="px-2 pb-6 sm:px-4 sm:pb-8">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-brand-deep px-4 py-10 sm:rounded-[2rem] sm:px-6 sm:py-14 md:px-14 md:py-20"
        initial={{ opacity: 0, y: 64, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 1, ease: EASE }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(245,240,230,0.25), transparent 40%), radial-gradient(circle at 85% 80%, rgba(171,45,38,0.6), transparent 45%)",
          }}
        />
        <div className="relative grid items-center gap-6 sm:gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <Eyebrow className="mb-3 text-cream/70 sm:mb-4" lineClassName="bg-cream/50">
              {t("home.contactCta.eyebrow")}
            </Eyebrow>
            <motion.h2
              {...titleReveal}
              className="font-display text-3xl leading-[1.05] text-cream sm:text-4xl md:text-6xl"
            >
              {t("home.contactCta.title")}
            </motion.h2>
            <Reveal delay={0.2}>
              <p className="mt-3 max-w-xl text-sm text-cream/75 sm:mt-4 sm:text-base">
                {t("home.contactCta.body")}
              </p>
            </Reveal>
          </div>
          <Stagger className="flex flex-col gap-3 md:col-span-4 md:items-end" delay={0.3} stagger={0.15}>
            <StaggerItem className="w-full md:w-4/5">
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-brand hover:text-cream sm:px-10 sm:py-4"
              >
                {t("cta.contactUs")}
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </StaggerItem>
          </Stagger>
        </div>
      </motion.div>
    </section>
  );
}