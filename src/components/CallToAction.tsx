import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-blue-600 dark:bg-blue-700 py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/background-call-to-action.jpg')] bg-cover bg-center opacity-40" />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Klaar om uw project te starten?
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Een afspraak met een van ons is de snelste weg naar een
            kennismaking. Neem contact op met Michiel Wanninkhof.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" color="white">
              Neem contact op
            </Button>
            <a
              href="tel:+31653267122"
              className="text-lg font-medium text-white hover:text-blue-100"
            >
              0653 267 122
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
