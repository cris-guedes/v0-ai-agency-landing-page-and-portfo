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
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${isScrolled ? "bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
          }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center" onClick={handleLogoClick}>
              {/* Use a div with the same dimensions during SSR to prevent layout shift */}
              {mounted ? (
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  WebVel
                </span>
              ) : (
                <span className="text-2xl font-bold text-primary">WebVel</span>
              )}
            </Link>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">

                  <li>
                    <Link
                      href="/portfolio"
                      className={`transition-colors ${pathname === "/portfolio"
                        ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                        : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                        }`}
                    >
                      Portfólio
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#booking"
                      className="text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                    >
                      Fale Conosco
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/start"
                      className={`transition-colors ${pathname === "/start"
                        ? "text-[#7A7FEE] dark:text-[#7A7FEE]"
                        : "text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE]"
                        }`}
                    >
                      Iniciar Projeto
                    </Link>
                  </li>
                </ul>
              </nav>

              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
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
