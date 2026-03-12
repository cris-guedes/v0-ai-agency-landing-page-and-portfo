import Header from "@/components/landing-page/header"
import StartProject from "@/components/landing-page/start-project"
import Footer from "@/components/landing-page/footer"

export const metadata = {
  title: "Inicie seu Projeto | Estúdio Dev",
  description: "Dê o primeiro passo no seu próximo projeto respondendo algumas perguntas e agendando uma conversa com nossa equipe.",
}

export default function StartPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      <StartProject />
      <Footer />
    </main>
  )
}
