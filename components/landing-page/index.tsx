import Header from "./header"
import WhatsAppButton from "./whatsapp-button"
import Hero from "./hero"
import Projects from "./projects"
import Services from "./services"
import Process from "./process"
import BookingSection from "./booking-section"
import CallToAction from "./call-to-action"
import Footer from "./footer"
import ContactFormButton from "./contact-form-button"
import StartProject from "./start-project"
import type { LandingPageProps } from "./types"

// Export individual components for flexible usage
export { Header, Hero, Projects, Services, Process, CallToAction, Footer, ContactFormButton, StartProject }

// Main component that combines all sections
export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen">
      {showHeader && <Header />}
      <Hero />
      <Projects />
      <Services />
      <Process />
      <CallToAction />
      <BookingSection />
      {showFooter && <Footer />}
      <WhatsAppButton />
    </main>
  )
}
