import { ChakraProvider } from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const components = {
  h1: (props: any) => <div className="h222" {...props} />,
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <pre style={{ color: "tomato" }} {...props} />,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}
