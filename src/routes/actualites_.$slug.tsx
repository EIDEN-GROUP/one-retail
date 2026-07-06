import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getArticle, ARTICLES, localizeArticle, type ContentBlock } from "@/lib/articles";
import { Reveal, Stagger, StaggerItem, EASE } from "@/components/Reveal";

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

// On a direct load, the global preloader (__root) covers the page ~1.8s.
const INTRO = typeof window !== "undefined" && performance.now() < 1800 ? 1.8 : 0;

/** Rough reading time from the article's textual content. */
function readingMinutes(blocks: ContentBlock[] | undefined, body: string) {
  const text = blocks
    ? blocks
        .map((b) => {
          if (b.type === "paragraph" || b.type === "heading") return b.text;
          if (b.type === "quote") return b.text;
          if (b.type === "bullets") return [b.intro, ...b.items].filter(Boolean).join(" ");
          if (b.type === "stats") return b.items.map((s) => s.label).join(" ");
          return "";
        })
        .join(" ")
    : body;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function ArticlePage() {
  const { t, i18n } = useTranslation();
  const a = localizeArticle(Route.useLoaderData(), i18n.language);
  const { scrollYProgress: pageScroll } = useScroll();
  const related = ARTICLES.filter((x) => x.slug !== a.slug)
    .slice(0, 2)
    .map((x) => localizeArticle(x, i18n.language));
  // Set after mount so SSR and the first client render agree (no hydration mismatch).
  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => setShareUrl(window.location.href), []);
  const minutes = readingMinutes(a.richContent, a.body);

  return (
    <main className="grain min-h-screen bg-pearl">
      {/* ── Read progress bar ─────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-200 h-0.75 origin-left bg-linear-to-r from-wine-deep via-brick to-ember"
        style={{ scaleX: pageScroll }}
      />

      {/* ── Hero (rounded card — site-wide style) ─────────────── */}
      <section className="relative mx-2 mt-2 overflow-hidden rounded-2xl bg-ink text-cream sm:mx-4 sm:mt-4 sm:rounded-[2rem]">
        <motion.img
          src={a.image}
          alt={a.title}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: EASE, delay: Math.max(0, INTRO - 0.6) }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.9) 100%)",
          }}
        />

        <div className="relative z-10 px-6 py-24 text-center md:px-14 md:py-32">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: INTRO }}
            >
              <Link
                to="/actualites"
                className="link-underline inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-cream/60 transition hover:text-cream"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> {t("article.back")}
              </Link>
            </motion.div>

            {/* Eyebrow meta */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.25em] text-cream/60 sm:text-xs"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: INTRO + 0.15 }}
            >
              <span className="h-px w-8 bg-brand" />
              <span className="text-brand">{a.category}</span>
              <span className="h-1 w-1 rounded-full bg-cream/30" />
              <span>{a.date}</span>
              <span className="h-1 w-1 rounded-full bg-cream/30" />
              <span>
                {minutes} {t("article.minRead")}
              </span>
              <span className="h-px w-8 bg-brand" />
            </motion.div>

            {/* Title — per-word blur-in */}
            <h1 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.75rem)] leading-[1.03] text-cream">
              {a.title.split(" ").map((w, i) => (
                <Fragment key={i}>
                  <motion.span
                    className="inline-block"
                    initial={{ opacity: 0, y: "0.5em", filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.9, ease: EASE, delay: INTRO + 0.3 + i * 0.04 }}
                  >
                    {w}
                  </motion.span>{" "}
                </Fragment>
              ))}
            </h1>

            {/* Deck */}
            <motion.p
              className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/70 md:text-base"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: INTRO + 0.7 }}
            >
              {a.excerpt}
            </motion.p>
          </div>
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
              <PlainBody text={a.body} />
            )}
          </article>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-10 space-y-10 pt-16 md:top-28 md:pt-24">
              {/* Share */}
              <Reveal>
                <p className="mb-4 font-label text-[10px] text-wine-deep">— {t("article.share")}</p>
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
              </Reveal>

              {/* Category tag */}
              <Reveal delay={0.06}>
                <p className="mb-3 font-label text-[10px] text-wine-deep">— {t("article.category")}</p>
                <span className="chip">{a.category}</span>
              </Reveal>

              {/* Date */}
              <Reveal delay={0.12}>
                <p className="mb-1 font-label text-[10px] text-wine-deep">— {t("article.publishedOn")}</p>
                <p className="font-display text-lg text-ink">{a.date}</p>
              </Reveal>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Comment form ───────────────────────────────────────── */}
      <CommentForm />

      {/* ── Related articles ───────────────────────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-pearl-deep/30">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
            <Reveal>
              <p className="font-label text-[10px] text-wine-deep">— {t("article.readNext")}</p>
              <h3 className="mt-3 font-display text-3xl md:text-5xl">{t("article.otherNews")}</h3>
            </Reveal>

            <Stagger className="mt-12 grid gap-8 sm:grid-cols-2" stagger={0.12}>
              {related.map((r) => (
                <StaggerItem key={r.slug}>
                  <Link to="/actualites/$slug" params={{ slug: r.slug }} className="group block">
                    <div className="aspect-video overflow-hidden rounded-3xl border border-ink/10 bg-white transition-colors duration-500 group-hover:border-brand/30">
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
                      <h4 className="mt-3 font-display text-xl leading-tight transition group-hover:text-brand md:text-2xl">
                        {r.title}
                      </h4>
                      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                        {r.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-label text-[10px] text-ink transition-all group-hover:gap-3 group-hover:text-brand">
                        {t("news.read")}
                        <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
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
                <p className="font-display text-2xl leading-[1.5] text-ink md:text-[2rem]">
                  {block.text}
                </p>
                <div className="hairline my-12" />
              </Reveal>
            ) : (
              <Reveal key={i} delay={0.05}>
                <p className="mt-6 text-base leading-[1.9] text-ink-soft md:text-[1.0625rem]">
                  {block.text}
                </p>
              </Reveal>
            );

          case "heading":
            return (
              <Reveal key={i} delay={0.05}>
                <div className={`mb-6 ${i === 0 ? "" : "mt-16"}`}>
                  <span className="mb-4 block h-px w-10 bg-brick" />
                  <h2 className="font-display text-2xl leading-tight text-ink md:text-4xl">
                    {block.text}
                  </h2>
                </div>
              </Reveal>
            );

          case "bullets":
            return (
              <Reveal key={i} delay={0.05}>
                <div className="mt-8 rounded-3xl border border-ink/10 bg-card px-6 py-8 sm:px-8">
                  {block.intro && (
                    <p className="mb-6 text-sm leading-relaxed text-ink-soft">{block.intro}</p>
                  )}
                  <Stagger className="space-y-4" stagger={0.08}>
                    {block.items.map((item, j) => (
                      <StaggerItem key={j} className="flex items-start gap-3.5">
                        <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brick" />
                        <span className="text-sm leading-relaxed text-ink/85 md:text-base">
                          {item}
                        </span>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </Reveal>
            );

          case "quote":
            return (
              <Reveal key={i} delay={0.05}>
                <blockquote className="relative mt-14 mb-6 overflow-hidden rounded-3xl bg-wine-deep px-8 py-12 md:px-12">
                  <span
                    className="pointer-events-none absolute -top-6 left-4 select-none font-display text-[9rem] leading-none text-pearl/10"
                    aria-hidden
                  >
                    &#8220;
                  </span>
                  <p className="relative z-10 font-display text-xl leading-normal text-pearl md:text-2xl">
                    {block.text}
                  </p>
                  {block.author && (
                    <footer className="relative z-10 mt-8 flex items-center gap-3 border-t border-pearl/10 pt-6">
                      <span className="h-px w-8 bg-ember" />
                      <div>
                        <p className="font-display text-base text-pearl">{block.author}</p>
                        {block.role && (
                          <p className="mt-0.5 font-label text-[10px] text-pearl/50">{block.role}</p>
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
                <Stagger
                  className="mt-12 grid grid-cols-3 divide-x divide-ink/10 overflow-hidden rounded-3xl border border-ink/10 bg-card"
                  stagger={0.1}
                >
                  {block.items.map((stat, j) => (
                    <StaggerItem key={j} className="px-4 py-7 text-center sm:px-5">
                      <p className="font-display text-3xl text-brand md:text-5xl">{stat.value}</p>
                      <p className="mt-2 font-label text-[9px] text-ink-soft md:text-[10px]">
                        {stat.label}
                      </p>
                    </StaggerItem>
                  ))}
                </Stagger>
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

function PlainBody({ text }: { text: string }) {
  const paras = text.split("\n\n");
  return (
    <div>
      {paras.map((p, i) =>
        i === 0 ? (
          <Reveal key={i}>
            <p className="font-display text-2xl leading-[1.5] text-ink md:text-[2rem]">{p}</p>
            <div className="hairline my-12" />
          </Reveal>
        ) : (
          <Reveal key={i} delay={0.05}>
            <p className="mt-6 text-base leading-[1.9] text-ink-soft md:text-[1.0625rem]">{p}</p>
          </Reveal>
        ),
      )}
    </div>
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
      className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 px-4 py-2.5 text-[0.78rem] text-ink-soft transition hover:border-brick hover:text-brick"
    >
      {icon}
      {label}
    </a>
  );
}

/* ── Comment form ───────────────────────────────────────────── */

function CommentForm() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = t("article.comment.nameRequired");
    if (!form.email.trim()) e.email = t("article.comment.emailRequired");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("article.comment.emailInvalid");
    if (!form.comment.trim()) e.comment = t("article.comment.messageRequired");
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
    <section className="relative overflow-hidden bg-wine-deep grain">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pearl/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[360px] w-[360px] translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/25 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
        <Reveal>
          <p className="font-label text-[10px] text-ember">— {t("article.comment.eyebrow")}</p>
          <h3 className="mt-4 font-display text-3xl text-pearl md:text-5xl">
            {t("article.comment.title")}
          </h3>
          <p className="mt-4 text-sm text-pearl/60">
            {t("article.comment.requiredNote")} <span className="text-ember">*</span>
          </p>
        </Reveal>

        {status === "success" ? (
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-3xl border border-pearl/20 bg-pearl/10 px-8 py-12 text-center">
              <span className="font-display text-2xl text-pearl md:text-3xl">
                {t("article.comment.successTitle")}
              </span>
              <p className="mt-3 text-sm text-pearl/60">{t("article.comment.successBody")}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 font-label text-[10px] text-pearl/70 transition hover:text-pearl"
              >
                {t("article.comment.another")}
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
                    {t("article.comment.name")} <span className="text-ember">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("article.comment.namePh")}
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-pearl/30 focus:bg-white/15 ${
                      errors.name ? "border-ember/70" : "border-pearl/20"
                    }`}
                  />
                  {errors.name && <p className="mt-1.5 text-[11px] text-ember">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block font-label text-[10px] text-pearl/70">
                    {t("article.comment.email")} <span className="text-ember">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t("article.comment.emailPh")}
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-pearl/30 focus:bg-white/15 ${
                      errors.email ? "border-ember/70" : "border-pearl/20"
                    }`}
                  />
                  {errors.email && <p className="mt-1.5 text-[11px] text-ember">{errors.email}</p>}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="mb-1.5 block font-label text-[10px] text-pearl/70">
                  {t("article.comment.message")} <span className="text-ember">*</span>
                </label>
                <textarea
                  rows={5}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  placeholder={t("article.comment.messagePh")}
                  className={`w-full resize-none rounded-xl border bg-white/10 px-4 py-3 text-sm text-pearl outline-none transition placeholder:text-pearl/30 focus:bg-white/15 ${
                    errors.comment ? "border-ember/70" : "border-pearl/20"
                  }`}
                />
                {errors.comment && (
                  <p className="mt-1.5 text-[11px] text-ember">{errors.comment}</p>
                )}
              </div>

              {/* Submit */}
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] text-pearl/40">{t("article.comment.privacy")}</p>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-pearl px-6 py-3 font-label text-[10px] text-wine-deep transition hover:bg-pearl-deep"
                >
                  {t("article.comment.submit")}
                </button>
              </div>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
