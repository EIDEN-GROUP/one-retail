import { createFileRoute, notFound } from "@tanstack/react-router";
import { FranchiseSingle } from "@/components/FranchiseSingle";
import { getBySlug } from "@/lib/franchises";

function makeRoute(path: string, slug: string, backTo: string, backLabel: string) {
  return { path, slug, backTo, backLabel };
}

export const Route = createFileRoute("/services/lifestyle/$slug")({
  loader: ({ params }) => {
    const f = getBySlug(params.slug);
    if (!f || f.category !== "lifestyle") throw notFound();
    return f;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.name} — One Retail` },
      { name: "description", content: loaderData.tagline },
      { property: "og:title", content: `${loaderData.name} — One Retail` },
      { property: "og:description", content: loaderData.tagline },
      { property: "og:image", content: loaderData.image },
    ] : [],
  }),
  component: () => {
    const f = Route.useLoaderData();
    return <FranchiseSingle franchise={f} backTo="/services/lifestyle" backLabel="Lifestyle" />;
  },
});
