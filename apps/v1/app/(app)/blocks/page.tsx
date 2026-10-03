import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { socialMetadata } from "@/lib/metadata"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Blocks",
  description: "Building blocks for the web, made from our components.",
  ...socialMetadata({
    title: `Blocks - ${siteConfig.name}`,
    description: "Building blocks for the web, made from our components.",
    url: "/blocks",
  }),
}

export default function BlocksPage() {
  return (
    <ComingSoon
      title="Blocks are coming soon"
      description="Pages and sections made from our components. They land once every component has shipped. Until then, browse the docs."
    />
  )
}
