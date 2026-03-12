"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import type { PortfolioItem } from "@/utils/csv-parser"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import ProjectPopup from "./project-popup"

interface PortfolioGridProps {
  items: PortfolioItem[]
}

export default function PortfolioMasonryGridFinal({ items }: PortfolioGridProps) {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)

  const openProjectPopup = (project: PortfolioItem) => {
    setSelectedProject(project)
  }

  const closeProjectPopup = () => {
    setSelectedProject(null)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-border/50 bg-card shadow-sm hover:shadow-xl transition-all duration-500"
            onClick={() => openProjectPopup(item)}
          >
            {/* Background Image with Overlay */}
            <Image
              src={item.mainImage || "/placeholder.svg?height=800&width=600"}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 dark:opacity-50 group-hover:opacity-30 dark:group-hover:opacity-40"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-8px]">
              {item.categories && item.categories.length > 1 && (
                <div className="w-fit mb-4 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase">
                  {item.categories[1]}
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm font-light max-w-sm line-clamp-2 mb-4 group-hover:text-foreground transition-colors leading-relaxed">
                {item.shortDescription}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold text-xs tracking-wide uppercase">
                Ver Detalhes
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Glass Border for Premium Look */}
            <div className="absolute inset-0 border border-border/50 rounded-3xl pointer-events-none group-hover:border-primary/30 transition-colors duration-500"></div>
          </motion.div>
        ))}
      </div>

      {/* Project Popup */}
      <ProjectPopup project={selectedProject} onClose={closeProjectPopup} />
    </>
  )
}
