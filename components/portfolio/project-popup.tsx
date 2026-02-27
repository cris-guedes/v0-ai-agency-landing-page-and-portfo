"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ExternalLink, ArrowRight } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import type { PortfolioItem } from "@/utils/csv-parser"
import "./project-popup.css"

interface ProjectPopupProps {
  project: PortfolioItem | null
  onClose: () => void
}

export default function ProjectPopup({ project, onClose }: ProjectPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Add event listener for escape key
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    // Add event listener for clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    // Prevent body scrolling when modal is open
    if (project) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEscKey)
      document.addEventListener("mousedown", handleClickOutside)
    }

    // Cleanup
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleEscKey)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [project, onClose])

  if (!project) return null

  // Create a simplified HTML version of the content without relying on prose classes
  const createSimpleContent = () => {
    // Basic sanitization - remove script tags
    const sanitized = project.content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")

    return sanitized
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/40 backdrop-blur-sm transition-colors duration-500"
        >
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-card border border-border shadow-2xl rounded-3xl relative flex flex-col"
          >
            {/* Header with Close Button - Fixed or at least at the edge */}
            <div className="absolute top-4 right-4 z-50">
              <button
                onClick={onClose}
                className="bg-background/80 backdrop-blur-md hover:bg-muted text-foreground p-2.5 rounded-full border border-border/50 transition-all hover:rotate-90 shadow-sm"
                aria-label="Fecar modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6 md:p-10 custom-scrollbar-minimal">
              {/* Main Image with Glass Container */}

              {/* Main Image with Glass Container */}
              <div className="bg-muted/30 rounded-[2rem] p-4 md:p-8 mb-8 flex items-center justify-center border border-border/40 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Image
                  src={project.mainImage || "/placeholder.svg?height=600&width=800&query=project"}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="max-w-full h-auto object-contain max-h-[450px] rounded-2xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>

              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-border/50">
                <div className="flex items-center gap-5">
                  {project.logo && (
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-white dark:bg-muted flex items-center justify-center p-3 border border-border/40 shadow-inner">
                      <Image
                        src={project.logo || "/placeholder.svg"}
                        alt={`${project.title} logo`}
                        width={64}
                        height={64}
                        className="max-w-full h-auto object-contain"
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground tracking-tight leading-none mb-2">
                      {project.title}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.categories?.filter(c => c !== 'all').map(cat => (
                        <span key={cat} className="text-[10px] uppercase tracking-widest font-bold text-primary px-2 py-0.5 bg-primary/10 rounded-full border border-primary/20">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all text-sm font-bold shadow-xl shadow-primary/25 group/btn"
                  >
                    Visitar Projeto
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                )}
              </div>

              {/* Content Section */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                <div className="lg:col-span-3">
                  <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary/40"></span>
                    Sobre o Projeto
                  </h3>
                  <div className="custom-content text-foreground/90 font-light leading-relaxed">
                    <div
                      className="prose prose-lg dark:prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: createSimpleContent() }}
                    />
                  </div>
                </div>

                <div className="lg:col-span-1 space-y-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-black text-muted-foreground mb-4">Informações</h4>
                    <div className="space-y-4">
                      <p className="text-sm text-foreground/80 leading-relaxed italic">
                        "{project.shortDescription}"
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="flex items-center gap-2 text-primary font-bold text-sm hover:underline group/link"
                    onClick={onClose}
                  >
                    Ler Case Completo
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
