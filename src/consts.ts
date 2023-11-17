// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "GNU.band";
// needed to work on github pages
export const LINK_PREFIX =
  import.meta.env.MODE === "production" ? "/gnublog" : "";
export const SITE_DESCRIPTION = "We are GNU a band from Berlin";
