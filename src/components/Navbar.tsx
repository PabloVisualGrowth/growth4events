"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/lib/i18n";

const links = [
    { key: "nav_home", href: "/events" },
    { key: "nav_sectors", href: "/sectores" },
    { key: "nav_services", href: "/servicios" },
    { key: "nav_process", href: "/proceso" },
    { key: "nav_about", href: "/nosotros" },
    { key: "nav_contact", href: "/contacto" },
];

export function Navbar() {
    const { lang, setLang, t } = useLanguage();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled ? "top-[50%] -translate-y-1/2" : "top-0"
                    }`}
            >
                <div
                    className={`w-full flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-700 ${isScrolled
                        ? "bg-[#FDF7E8]/80 backdrop-blur-sm text-black py-2 px-4 md:px-8 border-y border-black/10"
                        : "bg-transparent text-black py-4 px-4 md:px-8"
                        }`}
                >
                    {/* Logo */}
                    <div className="flex items-center gap-2 relative w-36 h-7 md:w-48 md:h-9 shrink-0">
                        <Link href="/events" className="hover:opacity-70 transition-opacity w-full h-full relative">
                            <Image
                                src="/images/logo.png"
                                alt="Growth 4 Events"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Center Links (Desktop) */}
                    <div className="hidden md:flex gap-6 items-center justify-center absolute left-1/2 -translate-x-1/2">
                        {links.map((link) => {
                            const isActive =
                                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                            return (
                                <Link
                                    key={link.key}
                                    href={link.href}
                                    className={`px-2 py-1 transition-all duration-300 relative ${isActive ? "font-black" : "font-medium hover:opacity-60"
                                        }`}
                                >
                                    {t(link.key)}
                                    {isActive && (
                                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Right: Lang + CTA */}
                    <div className="flex items-center gap-6 shrink-0 justify-end">
                        <span className="hidden md:flex gap-4 opacity-60 text-black">
                            <button
                                onClick={() => setLang("es")}
                                className={`hover:opacity-100 transition-opacity ${lang === "es" ? "opacity-100 underline underline-offset-4" : ""}`}
                            >
                                ES
                            </button>
                            <button
                                onClick={() => setLang("en")}
                                className={`hover:opacity-100 transition-opacity ${lang === "en" ? "opacity-100 underline underline-offset-4" : ""}`}
                            >
                                EN
                            </button>
                        </span>

                        <Link
                            href="/contacto"
                            className="hidden md:block hover:underline underline-offset-4 decoration-1 text-black"
                        >
                            {t("nav_cta")}
                        </Link>

                        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[60] bg-black text-white transition-transform duration-500 flex flex-col p-8 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-xs font-bold uppercase tracking-widest border border-white/20 px-4 py-2 rounded-full"
                    >
                        Close
                    </button>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-8 text-3xl font-bold uppercase tracking-tighter">
                    {links.map((link) => (
                        <Link
                            key={link.key}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="hover:italic hover:text-[#0cc0df] transition-colors"
                        >
                            {t(link.key)}
                        </Link>
                    ))}
                </div>
                <div className="pt-8 border-t border-white/10 flex gap-4">
                    <button
                        onClick={() => { setLang("es"); setIsMenuOpen(false); }}
                        className={`flex-1 py-4 rounded-full text-xs font-bold uppercase tracking-widest border ${lang === "es" ? "bg-white text-black" : "border-white/20"}`}
                    >
                        Español
                    </button>
                    <button
                        onClick={() => { setLang("en"); setIsMenuOpen(false); }}
                        className={`flex-1 py-4 rounded-full text-xs font-bold uppercase tracking-widest border ${lang === "en" ? "bg-white text-black" : "border-white/20"}`}
                    >
                        English
                    </button>
                </div>
            </div>
        </>
    );
}
