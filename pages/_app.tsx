import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { H1, Li, H2, Code, Blockquote } from "../mdx-custom-components/index";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const components = {
  h1: H1,
  h2: H2,
  li: Li,
  code: Code,
  blockquote: Blockquote,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </MDXProvider>
  );
}
