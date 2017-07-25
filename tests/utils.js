import React from "react";
import { createRenderer } from "fela";
import renderer from "react-test-renderer";
import { FelaProvider } from "../lib";
import postcss from "postcss";

expect.addSnapshotSerializer({
  test(val) {
    return val && val.hasOwnProperty("__felaSnapshot");
  },

  print(val, serialize) {
    const tree = serialize(val.tree);
    const css = val.renderer.renderToString();

    const prettyPrintCSS = (ast, indent = 0) => {
      return ast.nodes.reduce((acc, node) => {
        switch (node.type) {
          case "atrule":
            const atruleBody = node.nodes
              ? `\n${prettyPrintCSS(node, indent + 1)}`
              : "";
            return acc + `@${node.name} ${node.params} {${atruleBody}}\n`;
          case "rule":
            const body = node.nodes ? prettyPrintCSS(node) : "";
            return acc + `${"  ".repeat(indent)}${node.selector} {${body}}\n`;
          case "decl":
            return acc + ` ${node.prop}: ${node.value}; `;
          default:
            // eslint-disable-next-line
            console.error("unknown type " + node.type);
            return acc;
        }
      }, "");
    };

    const ast = postcss.parse(css);
    const prettyCSS = prettyPrintCSS(ast);

    return `${tree}\n\n${prettyCSS}`;
  },
});

export const felaSnapshot = component => {
  const felaRenderer = createRenderer();

  return {
    __felaSnapshot: true,
    tree: renderer
      .create(
        <FelaProvider renderer={felaRenderer}>
          {component}
        </FelaProvider>
      )
      .toJSON(),
    renderer: felaRenderer,
  };
};
