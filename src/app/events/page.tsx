"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";
import { AccordionItem } from "@/components/AccordionItem";

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
        <div className="min-h-screen text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />

            {/* ═══ HERO — Image mosaic with H1 ═══ */}
            <header className="relative w-full pt-20 md:pt-28 border-b border-black">
                <div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[85vh]">

                    {/* Col 1-2: Badge, H1, sub, CTAs */}
                    <div className="col-span-1 md:col-span-2 flex flex-col justify-between p-6 md:p-12 border-b md:border-b-0 md:border-r border-black">
                        <div className="text-xs font-bold uppercase tracking-widest">
                            {t("hero_badge")}
                        </div>

                        <div className="relative z-10 py-8 md:py-0">
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] mb-6 max-w-xl">
                                {t("hero_title")}
                            </h1>
                            <p className="text-base md:text-lg leading-relaxed max-w-md text-gray-600">
                                {t("hero_sub")}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Link href="/contacto" className="btn-concept-filled">
                                {t("hero_cta1")}
                            </Link>
                            <Link href="/servicios" className="btn-concept">
                                {t("hero_cta2")}
                            </Link>
                        </div>
                    </div>

                    {/* Col 3-4: Image mosaic */}
                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 grid-rows-2 h-[50vh] md:h-full">
                        <div className="relative border-r border-b border-black overflow-hidden">
                            <Image
                                src="/images/eventos-1.jpg"
                                alt="Corporate event stand setup in Spain"
                                fill
                                className="object-cover transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                        <div className="relative border-b border-black overflow-hidden">
                            <Image
                                src="/images/eventos-5.jpg"
                                alt="Professional corporate conference in Spain"
                                fill
                                className="object-cover transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                        <div className="relative border-r border-black overflow-hidden">
                            <Image
                                src="/images/eventos-7.jpg"
                                alt="Trade show staffing and event coordination Spain"
                                fill
                                className="object-cover transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                        <div className="relative overflow-hidden">
                            <Image
                                src="/images/eventos-9.jpg"
                                alt="Corporate dinner venue Spain"
                                fill
                                className="object-cover transition-all duration-700"
                                priority
                                quality={95}
                            />
                        </div>
                    </div>
                </div>
            </header>

            {/* ═══ PROBLEM / SOLUTION ═══ */}
            <section className="border-b border-black py-20 md:py-28 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.15] mb-6">
                            {t("home_problem_title")}
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600">
                            {t("home_problem_body")}
                        </p>
                    </div>
                    <div className="border-l border-black pl-8 md:pl-12">
                        <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-gray-800 mb-10">
                            {t("home_solution_intro")}
                        </p>
                        <Link href="/contacto" className="btn-concept-accent">
                            {t("hero_cta1")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICES — Numbered list ═══ */}
            <section className="border-b border-black">
                {/* Section header */}
                <div className="px-6 md:px-12 py-12 border-b border-black flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#0cc0df]">
                            {t("services_badge")}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight max-w-2xl">
                            {t("home_services_title")}
                        </h2>
                    </div>
                    <Link href="/servicios" className="btn-concept shrink-0">
                        {t("hero_cta2")}
                    </Link>
                </div>

                {/* 7 services as numbered rows */}
                {[
                    { num: "01", key: "svc1" },
                    { num: "02", key: "svc2" },
                    { num: "03", key: "svc3" },
                    { num: "04", key: "svc4" },
                    { num: "05", key: "svc5" },
                    { num: "06", key: "svc6" },
                    { num: "07", key: "svc7" },
                ].map((svc) => (
                    <Link
                        key={svc.key}
                        href="/servicios"
                        className="group grid grid-cols-[48px_1fr_24px] items-center gap-4 px-6 md:px-12 py-5 border-b border-black hover:bg-[#0cc0df] hover:text-white transition-colors duration-300 last:border-b-0"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest opacity-30 group-hover:opacity-70">
                            {svc.num}
                        </span>
                        <div>
                            <span className="font-bold text-base md:text-lg block">
                                {t(`${svc.key}_title`)}
                            </span>
                            <span className="text-sm text-gray-500 group-hover:text-white/70 hidden md:block leading-snug">
                                {t(`${svc.key}_short`)}
                            </span>
                        </div>
                        <svg className="w-4 h-4 opacity-20 group-hover:opacity-80 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                ))}
            </section>

            {/* ═══ MARQUEE ═══ */}
            <section className="border-b border-black overflow-hidden py-5 bg-black text-white">
                <div className="whitespace-nowrap animate-marquee flex items-center gap-12">
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">GROWTH 4 EVENTS &nbsp;—&nbsp; SPAIN</span>
                    <span className="text-2xl md:text-4xl font-serif italic">Corporate Event Support</span>
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">STAFFING &nbsp;—&nbsp; VENUES &nbsp;—&nbsp; BRANDING &nbsp;—&nbsp; TRANSFERS &nbsp;—&nbsp; MICE</span>
                    <span className="text-2xl md:text-4xl font-serif italic">Trade Show Support</span>
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">GROWTH 4 EVENTS &nbsp;—&nbsp; SPAIN</span>
                    <span className="text-2xl md:text-4xl font-serif italic">Corporate Event Support</span>
                    <span className="text-2xl md:text-4xl font-bold uppercase tracking-tighter">STAFFING &nbsp;—&nbsp; VENUES &nbsp;—&nbsp; BRANDING &nbsp;—&nbsp; TRANSFERS &nbsp;—&nbsp; MICE</span>
                    <span className="text-2xl md:text-4xl font-serif italic">Trade Show Support</span>
                </div>
            </section>

            {/* ═══ WHO IT'S FOR — Image grid ═══ */}
            <section className="grid grid-cols-1 md:grid-cols-3 border-b border-black">
                {[
                    { key: "audience1", img: "/images/eventos-12.jpg", alt: "Trade show and exhibition support in Spain" },
                    { key: "audience2", img: "/images/eventos-11.jpg", alt: "Corporate events and dinners in Spain" },
                    { key: "audience3", img: "/images/eventos-13.jpg", alt: "MICE and corporate travel Spain" },
                ].map((a, i) => (
                    <div
                        key={a.key}
                        className={`relative h-[50vh] md:h-[65vh] group overflow-hidden ${i < 2 ? "md:border-r border-b md:border-b-0 border-black" : ""}`}
                    >
                        <div className="absolute inset-0">
                            <Image
                                src={a.img}
                                alt={a.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                quality={95}
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute top-0 left-0 p-6 pointer-events-none">
                            <span className="bg-white text-black px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-black rounded-full">
                                {t(`${a.key}_title`)}
                            </span>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full bg-gradient-to-t from-black/60 to-transparent text-white pointer-events-none">
                            <p className="text-sm leading-relaxed max-w-xs">{t(`${a.key}_desc`)}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* ═══ LOCAL PARTNER BLOCK ═══ */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-black">
                <div className="relative border-b md:border-b-0 md:border-r border-black group min-h-[55vh] flex flex-col justify-end p-8 md:p-12 hover:bg-[#0cc0df] hover:text-white transition-colors duration-500">
                    <motion.div
                        initial={false}
                        whileInView={isMobile ? { backgroundColor: "#0cc0df" } : {}}
                        viewport={{ amount: 0.2, margin: "-30% 0px -30% 0px" }}
                        className="absolute inset-0 transition-colors duration-700 pointer-events-none md:hidden"
                    />
                    <div className="relative z-10 pointer-events-none">
                        <span className="block text-xs font-bold uppercase tracking-widest mb-4 opacity-50">
                            {t("pillars_badge")}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 max-w-md">
                            {t("pillar1_title")}
                        </h2>
                        <p className="text-base leading-relaxed max-w-md mb-8 opacity-80">
                            {t("pillar1_desc")}
                        </p>
                        <Link href="/proceso" className="btn-concept group-hover:border-white group-hover:text-white inline-block">
                            {t("process_link")}
                        </Link>
                    </div>
                </div>

                <div className="relative h-[55vh] md:h-auto overflow-hidden bg-gray-100">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/eventos-10.jpg"
                            alt="Local coordination for corporate events in Spain"
                            fill
                            className="object-cover transition-transform duration-700"
                            quality={95}
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* ═══ HOW WE WORK — 5-step teaser ═══ */}
            <section className="border-b border-black">
                <div className="px-6 md:px-12 py-12 border-b border-black">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-4 text-[#0cc0df]">
                        {t("process_badge")}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                        {t("home_process_title")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 border-b border-black">
                    {[
                        { num: "01", key: "step1" },
                        { num: "02", key: "step2" },
                        { num: "03", key: "step3" },
                        { num: "04", key: "step4" },
                        { num: "05", key: "step5" },
                    ].map((step, i) => (
                        <div
                            key={step.key}
                            className={`p-8 border-b md:border-b-0 border-black ${i < 4 ? "md:border-r" : ""} hover:bg-[#0cc0df]/10 transition-colors`}
                        >
                            <span className="text-xs font-bold uppercase tracking-widest border border-black px-3 py-1 rounded-full inline-block mb-6 opacity-30">
                                {step.num}
                            </span>
                            <h3 className="text-sm font-bold mb-2">{t(`${step.key}_title`)}</h3>
                            <p className="text-xs leading-relaxed text-gray-500">{t(`${step.key}_short`)}</p>
                        </div>
                    ))}
                </div>

                <div className="px-6 md:px-12 py-8 flex justify-end border-b border-black">
                    <Link href="/proceso" className="btn-concept">
                        {t("process_link")}
                    </Link>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section className="border-b border-black py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-widest block mb-6 text-[#0cc0df]">
                        {t("faq_badge")}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-12">
                        {t("faq_title")}
                    </h2>

                    <div className="space-y-0">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <AccordionItem key={num} title={t(`faq_q${num}`)}>
                                {t(`faq_a${num}`)}
                            </AccordionItem>
                        ))}
                    </div>
                </div>

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            mainEntity: [1, 2, 3, 4, 5].map(num => ({
                                "@type": "Question",
                                name: t(`faq_q${num}`),
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: t(`faq_a${num}`)
                                }
                            }))
                        })
                    }}
                />
            </section>

            {/* ═══ FINAL CTA ═══ */}
            <section className="py-24 md:py-32 px-6 text-center bg-black text-white">
                <span className="text-xs font-bold uppercase tracking-widest block mb-8 text-[#0cc0df]">
                    {t("hero_badge")}
                </span>
                <p className="text-3xl md:text-5xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
                    {t("cta_title")}
                </p>
                <p className="font-serif italic text-white/60 text-lg mb-10 max-w-xl mx-auto">
                    {t("cta_sub")}
                </p>
                <Link href="/contacto" className="btn-concept border-white text-white hover:bg-white hover:text-black">
                    {t("cta_btn")}
                </Link>
            </section>
        </div>
    );
}
