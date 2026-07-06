import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CategoryPage } from "@/components/CategoryPage";
import { getByCategory } from "@/lib/franchises";

export const Route = createFileRoute("/services/bricolage")({
  head: () => ({
    meta: [
      { title: "Bricolage | One Retail" },
      { name: "description", content: "Mr Bricolage au Maroc — l'écosystème complet du bricolage signé One Retail." },
      { property: "og:title", content: "Bricolage | One Retail" },
      { property: "og:description", content: "Mr Bricolage au Maroc — l'écosystème complet du bricolage." },
    ],
  }),
  component: BricolagePage,
});

function BricolagePage() {
  const { t } = useTranslation();
  return (
    <CategoryPage
      eyebrow={t("services.categories.bricolage.eyebrow")}
      title={t("services.categories.bricolage.title")}
      intro={t("services.categories.bricolage.intro")}
      franchises={getByCategory("bricolage")}
    />
  );
}
