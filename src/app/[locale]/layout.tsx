import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { getLocale, generateMetadataHelper } from '@/lib/localeutils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import clsx from 'clsx';

import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from '@/components/ThemeProvider';
import '@/app/globals.css';

import { Inter, Lexend } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://4d-engineers.nl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  // Home lives in this same route segment, so the template below does not apply to it —
  // it carries the full site title itself, while child segments get the "%s" suffix.
  const metadata = await generateMetadataHelper({ params: { locale }, page: 'home' });
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    ...metadata,
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s - ${t('siteName')}`,
      default: t('home.title'),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const htmlLang = getLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={htmlLang}
      className={clsx(
        'h-full scroll-smooth bg-white antialiased dark:bg-slate-900',
        inter.variable,
        lexend.variable,
      )}
      suppressHydrationWarning
    >
      <body className="flex h-full flex-col">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <Analytics />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
