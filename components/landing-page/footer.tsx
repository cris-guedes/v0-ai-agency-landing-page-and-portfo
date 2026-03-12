"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-light.png" : "/logo-dark.png"

  return (
    <footer className="container py-8 border-t border-border">
      <div className="flex flex-col items-center text-center">
        <Link href="/" className="flex items-center justify-center gap-2 mb-4 group">
          <Image
            src="/estudiodevlogo-favicon.png"
            alt="Estúdio Dev Logo"
            width={24}
            height={24}
            className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
          />
          {mounted ? (
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Estúdio Dev
            </span>
          ) : (
            <span className="text-2xl font-bold text-primary">Estúdio Dev</span>
          )}
        </Link>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
          Desenvolvimento de sites. Atendendo Cascavel - PR e região com soluções digitais sob medida.
        </p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Estúdio Dev. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
