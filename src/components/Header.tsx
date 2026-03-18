'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-slate-900">
          <span className="text-blue-600">4D</span> Engineers
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
            {t('home')}
          </Link>
          <Link href="/approach" className="text-sm text-slate-600 hover:text-slate-900">
            {t('approach')}
          </Link>
          <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900">
            {t('contact')}
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
