import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getLocale } from '@/lib/localeutils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import clsx from 'clsx';

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

const ogMeta: Record<string, { title: string; description: string; locale: string }> = {
  nl: {
    title: '4D Engineers — Design, Electronica, Firmware & Mechanica',
    description:
      '4D Engineers is een netwerk van ervaren ingenieurs voor de ontwikkeling van complexere (mechatronische) producten.',
    locale: 'nl_NL',
  },
  en: {
    title: '4D Engineers — Design, Electronics, Firmware & Mechanics',
    description:
      '4D Engineers is a network of experienced engineers for the development of complex (mechatronic) products.',
    locale: 'en_US',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = ogMeta[locale] || ogMeta.nl;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: '%s - 4D Engineers',
      default: '4D Engineers',
    },
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      siteName: '4D Engineers',
      locale: t.locale,
      type: 'website',
      url: baseUrl,
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        nl: baseUrl,
        en: `${baseUrl}/en`,
        'x-default': baseUrl,
      },
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
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
