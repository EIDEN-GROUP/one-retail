import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

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

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <main className="grain min-h-screen pt-32">
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-12">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">— Contact</span>
          <h1 className="mt-5 font-display text-5xl leading-[1] md:text-7xl">Parlons-nous.</h1>
          <p className="mt-6 max-w-xl text-base text-ink-soft">
            Une question, un projet, une opportunité — nos équipes vous répondent sous 48h.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="space-y-8">
              <div>
                <span className="font-label text-[10px] text-ink/50">— Siège</span>
                <p className="mt-3 flex items-start gap-3 text-base text-ink">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-wine-deep" />
                  <span>Casablanca, Maroc</span>
                </p>
              </div>
              <div>
                <span className="font-label text-[10px] text-ink/50">— Email</span>
                <p className="mt-3 flex items-center gap-3 text-base text-ink">
                  <Mail className="h-4 w-4 text-wine-deep" /> contact@oneretail.ma
                </p>
              </div>
              <div>
                <span className="font-label text-[10px] text-ink/50">— Téléphone</span>
                <p className="mt-3 flex items-center gap-3 text-base text-ink">
                  <Phone className="h-4 w-4 text-wine-deep" /> +212 5 22 00 00 00
                </p>
              </div>
              <div>
                <span className="font-label text-[10px] text-ink/50">— Horaires</span>
                <p className="mt-3 text-base text-ink">Lundi — Vendredi · 09h — 18h</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="grid gap-4 rounded-3xl border border-ink/10 bg-card p-8 md:p-12"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nom" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Téléphone" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
                <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Sujet" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
              </div>
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Votre message" className="rounded-xl border border-ink/15 bg-pearl px-5 py-4 text-sm outline-none focus:border-wine-deep" />
              <button type="submit" className="btn-ink mt-2 self-start">
                {sent ? "Envoyé — merci" : "Envoyer"} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
