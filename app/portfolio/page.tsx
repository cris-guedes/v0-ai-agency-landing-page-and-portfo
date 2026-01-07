import PortfolioPage from "@/components/portfolio/portfolio-page"
import { fetchPortfolioData } from "@/utils/csv-parser"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfólio | Automatic",
  description:
    "Explore nossos projetos e cases recentes. De automação com IA a marketplaces personalizados, nosso trabalho ajuda empresas a crescerem com inovação.",
}

export default async function Portfolio() {
  const portfolioData = await fetchPortfolioData()

  return <PortfolioPage initialData={portfolioData} />
}
