import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import careersImg from "@/assets/careers.jpg";
import { Search, MapPin, Briefcase, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/carriere")({
  head: () => ({
    meta: [
      { title: "Carrière — One Retail" },
      { name: "description", content: "Rejoignez les équipes One Retail. Découvrez nos offres et candidature spontanée." },
      { property: "og:title", content: "Carrière — One Retail" },
      { property: "og:description", content: "Bâtissez votre carrière chez One Retail." },
      { property: "og:image", content: careersImg },
    ],
  }),
  component: CareersPage,
});

const JOBS = [
  { id: 1, title: "Directeur de magasin Monoprix", dept: "Lifestyle", city: "Casablanca", type: "CDI" },
  { id: 2, title: "Responsable visuel merchandising", dept: "Beauty", city: "Casablanca", type: "CDI" },
  { id: 3, title: "Barista Senior — Dahab Coffee", dept: "Restauration", city: "Rabat", type: "CDI" },
  { id: 4, title: "Chef d'équipe Mr Bricolage", dept: "Bricolage", city: "Tanger", type: "CDI" },
  { id: 5, title: "Conseiller(ère) beauté Flormar", dept: "Beauty", city: "Marrakech", type: "CDI" },
  { id: 6, title: "Manager Venezia Ice", dept: "Restauration", city: "Casablanca", type: "CDI" },
  { id: 7, title: "Acheteur sénior", dept: "Centrale", city: "Casablanca", type: "CDI" },
  { id: 8, title: "Contrôleur de gestion", dept: "Siège", city: "Casablanca", type: "CDI" },
];

const DEPTS = ["all", "Lifestyle", "Beauty", "Restauration", "Bricolage", "Siège", "Centrale"];

function CareersPage() {
  const [q, setQ] = useState("");
  const [dept, setDept] = useState("all");
  const [spont, setSpont] = useState({ name: "", email: "", role: "", message: "" });
  const [sent, setSent] = useState(false);

  const filtered = useMemo(
    () => JOBS.filter((j) => (dept === "all" || j.dept === dept) && (!q || j.title.toLowerCase().includes(q.toLowerCase()) || j.city.toLowerCase().includes(q.toLowerCase()))),
    [q, dept],
  );

  return (
    <main className="grain min-h-screen pt-32">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">— Carrière</span>
          <h1 className="mt-5 font-display text-5xl leading-[1] md:text-7xl">
            Bâtissez votre <span className="italic">carrière</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base text-ink-soft">
            Nos enseignes accueillent celles et ceux qui croient au métier. Découvrez nos offres ou postulez spontanément.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 rounded-3xl border border-ink/10 bg-card p-4 md:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-3 rounded-xl bg-pearl px-4 py-3">
            <Search className="h-4 w-4 text-ink/50" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Poste, ville..." className="w-full bg-transparent text-sm outline-none" />
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {DEPTS.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-wider transition ${
                  dept === d ? "border-ink bg-ink text-pearl" : "border-ink/15 text-ink-soft hover:border-ink"
                }`}
              >
                {d === "all" ? "Tous" : d}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4">
          {filtered.map((j, i) => (
            <Reveal key={j.id} delay={i * 0.04}>
              <motion.a
                href="#"
                whileHover={{ x: 8 }}
                className="group grid items-center gap-4 rounded-2xl border border-ink/10 bg-pearl p-6 md:grid-cols-[2fr_1fr_1fr_auto]"
              >
                <div>
                  <span className="font-label text-[10px] text-wine-deep">{j.dept}</span>
                  <h3 className="mt-1 font-display text-xl">{j.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-sm text-ink-soft"><MapPin className="h-4 w-4" /> {j.city}</div>
                <div className="flex items-center gap-2 text-sm text-ink-soft"><Briefcase className="h-4 w-4" /> {j.type}</div>
                <span className="link-underline text-[11px] uppercase tracking-[0.18em] text-ink justify-self-start md:justify-self-end">Postuler →</span>
              </motion.a>
            </Reveal>
          ))}
          {filtered.length === 0 && <p className="py-12 text-center text-sm text-ink-soft">Aucun poste correspondant.</p>}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-6xl px-6 pb-32">
        <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink text-pearl grain">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden">
              <img src={careersImg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" loading="lazy" />
            </div>
            <div className="p-10 md:p-14">
              <span className="font-label text-[10px] text-ember">— Candidature spontanée</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Et si votre profil nous trouvait ?</h2>
              <p className="mt-3 text-sm text-pearl/70">Décrivez-nous votre parcours et l'enseigne qui vous attire.</p>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-6 grid gap-3"
              >
                <input required value={spont.name} onChange={(e) => setSpont({ ...spont, name: e.target.value })} placeholder="Nom & prénom" className="rounded-xl border border-pearl/20 bg-transparent px-4 py-3 text-sm placeholder:text-pearl/40 outline-none focus:border-pearl" />
                <input required type="email" value={spont.email} onChange={(e) => setSpont({ ...spont, email: e.target.value })} placeholder="Email" className="rounded-xl border border-pearl/20 bg-transparent px-4 py-3 text-sm placeholder:text-pearl/40 outline-none focus:border-pearl" />
                <input value={spont.role} onChange={(e) => setSpont({ ...spont, role: e.target.value })} placeholder="Poste recherché" className="rounded-xl border border-pearl/20 bg-transparent px-4 py-3 text-sm placeholder:text-pearl/40 outline-none focus:border-pearl" />
                <textarea required rows={4} value={spont.message} onChange={(e) => setSpont({ ...spont, message: e.target.value })} placeholder="Votre message" className="rounded-xl border border-pearl/20 bg-transparent px-4 py-3 text-sm placeholder:text-pearl/40 outline-none focus:border-pearl" />
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-pearl px-6 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-ember hover:text-pearl">
                  {sent ? "Reçu — merci" : "Envoyer"} <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
