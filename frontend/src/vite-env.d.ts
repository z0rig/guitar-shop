/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
  readonly VITE_REQUEST_TIMEOUT: number;
  readonly VITE_AUTH_TOKEN_KEY_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
