"use client"

import Image from "next/image"
import ProjectForm from "./project-form"

export default function BookingSection() {
    return (
        <section id="booking" className="my-20  scroll-mt-20">
            <div className="rounded-3xl overflow-hidden p-8 md:p-10  bg-white ">
                <div className="text-center mb-8  shadow-none">
                    <h2 className="text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                        Agende uma <span className="text-primary">Conversa</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                        Escolha o melhor horário para falarmos sobre o seu projeto. É gratuito e sem compromisso.
                    </p>

                    <div className="flex justify-center mt-6 mb-2 border-0 shadow-none">
                        <a
                            href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20WebVel."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium shadow-sm hover:bg-[#20bd5a] transition-all hover:scale-105"
                        >
                            <Image
                                src="/whatsapp-logo.png"
                                alt="WhatsApp"
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain"
                            />
                            Chamar no WhatsApp
                        </a>
                    </div>
                </div>

                <div className="w-full h-[600px] overflow-hidden rounded-xl">
                    <ProjectForm />
                </div>
            </div>
        </section>
    )
}
