/// <reference path="../.astro/types.d.ts" />
import "../.astro/types.d.ts";
import "astro/client";

interface ImportMetaEnv {
  readonly PUBLIC_BASE_PATH: string;
  readonly PUBLIC_WEB3FORMS_ACCESS_KEY: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
