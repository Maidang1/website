import SyntaxHighlighter from "react-syntax-highlighter";
import a11yLight from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";
export const Code = (props: any) => {
  const { children, className } = props;
  if (className.includes("mermaid")) {
    return <Mermaid chart={children} />;
  }
  return (
    <SyntaxHighlighter style={a11yLight} language="javascript">
      {children}
    </SyntaxHighlighter>
  );
};
