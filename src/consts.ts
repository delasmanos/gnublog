// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
const baseUrl = import.meta.env.BASE_URL;
// needed to work on github pages
// could be done by configuring trailing slash but it's late now:)
export const LINK_PREFIX = baseUrl === "/" ? "" : baseUrl;
