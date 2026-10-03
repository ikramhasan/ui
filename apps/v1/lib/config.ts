import { getSiteUrl } from "@/lib/site-url.mjs"

const url = getSiteUrl()

export const siteConfig = {
  name: "UI Registry",
  url,
  registryUrl: `${url}/r`,
  description:
    "shadcn/ui components rebuilt on Base UI with a design of their own. Install them with the shadcn CLI.",
  links: {
    github: "https://github.com/ikramhasan/ui",
  },
  navItems: [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/docs",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
    {
      href: "/blocks",
      label: "Blocks",
    },
    {
      href: "/charts",
      label: "Charts",
    },
  ],
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#1c1c1c",
}
