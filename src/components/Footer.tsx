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
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const t = useTranslations('Navigation')

  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="mx-auto text-center">
            <Link href="/" className="text-xl font-bold text-slate-900">
              <span className="text-blue-600">4D</span> Engineers
            </Link>
          </div>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="/">{t('home')}</NavLink>
              <NavLink href="/approach">{t('approach')}</NavLink>
              <NavLink href="/contact">{t('contact')}</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              href="mailto:info@4d-engineers.nl"
              className="group text-sm text-slate-500 hover:text-slate-700"
            >
              info@4d-engineers.nl
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            &copy; {new Date().getFullYear()} 4D Engineers. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
