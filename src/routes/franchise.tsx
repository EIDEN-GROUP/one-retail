import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/franchise-hero.jpg";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Devenir franchisé — One Retail" },
      { name: "description", content: "Rejoignez One Retail et développez une enseigne de référence au Maroc." },
      { property: "og:title", content: "Devenir franchisé — One Retail" },
      { property: "og:description", content: "Un partenariat exigeant, conçu pour durer." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: FranchisePage,
});

const STEPS = [
  { n: "01", t: "Candidature", d: "Vous nous transmettez votre projet et vos motivations." },
  { n: "02", t: "Qualification", d: "Entretiens, validation du profil, étude de zone." },
  { n: "03", t: "Business plan", d: "Construction conjointe du dossier économique." },
  { n: "04", t: "Signature", d: "Contrat de franchise, accompagnement du lancement." },
  { n: "05", t: "Ouverture", d: "Formation, recrutement, lancement opérationnel." },
];

const BENEFITS = [
  "Enseignes internationales établies",
  "Accompagnement de A à Z",
  "Centrale d'achat puissante",
  "Marketing et communication intégrés",
  "Formation continue des équipes",
  "Pilotage opérationnel partagé",
];

function FranchisePage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <main className="grain min-h-screen">
      <section ref={ref} className="relative h-[85vh] overflow-hidden bg-ink text-pearl">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-80" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16 pt-40">
          <Reveal>
            <span className="font-label text-[10px] text-pearl/70">— Franchise</span>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] md:text-8xl">
              Devenir <span className="italic text-pearl/80">franchisé</span>.
            </h1>
            <p className="mt-6 max-w-xl text-base text-pearl/75 md:text-lg">
              Un partenariat exigeant, conçu pour durer. Rejoignez un opérateur qui pense le retail dans la précision et la profondeur.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <span className="font-label text-[10px] text-wine-deep">— Pourquoi One Retail</span>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">Un cadre, pas une recette.</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              Nous portons des enseignes de premier plan avec une exigence opérationnelle d'orfèvre. Devenir franchisé One Retail, c'est intégrer un système qui sait laisser de l'air à l'entrepreneur.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-card p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-wine-deep" />
                  <span className="text-sm text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-pearl-deep/30 px-6 py-28 md:py-40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <span className="font-label text-[10px] text-wine-deep">— Le parcours</span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl leading-tight md:text-6xl">Cinq étapes, une trajectoire.</h2>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="flex h-full flex-col">
                  <span className="font-display text-5xl text-wine-deep/40">{s.n}</span>
                  <h3 className="mt-6 font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 md:py-40">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">— Candidater</span>
          <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">Parlons de votre projet.</h2>
          <p className="mt-4 max-w-xl text-base text-ink-soft">
            Transmettez-nous quelques informations. Notre équipe revient vers vous sous 5 jours ouvrés.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="mt-12 grid gap-4 rounded-3xl border border-ink/10 bg-card p-8 md:p-12"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nom & prénom" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Téléphone" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
              <input value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Ville d'implantation" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
            </div>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Votre projet" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
            <button type="submit" className="btn-ink mt-4 self-start">
              {sent ? "Reçu — merci" : "Envoyer ma candidature"} <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
