import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/bricolage")({
  head: () => ({
    meta: [
      { title: "Bricolage — One Retail" },
      { name: "description", content: "Mr Bricolage au Maroc — l'écosystème complet du bricolage signé One Retail." },
      { property: "og:title", content: "Bricolage — One Retail" },
      { property: "og:description", content: "Mr Bricolage au Maroc — l'écosystème complet du bricolage." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Bricolage"
      title="Le geste juste, l'outil juste."
      intro="Mr Bricolage accompagne chaque projet — du plus quotidien au plus ambitieux. Conseil expert, gamme étendue, écosystème complet."
      franchises={getByCategory("bricolage")}
      basePath="/services/bricolage"
    />
  ),
});
