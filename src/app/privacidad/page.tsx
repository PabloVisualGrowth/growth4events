"use client";

export default function PrivacidadPage() {
    return (
        <div className="min-h-screen bg-[#FDF7E8] text-black overflow-x-hidden selection:bg-[#0cc0df] selection:text-white">
            <div className="texture-overlay" />
            <section className="pt-32 pb-20 px-6 md:px-12 border-b border-black">
                <h1 className="type-display-huge text-5xl md:text-7xl mb-8">Política de Privacidad</h1>
            </section>
            <section className="px-6 md:px-12 py-16 max-w-3xl">
                <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">1. Responsable del tratamiento</h2>
                        <p>El responsable del tratamiento de los datos personales recogidos a través de este sitio web puede ser contactado en hello@growth4events.com.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">2. Datos que recogemos</h2>
                        <p>Recogemos los datos que nos facilitas voluntariamente a través de nuestro formulario de contacto: nombre, empresa, email, teléfono, tipo de evento, ciudad, fecha y mensaje.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">3. Finalidad del tratamiento</h2>
                        <p>Los datos se utilizan exclusivamente para atender tu consulta y, en su caso, enviarte una propuesta comercial personalizada.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">4. Base legal</h2>
                        <p>El tratamiento se basa en el consentimiento que prestas al aceptar esta política y enviar el formulario.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">5. Conservación</h2>
                        <p>Los datos se conservarán mientras exista una relación comercial o durante el plazo legalmente establecido.</p>
                    </div>
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-black mb-3">6. Derechos</h2>
                        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, portabilidad y oposición contactando con hello@growth4events.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
