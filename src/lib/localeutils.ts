import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const localeMap: Record<string, string> = {
  nl: 'nl',
  en: 'en',
};

const ogLocaleMap: Record<string, string> = {
  nl: 'nl_NL',
  en: 'en_US',
};

export function getLocaleFromParams(params: { locale?: string }) {
  return params.locale || 'nl';
}

export function getLocale(locale: string) {
  return localeMap[locale] || 'nl';
}

export function generateMetadataHelper({
  params,
  route,
}: {
  params: { locale?: string };
  route: string;
}) {
  const resolvedLocale = getLocaleFromParams(params);
  const ogLocale = ogLocaleMap[resolvedLocale] || 'nl_NL';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://4d-engineers.nl';
  const localePrefix = resolvedLocale === 'nl' ? '' : `/${resolvedLocale}`;
  const cleanRoute = route === '/' ? '' : route.replace(/\/$/, '');
  const fullUrl = `${baseUrl}${localePrefix}${cleanRoute}`;

  let source = '';
  try {
    const mdxPath = path.join(
      process.cwd(),
      'src/app/[locale]',
      route,
      `content/${resolvedLocale}.mdx`
    );
    source = fs.readFileSync(mdxPath, 'utf8');
  } catch {
    // fallback
  }

  try {
    const { data: frontmatter } = matter(source);

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        siteName: '4D Engineers',
        locale: ogLocale,
        type: 'website' as const,
        url: fullUrl,
      },
      alternates: {
        canonical: fullUrl,
        languages: {
          nl: `${baseUrl}${cleanRoute}`,
          en: `${baseUrl}/en${cleanRoute}`,
          'x-default': `${baseUrl}${cleanRoute}`,
        },
      },
    };
  } catch {
    return {
      title: '4D Engineers',
      description: '4D Engineers - Design, Electronica, Firmware & Mechanica',
      openGraph: {
        title: '4D Engineers',
        description: '4D Engineers - Design, Electronica, Firmware & Mechanica',
        siteName: '4D Engineers',
        locale: ogLocale,
        type: 'website' as const,
        url: fullUrl,
      },
      alternates: {
        canonical: fullUrl,
        languages: {
          nl: `${baseUrl}${cleanRoute}`,
          en: `${baseUrl}/en${cleanRoute}`,
          'x-default': `${baseUrl}${cleanRoute}`,
        },
      },
    };
  }
}
