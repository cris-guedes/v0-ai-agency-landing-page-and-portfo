"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Header from "@/components/landing-page/header"
import Footer from "@/components/landing-page/footer"
import type { PortfolioItem } from "@/utils/csv-parser"

interface PortfolioDetailPageProps {
  project: PortfolioItem
}

export default function PortfolioDetailPage({ project }: PortfolioDetailPageProps) {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />

      {/* Immersive Hero Section - Ultra Premium */}
      <section className="relative w-full h-[65vh] md:h-[75vh] flex items-end overflow-hidden">
        {/* Full Browser Width Image with Parallax-ready feel */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.mainImage || "/placeholder.svg?height=1080&width=1920"}
            alt={project.title}
            fill
            className="object-cover opacity-70 dark:opacity-40 scale-105"
            priority
          />
          {/* Multi-layered overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-black/5 dark:bg-transparent"></div>
        </div>

        <div className="container relative z-10 pb-16 md:pb-24">
          <Link href="/portfolio" className="inline-flex items-center text-primary font-black text-xs uppercase tracking-[0.2em] mb-8 group bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full border border-primary/20 backdrop-blur-md transition-all">
            <ArrowLeft className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Portfólio
          </Link>

          <div className="max-w-5xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.categories?.filter(c => c !== 'all').map(cat => (
                <span key={cat} className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-[10px] font-black tracking-widest uppercase">
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-[0.9] mb-8 animate-in fade-in slide-in-from-left-8 duration-1000">
              {project.title}
            </h1>
            <p className="text-xl md:text-3xl text-muted-foreground font-light max-w-2xl leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Modern Layout with Sticky Sidebar */}
      <div className="container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-20">
            {/* Project Deep Dive */}
            <section>
              <h2 className="text-xs uppercase tracking-[0.3em] font-black text-primary mb-12 flex items-center gap-4">
                <span className="w-12 h-px bg-primary/30"></span>
                Sobre o Case
              </h2>
              <div className="prose prose-2xl dark:prose-invert max-w-none custom-content-detail prose-p:font-light prose-p:leading-relaxed prose-headings:font-black prose-headings:tracking-tight prose-ul:flex prose-ul:flex-wrap prose-ul:gap-2 prose-ul:list-none prose-ul:ps-0 prose-li:ps-0 prose-li:px-3 prose-li:py-1 prose-li:bg-secondary/50 prose-li:text-secondary-foreground prose-li:rounded-md prose-li:text-[10px] prose-li:font-black prose-li:uppercase prose-li:tracking-widest prose-li:border prose-li:border-border/50 prose-li:transition-all hover:prose-li:bg-secondary hover:prose-li:-translate-y-0.5 before:prose-li:content-none after:prose-li:content-none">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </section>
          </div>

          <div className="lg:col-span-4">
            <aside className="sticky top-32">
              <div className="relative group">
                {/* Visual Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                <div className="relative p-10 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-5">
                    <ExternalLink className="w-24 h-24 text-primary" />
                  </div>

                  <div className="relative z-10 space-y-10">
                    <div>
                      <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground mb-6">Marca</h3>
                      {project.logo && (
                        <div className="p-6 bg-white dark:bg-muted/50 rounded-3xl border border-border/40 inline-flex items-center justify-center shadow-inner">
                          <Image
                            src={project.logo || "/placeholder.svg"}
                            alt={`${project.title} logo`}
                            width={100}
                            height={100}
                            className="max-w-full h-auto object-contain grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground">Quick View</h3>
                      <p className="text-lg text-foreground font-medium leading-snug">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="pt-10 border-t border-border/50">
                      {project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-3 w-full py-5 px-8 bg-primary text-primary-foreground rounded-2xl text-sm font-black uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/30 group/btn"
                        >
                          Visitar Projeto
                          <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
