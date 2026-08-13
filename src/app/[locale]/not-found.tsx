import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <>
      <Header />
      <main className="flex flex-1 items-center justify-center">
        <div className="mx-auto flex max-w-md flex-col items-center justify-center px-6 py-24 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">404</p>
          <h1 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
            {t('title')}
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{t('body')}</p>
          <Link
            href="/"
            className="mt-8 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            {t('back')}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
