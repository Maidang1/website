const { mermaidPlugin } = require("./libs/mdx-mermaid.js");
const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/github-dark.json");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [
      [mermaidPlugin, { output: "svg" }],
      [
        remarkCodeHike,
        { theme, lineNumbers: true, skipLanguages: ["mermaid"] },
      ],
    ],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withMDX(nextConfig);
