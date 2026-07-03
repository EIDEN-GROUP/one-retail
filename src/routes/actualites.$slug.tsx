import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { getArticle, ARTICLES } from "@/lib/articles";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/actualites/$slug")({
  loader: ({ params }) => {
    const a = getArticle(params.slug);
    if (!a) throw notFound();
    return a;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — One Retail` },
      { name: "description", content: loaderData.excerpt },
      { property: "og:title", content: loaderData.title },
      { property: "og:description", content: loaderData.excerpt },
      { property: "og:image", content: loaderData.image },
      { property: "og:type", content: "article" },
    ] : [],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const a = Route.useLoaderData();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <main className="grain min-h-screen">
      <section ref={ref} className="relative h-[75vh] overflow-hidden bg-ink text-pearl">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={a.image} alt={a.title} className="h-full w-full object-cover opacity-90" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col justify-end px-6 pb-16 pt-40">
          <Link to="/actualites" className="inline-flex items-center gap-2 font-label text-[10px] text-pearl/80 link-underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Actualités
          </Link>
          <span className="mt-6 font-label text-[10px] text-ember">{a.category} · {a.date}</span>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] md:text-7xl">{a.title}</h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-ink md:text-3xl">{a.excerpt}</p>
          <div className="hairline my-12" />
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">{a.body}</p>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            One Retail poursuit son développement avec la conviction que la distribution est un service noble — une exigence portée chaque jour par nos équipes et nos partenaires.
          </p>
        </Reveal>
      </article>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <h3 className="font-display text-2xl md:text-3xl">À lire ensuite</h3>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to="/actualites/$slug" params={{ slug: r.slug }} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10">
                <motion.img src={r.image} alt={r.title} className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }} loading="lazy" />
              </div>
              <span className="mt-4 block font-label text-[10px] text-wine-deep">{r.category}</span>
              <h4 className="mt-2 font-display text-lg leading-tight">{r.title}</h4>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
