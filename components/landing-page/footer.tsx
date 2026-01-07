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
        <Link href="/" className="flex items-center justify-center mb-4">
          {mounted ? (
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              WebVel
            </span>
          ) : (
            <span className="text-2xl font-bold text-primary">WebVel</span>
          )}
        </Link>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
          Desenvolvimento de software de alta performance. Atendendo Cascavel - PR e região com soluções digitais sob medida.
        </p>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WebVel. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
