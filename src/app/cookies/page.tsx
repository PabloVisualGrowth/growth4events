"use client";

export default function CookiesPage() {
    return (
        <div className="min-h-screen text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />
            <section className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <h1 className="type-display-huge text-5xl md:text-7xl mb-8">Cookies</h1>
            </section>
            <section className="px-6 md:px-12 py-16 max-w-3xl">
                <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
                    <p><strong className="text-black">Última actualización:</strong> [FECHA]</p>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">1. ¿Qué son las cookies?</h2>
                        <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador. Se utilizan para recordar preferencias y mejorar tu experiencia de navegación.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">2. Cookies que utilizamos</h2>
                        <p><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio (ej: preferencia de idioma).</p>
                        <p className="mt-2"><strong>Cookies analíticas:</strong> [Si aplica] Nos permiten medir el tráfico y analizar el comportamiento de los usuarios.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">3. Gestión de cookies</h2>
                        <p>Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se envíe una cookie. Ten en cuenta que algunas funcionalidades del sitio pueden verse afectadas.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">4. Contacto</h2>
                        <p>Para cualquier consulta sobre cookies, puedes contactar con hello@growth4events.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
