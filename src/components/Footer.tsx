"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-[#FDF7E8] py-20 border-t border-black/10 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="max-w-xs">
                    {/* Logo */}
                    <div className="relative w-40 h-10 mb-8">
                        <Image
                            src="/images/logo.png"
                            alt="Growth 4 Events"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                        {t("footer_tagline")}
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

                <div className="grid grid-cols-2 gap-16 md:gap-24">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
                            {t("footer_nav")}
                        </h3>
                        <div className="flex flex-col gap-3 text-sm">
                            <Link href="/events" className="hover:underline text-gray-600 hover:text-black transition-colors">{t("nav_home")}</Link>
                            <Link href="/sectores" className="hover:underline text-gray-600 hover:text-black transition-colors">{t("nav_sectors")}</Link>
                            <Link href="/servicios" className="hover:underline text-gray-600 hover:text-black transition-colors">{t("nav_services")}</Link>
                            <Link href="/proceso" className="hover:underline text-gray-600 hover:text-black transition-colors">{t("nav_process")}</Link>
                            <Link href="/nosotros" className="hover:underline text-gray-600 hover:text-black transition-colors">{t("nav_about")}</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest mb-6">
                            {t("footer_contact")}
                        </h3>
                        <div className="flex flex-col gap-3 text-sm text-gray-600">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-black">
                                {t("contact_phone_label")}
                            </span>
                            <a href="tel:+34645966701" className="hover:text-black transition-colors">
                                +34 645 966 701
                            </a>
                            <a href="https://wa.me/34645966701" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                                WhatsApp
                            </a>
                            <span className="text-gray-400 mt-2">{t("contact_location_value")}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Watermark logo */}
            <div className="max-w-7xl mx-auto mt-20 relative h-[12vh] w-full">
                <Image
                    src="/images/logo.png"
                    alt="Growth 4 Events"
                    fill
                    className="object-contain object-center opacity-[0.05]"
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
