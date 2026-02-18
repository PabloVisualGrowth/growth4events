"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function TradeshowSupportPage() {
    const { t } = useLanguage();

    const sectors = [
        { key: "sector1" },
        { key: "sector2" },
        { key: "sector3" },
    ];

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-5xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#0cc0df]">
                        {t("sectors_badge")}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.0] mb-8 max-w-4xl">
                        {t("sectors_title")}
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-gray-600 pl-6 border-l border-black">
                        {t("sectors_sub")}
                    </p>
                </div>
            </header>

            {/* PROBLEM STATEMENT */}
            <section className="border-b border-black py-20 md:py-28 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.15] mb-6">
                            {t("tradeshow_problem_title")}
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600">
                            {t("tradeshow_problem_body")}
                        </p>
                    </div>
                    <div className="border-l border-black pl-8 md:pl-12 flex flex-col gap-6">
                        <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-gray-800">
                            {t("home_solution_intro")}
                        </p>
                        <div>
                            <Link href="/contacto" className="btn-concept-accent">
                                {t("hero_cta1")}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE COVER */}
            <section className="border-b border-black">
                <div className="px-6 md:px-12 py-12 border-b border-black">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                        {t("tradeshow_what_title")}
                    </h2>
                </div>

                {sectors.map((sector, index) => (
                    <div
                        key={sector.key}
                        className="p-8 md:p-16 border-b border-black last:border-b-0 hover:bg-[#0cc0df] hover:text-white transition-colors duration-500 group"
                    >
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-xs font-bold uppercase tracking-widest border border-current px-3 py-1 rounded-full opacity-50 group-hover:opacity-80">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-10">
                                {t(`${sector.key}_title`)}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Objective */}
                                <div className="pl-5 border-l-2 border-current">
                                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-3 opacity-50">
                                        {t("sector_objectives")}
                                    </span>
                                    <p className="text-sm leading-relaxed">{t(`${sector.key}_obj`)}</p>
                                </div>

                                {/* Problem */}
                                <div className="pl-5 border-l-2 border-current opacity-70">
                                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-3 opacity-70">
                                        {t("sector_painpoints")}
                                    </span>
                                    <p className="text-sm leading-relaxed font-serif italic">{t(`${sector.key}_pain`)}</p>
                                </div>

                                {/* Solution */}
                                <div className="pl-5 border-l-2 border-current">
                                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-3 opacity-50">
                                        {t("sector_oursolution")}
                                    </span>
                                    <p className="text-sm leading-relaxed font-medium">{t(`${sector.key}_solution`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* SERVICES LINK */}
            <section className="border-b border-black px-6 md:px-12 py-16">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                            {t("tradeshow_cta_title")}
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600">
                            {t("tradeshow_cta_body")}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contacto" className="btn-concept-filled">
                            {t("hero_cta1")}
                        </Link>
                        <Link href="/servicios" className="btn-concept">
                            {t("hero_cta2")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
