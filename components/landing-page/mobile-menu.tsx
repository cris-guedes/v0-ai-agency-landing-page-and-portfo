"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, ExternalLink, X } from "lucide-react"
import { useTheme } from "next-themes"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { resolvedTheme } = useTheme()

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  const isDarkMode = mounted && resolvedTheme === "dark"

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])



  if (!isOpen) return null

  // Determine which logo to show based on theme
  const logoSrc = isDarkMode ? "/logo-light.png" : "/logo-dark.png"

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm md:hidden transition-all duration-300" style={{ display: isOpen ? "block" : "none" }}>
      <div
        ref={menuRef}
        className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background border-l border-border shadow-2xl overflow-y-auto transition-colors duration-500"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border bg-background/80 backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2" onClick={onClose}>
            <Image
              src="/estudiodevlogo-favicon.png"
              alt="Estúdio Dev Logo"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            {mounted ? (
              <span className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Estúdio Dev
              </span>
            ) : (
              <span className="text-xl font-black tracking-tight text-primary">Estúdio Dev</span>
            )}
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                className={`flex items-center py-3 px-4 rounded-xl text-base font-medium transition-colors ${pathname === "/"
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                onClick={onClose}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/portfolio"
                className={`flex items-center py-3 px-4 rounded-xl text-base font-medium transition-colors ${pathname === "/portfolio"
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                onClick={onClose}
              >
                Portfólio
              </Link>
            </li>

            <li>
              <Link
                href="/start"
                className={`flex items-center py-3 px-4 rounded-xl text-base font-medium transition-colors ${pathname === "/start"
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:bg-muted hover:text-foreground"
                  }`}
                onClick={onClose}
              >
                Iniciar Projeto
              </Link>
            </li>
          </ul>
        </nav>

        <div className="p-4 mt-4 border-t border-border">
          <Link
            href="/#contact"
            className="flex items-center justify-center w-full py-4 px-4 bg-primary text-primary-foreground rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-95"
            onClick={onClose}
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
