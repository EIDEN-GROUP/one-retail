import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/lifestyle")({
  head: () => ({
    meta: [
      { title: "Lifestyle   One Retail" },
      { name: "description", content: "Monoprix et Franprix au Maroc   l'art de vivre quotidien par One Retail." },
      { property: "og:title", content: "Lifestyle   One Retail" },
      { property: "og:description", content: "Monoprix et Franprix au Maroc   l'art de vivre quotidien." },
    ],
  }),
  component: LifestylePage,
});

function LifestylePage() {
  const { t } = useTranslation();
  return (
    <CategoryPage
      eyebrow={t("services.categories.lifestyle.eyebrow")}
      title={t("services.categories.lifestyle.title")}
      intro={t("services.categories.lifestyle.intro")}
      franchises={getByCategory("lifestyle")}
    />
  );
}
