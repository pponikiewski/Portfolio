/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // Build-time only; read by src/lib/github.ts for the activity heatmap.
  readonly GITHUB_TOKEN?: string
}
