import { siteConfig } from "@/lib/config"
import { REGISTRY_URL_PLACEHOLDER } from "@/lib/site-url.mjs"

// Docs and registry.json are written against http://localhost:3000. Swap in
// the URL of the current deployment.
export function withSiteUrl(value: string) {
  return value.replaceAll(REGISTRY_URL_PLACEHOLDER, siteConfig.url)
}
