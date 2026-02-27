"use client"

import { motion } from "framer-motion"

interface PortfolioFiltersProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export default function PortfolioFilters({ activeFilter, setActiveFilter }: PortfolioFiltersProps) {
  const filters = [
    { id: "all", label: "Todos os Projetos" },
    { id: "web", label: "Aplicações Web" },
    { id: "web3", label: "Web3 & Blockchain" },
    { id: "ai", label: "Soluções IA" },
    { id: "design", label: "UX/UI Design" },
    { id: "bubble", label: "Projetos Bubble" },
    { id: "mobile", label: "Apps Mobile" },
  ]

  return (
    <div className="mb-12 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <motion.button
          key={filter.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
            : "bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-border/50"
            }`}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  )
}
