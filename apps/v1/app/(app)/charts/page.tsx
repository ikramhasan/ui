import type { Metadata } from "next"

import { ComingSoon } from "@/components/coming-soon"

export const metadata: Metadata = {
  title: "Charts",
  description: "Charts built with Recharts, styled to match.",
}

export default function ChartsPage() {
  return (
    <ComingSoon
      title="Charts are coming soon"
      description="Charts built on the Chart component, styled to match. They land once every component has shipped. Until then, browse the docs."
    />
  )
}
