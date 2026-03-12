"use client"

import ProjectForm from "./project-form"
import { useEffect } from "react"
import { useTheme } from "next-themes"

export default function StartProject() {
  const { resolvedTheme } = useTheme()

  // Function to load Tally embeds
  const loadTallyEmbeds = () => {
    if (typeof window !== "undefined" && window.Tally) {
      window.Tally.loadEmbeds()
    }
  }

  // Load Tally embeds when component mounts or theme changes
  useEffect(() => {
    loadTallyEmbeds()

    // Add a class to the iframe's parent element based on the current theme
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const iframe = document.querySelector("iframe[data-tally-src]") as HTMLIFrameElement
          if (iframe) {
            // Set a data attribute on the iframe that can be used in CSS
            iframe.setAttribute("data-theme", resolvedTheme || "light")

            // Try to access the iframe content if possible
            try {
              const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
              if (iframeDoc && iframeDoc.documentElement) {
                iframeDoc.documentElement.setAttribute("data-theme", resolvedTheme || "light")
              }
            } catch (e) {
              console.log("Cannot access iframe content due to same-origin policy")
            }
          }
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
    }
  }, [resolvedTheme])

  return (
    <div className="min-h-screen bg-background w-full transition-colors duration-500">
      <div className="mb-12 text-center pt-16 container">
        <h2 className="text-foreground text-4xl md:text-6xl font-black tracking-tight leading-tight">
          Pronto para Iniciar <br className="hidden md:block" />
          Seu Próximo <span className="text-primary">Projeto</span>?
        </h2>
        <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto font-light">
          Preencha o formulário abaixo e nossa equipe entrará em contato em menos de 24 horas.
        </p>
      </div>
      <div className="container pb-20">
        <div className="bg-card border border-border/50 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <ProjectForm />
        </div>
      </div>
    </div>
  )
}
