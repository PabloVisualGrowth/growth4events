"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";

export default function ContactoPage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4">
                        {t("hero_badge")}
                    </span>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8] mb-8">
                        {t("contact_badge")}
                    </h1>
                    <p className="font-serif italic text-xl max-w-xl pl-6 border-l border-black">
                        {t("contact_title")}
                    </p>
                </div>
            </header>

            {/* FORM + SIDEBAR */}
            <section className="grid grid-cols-1 md:grid-cols-[2fr_1fr] border-b border-black">
                {/* Form */}
                <div className="p-8 md:p-16 md:border-r border-black border-b md:border-b-0">
                    <ContactForm />
                </div>

                {/* Sidebar */}
                <div className="p-8 md:p-16 flex flex-col justify-between">
                    <div className="space-y-8">
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                                {t("contact_phone_label")}
                            </span>
                            <a href="tel:+34645966701" className="text-sm hover:text-[#0cc0df] transition-colors block mb-1">
                                +34 645 966 701
                            </a>
                            <a href="https://wa.me/34645966701" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-[#0cc0df] transition-colors inline-flex items-center gap-1">
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                WhatsApp
                            </a>
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">
                                {t("contact_location_label")}
                            </span>
                            <p className="text-sm">{t("contact_location_value")}</p>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-black/10">
                        <p className="font-serif italic text-gray-500 text-sm">
                            {t("footer_tagline")}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 md:py-32 px-6 text-center bg-black text-white">
                <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#0cc0df]">
                    {t("hero_badge")}
                </span>
                <h2 className="type-display-huge text-4xl md:text-8xl mb-12 max-w-4xl mx-auto">
                    {t("cta_title")}
                </h2>
                <p className="font-serif italic text-lg text-white/60 max-w-xl mx-auto mb-12">
                    {t("cta_sub")}
                </p>
                <Link href="/contacto" className="btn-concept border-white text-white hover:bg-white hover:text-black">
                    {t("cta_btn")}
                </Link>
            </section>
        </div>
    );
}
