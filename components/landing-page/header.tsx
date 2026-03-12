"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { useTheme } from "next-themes"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()

  // Ensure component is mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      // Update header background when scrolled
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Initial check in case page is loaded scrolled down
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle logo click with theme preservation
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // Use router.push instead of Link's default behavior
    router.push("/")
  }

  // Determine which logo to show based on theme
  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? "bg-background/80 dark:bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group" onClick={handleLogoClick}>
              <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/estudiodevlogo-favicon.png"
                  alt="Estúdio Dev Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Use a div with the same dimensions during SSR to prevent layout shift */}
              {mounted ? (
                <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-purple-600">
                  Estúdio Dev
                </span>
              ) : (
                <span className="text-2xl font-black tracking-tight text-primary">Estúdio Dev</span>
              )}
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li>
                    <Link
                      href="/portfolio"
                      className={`text-sm font-medium transition-colors ${pathname === "/portfolio"
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                        }`}
                    >
                      Portfólio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
                    >
                      Fale Conosco
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/start"
                      className={`text-sm font-medium transition-colors ${pathname === "/start"
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                        }`}
                    >
                      Iniciar Projeto
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="h-6 w-px bg-border/50 hidden md:block"></div>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-muted/50 hover:bg-muted text-foreground md:hidden transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  )
}
