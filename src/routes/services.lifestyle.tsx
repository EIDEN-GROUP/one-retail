import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/lifestyle")({
  head: () => ({
    meta: [
      { title: "Lifestyle — One Retail" },
      { name: "description", content: "Monoprix et Franprix au Maroc — l'art de vivre quotidien par One Retail." },
      { property: "og:title", content: "Lifestyle — One Retail" },
      { property: "og:description", content: "Monoprix et Franprix au Maroc — l'art de vivre quotidien." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Lifestyle"
      title="L'art de vivre, au quotidien."
      intro="Deux signatures, une même conviction : la proximité comme service noble. Monoprix et Franprix incarnent un quotidien plus juste, mieux sourcé, mieux raconté."
      franchises={getByCategory("lifestyle")}
      basePath="/services/lifestyle"
    />
  ),
});
