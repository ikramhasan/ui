"use client"

import { Bar, BarChart } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

// Each chart pins its tooltip open on the second month, so every style shows
// at once. Hover to move it.
const tooltips = [
  { title: "Dot", content: <ChartTooltipContent indicator="dot" /> },
  { title: "Line", content: <ChartTooltipContent indicator="line" /> },
  { title: "Dashed", content: <ChartTooltipContent indicator="dashed" /> },
  { title: "No label", content: <ChartTooltipContent hideLabel /> },
  {
    title: "No indicator",
    content: <ChartTooltipContent hideIndicator />,
  },
]

export function ChartTooltipExample() {
  return (
    <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tooltips.map((tooltip) => (
        <div key={tooltip.title} className="grid gap-2">
          <div className="text-[13px] leading-4 font-medium text-muted-foreground">
            {tooltip.title}
          </div>
          <ChartContainer config={chartConfig} className="aspect-[4/3] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <ChartTooltip
                defaultIndex={1}
                cursor={false}
                content={tooltip.content}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      ))}
    </div>
  )
}
