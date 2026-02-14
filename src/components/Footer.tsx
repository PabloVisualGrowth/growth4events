"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#FDF7E8] py-24 border-t border-black/5 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    {/* Logo Small */}
                    <div className="relative w-40 h-10 mb-8">
                        <Image
                            src="/images/logo.png"
                            alt="Growth 4 Events"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <p className="text-sm text-gray-500 max-w-xs mb-6">
                        {t("hero_sub")}
                    </p>
                    <div className="flex flex-col gap-2 text-sm text-gray-500">
                        <Link href="/privacidad" className="hover:text-black transition-colors">
                            {t("footer_privacy")}
                        </Link>
                        <Link href="/aviso-legal" className="hover:text-black transition-colors">
                            {t("footer_terms")}
                        </Link>
                        <Link href="/cookies" className="hover:text-black transition-colors">
                            {t("footer_cookies")}
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-24">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6">
                            {t("footer_nav")}
                        </h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <Link href="/" className="hover:underline">{t("nav_home")}</Link>
                            <Link href="/servicios" className="hover:underline">{t("nav_services")}</Link>
                            <Link href="/sectores" className="hover:underline">{t("nav_sectors")}</Link>
                            <Link href="/proceso" className="hover:underline">{t("nav_process")}</Link>
                            <Link href="/nosotros" className="hover:underline">{t("nav_about")}</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-6">
                            {t("footer_contact")}
                        </h4>
                        <div className="flex flex-col gap-2 text-sm text-gray-600">
                            <span className="text-xs uppercase tracking-widest font-bold text-black mb-1">
                                {t("contact_phone_label")}
                            </span>
                            <a href="tel:+34645966701" className="hover:text-black transition-colors">
                                +34 645 966 701
                            </a>
                            <span className="text-gray-400 mt-2">{t("contact_location_value")}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Huge Logo at Bottom — Faded Watermark */}
            <div className="max-w-7xl mx-auto mt-24 relative h-[15vh] w-full">
                <Image
                    src="/images/logo.png"
                    alt="Growth 4 Events"
                    fill
                    className="object-contain object-center opacity-[0.06]"
                />
            </div>

            <div className="max-w-7xl mx-auto mt-8 text-center">
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} Growth 4 Events. {t("footer_rights")}
                </p>
            </div>
        </footer>
    );
}
