import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/background-call-to-action.jpg')] bg-cover bg-center opacity-40" />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Start your next project
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Ready to bring your complex product to life? Let&apos;s discuss how
            our integrated engineering approach can accelerate your development.
          </p>
          <Button href="/contact" color="white" className="mt-10">
            Get in touch
          </Button>
        </div>
      </Container>
    </section>
  )
}
