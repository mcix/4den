// As of TypeScript 6, `@types/mdx` is no longer picked up through the automatic
// node_modules/@types inclusion, so its `declare module "*.mdx"` ambient declaration has to
// be referenced explicitly. Without this, the `import('./content/en.mdx')` calls in the
// approach/contact page components fail to type check with TS2307.
/// <reference types="mdx" />
