import { siteConfig } from "@/lib/config"

export function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`
}
