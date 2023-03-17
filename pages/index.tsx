import { MDXProvider } from "@mdx-js/react";

const components = {
  h1: (props: any) => <div className="h222" {...props} />,
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <pre style={{ color: "tomato" }} {...props} />,
};
const Page = (props: any) => (
  <MDXProvider components={components}>
    <main {...props} />
  </MDXProvider>
);

export default Page;
