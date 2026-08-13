type ContentLoader = () => Promise<{ default: React.ComponentType }>;

/**
 * Resolves the MDX component for a locale, or null when there is none.
 *
 * The try/catch deliberately wraps only the dynamic import. Catching around the JSX
 * instead would be misleading: React does not render a component at the point the element
 * is created, so a render error escapes the catch entirely and only an error boundary
 * would see it.
 *
 * The loader map has to stay in the calling page — bundlers need the import specifiers to
 * be statically analysable, so the paths cannot be built here.
 */
export async function loadLocaleContent(
  loaders: Record<string, ContentLoader>,
  locale: string,
): Promise<React.ComponentType | null> {
  const loader = loaders[locale];
  if (!loader) {
    return null;
  }

  try {
    const { default: Content } = await loader();
    return Content;
  } catch {
    return null;
  }
}
