import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getLocale } from '@/lib/localeutils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import '@/app/globals.css';

import { Inter } from 'next/font/google';

const font = Inter({ subsets: ['latin'] });

const ogMeta: Record<string, { title: string; description: string }> = {
  nl: {
    title: '4D Engineers — Design, Electronica, Firmware & Mechanica',
    description:
      '4D Engineers is een netwerk van ervaren ingenieurs voor de ontwikkeling van complexere (mechatronische) producten.',
  },
  en: {
    title: '4D Engineers — Design, Electronics, Firmware & Mechanics',
    description:
      '4D Engineers is a network of experienced engineers for the development of complex (mechatronic) products.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = ogMeta[locale] || ogMeta.nl;

  return {
    title: {
      template: '%s - 4D Engineers',
      default: '4D Engineers',
    },
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      type: 'website',
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
    <html lang={htmlLang} className="h-full">
      <body className={font.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="min-h-[calc(100vh-130px)]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
