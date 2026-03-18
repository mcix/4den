import { notFound } from 'next/navigation';
import { generateMetadataHelper, getLocaleFromParams } from '@/lib/localeutils';

const content: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  nl: () => import('./content/nl.mdx'),
  en: () => import('./content/en.mdx'),
};

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  return generateMetadataHelper({ params, route: '/approach' });
}

export default async function ApproachPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const resolvedLocale = getLocaleFromParams(params);

  try {
    const { default: Content } = await content[resolvedLocale]();
    return <Content />;
  } catch {
    notFound();
  }
}
