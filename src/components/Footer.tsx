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
            L’excellence opérationnelle et esthétique au service des franchises de luxe de demain.
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
