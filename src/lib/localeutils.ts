import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const localeMap: Record<string, string> = {
  nl: 'nl',
  en: 'en',
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
  const ogLocale = getLocale(resolvedLocale);

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
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://4d-engineers.nl';
    const localePrefix = resolvedLocale === 'nl' ? '' : `/${resolvedLocale}`;
    const cleanRoute = route.replace(/\/$/, '');
    const fullUrl = `${baseUrl}${localePrefix}${cleanRoute}`;

    return {
      title: frontmatter.title,
      description: frontmatter.description,
      openGraph: {
        title: frontmatter.title,
        description: frontmatter.description,
        locale: ogLocale,
        type: 'website' as const,
        url: fullUrl,
      },
      alternates: {
        canonical: fullUrl,
        languages: {
          nl: `${baseUrl}${cleanRoute}`,
          en: `${baseUrl}/en${cleanRoute}`,
        },
      },
    };
  } catch {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://4d-engineers.nl';
    return {
      title: '4D Engineers',
      description: '4D Engineers - Design, Electronica, Firmware & Mechanica',
    };
  }
}
