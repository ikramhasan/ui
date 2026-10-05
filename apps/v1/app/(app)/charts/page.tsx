import type { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { socialMetadata } from "@/lib/metadata"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/ui/button"

import { ChartAreaInteractive } from "./charts/area-interactive"
import { ChartAreaStacked } from "./charts/area-stacked"
import { ChartBarHorizontal } from "./charts/bar-horizontal"
import { ChartBarStacked } from "./charts/bar-stacked"
import { ChartLineLabel } from "./charts/line-label"
import { ChartLineMultiple } from "./charts/line-multiple"
import { ChartPieDonutText } from "./charts/pie-donut-text"
import { ChartPieLegend } from "./charts/pie-legend"
import { ChartRadarDots } from "./charts/radar-dots"
import { ChartRadarLegend } from "./charts/radar-legend"
import { ChartRadialStacked } from "./charts/radial-stacked"
import { ChartRadialText } from "./charts/radial-text"
import { ChartTooltipAdvanced } from "./charts/tooltip-advanced"
import { ChartTooltipIcons } from "./charts/tooltip-icons"

const title = "Charts"
const description =
  "Every chart type shadcn ships, built on the Chart component with Recharts. Copy one into your app and change the data."

export const metadata: Metadata = {
  title,
  description,
  ...socialMetadata({
    title: `${title} - ${siteConfig.name}`,
    description,
    url: "/charts",
  }),
}

// One page instead of shadcn's tab per type: each type gets a section with
// two variants side by side.
const sections = [
  {
    id: "area",
    title: "Area",
    charts: [ChartAreaInteractive, ChartAreaStacked],
  },
  { id: "bar", title: "Bar", charts: [ChartBarStacked, ChartBarHorizontal] },
  { id: "line", title: "Line", charts: [ChartLineMultiple, ChartLineLabel] },
  { id: "pie", title: "Pie", charts: [ChartPieDonutText, ChartPieLegend] },
  { id: "radar", title: "Radar", charts: [ChartRadarLegend, ChartRadarDots] },
  {
    id: "radial",
    title: "Radial",
    charts: [ChartRadialText, ChartRadialStacked],
  },
  {
    id: "tooltip",
    title: "Tooltip",
    charts: [ChartTooltipIcons, ChartTooltipAdvanced],
  },
]

export default function ChartsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader className="border-b-0">
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Link href="/docs/components/chart" className={buttonVariants()}>
            Chart docs
          </Link>
          <Link
            href="/docs/components/chart#theming"
            className={buttonVariants({ variant: "secondary" })}
          >
            Theming
          </Link>
        </PageActions>
      </PageHeader>
      <div className="flex-1 bg-muted py-10 dark:bg-sidebar">
        <div className="container-wrapper flex flex-col gap-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="flex scroll-mt-20 flex-col gap-4"
            >
              <h2 id={`${section.id}-heading`} className="text-xl font-medium">
                {section.title}
              </h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {section.charts.map((Chart) => (
                  <Chart key={Chart.name} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
