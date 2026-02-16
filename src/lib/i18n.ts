"use client";

import { useState, useEffect, createContext, useContext } from "react";

export type Lang = "es" | "en";

/* ───────────────────────────────────────────────────
   Dictionary — all user-facing copy lives here
   ─────────────────────────────────────────────────── */
export const dict: Record<Lang, Record<string, string>> = {
    es: {
        /* Nav */
        nav_home: "Inicio",
        nav_services: "Servicios",
        nav_sectors: "Sectores",
        nav_process: "Proceso",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        nav_cta: "Hablemos",

        /* Hero */
        hero_badge: "Tu partner 360° en eventos",
        hero_title: "Conectamos tu evento con los mejores partners",
        hero_sub: "Accede a una red especializada de proveedores para cada detalle de tu evento corporativo. Sin complicaciones, un solo contacto.",
        hero_cta1: "Agenda una llamada",
        hero_cta2: "Ver servicios",

        /* Pillars */
        pillars_badge: "Red de partners",
        pillars_title: "Un ecosistema completo para eventos corporativos",
        pillar1_title: "Red de Partners Especializados",
        pillar1_desc: "Conectamos tu empresa con los mejores proveedores de staffing, DMC, MICE, transfers, catering, mobiliario, branding y espacios exclusivos.",

        /* Audience */
        audience_badge: "Para quién",
        audience_title: "¿Tu empresa organiza eventos corporativos en España?",
        audience_sub: "Si necesitas acceso rápido a proveedores especializados sin gestionar múltiples contactos, estamos aquí.",
        audience1_title: "Ferias & Congresos",
        audience1_desc: "Empresas que participan en ferias comerciales y congresos internacionales.",
        audience2_title: "Eventos MICE",
        audience2_desc: "Reuniones corporativas, incentivos y lanzamientos de producto.",
        audience3_title: "Roadshows",
        audience3_desc: "Eventos itinerantes que necesitan réplica consistente en múltiples ciudades.",

        /* Testimonials */
        testimonials_badge: "Testimonios",
        testimonials_title: "Confían en nosotros",
        testimonial1_quote: "Growth 4 Events nos conectó con partners excepcionales. Todo coordinado, sin dolores de cabeza.",
        testimonial1_author: "Director de Marketing",
        testimonial1_company: "Empresa Tech",
        testimonial2_quote: "Un solo contacto para todo nuestro roadshow. Simplificó radicalmente nuestra logística.",
        testimonial2_author: "Event Manager",
        testimonial2_company: "Multinacional",

        /* CTA */
        cta_title: "¿Listo para simplificar tu próximo evento?",
        cta_sub: "Agenda una llamada estratégica de 20 minutos. Sin compromiso.",
        cta_btn: "Agenda tu llamada",

        /* Footer */
        footer_tagline: "Tu partner 360° en eventos corporativos en España.",
        footer_nav: "Navegación",
        footer_contact: "Contacto",
        footer_legal: "Legal",
        footer_privacy: "Política de Privacidad",
        footer_terms: "Aviso Legal",
        footer_cookies: "Cookies",
        footer_rights: "Todos los derechos reservados.",

        /* Services Page */
        services_badge: "Servicios",
        services_title: "Un punto de contacto para todas las necesidades de tu evento",
        services_sub: "Accede a nuestra red de partners especializados. Te conectamos con los mejores, tú decides.",
        svc1_title: "Staffing & Personal",
        svc1_desc: "Azafatas, personal de stand, intérpretes, coordinadores en sala y equipos especializados para tu evento.",
        svc1_items: "Personal de stand y recepción,Azafatas y promotores,Coordinadores de evento",
        svc2_title: "DMC & MICE",
        svc2_desc: "Gestión integral de eventos corporativos, incentivos, transfers VIP y experiencias para grupos.",
        svc2_items: "Gestión de incentivos corporativos,Transfers VIP y logística,Actividades de team building,Organización de congresos",
        svc3_title: "Catering & Espacios",
        svc3_desc: "Reservas en restaurantes exclusivos, catering gourmet, alquiler de mobiliario y decoración para eventos.",
        svc3_items: "Catering gourmet,Alquiler de mobiliario y decoración,Reservas en espacios exclusivos,Grupos de música en directo,Gestión de locales y venues",
        svc4_title: "Branding & Logística",
        svc4_desc: "Producción de branding para eventos, reservas de vuelos, gestión de ticketing y coordinación logística end-to-end.",
        svc4_items: "Branding y material gráfico,Reservas de vuelos corporativos,Gestión all-in-one de ticketing,Coordinación logística integral",

        /* Sectors Page */
        sectors_badge: "Sectores",
        sectors_title: "Casos de uso reales",
        sectors_sub: "Cada tipo de evento requiere partners específicos. Estas son las situaciones donde más valor aportamos.",
        sector1_title: "Ferias & Exposiciones",
        sector1_obj: "Stand con personal cualificado, logística impecable y presencia de marca consistente.",
        sector1_pain: "Múltiples proveedores, falta de coordinación, personal no formado.",
        sector1_solution: "Te conectamos con staffing especializado, catering, mobiliario y branding bajo un único punto de contacto.",
        sector2_title: "Eventos Corporativos",
        sector2_obj: "Crear experiencias memorables con catering, venue y producción de primer nivel.",
        sector2_pain: "Proveedores desconectados, presupuestos opacos, falta de control.",
        sector2_solution: "Acceso directo a nuestra red de partners premium con tarifas transparentes y coordinación central.",
        sector3_title: "Roadshows Multi-Ciudad",
        sector3_obj: "Replicar experiencia consistente en múltiples ciudades con partners locales.",
        sector3_pain: "Falta de estandarización, logística fragmentada, calidad desigual.",
        sector3_solution: "Red de partners homologados en toda España. Mismo estándar, adaptación local.",
        sector_objectives: "Objetivos",
        sector_painpoints: "Pain Points",
        sector_oursolution: "Nuestra Solución",

        /* Process Page */
        process_badge: "Proceso",
        process_title: "Cómo trabajamos",
        process_sub: "Un proceso transparente diseñado para conectarte con los partners adecuados.",
        step1_title: "Briefing",
        step1_desc: "Nos cuentas qué necesitas: tipo de evento, ciudad, fecha, servicios requeridos y presupuesto aproximado.",
        step2_title: "Matching",
        step2_desc: "Identificamos los partners de nuestra red que mejor se adaptan a tus necesidades específicas.",
        step3_title: "Presentación",
        step3_desc: "Te presentamos opciones curadas con propuestas y presupuestos. Tú decides con quién trabajar.",
        step4_title: "Coordinación",
        step4_desc: "Facilitamos la comunicación y coordinación entre tu equipo y los partners seleccionados.",

        /* About Page */
        about_badge: "Nosotros",
        about_title: "Una red de partners especializada en eventos corporativos",
        about_text1: "Growth 4 Events es tu punto de acceso a un ecosistema completo de proveedores especializados en eventos corporativos en España.",
        about_text2: "No ejecutamos los servicios directamente. Nuestra propuesta de valor es conectarte con los mejores partners del mercado y facilitar la coordinación.",
        about_text3: "Hemos construido relaciones con proveedores de primer nivel en staffing, DMC, catering, venues, branding, logística y más. Tú accedes a toda la red con un solo contacto.",
        values_badge: "Valores",
        value1_title: "Transparencia",
        value1_desc: "Sin intermediaciones ocultas. Presentamos opciones claras y tú decides.",
        value2_title: "Calidad",
        value2_desc: "Trabajamos solo con partners que cumplen nuestros estándares de calidad y profesionalidad.",
        value3_title: "Simplificación",
        value3_desc: "Un solo contacto para acceder a múltiples servicios. Ahorramos tu tiempo y complejidad.",

        /* Contact Page */
        contact_badge: "Contacto",
        contact_title: "Hablemos de tu próximo evento",
        form_name: "Nombre completo",
        form_company: "Empresa",
        form_email: "Email corporativo",
        form_phone: "Teléfono",
        form_event_type: "Tipo de evento",
        form_event_placeholder: "Ej: Feria, Congreso, Lanzamiento...",
        form_city: "Ciudad del evento",
        form_date: "Fecha aproximada",
        form_message: "Cuéntanos qué necesitas",
        form_privacy: "Acepto la",
        form_privacy_link: "política de privacidad",
        form_submit: "Enviar solicitud",
        form_success_title: "¡Solicitud enviada!",
        form_success_msg: "Te contactaremos en menos de 24h.",
        contact_phone_label: "Teléfono y WhatsApp",
        contact_location_label: "Ubicación",
        contact_location_value: "España",
        contact_whatsapp: "WhatsApp",

        /* Cookies */
        cookie_title: "Usamos cookies",
        cookie_message: "Este sitio usa cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de cookies.",
        cookie_accept: "Aceptar",
        cookie_decline: "Rechazar",
        cookie_learn_more: "Más información",

        /* FAQ Section */
        faq_badge: "Preguntas Frecuentes",
        faq_title: "Todo lo que necesitas saber",
        faq_q1: "¿Qué tipos de eventos corporativos organizáis?",
        faq_a1: "Cubrimos ferias comerciales, congresos, eventos MICE (Meetings, Incentives, Conferences, Exhibitions), roadshows internacionales, presentaciones de producto y eventos de networking. Nuestra red de partners especializados nos permite gestionar desde eventos pequeños hasta grandes convenciones.",
        faq_q2: "¿Trabajáis en toda España?",
        faq_a2: "Sí, nuestra red de partners cubre toda España con proveedores locales en las principales ciudades: Madrid, Barcelona, Valencia, Sevilla, Bilbao y más. También gestionamos eventos internacionales en Europa y Latinoamérica.",
        faq_q3: "¿Qué incluye vuestro servicio?",
        faq_a3: "Conectamos con proveedores especializados en staffing (azafatas, personal de eventos), catering gourmet, logística integral, espacios y venues, branding y material gráfico, gestión DMC/MICE, y coordinación end-to-end. Un solo contacto para todo tu evento.",
        faq_q4: "¿Cuánto tiempo necesitáis para organizar un evento?",
        faq_a4: "Depende del tipo y tamaño del evento. Para eventos pequeños podemos gestionar en 2-3 semanas. Para ferias o congresos grandes, recomendamos 2-3 meses de antelación para asegurar los mejores proveedores y espacios.",
        faq_q5: "¿Tenéis personal bilingüe disponible?",
        faq_a5: "Sí, contamos con azafatas, coordinadores y personal de eventos bilingüe (español-inglés) y multilingüe para eventos internacionales. Perfecto para congresos y ferias con asistentes de diferentes países.",

        /* Event Types Section */
        event_types_title: "Tipos de Eventos que Gestionamos",
        event_types_subtitle: "Nuestra red de partners especializados cubre todo el espectro de eventos corporativos en España y el extranjero.",
        event_type1_title: "Ferias Comerciales y Trade Shows",
        event_type1_desc: "Gestión integral de stands, personal especializado, logística y coordinación para ferias internacionales. Desde montaje hasta desmontaje.",
        event_type2_title: "Congresos y Conferencias",
        event_type2_desc: "Organización completa de congresos empresariales con gestión de espacios, catering, audiovisuales y coordinación de ponentes.",
        event_type3_title: "Eventos MICE",
        event_type3_desc: "Meetings, Incentives, Conferences, Exhibitions: gestión DMC profesional con proveedores cualificados y experiencia internacional.",
        event_type4_title: "Roadshows y Lanzamientos",
        event_type4_desc: "Eventos multiciudad para presentaciones de producto, con coordinación logística, personal y materiales en cada localización.",
        event_type5_title: "Team Building",
        event_type5_desc: "Actividades y eventos de incentivo para empresas: desde experiencias outdoor hasta eventos gastronómicos y culturales.",
        event_type6_title: "Presentaciones Corporativas",
        event_type6_desc: "Eventos de networking, presentaciones de resultados, juntas de accionistas y convenciones de ventas con producción a medida.",
    },

    en: {
        /* Nav */
        nav_home: "Home",
        nav_services: "Services",
        nav_sectors: "Sectors",
        nav_process: "Process",
        nav_about: "About",
        nav_contact: "Contact",
        nav_cta: "Let's Talk",

        /* Hero */
        hero_badge: "Your 360° event partner",
        hero_title: "Connecting your event with the best partners",
        hero_sub: "Access a specialized network of providers for every detail of your corporate event. No hassle, one single contact.",
        hero_cta1: "Book a call",
        hero_cta2: "View services",

        /* Pillars */
        pillars_badge: "Partner Network",
        pillars_title: "A complete ecosystem for corporate events",
        pillar1_title: "Specialized Partner Network",
        pillar1_desc: "We connect your company with the best staffing, DMC, MICE, transfers, catering, furniture, branding, and exclusive venue providers.",

        /* Audience */
        audience_badge: "Who it's for",
        audience_title: "Does your company organize corporate events in Spain?",
        audience_sub: "If you need fast access to specialized providers without managing multiple contacts, we're here.",
        audience1_title: "Trade Fairs & Congresses",
        audience1_desc: "Companies participating in trade fairs and international congresses.",
        audience2_title: "MICE Events",
        audience2_desc: "Corporate meetings, incentives, and product launches.",
        audience3_title: "Roadshows",
        audience3_desc: "Traveling events that need consistent replication across multiple cities.",

        /* Testimonials */
        testimonials_badge: "Testimonials",
        testimonials_title: "They trust us",
        testimonial1_quote: "Growth 4 Events connected us with exceptional partners. Everything coordinated, no headaches.",
        testimonial1_author: "Marketing Director",
        testimonial1_company: "Tech Company",
        testimonial2_quote: "One single contact for our entire roadshow. It radically simplified our logistics.",
        testimonial2_author: "Event Manager",
        testimonial2_company: "Multinational",

        /* CTA */
        cta_title: "Ready to simplify your next event?",
        cta_sub: "Book a 20-minute strategic call. No commitment.",
        cta_btn: "Book your call",

        /* Footer */
        footer_tagline: "Your 360° corporate event partner in Spain.",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_legal: "Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_cookies: "Cookies",
        footer_rights: "All rights reserved.",

        /* Services Page */
        services_badge: "Services",
        services_title: "One point of contact for all your event needs",
        services_sub: "Access our network of specialized partners. We connect you with the best, you decide.",
        svc1_title: "Staffing & Personnel",
        svc1_desc: "Hostesses, stand personnel, interpreters, venue coordinators, and specialized teams for your event.",
        svc1_items: "Stand and reception personnel,Hostesses and promoters,Event coordinators",
        svc2_title: "DMC & MICE",
        svc2_desc: "Full management of corporate events, incentives, VIP transfers, and group experiences.",
        svc2_items: "Corporate incentive management,VIP transfers and logistics,Team building activities,Congress organization",
        svc3_title: "Catering & Venues",
        svc3_desc: "Exclusive restaurant bookings, gourmet catering, furniture rental, and event decoration.",
        svc3_items: "Gourmet catering,Furniture and decoration rental,Exclusive venue reservations,Live music groups,Venue and location management",
        svc4_title: "Branding & Logistics",
        svc4_desc: "Event branding production, corporate flight bookings, all-in-one ticketing management, and end-to-end logistics coordination.",
        svc4_items: "Branding and graphic materials,Corporate flight bookings,All-in-one ticketing management,Full logistics coordination",

        /* Sectors Page */
        sectors_badge: "Sectors",
        sectors_title: "Real use cases",
        sectors_sub: "Every type of event requires specific partners. These are the situations where we add the most value.",
        sector1_title: "Trade Fairs & Exhibitions",
        sector1_obj: "Stand with qualified personnel, flawless logistics, and consistent brand presence.",
        sector1_pain: "Multiple vendors, lack of coordination, untrained staff.",
        sector1_solution: "We connect you with specialized staffing, catering, furniture, and branding through a single point of contact.",
        sector2_title: "Corporate Events",
        sector2_obj: "Create memorable experiences with premium catering, venue, and production.",
        sector2_pain: "Disconnected vendors, opaque budgets, lack of control.",
        sector2_solution: "Direct access to our premium partner network with transparent pricing and central coordination.",
        sector3_title: "Multi-City Roadshows",
        sector3_obj: "Replicate consistent experience across multiple cities with local partners.",
        sector3_pain: "Lack of standardization, fragmented logistics, uneven quality.",
        sector3_solution: "Network of certified partners throughout Spain. Same standard, local adaptation.",
        sector_objectives: "Objectives",
        sector_painpoints: "Pain Points",
        sector_oursolution: "Our Solution",

        /* Process Page */
        process_badge: "Process",
        process_title: "How we work",
        process_sub: "A transparent process designed to connect you with the right partners.",
        step1_title: "Briefing",
        step1_desc: "Tell us what you need: event type, city, date, required services, and approximate budget.",
        step2_title: "Matching",
        step2_desc: "We identify the partners from our network that best fit your specific needs.",
        step3_title: "Presentation",
        step3_desc: "We present curated options with proposals and budgets. You decide who to work with.",
        step4_title: "Coordination",
        step4_desc: "We facilitate communication and coordination between your team and the selected partners.",

        /* About Page */
        about_badge: "About Us",
        about_title: "A specialized partner network for corporate events",
        about_text1: "Growth 4 Events is your access point to a complete ecosystem of specialized providers for corporate events in Spain.",
        about_text2: "We don't execute services directly. Our value proposition is connecting you with the best partners in the market and facilitating coordination.",
        about_text3: "We've built relationships with top-tier providers in staffing, DMC, catering, venues, branding, logistics, and more. You access the entire network with a single contact.",
        values_badge: "Values",
        value1_title: "Transparency",
        value1_desc: "No hidden intermediation. We present clear options and you decide.",
        value2_title: "Quality",
        value2_desc: "We only work with partners that meet our quality and professionalism standards.",
        value3_title: "Simplification",
        value3_desc: "One single contact to access multiple services. We save you time and complexity.",

        /* Contact Page */
        contact_badge: "Contact",
        contact_title: "Let's talk about your next event",
        form_name: "Full name",
        form_company: "Company",
        form_email: "Corporate email",
        form_phone: "Phone",
        form_event_type: "Event type",
        form_event_placeholder: "E.g.: Trade Fair, Congress, Launch...",
        form_city: "Event city",
        form_date: "Approximate date",
        form_message: "Tell us what you need",
        form_privacy: "I accept the",
        form_privacy_link: "privacy policy",
        form_submit: "Send request",
        form_success_title: "Request sent!",
        form_success_msg: "We'll contact you within 24h.",
        contact_phone_label: "Phone & WhatsApp",
        contact_location_label: "Location",
        contact_location_value: "Spain",
        contact_whatsapp: "WhatsApp",

        /* FAQ Section */
        faq_badge: "Frequently Asked Questions",
        faq_title: "Everything you need to know",
        faq_q1: "What types of corporate events do you organize?",
        faq_a1: "We cover trade shows, congresses, MICE events (Meetings, Incentives, Conferences, Exhibitions), international roadshows, product launches, and networking events. Our network of specialized partners allows us to manage everything from small events to large conventions.",
        faq_q2: "Do you work throughout Spain?",
        faq_a2: "Yes, our partner network covers all of Spain with local suppliers in major cities: Madrid, Barcelona, Valencia, Seville, Bilbao, and more. We also manage international events in Europe and Latin America.",
        faq_q3: "What does your service include?",
        faq_a3: "We connect you with specialized suppliers in staffing (hostesses, event personnel), gourmet catering, comprehensive logistics, venues and spaces, branding and graphic materials, DMC/MICE management, and end-to-end coordination. One single contact for your entire event.",
        faq_q4: "How much time do you need to organize an event?",
        faq_a4: "It depends on the type and size of the event. For small events we can manage in 2-3 weeks. For large fairs or congresses, we recommend 2-3 months in advance to ensure the best suppliers and spaces.",
        faq_q5: "Do you have bilingual staff available?",
        faq_a5: "Yes, we have bilingual (Spanish-English) and multilingual hostesses, coordinators, and event staff for international events. Perfect for congresses and fairs with attendees from different countries.",

        /* Event Types Section */
        event_types_title: "Types of Events We Manage",
        event_types_subtitle: "Our network of specialized partners covers the full spectrum of corporate events in Spain and abroad.",
        event_type1_title: "Trade Shows and Exhibitions",
        event_type1_desc: "Comprehensive management of booths, specialized staff, logistics, and coordination for international trade shows. From setup to teardown.",
        event_type2_title: "Congresses and Conferences",
        event_type2_desc: "Complete organization of corporate congresses with venue management, catering, audiovisual coordination, and speaker coordination.",
        event_type3_title: "MICE Events",
        event_type3_desc: "Meetings, Incentives, Conferences, Exhibitions: professional DMC management with qualified suppliers and international experience.",
        event_type4_title: "Roadshows and Launches",
        event_type4_desc: "Multi-city events for product presentations, with logistical coordination, staff, and materials at each location.",
        event_type5_title: "Team Building",
        event_type5_desc: "Corporate incentive activities and events: from outdoor experiences to gastronomic and cultural events.",
        event_type6_title: "Corporate Presentations",
        event_type6_desc: "Networking events, results presentations, shareholder meetings, and sales conventions with customized production.",

        /* Cookies */
        cookie_title: "We use cookies",
        cookie_message: "This site uses cookies to improve your experience. By continuing to browse, you accept our cookie policy.",
        cookie_accept: "Accept",
        cookie_decline: "Decline",
        cookie_learn_more: "Learn more",
    },
};

/* ───────────────────────────────────────────────────
   React context + hook
   ─────────────────────────────────────────────────── */
interface LangContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
}

export const LangContext = createContext<LangContextType>({
    lang: "es",
    setLang: () => { },
    t: (k) => k,
});

export function useLanguage() {
    return useContext(LangContext);
}

export function useLangState(): LangContextType {
    const [lang, setLangState] = useState<Lang>("es");

    useEffect(() => {
        const stored = localStorage.getItem("g4e-lang") as Lang | null;
        if (stored && (stored === "es" || stored === "en")) {
            setLangState(stored);
        } else {
            // Geo-detect: default ES for Spain timezone, EN otherwise
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            const isSpain = tz.includes("Madrid") || tz.includes("Canary");
            setLangState(isSpain ? "es" : "en");
        }
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        localStorage.setItem("g4e-lang", l);
    };

    const t = (key: string): string => dict[lang][key] || key;

    return { lang, setLang, t };
}
