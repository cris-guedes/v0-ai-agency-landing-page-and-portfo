import { ImageIcon, LayoutGrid, MessageSquare } from "lucide-react"
import type { SubNavItem } from "./nav-dropdown"
import { iconColors } from "./color-utils"

// Resources dropdown data
export const resourcesDropdownData: SubNavItem[][] = [
  [
    {
      title: "Modelos de Projetos",
      description: "Comece seu projeto com nossos templates otimizados",
      href: "#",
      icon: LayoutGrid,
      color: iconColors.resources.blog,
      external: false,
    },
    {
      title: "Blog de Tecnologia",
      description: "Artigos sobre as últimas tendências em dev",
      href: "#",
      icon: ImageIcon,
      color: iconColors.resources.tutorials,
      external: false,
    },
    {
      title: "Fale Conosco",
      description: "Entre em contato com nossa equipe",
      href: "/contact",
      icon: MessageSquare,
      color: iconColors.resources.community,
      external: false,
    },
  ],
]
