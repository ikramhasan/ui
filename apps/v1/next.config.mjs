import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  devIndicators: false,
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*", "./examples/**/*", "./registry.json"],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
