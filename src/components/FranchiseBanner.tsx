import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

export function FranchiseBanner() {
  const { t } = useTranslation();
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-ink/10 bg-ink text-pearl grain">
        <div className="grid items-center gap-8 p-10 md:grid-cols-[1.4fr_1fr] md:p-16">
          <div>
            <span className="font-label text-[10px] text-pearl/60">— {t("nav.franchise")}</span>
            <h2 className="mt-4 font-display text-3xl leading-[1.05] md:text-5xl">
              {t("franchiseBanner.before")}
              <span className="italic text-ember/90">One Retail</span>
              {t("franchiseBanner.after")}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-pearl/70">{t("franchiseBanner.body")}</p>
          </div>
          <div className="flex md:justify-end">
            <Link to="/franchise">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 rounded-full bg-pearl px-6 py-4 text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition hover:bg-ember hover:text-pearl"
              >
                {t("cta.becomeFranchisee")} <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
