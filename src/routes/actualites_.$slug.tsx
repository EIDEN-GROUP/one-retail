import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { getArticle, ARTICLES, type ContentBlock } from "@/lib/articles";
import { Reveal, EASE } from "@/components/Reveal";

export const Route = createFileRoute("/actualites_/$slug")({
  loader: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — One Retail` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:image", content: loaderData.image },
          { property: "og:type", content: "article" },
        ]
      : [],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const a = Route.useLoaderData();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: pageScroll } = useScroll();
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 2);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <main className="min-h-screen bg-pearl">
      {/* ── Read progress bar ─────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-200 h-0.75 origin-left bg-linear-to-r from-wine-deep via-brick to-ember"
        style={{ scaleX: pageScroll }}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative h-[88vh] min-h-140 overflow-hidden bg-ink text-pearl"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img src={a.image} alt={a.title} className="h-full w-full object-cover opacity-70" />
        </motion.div>
        <div className="absolute inset-0 bg-linear-to-b from-ink/20 via-ink/10 to-ink/90" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-end px-6 pb-14 pt-36 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <Link
              to="/actualites"
              className="inline-flex items-center gap-2 font-label text-[10px] text-pearl/70 transition hover:text-pearl"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Actualités
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          >
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="chip">{a.category}</span>
              <span className="font-label text-[10px] text-pearl/60">{a.date}</span>
            </div>
            <h1 className="mt-5 max-w-3xl font-display text-[2.4rem] leading-[1.07] text-pearl sm:text-5xl md:text-[4rem] lg:text-[4.5rem]">
              {a.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_280px] lg:gap-16">
          {/* Main column */}
          <article className="py-16 md:py-24">
            {a.richContent ? (
              <RichBody blocks={a.richContent} />
            ) : (
              <PlainBody text={a.body} excerpt={a.excerpt} />
            )}
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-10 md:top-28 pt-16 md:pt-24 space-y-10">
              {/* Share */}
              <div>
                <p className="font-label text-[10px] text-ink/50 mb-4">Partager</p>
                <div className="flex flex-col gap-2">
                  <ShareButton
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(a.title)}`}
                    icon={
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    }
                    label="LinkedIn"
                  />
                  <ShareButton
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    icon={
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    }
                    label="Facebook"
                  />
                  <ShareButton
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title)}&url=${encodeURIComponent(shareUrl)}`}
                    icon={
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.861L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    }
                    label="Twitter / X"
                  />
                </div>
              </div>

              {/* Category tag */}
              <div>
                <p className="font-label text-[10px] text-ink/50 mb-3">Catégorie</p>
                <span className="chip">{a.category}</span>
              </div>

              {/* Date */}
              <div>
                <p className="font-label text-[10px] text-ink/50 mb-1">Publié le</p>
                <p className="font-display text-lg text-ink">{a.date}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Comment form ───────────────────────────────────────── */}
      <CommentForm />

      {/* ── Related articles ───────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-pearl-deep">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
            <Reveal>
              <p className="font-label text-[10px] text-ink/50">À lire ensuite</p>
              <h3 className="mt-3 font-display text-2xl md:text-3xl">Autres actualités</h3>
            </Reveal>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 0.12}>
                  <Link to="/actualites/$slug" params={{ slug: r.slug }} className="group block">
                    <div className="aspect-video overflow-hidden rounded-2xl border border-ink/10 bg-ink/5">
                      <motion.img
                        src={r.image}
                        alt={r.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 1.1 }}
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-5">
                      <div className="flex items-center gap-3">
                        <span className="font-label text-[9px] text-wine-deep">{r.category}</span>
                        <span className="h-px flex-1 bg-ink/10" />
                        <span className="font-label text-[9px] text-ink/40">{r.date}</span>
                      </div>
                      <h4 className="mt-3 font-display text-xl leading-tight transition group-hover:text-brick md:text-2xl">
                        {r.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink/60 line-clamp-2">
                        {r.excerpt}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* ── Rich body renderer ─────────────────────────────────────── */

function RichBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return i === 0 ? (
              <Reveal key={i}>
                <p className="font-display text-2xl leading-[1.55] text-ink md:text-3xl">
                  {block.text}
                </p>
                <div className="hairline my-10" />
              </Reveal>
            ) : (
              <Reveal key={i} delay={0.05}>
                <p className="mt-6 text-base leading-[1.85] text-ink/75 md:text-[1.0625rem]">
                  {block.text}
                </p>
              </Reveal>
            );

          case "heading":
            return (
              <Reveal key={i} delay={0.05}>
                <div className="mt-14 mb-5 flex items-start gap-4">
                  <span className="mt-1.5 h-5 w-0.75 shrink-0 rounded-full bg-brick" />
                  <h2 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                    {block.text}
                  </h2>
                </div>
              </Reveal>
            );

          case "bullets":
            return (
              <Reveal key={i} delay={0.05}>
                <div className="mt-6 rounded-2xl border border-ink/10 bg-white/60 px-6 py-7">
                  {block.intro && (
                    <p className="mb-5 text-sm text-ink/70 leading-relaxed">{block.intro}</p>
                  )}
                  <ul className="space-y-3">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-[0.4rem] h-2 w-2 shrink-0 rounded-full bg-brick" />
                        <span className="text-sm leading-relaxed text-ink/80 md:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );

          case "quote":
            return (
              <Reveal key={i} delay={0.05}>
                <blockquote className="relative mt-12 mb-6 overflow-hidden rounded-2xl bg-ink px-8 py-10 md:px-12">
                  <span
                    className="pointer-events-none absolute -top-4 -left-2 font-display text-[9rem] leading-none text-pearl/10 select-none"
                    aria-hidden
                  >
                    "
                  </span>
                  <p className="relative z-10 font-display text-xl leading-normal text-pearl md:text-2xl">
                    {block.text}
                  </p>
                  {block.author && (
                    <footer className="relative z-10 mt-6 flex items-center gap-3">
                      <span className="h-px w-8 bg-ember" />
                      <div>
                        <p className="font-label text-[11px] text-pearl">{block.author}</p>
                        {block.role && (
                          <p className="mt-0.5 font-label text-[10px] text-pearl/50">
                            {block.role}
                          </p>
                        )}
                      </div>
                    </footer>
                  )}
                </blockquote>
              </Reveal>
            );

          case "stats":
            return (
              <Reveal key={i} delay={0.05}>
                <div className="mt-10 mb-4 grid grid-cols-3 divide-x divide-ink/10 rounded-2xl border border-ink/10 bg-white/60 overflow-hidden">
                  {block.items.map((stat, j) => (
                    <div key={j} className="px-5 py-6 text-center">
                      <p className="font-display text-3xl text-brick md:text-4xl">{stat.value}</p>
                      <p className="mt-1 font-label text-[10px] text-ink/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}

/* ── Plain body fallback ────────────────────────────────────── */

function PlainBody({ text, excerpt }: { text: string; excerpt: string }) {
  return (
    <Reveal>
      <p className="font-display text-2xl leading-relaxed text-ink md:text-3xl">{excerpt}</p>
      <div className="hairline my-12" />
      {text.split("\n\n").map((p, i) => (
        <p
          key={i}
          className="mt-6 first:mt-0 text-base leading-[1.85] text-ink/75 md:text-[1.0625rem]"
        >
          {p}
        </p>
      ))}
    </Reveal>
  );
}

/* ── Share button ───────────────────────────────────────────── */

function ShareButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-4 py-2.5 text-[0.78rem] text-ink/70 transition hover:border-brick hover:text-brick"
    >
      {icon}
      {label}
    </a>
  );
}

/* ── Comment form ───────────────────────────────────────────── */

function CommentForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Le nom est requis.";
    if (!form.email.trim()) e.email = "L'e-mail est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Adresse e-mail invalide.";
    if (!form.comment.trim()) e.comment = "Le commentaire ne peut pas être vide.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("success");
    setForm({ name: "", email: "", comment: "" });
  }

  return (
    <section className="bg-wine-deep">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <Reveal>
          <p className="font-label text-[10px] text-pearl/50">Votre avis</p>
          <h3 className="mt-3 font-display text-2xl text-pearl md:text-3xl">
            Laisser un commentaire
          </h3>
          <p className="mt-3 text-sm text-pearl/60">
            Les champs obligatoires sont marqués <span className="text-ember">*</span>
          </p>
        </Reveal>

        {status === "success" ? (
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-pearl/20 bg-pearl/10 px-8 py-10 text-center">
              <span className="font-display text-2xl text-pearl">
                Merci pour votre commentaire !
              </span>
              <p className="mt-3 text-sm text-pearl/60">
                Votre commentaire est en attente de modération.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 font-label text-[10px] text-pearl/70 transition hover:text-pearl"
              >
                Écrire un autre commentaire →
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-1.5 block font-label text-[10px] text-pearl/70">
                    Nom <span className="text-ember">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Votre nom"
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-pearl/30 focus:bg-white/15 focus:outline-none ${
                      errors.name ? "border-ember/70" : "border-pearl/20"
                    }`}
                  />
                  {errors.name && <p className="mt-1.5 text-[11px] text-ember">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block font-label text-[10px] text-pearl/70">
                    E-mail <span className="text-ember">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="votre@email.com"
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-pearl/30 focus:bg-white/15 focus:outline-none ${
                      errors.email ? "border-ember/70" : "border-pearl/20"
                    }`}
                  />
                  {errors.email && <p className="mt-1.5 text-[11px] text-ember">{errors.email}</p>}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="mb-1.5 block font-label text-[10px] text-pearl/70">
                  Commentaire <span className="text-ember">*</span>
                </label>
                <textarea
                  rows={5}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder="Partagez votre avis sur cet article…"
                  className={`w-full resize-none rounded-xl border bg-white/10 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-pearl/30 focus:bg-white/15 focus:outline-none ${
                    errors.comment ? "border-ember/70" : "border-pearl/20"
                  }`}
                />
                {errors.comment && (
                  <p className="mt-1.5 text-[11px] text-ember">{errors.comment}</p>
                )}
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] text-pearl/40">
                  Votre adresse e-mail ne sera pas publiée.
                </p>
                <button
                  type="submit"
                  className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-pearl px-6 py-3 font-label text-[10px] text-wine-deep transition hover:bg-pearl-deep"
                >
                  Publier le commentaire
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
