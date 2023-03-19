/* eslint-disable react-hooks/rules-of-hooks */
import React, { useMemo, useState, useEffect } from "react";
import mermaid from "mermaid";

const DEFAULT_DARK_THEME = "dark";
const DEFAULT_LIGHT_THEME = "default";
const DARK_THEME_KEY = "dark";
const LIGHT_THEME_KEY = "light";
const HTML_THEME_ATTRIBUTE = "data-theme";
/**
 * Gets the theme based on config and current data-theme of the HTML.
 *
 * @param html The HTML element of the page.
 * @param config The configuration for this chart.
 */
function getTheme(html: any, config: any) {
  let htmlTheme = html.getAttribute(HTML_THEME_ATTRIBUTE) ?? LIGHT_THEME_KEY;
  if (!(htmlTheme === LIGHT_THEME_KEY || htmlTheme === DARK_THEME_KEY)) {
    htmlTheme = LIGHT_THEME_KEY;
  }
  const defaultTheme =
    htmlTheme === LIGHT_THEME_KEY ? DEFAULT_LIGHT_THEME : DEFAULT_DARK_THEME;
  return config?.theme?.[htmlTheme] ?? config?.mermaid?.theme ?? defaultTheme;
}

/**
 * Copyright (c) Samuel Wall.
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this source tree.
 */
/**
 * Component to display Mermaid diagrams.
 *
 * @param param0 Diagram to display.
 * @param param1 Config.
 * @returns The component.
 */
const Mermaid = ({
  chart,
  config: configSrc,
}: {
  chart: any;
  config?: any;
}) => {
  // Due to Docusaurus not correctly parsing client-side from server-side modules, use the provided workaround
  // found in the accompanying issue: https://github.com/facebook/docusaurus/issues/4268#issuecomment-783553084
  /* istanbul ignore next */
  if (typeof window === "undefined") {
    return React.createElement(
      "div",
      { className: "mermaid", "data-mermaid-src": chart },
      chart
    );
  }
  const config = useMemo(
    () => (typeof configSrc === "string" ? JSON.parse(configSrc) : configSrc),
    [configSrc]
  );
  const html = document.querySelector("html");
  const [rerender, setRerender] = useState(false);
  const theme = useMemo(() => getTheme(html, config), [config, rerender]);
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type !== "attributes" ||
          mutation.attributeName !== "data-theme"
        ) {
          continue;
        }
        setRerender((cur) => !cur);
        break;
      }
    });
    observer.observe(html as any, { attributes: true });
    return () => {
      try {
        observer.disconnect();
      } catch {
        // Do nothing
      }
    };
  }, []);
  useEffect(() => {
    if (config) {
      if (config.mermaid) {
        mermaid.initialize({ startOnLoad: true, ...config.mermaid, theme });
      } else {
        mermaid.initialize({ startOnLoad: true, theme });
      }
      document
        .querySelectorAll('div.mermaid[data-processed="true"]')
        .forEach((v) => {
          v.removeAttribute("data-processed");
          v.innerHTML = v.getAttribute("data-mermaid-src") as any;
        });
      mermaid.contentLoaded();
    }
  }, [config, theme]);
  useEffect(() => {
    document
      .querySelectorAll('div.mermaid[data-processed="true"]')
      .forEach((v) => {
        v.removeAttribute("data-processed");
        v.innerHTML = v.getAttribute("data-mermaid-src") as any;
      });
    setTimeout(mermaid.contentLoaded, 0);
  }, [chart]);
  return React.createElement(
    "div",
    { className: "mermaid", "data-mermaid-src": chart },
    chart
  );
};

export { Mermaid };
