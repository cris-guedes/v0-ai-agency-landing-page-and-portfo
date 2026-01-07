export interface PortfolioItem {
  slug: string
  title: string
  logo: string
  mainImage: string
  shortDescription: string
  projectUrl: string
  content: string
  sortOrder: string
  categories?: string[] // We'll add this for filtering
}

// Add a check for client-side environment at the top of the fetchPortfolioData function

export async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  // Directly return the fallback data (which contains our actual portfolio items)
  // causing the fetching logic to be skipped to avoid server-side URL errors
  return getFallbackPortfolioData()
}

// Fallback data in case CSV file fails to load
function getFallbackPortfolioData(): PortfolioItem[] {
  return [
    {
      slug: "antonio-cristian-portfolio",
      title: "Antonio Cristian - Desenvolvedor",
      logo: "/portfolio-dev.png",
      mainImage: "/portfolio-dev.png",
      shortDescription: "Portfólio pessoal e blog interativo desenvolvido com tecnologias modernas.",
      projectUrl: "#",
      content: `<h3>Sobre o Projeto</h3><p>Website pessoal desenvolvido para apresentar trajetória profissional e artigos técnicos. Com design minimalista e alta performance.</p><h3>Tecnologias</h3><ul><li>Next.js</li><li>React</li><li>Tailwind CSS</li><li>TypeScript</li></ul>`,
      sortOrder: "2024-02-01",
      categories: ["web", "design"],
    },
    {
      slug: "virtual-office",
      title: "Virtual Office - Real Estate",
      logo: "/portfolio-real-estate.png",
      mainImage: "/portfolio-real-estate.png",
      shortDescription: "Plataforma para locação de escritórios virtuais e gestão de espaços.",
      projectUrl: "#",
      content: `<h3>Sobre o Projeto</h3><p>Plataforma completa para visualização e reserva de escritórios virtuais. Interface limpa e foca na conversão.</p><h3>Recursos</h3><ul><li>Agendamento de visitas</li><li>Galeria de fotos</li><li>Planos e Preços</li></ul>`,
      sortOrder: "2024-01-20",
      categories: ["web", "business"],
    },
    {
      slug: "pacex-social",
      title: "Pacex - Social Pet",
      logo: "/portfolio-social.png",
      mainImage: "/portfolio-social.png",
      shortDescription: "Rede social focada em pets, permitindo compartilhamento de fotos e histórias.",
      projectUrl: "#",
      content: `<h3>Sobre o Projeto</h3><p>Uma rede social vibrante para donos de pets. Features de likes, comentários e compartilhamento de experiências.</p><h3>Tecnologias</h3><ul><li>React Native</li><li>Node.js</li><li>Firebase</li></ul>`,
      sortOrder: "2024-01-15",
      categories: ["mobile", "social"],
    },
    {
      slug: "easybook-agenda",
      title: "EasyBook - Agendamentos",
      logo: "/portfolio-booking.png",
      mainImage: "/portfolio-booking.png",
      shortDescription: "Sistema SaaS para gestão de calendários e agendamentos profissionais.",
      projectUrl: "#",
      content: `<h3>Sobre o Projeto</h3><p>Dashboard administrativo para controle total de agendamentos. Visualização diária, semanal e mensal com drag-and-drop.</p><h3>Funcionalidades</h3><ul><li>Gestão de múltiplos profissionais</li><li>Relatórios</li><li>Agenda dinâmica</li></ul>`,
      sortOrder: "2024-01-10",
      categories: ["web", "saas"],
    },
  ]
}

function parseCSV(csvText: string): PortfolioItem[] {
  // Split the CSV into lines
  const lines = csvText.split("\n")

  // Extract headers (first line)
  const headers = lines[0].split(",").map((header) => header.trim().replace(/^"/, "").replace(/"$/, ""))

  // Map CSV columns to our interface properties
  const columnMap: Record<string, keyof PortfolioItem> = {
    Slug: "slug",
    Title: "title",
    Logo: "logo",
    "Main Image": "mainImage",
    "Short Description": "shortDescription",
    "Project URL": "projectUrl",
    Content: "content",
    "Sort Order": "sortOrder",
  }

  // Parse the data rows
  const items: PortfolioItem[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue // Skip empty lines

    // Handle CSV values that might contain commas within quotes
    const values: string[] = []
    let currentValue = ""
    let insideQuotes = false

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j]

      if (char === '"') {
        insideQuotes = !insideQuotes
      } else if (char === "," && !insideQuotes) {
        values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))
        currentValue = ""
      } else {
        currentValue += char
      }
    }

    // Add the last value
    values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))

    // Create the portfolio item
    const item: Partial<PortfolioItem> = {}

    // Map values to properties
    headers.forEach((header, index) => {
      const key = columnMap[header]
      if (key && index < values.length) {
        item[key] = values[index]
      }
    })

    // Add categories based on content or title for filtering
    item.categories = inferCategories(item as PortfolioItem)

    items.push(item as PortfolioItem)
  }

  // Sort by sortOrder
  return items.sort((a, b) => {
    return new Date(b.sortOrder).getTime() - new Date(a.sortOrder).getTime()
  })
}

function inferCategories(item: PortfolioItem): string[] {
  const categories: string[] = ["all"]

  // Add categories based on content keywords
  const contentLower = (item.content || "").toLowerCase()
  const titleLower = (item.title || "").toLowerCase()
  const descriptionLower = (item.shortDescription || "").toLowerCase()

  if (
    contentLower.includes("web3") ||
    contentLower.includes("blockchain") ||
    titleLower.includes("web3") ||
    descriptionLower.includes("web3") ||
    contentLower.includes("crypto") ||
    titleLower.includes("crypto") ||
    titleLower.includes("blockchain")
  ) {
    categories.push("web3")
  }

  if (
    contentLower.includes("bubble") ||
    contentLower.includes("no-code") ||
    contentLower.includes("nocode") ||
    contentLower.includes("no code")
  ) {
    categories.push("bubble")
  }

  if (
    contentLower.includes("ai") ||
    contentLower.includes("artificial intelligence") ||
    titleLower.includes("ai") ||
    descriptionLower.includes("ai") ||
    titleLower.includes("content") ||
    descriptionLower.includes("ai-powered")
  ) {
    categories.push("ai")
  }

  if (
    contentLower.includes("mobile") ||
    contentLower.includes("ios") ||
    contentLower.includes("android") ||
    titleLower.includes("app")
  ) {
    categories.push("mobile")
  }

  if (
    contentLower.includes("design") ||
    contentLower.includes("ui") ||
    contentLower.includes("ux") ||
    contentLower.includes("interface")
  ) {
    categories.push("design")
  }

  // Default to "web" if no specific category is found
  if (categories.length === 1) {
    categories.push("web")
  }

  return categories
}
