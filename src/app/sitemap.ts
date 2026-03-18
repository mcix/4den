import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://4d-engineers.nl';

const routes = ['', '/approach', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    entries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          nl: `${baseUrl}${route}`,
          en: `${baseUrl}/en${route}`,
        },
      },
    });
  }

  return entries;
}
