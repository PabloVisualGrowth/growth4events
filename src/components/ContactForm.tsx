"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function ContactForm() {
    const { t } = useLanguage();
    const [submitted, setSubmitted] = useState(false);
    const [privacyOk, setPrivacyOk] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!privacyOk) return;

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mldwkpyn", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setSubmitted(true);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-16 animate-fade-up">
                <div className="mb-6">
                    <span className="text-6xl">✓</span>
                </div>
                <h3 className="type-display-huge text-3xl mb-4">
                    {t("form_success_title")}
                </h3>
                <p className="font-serif italic text-gray-500">{t("form_success_msg")}</p>
            </div>
        );
    }

    const inputCls =
        "w-full px-0 py-3 bg-transparent border-0 border-b border-black text-sm text-black placeholder:text-gray-400 focus:outline-none focus:border-[#0cc0df] transition-colors duration-300";

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {t("form_name")} *
                    </label>
                    <input type="text" name="name" required className={inputCls} />
                </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {t("form_company")} *
                    </label>
                    <input type="text" name="company" required className={inputCls} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {t("form_email")} *
                    </label>
                    <input type="email" name="email" required className={inputCls} />
                </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {t("form_phone")}
                    </label>
                    <input type="tel" name="phone" className={inputCls} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {t("form_event_type")}
                    </label>
                    <input
                        type="text"
                        name="event_type"
                        placeholder={t("form_event_placeholder")}
                        className={inputCls}
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {t("form_city")}
                    </label>
                    <input type="text" name="city" className={inputCls} />
                </div>
                <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                        {t("form_date")}
                    </label>
                    <input type="text" name="date" className={inputCls} />
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    {t("form_message")}
                </label>
                <textarea name="message" rows={4} className={`${inputCls} resize-none`} />
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
                <input
                    type="checkbox"
                    checked={privacyOk}
                    onChange={(e) => setPrivacyOk(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#0cc0df]"
                />
                <span className="text-xs text-gray-500">
                    {t("form_privacy")}{" "}
                    <Link
                        href="/privacidad"
                        className="text-[#0cc0df] underline hover:text-[#0aa8c3]"
                    >
                        {t("form_privacy_link")}
                    </Link>
                    . *
                </span>
            </label>

            <button
                type="submit"
                disabled={!privacyOk}
                className="btn-concept-filled w-full text-center disabled:opacity-30 disabled:cursor-not-allowed"
            >
                {t("form_submit")}
            </button>
        </form>
    );
}
