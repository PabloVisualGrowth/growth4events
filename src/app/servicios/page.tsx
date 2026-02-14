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
        { key: "svc1", image: "/images/eventos-3.jpg", alt: "Staffing & Personal" },
        { key: "svc2", image: "/images/eventos-2.jpg", alt: "DMC & MICE" },
        { key: "svc3", image: "/images/eventos-4.jpg", alt: "Catering & Espacios" },
        { key: "svc4", image: "/images/eventos-6.jpg", alt: "Branding & Logística" },
    ];

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* HEADER */}
            <header className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <div className="max-w-4xl">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4">
                        {t("services_sub")}
                    </span>
                    <h1 className="type-display-huge text-6xl md:text-9xl leading-[0.8] mb-8">
                        {t("services_badge")}
                    </h1>
                    <p className="font-serif italic text-xl max-w-xl pl-6 border-l border-black">
                        {t("services_title")}
                    </p>
                </div>
            </header>

            {/* SERVICES GRID - Exactly as diagram: alternating texto/foto layout, no horizontal borders */}
            <section className="border-b border-black">
                {services.map((svc, index) => (
                    <div key={svc.key} className="grid grid-cols-1 md:grid-cols-3 group">

                        {/* Service 1 & 3: texto (2 cols) | foto (1 col) */}
                        {index % 2 === 0 && (
                            <>
                                {/* Texto - 2/3 width */}
                                <div className="relative col-span-1 md:col-span-2 flex flex-col justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-black transition-colors duration-700 hover:bg-[#0cc0df] hover:text-white">
                                    <motion.div
                                        initial={false}
                                        whileInView={isMobile ? { backgroundColor: "#0cc0df", color: "#ffffff" } : {}}
                                        viewport={{ amount: 0.2, margin: "-20% 0px -20% 0px" }}
                                        className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                                    />
                                    <div className="relative z-10 pointer-events-none">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-xs font-bold uppercase tracking-widest border border-black group-hover:border-white px-3 py-1 rounded-full">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h2 className="type-display-huge text-4xl md:text-6xl mb-6">
                                            {t(`${svc.key}_title`)}
                                        </h2>
                                        <p className="font-sans text-base md:text-lg opacity-80 leading-relaxed max-w-xl mb-6">
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

                                {/* Foto - 1/3 width */}
                                <div className="relative col-span-1 h-[50vh] md:h-auto overflow-hidden border-b md:border-b-0 border-black">
                                    <motion.div
                                        initial={{ filter: "grayscale(100%)" }}
                                        whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
                                        whileHover={{ filter: "grayscale(0%)" }}
                                        viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={svc.image}
                                            alt={svc.alt}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </motion.div>
                                </div>
                            </>
                        )}

                        {/* Service 2 & 4: foto (1 col) | texto (2 cols) */}
                        {index % 2 === 1 && (
                            <>
                                {/* Foto - 1/3 width */}
                                <div className="relative col-span-1 h-[50vh] md:h-auto overflow-hidden border-b md:border-b-0 md:border-r border-black md:order-1">
                                    <motion.div
                                        initial={{ filter: "grayscale(100%)" }}
                                        whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
                                        whileHover={{ filter: "grayscale(0%)" }}
                                        viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={svc.image}
                                            alt={svc.alt}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </motion.div>
                                </div>

                                {/* Texto - 2/3 width */}
                                <div className="relative col-span-1 md:col-span-2 flex flex-col justify-center p-8 md:p-16 border-b md:border-b-0 border-black transition-colors duration-700 hover:bg-[#0cc0df] hover:text-white md:order-2">
                                    <motion.div
                                        initial={false}
                                        whileInView={isMobile ? { backgroundColor: "#0cc0df", color: "#ffffff" } : {}}
                                        viewport={{ amount: 0.2, margin: "-20% 0px -20% 0px" }}
                                        className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                                    />
                                    <div className="relative z-10 pointer-events-none">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-xs font-bold uppercase tracking-widest border border-black group-hover:border-white px-3 py-1 rounded-full">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <h2 className="type-display-huge text-4xl md:text-6xl mb-6">
                                            {t(`${svc.key}_title`)}
                                        </h2>
                                        <p className="font-sans text-base md:text-lg opacity-80 leading-relaxed max-w-xl mb-6">
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
        </div>
    );
}
