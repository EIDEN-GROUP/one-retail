import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/beauty")({
  head: () => ({
    meta: [
      { title: "Beauty — One Retail" },
      { name: "description", content: "Flormar et Beauty For You — la beauté éditoriale au Maroc, signée One Retail." },
      { property: "og:title", content: "Beauty — One Retail" },
      { property: "og:description", content: "Flormar et Beauty For You — la beauté éditoriale au Maroc." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Beauty"
      title="La beauté comme langage."
      intro="Flormar et Beauty For You proposent la beauté comme un récit éditorial : textures précises, conseil exigeant, mise en scène généreuse."
      franchises={getByCategory("beauty")}
      basePath="/services/beauty"
    />
  ),
});
