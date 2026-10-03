import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { socialMetadata } from "@/lib/metadata"
import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Charts",
  description: "Charts built with Recharts, styled to match.",
  ...socialMetadata({
    title: `Charts - ${siteConfig.name}`,
    description: "Charts built with Recharts, styled to match.",
    url: "/charts",
  }),
}

export default function ChartsPage() {
  return (
    <ComingSoon
      title="Charts are coming soon"
      description="Charts built on the Chart component, styled to match. They land once every component has shipped. Until then, browse the docs."
    />
  )
}
