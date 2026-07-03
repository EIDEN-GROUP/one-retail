import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/restauration")({
  head: () => ({
    meta: [
      { title: "Restauration & Cafés — One Retail" },
      { name: "description", content: "Venezia Ice et Dahab Coffee — restauration et cafés signés One Retail." },
      { property: "og:title", content: "Restauration & Cafés — One Retail" },
      { property: "og:description", content: "Venezia Ice et Dahab Coffee — restauration et cafés." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Restauration & Cafés"
      title="Le plaisir, comme une intention."
      intro="Venezia Ice et Dahab Coffee racontent le plaisir avec retenue : gelato vénitien d'un côté, café d'auteur de l'autre. Deux pauses, deux écritures."
      franchises={getByCategory("restauration")}
      basePath="/services/restauration"
    />
  ),
});
