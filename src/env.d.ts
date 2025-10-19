// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

interface ImportMetaEnv {
  readonly KEYCLOAK_CLIENT_ID: string;
  readonly KEYCLOAK_REDIRECT_URI_ROOT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
