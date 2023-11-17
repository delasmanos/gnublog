import type { HTMLAttributes, HTMLTag } from "astro/types";
import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/**
 *
 * helps with destructering props for astro components.
 *
 * @example
 * const props = Astro.props;
 * const newClassList = extractAndMergeClasslistFromProps(props, {
 *   "someConditionalCssClass": true,
 * });
 * <article {...props} class={clsList}><slot /></article>
 */
export const extractAndMergeClasslistFromProps = (
  props: HTMLAttributes<HTMLTag>,
  classList?: ClassValue,
): string => {
  const clsList = twMerge(clsx(props["class:list"], props.class, classList));
  // because destructuring of class (reserved keyword) and class:list is not working in astro
  delete props.class;
  delete props["class:list"];
  return clsList;
};
