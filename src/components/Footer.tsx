'use client'

import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const t = useTranslations('Navigation')

  return (
    <footer className="bg-slate-50 dark:bg-slate-800/50">
      <Container>
        <div className="py-16">
          <div className="mx-auto text-center">
            <Link href="/" className="text-xl font-bold text-slate-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">4D</span> Engineers
            </Link>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Product Engineering &amp; Technische Consultancy
            </p>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/">{t('home')}</NavLink>
              <NavLink href="/approach">{t('approach')}</NavLink>
              <NavLink href="/contact">{t('contact')}</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 dark:border-slate-700 sm:flex-row-reverse sm:justify-between">
          <div className="flex flex-col items-end gap-y-1 sm:flex-row sm:gap-x-6">
            <a
              href="mailto:Michiel@4D-Engineers.com"
              className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              Michiel@4D-Engineers.com
            </a>
            <a
              href="tel:+31653267122"
              className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            >
              0653 267 122
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 sm:mt-0">
            &copy; {new Date().getFullYear()} 4D Engineers. Alle rechten voorbehouden.
          </p>
        </div>
      </Container>
    </footer>
  )
}
