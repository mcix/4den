# Plan: Switch to Static Export (SSG)

Goal: Pre-render all pages to static HTML at build time so content is visible without JavaScript, no server is needed at runtime, and frontmatter-based metadata is preserved.

## Steps

### 1. Enable static export in `next.config.mjs`
- Add `output: 'export'` to the `nextConfig` object.

### 2. Add `generateStaticParams` to `src/app/[locale]/layout.tsx`
- Export a `generateStaticParams` function that returns `[{ locale: 'nl' }, { locale: 'en' }]` so Next.js knows which locale pages to generate.

### 3. Configure `next-intl` for static export
- next-intl supports static export but requires specific setup.
- Follow the next-intl static rendering docs: ensure `getRequestConfig` is compatible with static generation.
- Middleware-based locale detection won't work with static export — verify routing falls back to path-based prefixes only.

### 4. Handle `notFound()` in static context
- `notFound()` in the layout currently handles unknown locales. In static export there is no server to return a 404 response.
- Ensure a custom `not-found.tsx` page exists or adjust the logic.

### 5. Verify frontmatter still works
- The existing MDX pipeline (`remark-frontmatter` + `remark-mdx-frontmatter`) bakes frontmatter into the build output — no changes expected here.
- Confirm `generateMetadata` in page files still picks up title/description from frontmatter after the switch.

### 6. Build and test
- Run `npm run build` (or `next build`) and verify the `out/` directory contains pre-rendered HTML for all locale/page combinations.
- Open the HTML files directly in a browser (or serve with a static file server) to confirm content is visible without JavaScript.

## Things to watch out for
- No API routes, middleware, or other server-only features can be used with `output: 'export'`.
- `next/image` default loader doesn't work with static export — may need to switch to `unoptimized: true` or a custom loader if images break.
- Any use of `headers()`, `cookies()`, or dynamic server functions will need to be removed.
