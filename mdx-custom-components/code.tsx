import SyntaxHighlighter from "react-syntax-highlighter";
import a11yLight from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light";
import dynamic from "next/dynamic";

const DynamicMermaid = dynamic(
  () => import("mdx-mermaid/lib/Mermaid").then((module) => module.Mermaid),
  { ssr: false }
);

export const Code = (props: any) => {
  const { children, className } = props;
  if (className.includes("mermaid")) {
    return <DynamicMermaid chart={children} />;
  }
  return (
    <SyntaxHighlighter style={a11yLight} language="javascript">
      {children}
    </SyntaxHighlighter>
  );
};
