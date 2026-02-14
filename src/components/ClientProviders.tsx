"use client";

import { LangContext, useLangState } from "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export function ClientProviders({ children }: { children: React.ReactNode }) {
    const langState = useLangState();

    return (
        <LangContext.Provider value={langState}>
            <Navbar />
            {children}
            <Footer />
            <CookieConsent />
        </LangContext.Provider>
    );
}
