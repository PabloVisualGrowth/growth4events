"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function SectoresPage() {
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
                <div className="max-w-4xl">
                    <p className="font-serif italic text-base md:text-lg mb-6 max-w-3xl">
                        {t("sectors_sub")}
                    </p>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8]">
                        {t("sectors_badge")}
                    </h1>
                </div>
            </header>

            {/* SECTOR BLOCKS — Text-only, no individual images */}
            <section className="border-b border-black">
                {sectors.map((sector, index) => (
                    <div
                        key={sector.key}
                        className={`p-12 md:p-24 border-b border-black last:border-b-0 hover:bg-[#0cc0df] hover:text-white transition-colors duration-500`}
                    >
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-xs font-bold uppercase tracking-widest border border-black px-3 py-1 rounded-full">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <h2 className="type-display-huge text-4xl md:text-6xl mb-8">
                                {t(`${sector.key}_title`)}
                            </h2>

                            <div className="space-y-6">
                                {/* Objectives */}
                                <div className="pl-6 border-l-2 border-current">
                                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-2 opacity-60">
                                        {t("sector_objectives")}
                                    </span>
                                    <p className="text-sm leading-relaxed">{t(`${sector.key}_obj`)}</p>
                                </div>

                                {/* Pain Points */}
                                <div className="pl-6 border-l-2 border-current opacity-60">
                                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">
                                        {t("sector_painpoints")}
                                    </span>
                                    <p className="text-sm leading-relaxed font-serif italic">{t(`${sector.key}_pain`)}</p>
                                </div>

                                {/* Solution */}
                                <div className="pl-6 border-l-2 border-current">
                                    <span className="text-[10px] font-bold uppercase tracking-widest block mb-2">
                                        {t("sector_oursolution")}
                                    </span>
                                    <p className="text-sm leading-relaxed font-medium">{t(`${sector.key}_solution`)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
