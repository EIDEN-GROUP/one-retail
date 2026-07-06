import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { EASE } from "@/components/Reveal";
import logo from "@/assets/one-retail-logo.png";

const navItem = {
  hidden: { opacity: 0, y: -12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const langs = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "AR" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const isRtl = i18n.language === "ar";
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  const ghost = isHome && !scrolled;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 100);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const subServices = [
    { to: "/services/lifestyle", label: t("nav.lifestyle") },
    { to: "/services/beauty", label: t("nav.beauty") },
    { to: "/services/restauration", label: t("nav.restauration") },
    { to: "/services/bricolage", label: t("nav.bricolage") },
  ];

  const links: { to: string; label: string; key: string }[] = [
    { to: "/", label: t("nav.home"), key: "home" },
    { to: "/services/lifestyle", label: t("nav.services"), key: "services" },
    { to: "/contact", label: t("nav.contact"), key: "contact" },
    { to: "/actualites", label: t("nav.actualites"), key: "actualites" },
  ];

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-[100] flex justify-center px-4 pt-4 md:pt-6">
      <motion.nav
        initial={{
          y: -80,
          opacity: 0,
          backgroundColor: ghost ? "rgba(0,0,0,0)" : "rgba(245,240,230,0.96)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: ghost ? "rgba(0,0,0,0)" : "rgba(245,240,230,0.96)",
          boxShadow: ghost ? "0 0 0 0 rgba(26,26,26,0)" : "0 10px 40px -20px rgba(26,26,26,0.30)",
        }}
        transition={{
          duration: 0.35,
          ease: [0.4, 0, 0.2, 1],
          y: { duration: 0.8, ease: EASE },
          opacity: { duration: 0.8, ease: EASE },
        }}
        className="pointer-events-auto flex w-full max-w-[1180px] items-center justify-between rounded-full px-5 py-3 md:px-8"
      >
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={logo}
            alt="One Retail"
            className="h-8 md:h-11 transition-[filter] duration-300"
            // style={{ filter: ghost ? "brightness(0) invert(1)" : "none" }}
          />
        </Link>

        <motion.ul
          className="hidden items-center gap-1 lg:flex"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
        >
          {links.map((l) =>
            l.key === "services" ? (
              <motion.li
                key={l.key}
                variants={navItem}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-[14px] font-medium transition ${
                    ghost ? "text-pearl/80 hover:text-pearl" : "text-ink/80 hover:text-ink"
                  }`}
                >
                  {l.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-1/2 top-full mt-3 w-[220px] -translate-x-1/2 overflow-hidden rounded-2xl border border-ink/10 bg-pearl/95 p-2 shadow-2xl backdrop-blur-xl"
                    >
                      {subServices.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="block rounded-xl px-3 py-2.5 text-[12.5px] text-ink-soft transition hover:bg-ink/5 hover:text-wine-deep"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ) : (
              <motion.li key={l.key} variants={navItem}>
                <Link
                  to={l.to}
                  className={`rounded-full px-3 py-2 text-[14px] font-medium transition ${
                    ghost ? "text-pearl/80 hover:text-pearl" : "text-ink/80 hover:text-ink"
                  }`}
                  activeProps={{
                    className: `rounded-full px-3 py-2 text-[14px] font-medium ${
                      ghost ? "text-pearl" : "text-wine-deep"
                    }`,
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </motion.li>
            ),
          )}
        </motion.ul>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
        >
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-wider transition ${
                ghost
                  ? "border-pearl/30 text-pearl/70 hover:bg-pearl hover:text-ink"
                  : "border-ink/10 text-ink-soft hover:bg-ink hover:text-pearl"
              }`}
              aria-label="language"
            >
              <Globe className="h-3.5 w-3.5" />
              {(i18n.language ?? "fr").toUpperCase().slice(0, 2)}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="absolute right-0 top-full mt-2 w-24 overflow-hidden rounded-xl border border-ink/10 bg-pearl/95 p-1 shadow-xl backdrop-blur-xl"
                >
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        i18n.changeLanguage(l.code);
                        setLangOpen(false);
                      }}
                      className={`block w-full rounded-lg px-3 py-1.5 text-left text-[11px] font-medium transition hover:bg-ink/5 ${
                        i18n.language === l.code ? "text-wine-deep" : "text-ink-soft"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <button
            onClick={() => setOpen(true)}
            className={`grid h-9 w-9 place-items-center rounded-full border lg:hidden transition ${
              ghost ? "border-pearl/30 text-pearl" : "border-ink/10 text-ink"
            }`}
            aria-label="menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="pointer-events-auto fixed inset-0 z-[105] bg-ink/55 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: isRtl ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? "-100%" : "100%" }}
              transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
              className={`grain pointer-events-auto fixed inset-y-0 z-[110] flex w-full flex-col bg-pearl shadow-2xl sm:w-[420px] sm:border-ink/10 lg:hidden ${
                isRtl ? "left-0 sm:border-r" : "right-0 sm:border-l"
              }`}
            >
              <div className="flex items-center justify-between px-6 pt-6 sm:px-8">
                <img src={logo} alt="One Retail" className="h-8" />
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 transition hover:bg-ink hover:text-pearl"
                  aria-label="close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="hairline mt-6" />

              <nav className="flex-1 overflow-y-auto px-6 py-2 sm:px-8">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.06 } } }}
                  className="flex flex-col"
                >
                  {links.map((l, i) =>
                    l.key === "services" ? (
                      <motion.li
                        key={l.key}
                        variants={{ hidden: { opacity: 0, x: isRtl ? -20 : 20 }, show: { opacity: 1, x: 0 } }}
                        className="border-b border-ink/10"
                      >
                        <button
                          onClick={() => setMobileServicesOpen((v) => !v)}
                          className="flex w-full items-center justify-between gap-3 py-4 text-left"
                        >
                          <span className="flex items-baseline gap-3">
                            <span className="font-label text-[10px] text-wine-deep">0{i + 1}</span>
                            <span className="font-display text-3xl text-ink sm:text-4xl">{l.label}</span>
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-ink/50 transition-transform duration-300 ${
                              mobileServicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                              className="overflow-hidden"
                            >
                              <ul className="flex flex-col gap-1 pb-4 ps-9">
                                {subServices.map((s) => (
                                  <li key={s.to}>
                                    <Link
                                      to={s.to}
                                      onClick={() => setOpen(false)}
                                      className="block py-2 text-[15px] text-ink-soft transition hover:text-wine-deep"
                                    >
                                      {s.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ) : (
                      <motion.li
                        key={l.key}
                        variants={{ hidden: { opacity: 0, x: isRtl ? -20 : 20 }, show: { opacity: 1, x: 0 } }}
                        className="border-b border-ink/10"
                      >
                        <Link
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className="flex items-baseline gap-3 py-4 transition hover:text-wine-deep"
                        >
                          <span className="font-label text-[10px] text-wine-deep">0{i + 1}</span>
                          <span className="font-display text-3xl text-ink sm:text-4xl">{l.label}</span>
                        </Link>
                      </motion.li>
                    ),
                  )}
                </motion.ul>
              </nav>

              <div className="flex items-center justify-between gap-3 border-t border-ink/10 px-6 py-5 sm:px-8">
                <div className="flex items-center gap-2">
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => i18n.changeLanguage(l.code)}
                      className={`rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-wider transition ${
                        i18n.language === l.code
                          ? "border-wine-deep bg-wine-deep text-pearl"
                          : "border-ink/10 text-ink-soft hover:bg-ink/5"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
