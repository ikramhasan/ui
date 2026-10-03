// The site's public URL, used for install commands and registry URLs.
//
// 1. NEXT_PUBLIC_APP_URL, when set (any host).
// 2. On Vercel, the production domain for production builds and the
//    deployment URL for previews (Vercel sets these system variables).
// 3. http://localhost:3000 otherwise.

/** @returns {string} */
export function getSiteUrl() {
  const env = process.env

  const url =
    env.NEXT_PUBLIC_APP_URL ||
    (env.VERCEL_ENV === "production" &&
      env.VERCEL_PROJECT_PRODUCTION_URL &&
      `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
    (env.VERCEL_URL && `https://${env.VERCEL_URL}`) ||
    "http://localhost:3000"

  return url.replace(/\/+$/, "")
}

// The URL registry.json is written with. Replaced with getSiteUrl() when
// the registry is built and when docs are rendered.
export const REGISTRY_URL_PLACEHOLDER = "http://localhost:3000"
