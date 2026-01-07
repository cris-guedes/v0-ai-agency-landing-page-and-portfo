import Image from "next/image"
import ContactFormButton from "./contact-form-button"
import { Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-sm border-border/50">
      <div className="p-8 md:p-10 lg:p-16 flex flex-col md:flex-row items-center">
        {/* Text content */}
        <div className="w-full md:w-3/5 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Inovação Digital</span>
          </div>

          <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            WebVel
            <span className="block text-primary">Design & Software</span>
          </h1>

          <p className="my-6 text-base md:text-lg max-w-xl text-muted-foreground leading-relaxed">
            Transformamos suas ideias em realidade digital. Empresa especializada no atendimento de Cascavel - PR e região. Desenvolvimento de sites, sistemas e design exclusivo.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20WebVel."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-foreground hover:bg-green-500/10 hover:text-green-600 hover:border-green-500/50 transition-colors flex items-center gap-2"
            >
              <Image
                src="/whatsapp-logo.png"
                alt="WhatsApp"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              WhatsApp
            </a>
          </div>


          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Design Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Desenvolvimento Ágil</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Suporte Especializado</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
          <Image
            src="/purple-circle-wave-static.png"
            alt="AI Automation"
            width={500}
            height={500}
            className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
          />
        </div>
      </div>
    </section>
  )
}
