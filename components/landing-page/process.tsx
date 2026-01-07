"use client"

import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "1. Descoberta",
        description: "Entendemos seu negócio, objetivos e público-alvo para definir a melhor estratégia.",
        icon: Search,
    },
    {
        id: 2,
        title: "2. Design",
        description: "Criamos protótipos visuais e interfaces intuitivas focadas na experiência do usuário.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "3. Desenvolvimento",
        description: "Construímos seu software com código limpo, tecnologias modernas e performance.",
        icon: Code2,
    },
    {
        id: 4,
        title: "4. Lançamento",
        description: "Testes rigorosos, deploy e acompanhamento pós-lançamento para garantir o sucesso.",
        icon: Rocket,
    },
]

export default function Process() {
    return (
        <section id="process" className="my-20">
            <div className="mb-12 text-center">
                <h2 className="text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
                    Como <span className="text-primary">Trabalhamos</span>
                </h2>
                <p className="items-center mx-auto max-w-2xl text-muted-foreground leading-relaxed">
                    Um processo ágil e transparente para transformar sua ideia em um produto digital de sucesso.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step) => (
                    <div key={step.id} className="relative flex flex-col items-center text-center p-6 bg-white dark:bg-[#111111] rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all duration-300">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <step.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
