"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function CookieConsent() {
    const { t } = useLanguage();
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("g4e-cookie-consent");
        if (!consent) {
            setShow(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("g4e-cookie-consent", "accepted");
        setShow(false);
    };

    const handleDecline = () => {
        localStorage.setItem("g4e-cookie-consent", "declined");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] bg-black text-white border-t border-white/10 p-6 animate-fade-in">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest mb-2">
                        {t("cookie_title")}
                    </p>
                    <p className="text-sm text-white/70 max-w-2xl">
                        {t("cookie_message")}{" "}
                        <Link href="/cookies" className="underline hover:text-[#0cc0df] transition-colors">
                            {t("cookie_learn_more")}
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={handleDecline}
                        className="px-6 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors"
                    >
                        {t("cookie_decline")}
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-6 py-2 rounded-full bg-[#0cc0df] text-white border border-[#0cc0df] text-xs font-bold uppercase tracking-widest hover:bg-[#0aa8c3] transition-colors"
                    >
                        {t("cookie_accept")}
                    </button>
                </div>
            </div>
        </div>
    );
}
