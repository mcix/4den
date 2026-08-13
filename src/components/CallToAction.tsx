import { useTranslations } from 'next-intl'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { CONTACT_PHONE, CONTACT_PHONE_HREF } from '@/lib/contact'

export function CallToAction() {
  const t = useTranslations('CallToAction')

  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden bg-blue-600 dark:bg-blue-700 py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/background-call-to-action.jpg')] bg-cover bg-center opacity-40" />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">{t('body')}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" color="white">
              {t('cta')}
            </Button>
            <a
              href={CONTACT_PHONE_HREF}
              className="text-lg font-medium text-white hover:text-blue-100"
            >
              {CONTACT_PHONE}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
