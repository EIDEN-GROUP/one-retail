import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/beauty")({
  head: () => ({
    meta: [
      { title: "Beauty | One Retail" },
      { name: "description", content: "Flormar et Beauty For You   la beauté éditoriale au Maroc, signée One Retail." },
      { property: "og:title", content: "Beauty | One Retail" },
      { property: "og:description", content: "Flormar et Beauty For You   la beauté éditoriale au Maroc." },
    ],
  }),
  component: BeautyPage,
});

function BeautyPage() {
  const { t } = useTranslation();
  return (
    <CategoryPage
      eyebrow={t("services.categories.beauty.eyebrow")}
      title={t("services.categories.beauty.title")}
      intro={t("services.categories.beauty.intro")}
      franchises={getByCategory("beauty")}
    />
  );
}
