import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'

const USP_KEYS = [
  'network',
  'fixedCosts',
  'clients',
  'ip',
  'coInvest',
  'certification',
] as const

export function Testimonials() {
  const t = useTranslations('Testimonials')

  return (
    <section
      id="waarom-4d"
      aria-label={t('sectionLabel')}
      className="bg-slate-50 dark:bg-slate-800/50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300">
            {t('intro')}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {USP_KEYS.map((key) => (
            <li key={key}>
              <div className="relative rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-xl shadow-slate-900/10 dark:shadow-black/20">
                <h3 className="font-display text-lg font-medium text-slate-900 dark:text-white">
                  {t(`usps.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm tracking-tight text-slate-700 dark:text-slate-300">
                  {t(`usps.${key}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
