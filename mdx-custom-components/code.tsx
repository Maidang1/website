import SyntaxHighlighter from "react-syntax-highlighter";
import a11yLight from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-light";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";

import dynamic from "next/dynamic";
import { themeAtom } from "../hooks/uee-dark";
import { useAtomValue } from "jotai";

const DynamicMermaid = dynamic(
  // ts-ignore
  () => import("../components/mermaid/index").then((module) => module.Mermaid),
  { ssr: false }
);

export const Code = (props: any) => {
  const isDark = useAtomValue(themeAtom);
  const { children, className } = props;
  if (className.includes("mermaid")) {
    return (
      <DynamicMermaid
        chart={children}
        config={{ theme: isDark ? "dark" : "light" }}
      />
    );
  }
  return (
    <SyntaxHighlighter
      style={isDark ? a11yDark : a11yLight}
      language="javascript"
    >
      {children}
    </SyntaxHighlighter>
  );
};
