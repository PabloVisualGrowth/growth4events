"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function NosotrosPage() {
    const { t } = useLanguage();

    const values = [
        { key: "value1" },
        { key: "value2" },
        { key: "value3" },
    ];

    return (
        <div className="min-h-screen text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-5xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#0cc0df]">
                        {t("about_badge")}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.0] mb-8">
                        {t("about_title")}
                    </h1>
                </div>
            </header>

            {/* ABOUT TEXT */}
            <section className="p-8 md:p-24 border-b border-black">
                <div className="max-w-4xl mx-auto space-y-10">
                    <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
                        {t("about_text1")}
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                        {t("about_text2")}
                    </p>
                    <p className="pl-6 border-l-2 border-[#0cc0df] text-[#0cc0df] font-medium text-base md:text-lg leading-relaxed">
                        {t("about_text3")}
                    </p>
                </div>
            </section>

            {/* HOW WE OPERATE */}
            <section className="border-b border-black">
                <div className="px-6 md:px-12 py-12 border-b border-black">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0cc0df]">
                        {t("values_badge")}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {values.map((v, i) => (
                        <div
                            key={v.key}
                            className={`p-10 md:p-16 border-b md:border-b-0 border-black ${i < 2 ? "md:border-r border-black" : ""} group hover:bg-[#0cc0df] hover:text-white transition-colors duration-500`}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest border border-current px-3 py-1 rounded-full inline-block mb-8 opacity-40 group-hover:opacity-80">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                                {t(`${v.key}_title`)}
                            </h2>
                            <p className="text-base leading-relaxed opacity-75">
                                {t(`${v.key}_desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-28 px-6 md:px-12 border-b border-black">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                            {t("cta_title")}
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600">
                            {t("cta_sub")}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contacto" className="btn-concept-filled">
                            {t("hero_cta1")}
                        </Link>
                        <Link href="/proceso" className="btn-concept">
                            {t("process_link")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
