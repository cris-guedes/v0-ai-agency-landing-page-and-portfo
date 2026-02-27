"use client"

import { Palette, Globe, Smartphone, Server, LineChart, Code } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Interfaces modernas, intuitivas e focadas na experiência do usuário. Transformamos sua marca em design visual impactante.",
    icon: Palette,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: 2,
    title: "Desenvolvimento Web",
    description: "Sites institucionais, Landing Pages e E-commerce de alta performance, otimizados para SEO e conversão.",
    icon: Globe,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    id: 3,
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android. Leve seu negócio para a palma da mão dos seus clientes.",
    icon: Smartphone,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
  },
  {
    id: 4,
    title: "Sistemas Sob Medida",
    description:
      "Soluções de software personalizadas para a gestão do seu negócio. CRMs, ERPs e Dashboards administrativos.",
    icon: Server,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    id: 5,
    title: "Consultoria Tech",
    description: "Análise de infraestrutura, arquitetura de software e otimização de processos tecnológicos.",
    icon: LineChart,
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
  },
  {
    id: 6,
    title: "Manutenção e Evolução",
    description: "Suporte contínuo e implementação de novas funcionalidades para garantir que seu software nunca pare.",
    icon: Code,
    gradient: "from-rose-500/20 to-red-500/20",
    iconColor: "text-rose-400",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Experiência Digital</span>
          </motion.div>
          <h2 className="text-foreground mb-6 text-4xl md:text-5xl font-bold leading-tight">
            Nossas <span className="text-primary italic">Soluções</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Combinamos tecnologia de ponta e design inovador para entregar resultados que impulsionam o crescimento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card p-8 rounded-2xl group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-40 dark:group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 border border-border/50 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
