/**
 * Copyright (c) Samuel Wall.
 *
 * This source code is licensed under the MIT license found in the
 * license file in the root directory of this source tree.··
 */
/**
 * mdx-mermaid plugin.
 *
 * @param config Config passed in from parser.
 * @returns Function to transform mdxast.
 */
async function plugin(config) {
  /**
   * Insert the component import into the document.
   * @param ast The document to insert into.
   */

  const { visit } = await import("unist-util-visit");
  function insertImport(ast) {
    // See if there is already an import for the Mermaid component
    let importFound = false;
    visit(ast, { type: "import" }, (node) => {
      if (
        /\s*import\s*{\s*Mermaid\s*}\s*from\s*'mdx-mermaid(\/lib)?\/Mermaid'\s*;?\s*/.test(
          node.value
        )
      ) {
        importFound = true;
        return visit.EXIT;
      }
    });
    // Add the Mermaid component import to the top
    if (!importFound) {
      ast.children.splice(0, 0, {
        type: "import",
        value: "import { Mermaid } from 'mdx-mermaid/lib/Mermaid';",
      });
    }
  }
  return async function transformer(ast) {
    // Find all the mermaid diagram code blocks. i.e. ```mermaid
    const instances = [];
    visit(ast, { type: "code", lang: "mermaid" }, (node, index, parent) => {
      instances.push([node, index, parent]);
    });
    // Replace each Mermaid code block with the Mermaid component
    instances.forEach(([node, index, parent], i) => {
      parent.children.splice(index, 1, {
        type: "mermaidCodeBlock",
        data: {
          hName: "Mermaid",
          hProperties: {
            config: i > 0 ? undefined : JSON.stringify(config),
            chart: node.value,
          },
        },
      });
    });
    insertImport(ast);
    return ast;
  };
}

module.exports = {
  mermaidPlugin: plugin,
};
