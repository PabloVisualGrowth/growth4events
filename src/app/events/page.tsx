"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

export default function HomePage() {
    const { t } = useLanguage();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* ═══ HERO — Grid Mosaic with eventos-1, 5, 7, 9 ═══ */}
            <header className="relative w-full pt-20 md:pt-28 border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[85vh]">

                    {/* Col 1-2: Text & Statement */}
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-between p-6 md:p-12 border-b md:border-b-0 md:border-r border-black relative">
                        <div className="uppercase text-xs font-bold tracking-widest mb-12">
                            {t("hero_badge")}
                        </div>

                        <div className="relative z-10 max-w-[85%] md:max-w-[80%]">
                            <p className="text-lg md:text-xl leading-relaxed max-w-md">
                                {t("hero_sub")}
                            </p>
                        </div>

                        <div className="mt-12 flex gap-4">
                            <Link href="/contacto" className="btn-concept-filled">
                                {t("hero_cta1")}
                            </Link>
                            <Link href="/servicios" className="btn-concept">
                                {t("hero_cta2")}
                            </Link>
                        </div>
                    </div>

                    {/* Col 3-4: Image Mosaic — eventos-1, 5, 7, 9 */}
                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 grid-rows-2 h-[50vh] md:h-full">
                        <div className="relative border-r border-b border-black group overflow-hidden">
                            <Image
                                src="/images/eventos-1.jpg"
                                alt="Event venue"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                        <div className="relative border-b border-black group overflow-hidden">
                            <Image
                                src="/images/eventos-5.jpg"
                                alt="Conference"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                        <div className="relative border-r border-black group overflow-hidden">
                            <Image
                                src="/images/eventos-7.jpg"
                                alt="Networking"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                        <div className="relative group overflow-hidden">
                            <Image
                                src="/images/eventos-9.jpg"
                                alt="Corporate event"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* ═══ STATEMENT — Bordered & Centered ═══ */}
            <section className="border-b border-black py-24 md:py-32 px-6 bg-[#FDF7E8]">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1]">
                        {t("pillars_title")}
                    </h2>
                    <div className="mt-12 flex justify-center">
                        <svg className="w-8 h-8 animate-pulse text-[#0cc0df]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* ═══ SINGLE PILLAR — Partner Network with eventos-10, exact height match ═══ */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
                <div className="relative border-b md:border-b-0 md:border-r border-black group h-[60vh] flex flex-col justify-end p-4 md:p-4 hover:bg-[#0cc0df] hover:text-white transition-colors duration-500">
                    <motion.div
                        initial={false}
                        whileInView={isMobile ? { backgroundColor: "#0cc0df" } : {}}
                        viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                        className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                    />
                    <div className="relative z-10 pointer-events-none">
                        <span className="block text-xs font-bold uppercase tracking-widest mb-3">01. {t("pillars_badge")}</span>
                        <h3 className="type-display-huge text-4xl md:text-6xl mb-4">{t("pillar1_title")}</h3>
                        <p className="text-base md:text-lg font-serif italic max-w-md mb-6">
                            {t("pillar1_desc")}
                        </p>
                        <Link href="/servicios" className="btn-concept group-hover:border-white group-hover:text-white inline-block">
                            {t("hero_cta2")}
                        </Link>
                    </div>
                </div>

                {/* Right image — eventos-10, exact 60vh to match */}
                <div className="relative group h-[60vh] overflow-hidden bg-gray-100">
                    <motion.div
                        initial={{ filter: "grayscale(100%)" }}
                        whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
                        whileHover={{ filter: "grayscale(0%)" }}
                        viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src="/images/eventos-10.jpg"
                            alt="Partner Network"
                            fill
                            className="object-contain transition-all duration-1000"
                            quality={95}
                        />
                    </motion.div>
                </div>
            </section>

            {/* ═══ MARQUEE ═══ */}
            <section className="border-b border-black overflow-hidden py-6 bg-black text-white">
                <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">GROWTH 4 EVENTS &nbsp;—&nbsp; ESPAÑA</span>
                    <span className="text-2xl md:text-4xl font-serif italic">{t("hero_badge")}</span>
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">STAFFING &nbsp;—&nbsp; DMC &nbsp;—&nbsp; MICE &nbsp;—&nbsp; CATERING</span>
                    <span className="text-2xl md:text-4xl font-serif italic">Partner Network</span>
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">GROWTH 4 EVENTS &nbsp;—&nbsp; ESPAÑA</span>
                    <span className="text-2xl md:text-4xl font-serif italic">{t("hero_badge")}</span>
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">STAFFING &nbsp;—&nbsp; DMC &nbsp;—&nbsp; MICE &nbsp;—&nbsp; CATERING</span>
                    <span className="text-2xl md:text-4xl font-serif italic">Partner Network</span>
                </div>
            </section>

            {/* ═══ AUDIENCE GRID — With images: eventos-12, 11, 13 ═══ */}
            <section className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
                {[
                    { key: "audience1", img: "/images/eventos-12.jpg" },
                    { key: "audience2", img: "/images/eventos-11.jpg" },
                    { key: "audience3", img: "/images/eventos-13.jpg" },
                ].map((a, i) => (
                    <div
                        key={a.key}
                        className={`relative h-[50vh] md:h-[70vh] group overflow-hidden ${i < 2 ? "md:border-r border-b md:border-b-0 border-black" : ""
                            }`}
                    >
                        <motion.div
                            initial={{ filter: "grayscale(100%)" }}
                            whileInView={isMobile ? { filter: "grayscale(0%)" } : {}}
                            whileHover={{ filter: "grayscale(0%)" }}
                            viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={a.img}
                                alt={t(`${a.key}_title`)}
                                fill
                                className="object-cover transition-all duration-700"
                                quality={95}
                            />
                        </motion.div>
                        <div className="absolute top-0 left-0 p-6 pointer-events-none">
                            <span className="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black rounded-full">
                                {t(`${a.key}_title`)}
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/50 to-transparent text-white pointer-events-none">
                            <p className="font-serif italic mt-2 max-w-xs">{t(`${a.key}_desc`)}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* ═══ TESTIMONIALS ═══ */}
            <section className="border-b border-black grid grid-cols-1 md:grid-cols-2">
                {[1, 2].map((i) => (
                    <div
                        key={i}
                        className={`p-12 md:p-24 flex flex-col justify-center ${i === 1 ? "border-b md:border-b-0 md:border-r border-black" : ""
                            }`}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#0cc0df]">
                            {t("testimonials_badge")}
                        </span>
                        <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                            &ldquo;{t(`testimonial${i}_quote`)}&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm">
                                {t(`testimonial${i}_author`).charAt(0)}
                            </div>
                            <div>
                                <p className="text-sm font-bold">{t(`testimonial${i}_author`)}</p>
                                <p className="text-xs text-gray-500">{t(`testimonial${i}_company`)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
