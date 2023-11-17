import { customCollapse } from './patched-remark-collapse.mjs'
import remarkToc from "remark-toc";

/**
 * just a wrapper for remarkToc and remarkCollapse so it can be easy confiugerd via astro frontmatter
 * if showToc in a frontmatter block is set to true, remarkToc generates the TOC and then remarkCollapse wraps it in a details block
 */
export function collapsibleToc(options) {
    return  function (tree, astroData) {
        const { showToc } = astroData.data.astro.frontmatter
        if(showToc){
            const treeWithTocFn = remarkToc(options.remarkTocOptions || {});
            const newTree =  treeWithTocFn(tree);
            const generatedCollapseFn = customCollapse(options)
            return generatedCollapseFn({...tree,...newTree});
        }
        return tree;
    }
}
