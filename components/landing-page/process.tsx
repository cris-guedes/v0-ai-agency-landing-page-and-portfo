"use client"

import { Search, PenTool, Code2, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        id: 1,
        number: "01",
        title: "Descoberta",
        description: "Entendemos seu negócio, objetivos e público-alvo para definir a melhor estratégia.",
        icon: Search,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
    },
    {
        id: 2,
        number: "02",
        title: "Design",
        description: "Criamos protótipos visuais e interfaces intuitivas focadas na experiência do usuário.",
        icon: PenTool,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
    },
    {
        id: 3,
        number: "03",
        title: "Desenvolvimento",
        description: "Construímos seu software com código limpo, tecnologias modernas e performance.",
        icon: Code2,
        color: "text-primary",
        bg: "bg-primary/10",
    },
    {
        id: 4,
        number: "04",
        title: "Lançamento",
        description: "Finalização e publicação da plataforma, disponibilizando sua nova estrutura digital para o acesso de clientes.",
        icon: Rocket,
        color: "text-emerald-400",
        bg: "bg-emerald-400/10",
    },
]

export default function Process() {
    return (
        <section id="process" className="py-24 relative">
            <div className="container relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4"
                    >
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Metodologia</span>
                    </motion.div>
                    <h2 className="text-foreground mb-6 text-4xl md:text-5xl font-bold leading-tight">
                        Como <span className="text-primary">Trabalhamos</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed font-light">
                        Um processo ágil e transparente para transformar sua ideia em um produto digital de sucesso.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border/30 to-transparent -translate-y-12 transition-colors duration-500"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="feature-card relative group p-8 rounded-3xl flex flex-col items-center text-center overflow-hidden transition-colors duration-500"
                        >
                            {/* Background Big Number */}
                            <span className="absolute -top-4 -right-2 text-8xl font-black text-foreground/[0.03] dark:text-white/[0.03] select-none group-hover:text-primary/[0.05] transition-colors duration-500">
                                {step.number}
                            </span>

                            <div className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mb-6 border border-border/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                <step.icon className={`w-8 h-8 ${step.color}`} />
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                {step.id}. {step.title}
                            </h3>
                            <p className="text-muted-foreground text-sm leading-relaxed font-light group-hover:text-foreground transition-colors">
                                {step.description}
                            </p>

                            {/* Hover Accent */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
