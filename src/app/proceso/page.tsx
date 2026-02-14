"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function ProcesoPage() {
    const { t } = useLanguage();

    const steps = [
        { key: "step1", num: "01" },
        { key: "step2", num: "02" },
        { key: "step3", num: "03" },
        { key: "step4", num: "04" },
    ];

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4">
                        {t("process_sub")}
                    </span>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8] mb-8">
                        {t("process_badge")}
                    </h1>
                    <p className="font-serif italic text-xl max-w-xl pl-6 border-l border-black">
                        {t("process_title")}
                    </p>
                </div>
            </header>

            {/* STEPS — Bordered grid rows */}
            <section className="border-b border-black">
                {steps.map((step, i) => (
                    <div
                        key={step.key}
                        className={`grid grid-cols-1 md:grid-cols-[200px_1fr] group border-b border-black last:border-b-0 hover:bg-[#0cc0df] hover:text-white transition-colors duration-500`}
                    >
                        {/* Number */}
                        <div className="flex items-center justify-center p-8 md:p-12 md:border-r border-black">
                            <span className="type-display-huge text-6xl md:text-8xl opacity-20 group-hover:opacity-40 transition-opacity">
                                {step.num}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-16 flex flex-col justify-center">
                            <h3 className="type-display-huge text-3xl md:text-5xl mb-6">
                                {t(`${step.key}_title`)}
                            </h3>
                            <p className="font-sans text-lg opacity-80 leading-relaxed max-w-2xl">
                                {t(`${step.key}_desc`)}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
