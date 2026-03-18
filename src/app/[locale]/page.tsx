import { generateMetadataHelper } from '@/lib/localeutils';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { CallToAction } from '@/components/CallToAction';
import { Testimonials } from '@/components/Testimonials';
import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  return generateMetadataHelper({ params, route: '/' });
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
