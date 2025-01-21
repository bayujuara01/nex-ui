import { Plugin } from "postcss";

export default (): Plugin => {
  return {
    postcssPlugin: 'postcss-prefix-alias-plugin',
    Once(root) {
      root.walkRules((rule) => {
        if (rule.selector.startsWith(':root[data-mantine-color-scheme') || rule.selector === ':root') {
          const existingProps = new Set();
          rule.walkDecls(decl => {
            existingProps.add(decl.prop); // Store all property names
          });

          rule.walkDecls((decl) => {
            if (decl.prop.startsWith('--mantine-')) {
              const newProp = decl.prop.replace('--mantine-', '--nex-');

              if (!existingProps.has(newProp)) {
                const newValue = `var(${decl.prop})`;
                rule.append({ prop: newProp, value: newValue });
              }
            }
          });
        }
      })
    }
  }
}

export const postcss = true;
