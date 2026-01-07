"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Iniciamos com uma fase de descoberta para entender suas necessidades. Em seguida, partimos para o design e prototipagem. Após aprovação, iniciamos o desenvolvimento ágil com entregas parciais, finalizando com testes e lançamento.",
  },
  {
    id: 2,
    question: "Quanto tempo leva para criar um site ou aplicativo?",
    answer:
      "O prazo varia conforme a complexidade do projeto. Landing pages podem ser entregues em até 7 dias, enquanto sistemas complexos ou aplicativos podem levar de 4 a 12 semanas. Definimos um cronograma claro no início do projeto.",
  },
  {
    id: 3,
    question: "Vocês fazem manutenção após o lançamento?",
    answer:
      "Sim! Oferecemos planos de suporte e manutenção contínua para garantir que seu software esteja sempre atualizado, seguro e funcionando perfeitamente, além de implementar novas funcionalidades conforme seu negócio cresce.",
  },
  {
    id: 4,
    question: "Quais tecnologias vocês utilizam?",
    answer:
      "Trabalhamos com as tecnologias mais modernas do mercado, como React, Next.js, Node.js, React Native e Flutter. Escolhemos a tech stack ideal baseada nas necessidades específicas de performance e escala do seu projeto.",
  },
  {
    id: 5,
    question: "Vocês desenvolvem o design também?",
    answer:
      "Com certeza. Temos uma equipe de UI/UX Design dedicada a criar interfaces bonitas e funcionais. Não apenas codificamos, mas criamos experiências digitais completas que encantam seus usuários.",
  },
  {
    id: 6,
    question: "Como é feito o pagamento?",
    answer:
      "Trabalhamos com flexibilidade. Geralmente operamos com um sinal inicial e o restante parcelado conforme as entregas do projeto. Para contratos de manutenção e consultoria, trabalhamos com planos mensais recorrentes.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg border-border/50">
        <h2 className="text-foreground mb-6 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
          Perguntas
          <span className="block text-primary">Frequentes</span>
        </h2>
        <p className="mb-8 max-w-2xl text-muted-foreground leading-relaxed">
          Tem dúvidas sobre automação com IA? Encontre respostas para as perguntas mais comuns e descubra como podemos
          transformar seu atendimento.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-border">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-foreground hover:text-primary transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openItem === faq.id ? "rotate-180 text-primary" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
