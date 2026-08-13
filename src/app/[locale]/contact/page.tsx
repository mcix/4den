import { notFound } from 'next/navigation';
import { generateMetadataHelper, getLocaleFromParams } from '@/lib/localeutils';
import { loadLocaleContent } from '@/lib/mdxContent';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const content: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  nl: () => import('./content/nl.mdx'),
  en: () => import('./content/en.mdx'),
};

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  return generateMetadataHelper({ params, page: 'contact' });
}

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const resolvedLocale = getLocaleFromParams(params);

  const Content = await loadLocaleContent(content, resolvedLocale);
  if (!Content) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)]">
        <Content />
      </main>
      <Footer />
    </>
  );
}
