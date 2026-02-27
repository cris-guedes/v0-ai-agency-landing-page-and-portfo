"use client"

import { useState, useEffect } from "react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import PortfolioMasonryGridFinal from "./portfolio-masonry-grid-final"
import PortfolioFilters from "./portfolio-filters"
import type { PortfolioItem } from "@/utils/csv-parser"
import { motion } from "framer-motion"

interface PortfolioPageProps {
  initialData: PortfolioItem[]
}

export default function PortfolioPage({ initialData }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)

  // Add a loading state to prevent layout shifts
  useEffect(() => {
    // Simulate loading of images
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const filteredItems =
    activeFilter === "all" ? initialData : initialData.filter((item) => item.categories?.includes(activeFilter))

  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      <div className="relative pt-24 pb-20">
        {/* Smooth transition from header */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent -translate-y-full pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight"
            >
              Nosso <span className="text-primary italic">Portfólio</span>
            </motion.h1>
            <p className="text-gray-700 dark:text-gray-300 max-w-2xl">
              Explore nossos projetos e cases recentes. De automação com IA a marketplaces personalizados, nosso trabalho ajuda empresas a crescerem com inovação.
            </p>
          </div>

          <PortfolioFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-3xl overflow-hidden bg-muted h-80"
                ></div>
              ))}
            </div>
          ) : (
            <PortfolioMasonryGridFinal items={filteredItems} />
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
