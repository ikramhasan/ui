import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"

// The README banner doubles as the link preview for every page.
const image = {
  url: "/banner.png",
  width: 1280,
  height: 640,
  alt: `${siteConfig.name}: components with texture. ui.ikramhasan.com`,
  type: "image/png",
}

// Next merges metadata shallowly, so a page that sets `openGraph` drops the
// layout's image. Pages build both objects here instead.
export function socialMetadata({
  title,
  description = siteConfig.description,
  url = "/",
  type = "website",
}: {
  title: string
  description?: string
  url?: string
  type?: "website" | "article"
}): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type,
      locale: "en_US",
      siteName: siteConfig.name,
      url,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}
