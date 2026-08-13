import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

import { routing } from '@/i18n/routing';

const localeMap: Record<string, string> = {
  nl: 'nl',
  en: 'en',
};

const ogLocaleMap: Record<string, string> = {
  nl: 'nl_NL',
  en: 'en_US',
};

/** Pages that carry their own title/description, keyed by their Metadata namespace key. */
const pageRoutes = {
  home: '',
  approach: '/approach',
  contact: '/contact',
} as const;

export type MetadataPage = keyof typeof pageRoutes;

export function getLocaleFromParams(params: { locale?: string }) {
  return params.locale || routing.defaultLocale;
}

export function getLocale(locale: string) {
  return localeMap[locale] || routing.defaultLocale;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://4d-engineers.nl';

/**
 * `nl` is the default locale and is served unprefixed (localePrefix: 'as-needed'),
 * so only `en` carries a path prefix.
 */
function localeHref(locale: string, route: string) {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${baseUrl}${prefix}${route}` || baseUrl;
}

/**
 * Builds title/description/OpenGraph/hreflang for a page from the next-intl message
 * catalog, so every locale is served its own metadata from the same source of truth
 * as the on-page copy.
 */
export async function generateMetadataHelper({
  params,
  page,
}: {
  params: { locale?: string };
  page: MetadataPage;
}): Promise<Metadata> {
  const locale = getLocaleFromParams(params);
  const route = pageRoutes[page];
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  const title = t(`${page}.title`);
  const description = t(`${page}.description`);
  const url = localeHref(locale, route);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      siteName: t('siteName'),
      locale: ogLocaleMap[locale] || ogLocaleMap[routing.defaultLocale],
      type: 'website',
      url,
    },
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(
          routing.locales.map((l) => [l, localeHref(l, route)]),
        ),
        'x-default': localeHref(routing.defaultLocale, route),
      },
    },
  };
}
