import { Link } from "@tanstack/react-router";
import logo from "@/assets/one-retail-logo.png";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#f5f0e6] text-[#111111]/70 border-t border-[#111111]/10 py-6 px-6 font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-6">
        <div className="grid items-center gap-2">
          <img src={logo} alt="One Retail" className="h-18 w-auto" />
          <p className="text-xs text-[#111111]/50 leading-relaxed tracking-wider font-medium">
            {t("footer.tagline")}
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-[#111111]">{t("nav.services")}</h4>
          <ul className="mt-4 space-y-2 space-y-2 text-xs font-medium text-[#111111]/60">
            <li><Link to="/services/lifestyle" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.lifestyle")}</Link></li>
            <li><Link to="/services/beauty" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.beauty")}</Link></li>
            <li><Link to="/services/restauration" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.restauration")}</Link></li>
            <li><Link to="/services/bricolage" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.bricolage")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-[#111111]">{t("footer.navigation")}</h4>
          <ul className="mt-4 space-y-2 space-y-2 text-xs font-medium text-[#111111]/60">
            <li><Link to="/franchise" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.franchise")}</Link></li>
            <li><Link to="/carriere" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.carriere")}</Link></li>
            <li><Link to="/actualites" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.actualites")}</Link></li>
            <li><Link to="/contact" className="hover:text-[#ab2d26] transition-colors cursor-pointer">{t("nav.contact")}</Link></li>
          </ul>
        </div>
         {/* Contact/HQ Column */}
        <div className="space-y-4 font-light">
          <h4 className="text-sm uppercase tracking-[0.2em] font-bold text-[#111111]">
            {t("footer.headquarters")}
          </h4>
          <div className="space-y-2.5 text-xs font-medium text-[#111111]/60">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#640705] shrink-0 mt-0.5" />
              <span>409 Rte d'El Jadida, Casablanca, Maroc</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#640705] shrink-0" />
              <a href="mailto:contact@oneretail.ma">contact@oneretail.ma</a>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#640705] shrink-0" aria-hidden>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <a
                href="https://www.linkedin.com/company/one-retail-ma/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#ab2d26] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-[#111111]/5 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest space-y-4 md:space-y-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-ink-soft md:flex-row">
          <span className="text-[#111111]/50">{t("footer.rights", { year })}</span>
        </div>
      </div>
    </footer>
  );
}
