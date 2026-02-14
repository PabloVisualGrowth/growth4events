"use client";

export default function AvisoLegalPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />
            <section className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <h1 className="type-display-huge text-5xl md:text-7xl mb-8">Aviso Legal</h1>
            </section>
            <section className="px-6 md:px-12 py-16 max-w-3xl">
                <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
                    <p><strong className="text-black">Última actualización:</strong> [FECHA]</p>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">1. Datos identificativos</h2>
                        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, le informamos que el titular de este sitio web es [NOMBRE EMPRESA], con CIF [CIF] y domicilio en [DIRECCIÓN].</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">2. Propiedad intelectual</h2>
                        <p>Todos los contenidos de este sitio web (textos, imágenes, logos, diseño gráfico, código fuente) son propiedad de [NOMBRE EMPRESA] o de terceros que han autorizado su uso.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">3. Limitación de responsabilidad</h2>
                        <p>[NOMBRE EMPRESA] no se hace responsable de los daños y perjuicios que pudieran derivarse del uso de la información contenida en este sitio web.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">4. Legislación aplicable</h2>
                        <p>El presente aviso legal se rige por la legislación española vigente.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">5. Contacto</h2>
                        <p>Para cualquier consulta, puedes contactar con hello@growth4events.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
