"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Plus } from "lucide-react"
import ProjectPopup from "../portfolio/project-popup"
import { fetchPortfolioData } from "@/utils/csv-parser"
import type { PortfolioItem } from "@/utils/csv-parser"
import { motion } from "framer-motion"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)
  const [projects, setProjects] = useState<PortfolioItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Fetch portfolio data on component mount
  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchPortfolioData()
        // Get the first 4 projects for the landing page
        setProjects(data.slice(0, 4))
      } catch (error) {
        console.error("Error loading projects:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProjects()
  }, [])

  const openProjectPopup = (project: PortfolioItem) => {
    setSelectedProject(project)
  }

  const closeProjectPopup = () => {
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-24 bg-card/30 relative transition-colors duration-500">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/50 to-transparent"></div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4"
            >
              <span className="text-[10px] font-bold tracking-widest text-purple-400 uppercase">Portfólio Selecionado</span>
            </motion.div>
            <h2 className="text-foreground text-4xl md:text-5xl font-bold leading-tight">
              Cases de <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">Sucesso</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed font-light md:max-w-xs md:text-right">
            Resultados reais para empresas que buscam inovação e excelência técnica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
              <div key={`skeleton-${index}`} className="h-[400px] rounded-2xl bg-muted animate-pulse"></div>
            ))
            : projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer border border-border/50 bg-card"
                onClick={() => openProjectPopup(project)}
              >
                {/* Background Image with Overlay */}
                <Image
                  src={project.mainImage || "/placeholder.svg?height=600&width=800"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 dark:opacity-60 group-hover:opacity-20 dark:group-hover:opacity-40"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  <div className="w-fit mb-4 p-3 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm font-light max-w-sm line-clamp-2 mb-4 group-hover:text-foreground transition-colors">
                    {project.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Ver projeto completo
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>

                {/* Glass Border for Premium Look */}
                <div className="absolute inset-0 border border-border/50 rounded-3xl pointer-events-none"></div>
              </motion.div>
            ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link
            href="/portfolio"
            className="group relative px-8 py-4 rounded-full bg-secondary hover:bg-secondary/80 border border-border text-foreground transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 font-medium">
              Ver Todos os Cases
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute top-0 -right-2 w-12 h-full bg-primary/5 skew-x-[25deg] transition-all group-hover:right-full group-hover:w-full duration-1000"></div>
          </Link>
        </div>
      </div>


      {/* Project Popup */}
      <ProjectPopup project={selectedProject} onClose={closeProjectPopup} />
    </section>
  )
}
