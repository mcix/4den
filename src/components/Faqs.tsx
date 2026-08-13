import { useTranslations } from 'next-intl'

import { Container } from '@/components/Container'
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from '@/lib/contact'

// Grouped into the three rendered columns; the catalog keeps the questions flat.
const FAQ_COLUMNS = [
  ['products', 'cycles', 'existingTeam'],
  ['costs', 'confidentiality', 'ip'],
  ['disciplines', 'certification', 'start'],
] as const

export function Faqs() {
  const t = useTranslations('Faqs')

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-800/50 py-20 sm:py-32"
    >
      <div className="absolute inset-0 bg-[url('/images/background-faqs.jpg')] bg-cover bg-center opacity-10" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700 dark:text-slate-300">
            {t.rich('intro', {
              mail: () => (
                <a
                  href={CONTACT_EMAIL_HREF}
                  className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {CONTACT_EMAIL}
                </a>
              ),
            })}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {FAQ_COLUMNS.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((key) => (
                  <li key={key}>
                    <h3 className="font-display text-lg/7 text-slate-900 dark:text-white">
                      {t(`items.${key}.question`)}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">
                      {t(`items.${key}.answer`)}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
