import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { H1, Li, H2, Code } from "./mdx-custom-components/index";
import "../styles/globals.css";

const components = {
  h1: H1,
  h2: H2,
  li: Li,
  // pre: (props: any) => <div {...props} />,
  code: Code,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}
