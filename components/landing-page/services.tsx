import { Palette, Globe, Smartphone, Server, LineChart, Code } from "lucide-react"

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Interfaces modernas, intuitivas e focadas na experiência do usuário. Transformamos sua marca em design visual impactante.",
    icon: Palette,
    color: "bg-primary",
  },
  {
    id: 2,
    title: "Desenvolvimento Web",
    description: "Sites institucionais, Landing Pages e E-commerce de alta performance, otimizados para SEO e conversão.",
    icon: Globe,
    color: "bg-primary",
  },
  {
    id: 3,
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android. Leve seu negócio para a palma da mão dos seus clientes.",
    icon: Smartphone,
    color: "bg-primary",
  },
  {
    id: 4,
    title: "Sistemas Sob Medida",
    description:
      "Soluções de software personalizadas para a gestão do seu negócio. CRMs, ERPs e Dashboards administrativos.",
    icon: Server,
    color: "bg-primary",
  },
  {
    id: 5,
    title: "Consultoria Tech",
    description: "Análise de infraestrutura, arquitetura de software e otimização de processos tecnológicos.",
    icon: LineChart,
    color: "bg-primary",
  },
  {
    id: 6,
    title: "Manutenção e Evolução",
    description: "Suporte contínuo e implementação de novas funcionalidades para garantir que seu software nunca pare.",
    icon: Code,
    color: "bg-primary",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
        Nossas
        <span className="block text-primary">Soluções</span>
      </h2>
      <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
        Combinamos tecnologia de ponta e design inovador para entregar resultados que impulsionam o crescimento do seu negócio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="card p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
          >
            <div
              className={`${service.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}
            >
              <service.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
