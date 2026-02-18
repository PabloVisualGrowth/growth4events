"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export default function ServiciosPage() {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const services = [
        { key: "svc1", image: "/images/eventos-2.jpg", alt: "Premium venue and restaurant reservations for corporate events in Spain", id: "venues" },
        { key: "svc2", image: "/images/eventos-6.jpg", alt: "Event branding design — stands, merchandising, visual identity Spain", id: "branding" },
        { key: "svc3", image: "/images/eventos-3.jpg", alt: "Professional exhibition staffing and event staff Spain", id: "staffing" },
        { key: "svc4", image: "/images/eventos-8.jpg", alt: "Professional driver transfers for corporate events Spain", id: "transfers" },
        { key: "svc5", image: "/images/claude.png", alt: "Live music with professional bands for corporate events Spain", id: "music" },
        { key: "svc6", image: "/images/eventos-4.jpg", alt: "Furniture, food and catering supply for trade shows Spain", id: "catering" },
        { key: "svc7", image: "/images/eventos-11.jpg", alt: "MICE services and corporate travel organization Spain", id: "mice" },
    ];

    return (
        <div className="min-h-screen text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-5xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#0cc0df]">
                        {t("services_badge")}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.0] mb-8">
                        {t("services_title")}
                    </h1>
                    <p className="text-lg leading-relaxed max-w-xl text-gray-600 pl-6 border-l border-black">
                        {t("services_sub")}
                    </p>
                </div>
            </header>

            {/* SERVICES — Alternating text/image layout */}
            <section className="border-b border-black">
                {services.map((svc, index) => (
                    <div key={svc.key} id={svc.id} className="grid grid-cols-1 md:grid-cols-3 group border-b border-black last:border-b-0 md:min-h-[450px]">

                        {/* Even index: text (2/3) | image (1/3) */}
                        {index % 2 === 0 && (
                            <>
                                <div className="relative col-span-1 md:col-span-2 flex flex-col justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-black transition-colors duration-500 hover:bg-[#0cc0df] hover:text-white">
                                    <motion.div
                                        initial={false}
                                        whileInView={isMobile ? { backgroundColor: "#0cc0df", color: "#ffffff" } : {}}
                                        viewport={{ amount: 0.2, margin: "-20% 0px -20% 0px" }}
                                        className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                                    />
                                    <div className="relative z-10 pointer-events-none">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-xs font-bold uppercase tracking-widest border border-current px-3 py-1 rounded-full opacity-50 group-hover:opacity-80">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                            {t(`${svc.key}_title`)}
                                        </h2>
                                        <p className="text-base leading-relaxed max-w-xl mb-6 opacity-80">
                                            {t(`${svc.key}_desc`)}
                                        </p>
                                        <ul className="space-y-3">
                                            {t(`${svc.key}_items`).split(",").map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="relative col-span-1 h-[50vh] md:h-auto overflow-hidden border-b md:border-b-0 border-black">
                                    <div className="absolute inset-0">
                                        <Image
                                            src={svc.image}
                                            alt={svc.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Odd index: image (1/3) | text (2/3) */}
                        {index % 2 === 1 && (
                            <>
                                <div className="relative col-span-1 h-[50vh] md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-black md:order-1">
                                    <div className="absolute inset-0">
                                        <Image
                                            src={svc.image}
                                            alt={svc.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <div className="relative col-span-1 md:col-span-2 flex flex-col justify-center p-8 md:p-16 border-b md:border-b-0 border-black transition-colors duration-500 hover:bg-[#0cc0df] hover:text-white md:order-2">
                                    <motion.div
                                        initial={false}
                                        whileInView={isMobile ? { backgroundColor: "#0cc0df", color: "#ffffff" } : {}}
                                        viewport={{ amount: 0.2, margin: "-20% 0px -20% 0px" }}
                                        className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                                    />
                                    <div className="relative z-10 pointer-events-none">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-xs font-bold uppercase tracking-widest border border-current px-3 py-1 rounded-full opacity-50 group-hover:opacity-80">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                                            {t(`${svc.key}_title`)}
                                        </h2>
                                        <p className="text-base leading-relaxed max-w-xl mb-6 opacity-80">
                                            {t(`${svc.key}_desc`)}
                                        </p>
                                        <ul className="space-y-3">
                                            {t(`${svc.key}_items`).split(",").map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )}
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
                        <Link href="/proceso" className="btn-concept">
                            {t("process_link")}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
