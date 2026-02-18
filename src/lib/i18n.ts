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
        nav_sectors: "Ferias & Eventos",
        nav_process: "Nuestro Enfoque",
        nav_about: "Nosotros",
        nav_contact: "Contacto",
        nav_cta: "Contactar",

        /* Hero — Home */
        hero_badge: "Growth 4 Events",
        hero_title: "Soporte Operativo para Eventos Corporativos en España",
        hero_sub: "Coordinamos tu presencia en ferias, cenas corporativas, staffing, transfers y más — para que tu equipo se centre en el negocio.",
        hero_cta1: "Planifica tu evento",
        hero_cta2: "Ver servicios",

        /* Home — Problem / Solution */
        home_problem_title: "Coordinar un evento en otro país tiene costes ocultos",
        home_problem_body: "Proveedores desconocidos, logística local compleja, diferencias de idioma y requisitos de cumplimiento. Cada decisión lleva más tiempo cuando no estás sobre el terreno. Nosotros ya lo estamos.",
        home_solution_intro: "Un partner local. Control operativo completo. Sin sobrecostes de coordinación.",

        /* Home — Services section */
        home_services_title: "Soporte integral estructurado por servicio",
        home_services_cta_label: "Ver todos los servicios",
        home_services_cta_copy: "Cada servicio coordinado desde un único punto de contacto local.",

        /* Home — How We Work teaser */
        home_process_title: "Un proceso claro de principio a fin",
        process_link: "Ver nuestro enfoque completo",

        /* Pillars */
        pillars_badge: "Por qué importa",
        pillars_title: "Coordinar eventos internacionales requiere un partner local",
        pillar1_title: "Coordinar en otro país requiere un partner local",
        pillar1_desc: "Red de contactos construida durante años. Proveedores verificados, espacios conocidos y logística local dominada. Cuando tu equipo aterriza en España, todo ya está en su lugar.",

        /* Audience */
        audience_badge: "Para quién",
        audience_title: "¿Tu empresa asiste a ferias o celebra eventos corporativos en España?",
        audience_sub: "Empresas internacionales que necesitan coordinación operativa local sin la carga de gestionarlo desde el extranjero.",
        audience1_title: "Ferias y Exposiciones",
        audience1_desc: "Empresas internacionales con stands en ferias comerciales que necesitan staffing, branding, catering y logística local.",
        audience2_title: "Eventos Corporativos",
        audience2_desc: "Empresas que organizan cenas corporativas, team building o eventos internos en España.",
        audience3_title: "MICE y Viajes Corporativos",
        audience3_desc: "Organizaciones que coordinan viajes corporativos, incentivos y eventos integrados en España.",

        /* CTA */
        cta_title: "¿Planeas un evento en España? Coordinémoslo correctamente.",
        cta_sub: "Cuéntanos qué necesitas. Nosotros nos encargamos del resto.",
        cta_btn: "Contactar",

        /* Footer */
        footer_tagline: "Soporte operativo para eventos corporativos en España.",
        footer_nav: "Navegación",
        footer_contact: "Contacto",
        footer_legal: "Legal",
        footer_privacy: "Política de Privacidad",
        footer_terms: "Aviso Legal",
        footer_cookies: "Cookies",
        footer_rights: "Todos los derechos reservados.",

        /* ─── SERVICES PAGE — 7 exact services ─── */
        services_badge: "Servicios",
        services_title: "Soporte operativo integral para tu evento en España",
        services_sub: "Siete servicios coordinados desde un único punto de contacto local.",

        svc1_title: "Reservas de Locales y Restaurantes",
        svc1_desc: "Seleccionamos y reservamos el espacio adecuado para cenas corporativas, eventos internos y actividades de team building en los mejores restaurantes y locales de España.",
        svc1_short: "Restaurantes y locales de prestigio para cenas corporativas, eventos internos y team building.",
        svc1_items: "Reservas en restaurantes de prestigio,Locales para eventos corporativos privados,Espacios para team building,Cenas de empresa y eventos de cliente",

        svc2_title: "Diseño de Branding para Eventos",
        svc2_desc: "Creamos la identidad visual completa de tu evento: diseño de stands, merchandising, identidad visual, assets digitales, apps de evento y microsites específicos.",
        svc2_short: "Stands, merchandising, identidad visual, diseño digital, apps y microsites de evento.",
        svc2_items: "Diseño y producción de stands de feria,Merchandising y material corporativo,Identidad visual del evento,Diseño digital y redes sociales,App o microsite específico del evento",

        svc3_title: "Staffing Profesional para Stands y Eventos",
        svc3_desc: "Personal cualificado y multilingüe para stands de feria y eventos corporativos privados. Formados, informados y representando tu marca con profesionalidad.",
        svc3_short: "Personal cualificado y multilingüe para stands de feria y eventos corporativos privados.",
        svc3_items: "Personal de stand de feria,Coordinadores de evento,Staff para eventos corporativos privados,Representantes de marca multilingüe",

        svc4_title: "Transfer con Chóferes Profesionales",
        svc4_desc: "Transfers puntuales y discretos con chóferes profesionales. Recogidas en aeropuerto, trayectos interurbanos y transporte a demanda para equipos directivos e invitados.",
        svc4_short: "Recogidas en aeropuerto, trayectos interurbanos y transporte ejecutivo con chóferes profesionales.",
        svc4_items: "Transfers aeropuerto,Trayectos interurbanos,Transporte ejecutivo VIP,Coordinación de flota para grupos",

        svc5_title: "Música en Directo con Bandas Profesionales",
        svc5_desc: "Música en directo para eventos corporativos. Desde tríos de jazz para cócteles hasta bandas completas. Coordinamos el formato adecuado para tu evento y tu audiencia.",
        svc5_short: "Bandas profesionales para cócteles, cenas corporativas y entretenimiento en eventos privados.",
        svc5_items: "Tríos de jazz y música de ambiente,Bandas para cenas corporativas,Entretenimiento para eventos privados,Coordinación de artistas y técnicos",

        svc6_title: "Mobiliario, Alimentación y Catering",
        svc6_desc: "Servicio completo de catering y suministro de mobiliario para stands de feria, eventos corporativos y funciones privadas — aprovisionado y coordinado localmente.",
        svc6_short: "Catering y mobiliario para stands, eventos corporativos y actos privados.",
        svc6_items: "Catering para stands de feria,Alquiler de mobiliario y decoración,Catering para eventos corporativos,Coordinación de alimentos y bebidas",

        svc7_title: "Servicios MICE y Viajes Corporativos",
        svc7_desc: "Gestión integral de viajes corporativos y coordinación MICE: vuelos, hoteles, logística terrestre y ejecución completa del evento en destino.",
        svc7_short: "Vuelos, hoteles, logística completa y coordinación in situ para eventos MICE.",
        svc7_items: "Gestión de viajes corporativos,Reservas de bloques hoteleros,Coordinación de vuelos,Logística terrestre completa,Ejecución integral del evento MICE",

        /* ─── TRADE SHOW SUPPORT PAGE (/sectores) ─── */
        sectors_badge: "Ferias y Eventos Corporativos",
        sectors_title: "Soporte para Ferias y Eventos Corporativos en España",
        sectors_sub: "Soporte operativo integral para empresas internacionales que participan en ferias o celebran eventos corporativos en España.",

        tradeshow_problem_title: "Participar en una feria en otro país es operativamente complejo",
        tradeshow_problem_body: "Coordinar proveedores locales, gestionar el stand, organizar transfers para tu equipo, reservar cenas corporativas, coordinar el staffing — todo desde la distancia. Cada pieza requiere un contacto diferente, en un idioma diferente, con estándares que no conoces. Nosotros te damos un único punto de coordinación local.",

        tradeshow_what_title: "Qué cubrimos en tu feria o evento corporativo",

        sector1_title: "Presencia en Stand",
        sector1_obj: "Stand de feria con presencia de marca sólida y personal cualificado.",
        sector1_pain: "Proveedores locales desconocidos, personal sin formación en marca, logística de montaje y catering sin coordinar.",
        sector1_solution: "Coordinamos el diseño del stand, suministro de mobiliario y catering, staffing de feria y branding — todo bajo un único punto de contacto.",

        sector2_title: "Hospitalidad Corporativa",
        sector2_obj: "Cenas de empresa, eventos privados y entretenimiento para clientes y equipo.",
        sector2_pain: "Desconocimiento de los mejores locales, dificultad para conseguir reservas, coordinación de transfers dispersa.",
        sector2_solution: "Reservamos restaurantes de prestigio, organizamos transfers y coordinamos música en directo para tus eventos privados durante la feria.",

        sector3_title: "Logística y Viaje Corporativo",
        sector3_obj: "Transfers para el equipo, gestión de alojamiento y logística terrestre coordinada.",
        sector3_pain: "Transfers improvisados, hoteles sin bloque negociado, coordinación de grupo fragmentada.",
        sector3_solution: "Gestionamos los transfers profesionales, la negociación y reserva de bloques hoteleros y la coordinación de todo el desplazamiento del equipo.",

        sector_objectives: "Objetivo",
        sector_painpoints: "El problema",
        sector_oursolution: "Cómo lo resolvemos",

        tradeshow_cta_title: "¿Tienes una feria próxima en España?",
        tradeshow_cta_body: "Cuéntanos el evento, las fechas y los servicios que necesitas. Nos encargamos del resto.",

        /* ─── OUR APPROACH PAGE (/proceso) ─── */
        process_badge: "Nuestro Enfoque",
        process_title: "Cómo Trabajamos",
        process_sub: "Un proceso estructurado en cinco fases para garantizar que cada detalle operativo esté bajo control.",

        step1_title: "Briefing Inicial",
        step1_desc: "Recopilamos todos los datos de tu evento: fechas, ubicación, servicios requeridos, tamaño del equipo y objetivos. Hacemos las preguntas correctas desde el principio.",
        step1_short: "Recogemos tus requisitos y hacemos las preguntas correctas.",

        step2_title: "Planificación Estratégica",
        step2_desc: "Diseñamos el plan operativo completo: selección de proveedores, cronograma, estructura de comunicación y protocolos de contingencia.",
        step2_short: "Construimos el plan: proveedores, timings y contingencias.",

        step3_title: "Coordinación Local",
        step3_desc: "Gestionamos cada detalle local antes de que tu equipo llegue: confirmación de proveedores, briefing de staff y verificación de que todo está en su lugar.",
        step3_short: "Gestionamos cada detalle antes de que llegues.",

        step4_title: "Ejecución in Situ",
        step4_desc: "Estamos presentes durante el evento. Coordinamos, resolvemos imprevistos en tiempo real y garantizamos que cada servicio se desarrolle según el plan.",
        step4_short: "Presentes, coordinando y resolviendo en tiempo real.",

        step5_title: "Seguimiento y Cierre",
        step5_desc: "Revisión post-evento, conciliación de facturación y un informe de aprendizajes para mejorar futuras ediciones.",
        step5_short: "Revisión, conciliación de facturas y aprendizajes.",

        process_cta: "Planifica tu próximo evento",

        /* ─── ABOUT PAGE (/nosotros) ─── */
        about_badge: "Nosotros",
        about_title: "Partner operativo local para eventos corporativos en España",
        about_text1: "Growth 4 Events ofrece soporte operativo directo para empresas internacionales que participan en ferias o celebran eventos corporativos en España.",
        about_text2: "Gestionamos los servicios a través de una red local consolidada de proveedores con estándares corporativos: venues, staffing, branding, catering, transfers, música en directo y coordinación MICE.",
        about_text3: "Nuestro valor está en el conocimiento local y la precisión operativa. Sabemos qué proveedores cumplen, qué espacios funcionan y cómo coordinar para que cuando tu equipo llegue, todo esté listo.",

        values_badge: "Cómo operamos",
        value1_title: "Precisión",
        value1_desc: "Cada detalle confirmado, cada proveedor informado, cada incidencia anticipada. Operamos con los mismos estándares que exiges a tu propio equipo.",
        value2_title: "Conocimiento local",
        value2_desc: "Conocemos los venues, los proveedores y la logística del mercado de eventos en España. Ese conocimiento te ahorra tiempo, dinero y problemas.",
        value3_title: "Soporte integrado",
        value3_desc: "Todos los servicios a través de un único contacto operativo. Sin sobrecarga de coordinación, sin mensajes perdidos, sin sorpresas de última hora.",

        /* Contact Page */
        contact_badge: "Contacto",
        contact_title: "Planifiquemos tu próximo evento en España",
        form_name: "Nombre completo",
        form_company: "Empresa",
        form_email: "Email corporativo",
        form_phone: "Teléfono",
        form_event_type: "Tipo de evento",
        form_event_placeholder: "Ej: Feria, Congreso, Cena corporativa...",
        form_city: "Ciudad del evento",
        form_date: "Fecha aproximada",
        form_message: "Cuéntanos qué necesitas",
        form_privacy: "Acepto la",
        form_privacy_link: "política de privacidad",
        form_submit: "Enviar solicitud",
        form_success_title: "Solicitud recibida",
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

        /* FAQ — SEO strategic */
        faq_badge: "Preguntas Frecuentes",
        faq_title: "Lo que necesitas saber",
        faq_q1: "¿Qué incluye el soporte para eventos corporativos en España?",
        faq_a1: "Gestionamos la coordinación operativa completa: reservas de venues y restaurantes, staffing profesional, diseño y producción de branding, transfers con chófer, música en directo, catering y suministro de mobiliario, y servicios MICE con gestión de viajes corporativos. Un único contacto local para todos los servicios.",
        faq_q2: "¿Qué servicios de feria ofrecéis en España?",
        faq_a2: "Cubrimos todos los aspectos operativos de la participación en feria: diseño y producción del stand, staffing de feria, suministro de mobiliario, catering en stand, transfers para el equipo, reservas de cenas corporativas y coordinación hotelera. Trabajamos en los principales recintos feriales de España.",
        faq_q3: "¿Proporcionáis personal para stands en España?",
        faq_a3: "Sí. Proveemos personal cualificado y multilingüe para stands de feria y eventos corporativos en toda España. Todo el personal recibe briefing sobre tu marca y está formado para representar tu empresa profesionalmente.",
        faq_q4: "¿Gestionáis eventos MICE en España?",
        faq_a4: "Sí. Gestionamos la coordinación MICE completa: logística de viajes corporativos (vuelos y hoteles), gestión de venues, catering, staffing y ejecución in situ. Gestionamos la capa operativa completa para que tu equipo se centre en los objetivos del evento.",
        faq_q5: "¿Con cuánta antelación debemos contactaros?",
        faq_a5: "Para ferias, recomendamos 4-8 semanas de antelación para eventos estándar. Para coordinaciones más complejas — delegación completa, viajes MICE, branding extenso — 2-3 meses nos permite asegurar los mejores proveedores y garantizar una ejecución correcta.",

        /* Legacy keys retained for compatibility */
        testimonials_badge: "Referencias",
        testimonials_title: "Lo que dicen",
        event_types_title: "Tipos de eventos",
        event_types_subtitle: "Cobertura completa para eventos corporativos en España.",
    },

    en: {
        /* Nav */
        nav_home: "Home",
        nav_services: "Services",
        nav_sectors: "Trade Show Support",
        nav_process: "Our Approach",
        nav_about: "About",
        nav_contact: "Contact",
        nav_cta: "Get in Touch",

        /* Hero — Home */
        hero_badge: "Growth 4 Events",
        hero_title: "Strategic Operational Support for Corporate Events in Spain",
        hero_sub: "We coordinate your trade show presence, corporate dinners, staffing, transfers, and more — so your team can focus on business.",
        hero_cta1: "Plan Your Event",
        hero_cta2: "View Services",

        /* Home — Problem / Solution */
        home_problem_title: "Coordinating an event in another country has hidden costs",
        home_problem_body: "Unfamiliar vendors, complex local logistics, language gaps, and compliance requirements you don't know. Every decision takes longer when you're not on the ground. We already are.",
        home_solution_intro: "One local partner. Complete operational control. No coordination overhead.",

        /* Home — Services section */
        home_services_title: "Integrated support, structured by service",
        home_services_cta_label: "All services",
        home_services_cta_copy: "Every service coordinated through a single local point of contact.",

        /* Home — How We Work teaser */
        home_process_title: "A clear process from brief to close",
        process_link: "See our full approach",

        /* Pillars */
        pillars_badge: "Why it matters",
        pillars_title: "Coordinating international events requires a local partner",
        pillar1_title: "Coordinating in another country requires a local partner",
        pillar1_desc: "A network built over years. Verified vendors, known venues, and local logistics experience. When your team lands in Spain, everything is already in place.",

        /* Audience */
        audience_badge: "Who it's for",
        audience_title: "Does your company attend trade shows or run corporate events in Spain?",
        audience_sub: "International companies that need local operational coordination without the overhead of managing it from abroad.",
        audience1_title: "Trade Shows & Exhibitions",
        audience1_desc: "International companies with stands at trade fairs that need staffing, branding, catering, and local logistics in Spain.",
        audience2_title: "Corporate Events",
        audience2_desc: "Companies organizing corporate dinners, team building activities, or internal events in Spain.",
        audience3_title: "MICE & Corporate Travel",
        audience3_desc: "Organizations coordinating corporate travel, incentive programs, and integrated event management in Spain.",

        /* CTA */
        cta_title: "Planning an event in Spain? Let's coordinate it properly.",
        cta_sub: "Tell us what you need. We'll take it from there.",
        cta_btn: "Get in Touch",

        /* Footer */
        footer_tagline: "Strategic operational support for corporate events in Spain.",
        footer_nav: "Navigation",
        footer_contact: "Contact",
        footer_legal: "Legal",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        footer_cookies: "Cookies",
        footer_rights: "All rights reserved.",

        /* ─── SERVICES PAGE — 7 exact services ─── */
        services_badge: "Services",
        services_title: "Integrated operational support for your event in Spain",
        services_sub: "Seven services. One local point of contact.",

        svc1_title: "Venue & Restaurant Bookings",
        svc1_desc: "We secure the right venues for corporate dinners, internal events, and team building activities — premium restaurants and exclusive spaces selected for your brief.",
        svc1_short: "Premium restaurants and venues for corporate dinners, team building, and private events.",
        svc1_items: "Corporate dinner reservations,Private event venues,Team building locations,Exclusive restaurant bookings",

        svc2_title: "Event Branding Design",
        svc2_desc: "Custom branding for every touchpoint of your event — stand design and production, merchandising, visual identity, digital assets, event apps, and dedicated microsites.",
        svc2_short: "Stands, merchandising, visual identity, digital design, event apps and microsites.",
        svc2_items: "Exhibition stand design and production,Merchandising and branded materials,Event visual identity,Digital design and social assets,Event app or dedicated microsite",

        svc3_title: "Professional Stand & Event Staffing",
        svc3_desc: "Qualified, multilingual staff for exhibition stands and private corporate events. Briefed on your brand, trained for professional representation, and managed on the ground.",
        svc3_short: "Qualified, multilingual staff for exhibition stands and private corporate events in Spain.",
        svc3_items: "Exhibition stand personnel,Event coordinators,Private corporate event staff,Multilingual brand representatives",

        svc4_title: "Professional Driver Transfers",
        svc4_desc: "Reliable, discreet transfers with professional chauffeurs. Airport pickups, inter-city routes, and on-call transport for executive teams and guests throughout your event.",
        svc4_short: "Airport pickups, inter-city routes, and on-call executive transport with professional chauffeurs.",
        svc4_items: "Airport transfers,Inter-city routes,Executive VIP transfers,Group fleet coordination",

        svc5_title: "Live Music with Professional Bands",
        svc5_desc: "Professional live music for corporate events — jazz trios for cocktail hours to full bands for dinners. We coordinate the right sound for your event format and audience.",
        svc5_short: "Professional bands for cocktail hours, corporate dinners, and private event entertainment.",
        svc5_items: "Jazz and cocktail trios,Corporate dinner bands,Private event entertainment,Artist and technical coordination",

        svc6_title: "Furniture, Food & Catering Supply",
        svc6_desc: "Full catering services and furniture supply for trade show stands, corporate events, and private functions — sourced, coordinated, and delivered locally.",
        svc6_short: "Furniture and catering for exhibition stands, corporate events, and private functions.",
        svc6_items: "Trade show stand catering,Furniture and décor rental,Corporate event catering,Food and beverage coordination",

        svc7_title: "MICE Services & Corporate Travel",
        svc7_desc: "Full-service corporate travel management and MICE coordination — flights, hotels, ground logistics, and complete on-site event execution in Spain.",
        svc7_short: "Flights, hotels, full logistics and on-the-ground coordination for MICE events in Spain.",
        svc7_items: "Corporate travel management,Hotel block reservations,Flight coordination,Complete ground logistics,Full MICE event execution",

        /* ─── TRADE SHOW SUPPORT PAGE (/sectores) ─── */
        sectors_badge: "Trade Show & Corporate Event Support",
        sectors_title: "Trade Show & Corporate Event Support in Spain",
        sectors_sub: "Operational support for international companies attending trade fairs and organizing corporate events in Spain.",

        tradeshow_problem_title: "Attending a trade show abroad is operationally complex",
        tradeshow_problem_body: "Coordinating local vendors, managing your stand, arranging transfers for your team, booking corporate dinners, briefing staff — all from a distance. Each piece requires a different contact, in a different language, with standards you don't know. We give you a single local coordination point for all of it.",

        tradeshow_what_title: "What we cover at your trade show or corporate event",

        sector1_title: "Stand Presence",
        sector1_obj: "A complete, professional stand with solid brand presence and qualified staff.",
        sector1_pain: "Unknown local vendors, unbriefed staff, uncoordinated stand logistics and catering.",
        sector1_solution: "We coordinate stand design, furniture and catering supply, exhibition staffing, and branding — all through a single contact.",

        sector2_title: "Corporate Hospitality",
        sector2_obj: "Corporate dinners, private events, and entertainment for clients and team.",
        sector2_pain: "Not knowing the best venues, difficulty securing last-minute reservations, fragmented transfer coordination.",
        sector2_solution: "We book premium restaurants, coordinate transfers, and arrange live music for your private events during the fair.",

        sector3_title: "Logistics & Corporate Travel",
        sector3_obj: "Team transfers, accommodation coordination, and organized ground logistics.",
        sector3_pain: "Improvised transfers, no negotiated hotel block, fragmented group coordination.",
        sector3_solution: "We manage professional transfers, negotiate and secure hotel blocks, and coordinate your entire team's ground logistics.",

        sector_objectives: "Objective",
        sector_painpoints: "The problem",
        sector_oursolution: "How we solve it",

        tradeshow_cta_title: "Do you have an upcoming trade show or event in Spain?",
        tradeshow_cta_body: "Tell us the event, the dates, and the services you need. We'll coordinate the rest.",

        /* ─── OUR APPROACH PAGE (/proceso) ─── */
        process_badge: "Our Approach",
        process_title: "How We Work",
        process_sub: "A structured five-phase process to ensure every operational detail is under control.",

        step1_title: "Initial Brief",
        step1_desc: "You share your event requirements: dates, location, services needed, team size, and objectives. We ask the right questions from the start.",
        step1_short: "You share requirements. We ask the right questions.",

        step2_title: "Strategic Planning",
        step2_desc: "We design the full operational plan — vendor selection, timelines, communication structure, and contingency protocols.",
        step2_short: "We build the plan: vendors, timelines, contingencies.",

        step3_title: "Local Coordination",
        step3_desc: "We handle every local detail before your team arrives — confirming vendors, briefing staff, and ensuring everything is in place.",
        step3_short: "We handle every detail before you arrive.",

        step4_title: "On-site Execution",
        step4_desc: "We are present throughout the event. Coordinating, solving problems in real time, and ensuring every service runs on schedule.",
        step4_short: "Present, coordinating, and solving in real time.",

        step5_title: "Follow-up & Close",
        step5_desc: "Post-event review, billing reconciliation, and a debrief to capture learnings for future events.",
        step5_short: "Review, reconciliation, and learnings for next time.",

        process_cta: "Plan your next event",

        /* ─── ABOUT PAGE (/nosotros) ─── */
        about_badge: "About",
        about_title: "Local operational partner for corporate events in Spain",
        about_text1: "Growth 4 Events provides direct operational support for international companies attending trade shows and organizing corporate events in Spain.",
        about_text2: "We deliver services through a tightly managed local network built for corporate standards: venues, staffing, branding, catering, transfers, live music, and MICE coordination.",
        about_text3: "Our value is precision and local knowledge. We know the venues, the vendors, and the logistics. When your team lands in Spain, everything is already in place.",

        values_badge: "How we operate",
        value1_title: "Precision",
        value1_desc: "Every detail confirmed, every vendor briefed, every contingency anticipated. We operate with the same standards you expect from your own team.",
        value2_title: "Local Knowledge",
        value2_desc: "We know the venues, vendors, and logistics of the Spanish event market. That knowledge saves you time, money, and problems.",
        value3_title: "Integrated Support",
        value3_desc: "All services through one operational contact. No coordination overhead, no lost messages, no last-minute surprises.",

        /* Contact Page */
        contact_badge: "Contact",
        contact_title: "Let's plan your next event in Spain",
        form_name: "Full name",
        form_company: "Company",
        form_email: "Corporate email",
        form_phone: "Phone",
        form_event_type: "Event type",
        form_event_placeholder: "E.g.: Trade Fair, Congress, Corporate Dinner...",
        form_city: "Event city",
        form_date: "Approximate date",
        form_message: "Tell us what you need",
        form_privacy: "I accept the",
        form_privacy_link: "privacy policy",
        form_submit: "Send request",
        form_success_title: "Request received",
        form_success_msg: "We'll contact you within 24h.",
        contact_phone_label: "Phone & WhatsApp",
        contact_location_label: "Location",
        contact_location_value: "Spain",
        contact_whatsapp: "WhatsApp",

        /* Cookies */
        cookie_title: "We use cookies",
        cookie_message: "This site uses cookies to improve your experience. By continuing to browse, you accept our cookie policy.",
        cookie_accept: "Accept",
        cookie_decline: "Decline",
        cookie_learn_more: "Learn more",

        /* FAQ — SEO strategic */
        faq_badge: "Frequently Asked Questions",
        faq_title: "What you need to know",
        faq_q1: "What is corporate event support in Spain?",
        faq_a1: "We provide end-to-end operational coordination for international companies attending trade shows and organizing corporate events in Spain. This covers venue and restaurant bookings, professional staffing, event branding design, professional driver transfers, live music, catering and furniture supply, and MICE travel coordination — all managed locally through a single contact.",
        faq_q2: "What trade show services do you provide in Spain?",
        faq_a2: "We cover all operational aspects of trade show participation: stand branding and production, exhibition staffing, furniture supply, stand catering, transfers for your team, corporate dinner reservations, and hotel block coordination. We work across all major Spanish fair venues including IFEMA (Madrid), Fira Barcelona, and others.",
        faq_q3: "Do you provide exhibition staffing in Spain?",
        faq_a3: "Yes. We provide qualified, multilingual stand staff and event coordinators for exhibitions and trade fairs across Spain. All staff receive a brand briefing and are trained to represent your company professionally throughout the event.",
        faq_q4: "Can you manage MICE events in Spain?",
        faq_a4: "Yes. We handle full MICE coordination: corporate travel logistics (flights and hotels), event venue management, catering, staffing, and complete on-site execution. We manage the full operational layer so your team can focus entirely on content and business objectives.",
        faq_q5: "How far in advance should I contact you?",
        faq_a5: "For trade shows, we recommend 4–8 weeks in advance for standard events. For larger coordination — full delegation management, MICE travel, complex branding production — 2–3 months gives us time to secure the best vendors and ensure proper execution.",

        /* Legacy keys retained for compatibility */
        testimonials_badge: "References",
        testimonials_title: "What they say",
        event_types_title: "Event types",
        event_types_subtitle: "Full coverage for corporate events in Spain.",
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
    lang: "en",
    setLang: () => { },
    t: (k) => k,
});

export function useLanguage() {
    return useContext(LangContext);
}

export function useLangState(): LangContextType {
    const [lang, setLangState] = useState<Lang>("en");

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
