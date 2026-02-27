"use client"

import Image from "next/image"
import ContactFormButton from "./contact-form-button"
import { Sparkles, ArrowRight, MousePointer2, Layout, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 transition-colors duration-500">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(122,127,238,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_30%,rgba(122,127,238,0.15),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-background -z-20"></div>
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] -z-10"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary uppercase">Estúdio de Inovação Digital</span>
            </div>

            <h1 className="text-foreground text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Design & Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                de Alto Nível
              </span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-light">
              Transformamos ideias em experiências digitais memoráveis. Especialistas em Cascavel - PR e região para sites, sistemas e design estratégico que impulsionam resultados.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full max-w-xl">
              <div className="w-full sm:flex-1 glow-effect group">
                <ContactFormButton className="w-full px-7 py-3.5 rounded-xl bg-primary text-primary-foreground flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/25" />
              </div>
              <a
                href="https://wa.me/5545988414559"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 px-7 py-3.5 rounded-xl border border-border hover:border-primary/50 text-foreground/90 hover:text-foreground glass-effect transition-all flex items-center justify-center gap-2 font-black uppercase text-[10px] tracking-widest hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Image
                  src="/whatsapp-logo.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                Consultoria Grátis
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-border/50 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Layout className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-medium text-sm">Design Premium</span>
                  <span className="text-muted-foreground text-xs">Exclusivo & Moderno</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Zap className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground font-medium text-sm">Alta Performance</span>
                  <span className="text-muted-foreground text-xs">Código Otimizado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="relative z-10 glass-effect rounded-2xl overflow-hidden border border-border/50 deep-shadow transform hover:rotate-1 transition-transform duration-700">
              {/* Browser Header */}
              <div className="bg-muted px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 opacity-60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400 opacity-60"></div>
                </div>
                <div className="flex-1 text-center">
                  <div className="bg-background/50 rounded px-3 py-1 text-[10px] text-muted-foreground inline-block w-40 truncate">
                    estudiodev.com.br/projeto-premium
                  </div>
                </div>
              </div>

              {/* Mockup Dashboard Content */}
              <div className="p-6 bg-card transition-colors duration-500">
                <div className="grid grid-cols-12 gap-4 h-80">
                  <div className="col-span-3 space-y-3">
                    <div className="h-8 bg-muted rounded-md animate-pulse"></div>
                    <div className="h-2 bg-muted rounded w-full"></div>
                    <div className="h-2 bg-muted rounded w-2/3"></div>
                    <div className="pt-4 space-y-2">
                      <div className="h-1 bg-primary/30 rounded w-full"></div>
                      <div className="h-1 bg-muted rounded w-full"></div>
                      <div className="h-1 bg-muted rounded w-full"></div>
                    </div>
                  </div>
                  <div className="col-span-9 space-y-4">
                    <div className="h-24 bg-gradient-to-r from-primary/10 to-transparent rounded-lg border border-primary/20 p-4 flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="h-3 bg-foreground/20 rounded w-32"></div>
                        <div className="h-5 bg-foreground/10 rounded w-48"></div>
                      </div>
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-32 bg-muted/30 rounded-lg border border-border/50 p-3">
                        <div className="h-2 bg-foreground/10 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-muted/50 rounded-md mt-4"></div>
                      </div>
                      <div className="h-32 bg-muted/30 rounded-lg border border-border/50 p-3">
                        <div className="h-2 bg-foreground/10 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-muted/50 rounded-md mt-4"></div>
                      </div>
                      <div className="col-span-1 h-32 bg-primary/5 rounded-lg border border-primary/10 p-3">
                        <div className="h-2 bg-foreground/10 rounded w-1/2 mb-2"></div>
                        <div className="h-8 bg-primary/20 rounded-md mt-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 glass-effect p-4 rounded-xl border border-border/50 shadow-2xl hidden md:flex items-center gap-3"
            >
              <div className="p-2 bg-primary rounded-lg">
                <MousePointer2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground text-xs font-semibold">User Experience</span>
                <span className="text-muted-foreground text-[10px]">99% Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
