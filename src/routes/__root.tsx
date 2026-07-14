import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import i18n, { initPromise } from "../lib/i18n";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { SmoothScroll } from "../components/SmoothScroll";
import { Preloader } from "../components/Preloader";
import { BackToTop } from "../components/BackToTop";

function NotFoundComponent() {
  return (
    <div className="grid min-h-screen place-items-center bg-pearl px-4 grain">
      <div className="text-center">
        <h1 className="font-display text-8xl text-ink">404</h1>
        <p className="mt-2 text-sm text-ink-soft">Page introuvable.</p>
        <Link to="/" className="btn-ink mt-6">Retour à l'accueil</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="grid min-h-screen place-items-center bg-pearl px-4">
      <div className="text-center">
        <h1 className="font-display text-3xl text-ink">Une erreur est survenue</h1>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-ink">Réessayer</button>
          <a href="/" className="btn-outline-ink">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  beforeLoad: async () => {
    await initPromise;
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "One Retail   Opérateur d'enseignes franchisées au Maroc" },
      { name: "description", content: "One Retail orchestre des enseignes de référence au Maroc   lifestyle, beauté, restauration et bricolage." },
      { name: "author", content: "One Retail" },
      { property: "og:title", content: "One Retail" },
      { property: "og:description", content: "Opérateur marocain d'enseignes franchisées de premier plan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Inter:wght@300;400;500;600;700&family=Righteous&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    // 1800ms preloader hold + 800ms exit animation
    const timer = setTimeout(() => setNavVisible(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll>
        <Preloader />
        {navVisible && <Navbar />}
        <Outlet />
        <Footer />
        <BackToTop />
      </SmoothScroll>
    </QueryClientProvider>
  );
}
