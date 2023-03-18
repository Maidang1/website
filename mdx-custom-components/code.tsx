import SyntaxHighlighter from "react-syntax-highlighter";
import a11yLight from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light";
export const Code = (props: any) => {
  const { children } = props;
  return (
    <SyntaxHighlighter style={a11yLight} language="javascript">
      {children}
    </SyntaxHighlighter>
  );
};
