"use client"

import ContactFormButton from "./contact-form-button"
import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-indigo-600 dark:to-indigo-900 px-8 py-16 md:py-24 text-center border border-white/10 shadow-2xl transition-all duration-500"
        >
          {/* Decorative background effects */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="flex items-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-white fill-white animate-pulse" style={{ animationDelay: `${s * 0.2}s` }} />
              ))}
            </div>

            <h2 className="text-white mb-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Sua visão merece um <br className="hidden md:block" />
              <span className="text-white/80">desenvolvimento de elite.</span>
            </h2>

            <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed">
              Não aceite o comum. Agende uma consultoria gratuita e descubra como podemos elevar o nível tecnológico do seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl justify-center">
              <div className="w-full sm:flex-1 transform hover:scale-[1.02] transition-transform duration-300 shadow-2xl shadow-indigo-500/30">
                <ContactFormButton className="w-full px-8 py-4 rounded-2xl bg-white text-primary flex items-center justify-center gap-2 font-black uppercase text-xs tracking-[0.2em] shadow-xl" />
              </div>
              <a
                href="#services"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur-md transition-all font-black uppercase text-xs tracking-[0.2em] group"
              >
                Nossas soluções
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-semibold text-white/70">
              <span className="flex items-center gap-2">✓ Consultoria Gratuita</span>
              <span className="flex items-center gap-2">✓ Entrega Ágil</span>
              <span className="flex items-center gap-2">✓ Qualidade Garantida</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
