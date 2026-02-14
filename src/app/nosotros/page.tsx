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
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4">
                        Growth 4 Events
                    </span>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8] mb-8">
                        {t("about_badge")}
                    </h1>
                    <p className="font-serif italic text-xl max-w-xl pl-6 border-l border-black">
                        {t("about_title")}
                    </p>
                </div>
            </header>

            {/* ABOUT TEXT — Text-only, no images */}
            <section className="p-12 md:p-24 border-b border-black">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8 text-lg leading-relaxed">
                        <p className="text-2xl md:text-3xl font-serif italic leading-relaxed">
                            {t("about_text1")}
                        </p>
                        <p className="text-gray-500">{t("about_text2")}</p>
                        <p className="pl-6 border-l-2 border-[#0cc0df] text-[#0cc0df] font-medium">
                            {t("about_text3")}
                        </p>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="border-b border-black">
                <div className="px-6 md:px-12 py-16 text-center">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0cc0df]">
                        {t("values_badge")}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {values.map((v, i) => (
                        <div
                            key={v.key}
                            className={`p-12 md:p-16 border-b md:border-b-0 border-black ${i < 2 ? "md:border-r border-black" : ""
                                } group hover:bg-[#0cc0df] hover:text-white transition-colors duration-500`}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest border border-black group-hover:border-white px-3 py-1 rounded-full inline-block mb-8">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="type-display-huge text-3xl md:text-4xl mb-6">
                                {t(`${v.key}_title`)}
                            </h3>
                            <p className="font-serif italic text-lg opacity-80 leading-relaxed">
                                {t(`${v.key}_desc`)}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
