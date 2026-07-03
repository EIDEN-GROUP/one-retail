import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Reveal } from "@/components/Reveal";
import { ARTICLES, FEATURED } from "@/lib/articles";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/actualites")({
  head: () => ({
    meta: [
      { title: "Actualités — One Retail" },
      { name: "description", content: "Toute l'actualité de One Retail et de ses enseignes." },
      { property: "og:title", content: "Actualités — One Retail" },
      { property: "og:description", content: "Toute l'actualité de One Retail et de ses enseignes." },
      { property: "og:image", content: FEATURED.image },
    ],
  }),
  component: NewsPage,
});

const PER_PAGE = 4;

function NewsPage() {
  const [page, setPage] = useState(1);
  const rest = ARTICLES.slice(1);
  const total = Math.ceil(rest.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const paginated = rest.slice(start, start + PER_PAGE);

  return (
    <main className="grain min-h-screen pt-32">
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-12">
        <Reveal>
          <span className="font-label text-[10px] text-wine-deep">— Actualités</span>
          <h1 className="mt-5 font-display text-5xl leading-[1] md:text-7xl">L'actualité du groupe.</h1>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Link to="/actualites/$slug" params={{ slug: FEATURED.slug }} className="group block">
            <div className="grid gap-8 overflow-hidden rounded-3xl border border-ink/10 bg-card md:grid-cols-[1.4fr_1fr]">
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <motion.img src={FEATURED.image} alt={FEATURED.title} className="h-full w-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 1.2 }} />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <span className="chip">À la une · {FEATURED.category}</span>
                <h2 className="mt-6 font-display text-3xl leading-tight md:text-5xl">{FEATURED.title}</h2>
                <p className="mt-4 text-base text-ink-soft">{FEATURED.excerpt}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-ink">
                  Lire <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <h3 className="font-display text-2xl md:text-3xl">À ne pas manquer</h3>
        </Reveal>
        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{ 640: { slidesPerView: 2.1 }, 1024: { slidesPerView: 3.1 } }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="!pb-12"
          >
            {ARTICLES.map((a) => (
              <SwiperSlide key={a.slug}>
                <Link to="/actualites/$slug" params={{ slug: a.slug }} className="group block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10">
                    <motion.img src={a.image} alt={a.title} className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }} loading="lazy" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-label text-[10px] text-wine-deep">{a.category}</span>
                    <span className="text-xs text-ink/50">{a.date}</span>
                  </div>
                  <h4 className="mt-2 font-display text-lg leading-tight">{a.title}</h4>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <Reveal>
          <h3 className="font-display text-2xl md:text-3xl">Autres articles</h3>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {paginated.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <Link to="/actualites/$slug" params={{ slug: a.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10">
                  <motion.img src={a.image} alt={a.title} className="h-full w-full object-cover" whileHover={{ scale: 1.06 }} transition={{ duration: 1.2 }} loading="lazy" />
                </div>
                <span className="mt-4 block font-label text-[10px] text-wine-deep">{a.category} · {a.date}</span>
                <h4 className="mt-2 font-display text-lg leading-tight">{a.title}</h4>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`h-9 w-9 rounded-full border text-sm transition ${
                p === page ? "border-ink bg-ink text-pearl" : "border-ink/15 text-ink-soft hover:border-ink"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
