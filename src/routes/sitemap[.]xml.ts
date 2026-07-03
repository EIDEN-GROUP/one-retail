import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          "/", "/services/lifestyle", "/services/lifestyle/monoprix", "/services/lifestyle/franprix",
          "/services/beauty", "/services/beauty/flormar", "/services/beauty/beauty-for-you",
          "/services/restauration", "/services/restauration/venezia-ice", "/services/restauration/dahab-coffee",
          "/services/bricolage", "/services/bricolage/mr-bricolage",
          "/franchise", "/carriere", "/actualites", "/contact",
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
