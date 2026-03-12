"use client"

import { Palette, Globe, Smartphone, Server, LineChart, Code } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    id: 1,
    title: "Design de Interface",
    description:
      "Desenvolvemos identidades visuais modernas e interfaces intuitivas com o objetivo de elevar a percepção da sua marca e otimizar a experiência do usuário.",
    icon: Palette,
    gradient: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-400",
  },
  {
    id: 2,
    title: "Desenvolvimento de Sites",
    description:
      "Construímos sites com foco em performance e boas práticas de SEO. Trabalhamos para que sua presença online seja eficiente e tecnicamente sólida.",
    icon: Code,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    id: 3,
    title: "Hospedagem",
    description:
      "Oferecemos infraestrutura de alta disponibilidade com foco em estabilidade e proteção de dados. Gestão técnica para que você possa focar no seu negócio.",
    icon: Server,
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
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
            Nossas <span className="text-primary">Soluções</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Combinamos tecnologia de ponta e design inovador para entregar resultados para que você impulsione o crescimento do seu negócio.
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
