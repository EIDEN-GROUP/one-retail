import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/restauration")({
  head: () => ({
    meta: [
      { title: "Restauration & Cafés | One Retail" },
      { name: "description", content: "Venezia Ice et Dahab Coffee — restauration et cafés signés One Retail." },
      { property: "og:title", content: "Restauration & Cafés | One Retail" },
      { property: "og:description", content: "Venezia Ice et Dahab Coffee — restauration et cafés." },
    ],
  }),
  component: RestaurationPage,
});

function RestaurationPage() {
  const { t } = useTranslation();
  return (
    <CategoryPage
      eyebrow={t("services.categories.restauration.eyebrow")}
      title={t("services.categories.restauration.title")}
      intro={t("services.categories.restauration.intro")}
      franchises={getByCategory("restauration")}
    />
  );
}
