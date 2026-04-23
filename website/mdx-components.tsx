import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs';
import type { MDXComponents } from 'nextra/mdx-components';

export function useMDXComponents(components: MDXComponents = {}) {
  return {
    ...getDocsMDXComponents(),
    ...components,
  };
}
