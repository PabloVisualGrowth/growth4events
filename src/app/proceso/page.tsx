"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function OurApproachPage() {
    const { t } = useLanguage();

    const steps = [
        { key: "step1", num: "01" },
        { key: "step2", num: "02" },
        { key: "step3", num: "03" },
        { key: "step4", num: "04" },
        { key: "step5", num: "05" },
    ];

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-5xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#0cc0df]">
                        {t("process_badge")}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.0] mb-8">
                        {t("process_title")}
                    </h1>
                    <p className="text-lg leading-relaxed max-w-xl text-gray-600 pl-6 border-l border-black">
                        {t("process_sub")}
                    </p>
                </div>
            </header>

            {/* STEPS — Bordered grid rows */}
            <section className="border-b border-black">
                {steps.map((step, i) => (
                    <div
                        key={step.key}
                        className="grid grid-cols-1 md:grid-cols-[160px_1fr] group border-b border-black last:border-b-0 hover:bg-[#0cc0df] hover:text-white transition-colors duration-500"
                    >
                        {/* Number */}
                        <div className="flex items-center justify-center p-8 md:p-12 md:border-r border-black border-b md:border-b-0">
                            <span className="text-6xl md:text-8xl font-bold tracking-tight opacity-15 group-hover:opacity-30 transition-opacity">
                                {step.num}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-16 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                                {t(`${step.key}_title`)}
                            </h2>
                            <p className="text-base md:text-lg leading-relaxed max-w-2xl opacity-80">
                                {t(`${step.key}_desc`)}
                            </p>
                        </div>
                    </div>
                ))}
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
                        <Link href="/servicios" className="btn-concept">
                            {t("hero_cta2")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
