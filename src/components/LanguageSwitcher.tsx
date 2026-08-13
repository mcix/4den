'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations('LanguageSwitcher');
  const pathname = usePathname();
  const router = useRouter();

  const targetLocale = locale === 'nl' ? 'en' : 'nl';

  return (
    <button
      onClick={() => router.replace(pathname, { locale: targetLocale })}
      aria-label={t('switchTo', { language: t(targetLocale) })}
      className="rounded border border-slate-300 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-800"
    >
      {targetLocale.toUpperCase()}
    </button>
  );
}
