"use client"

import Image from "next/image"



export default function WhatsAppButton() {
    const phoneNumber = "5511999999999" // Fictional number
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da WebVel.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-md hover:scale-110 hover:shadow-lg transition-all duration-300 animate-in fade-in zoom-in"
            aria-label="Contato via WhatsApp"
        >
            <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
            />
            <span className="absolute right-full mr-3 bg-white dark:bg-zinc-800 text-foreground px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:blockPointer-events-none">
                Fale Conosco
            </span>
        </a>
    )
}
