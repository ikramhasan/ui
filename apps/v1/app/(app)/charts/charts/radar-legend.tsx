"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/ui/chart"

import { ChartCardFooter } from "./chart-card-footer"
import { monthly, visitorsConfig } from "./data"

export function ChartRadarLegend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Radar chart, multiple</CardTitle>
        <CardDescription>Visitors for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={visitorsConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <RadarChart data={monthly}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              strokeWidth={2}
            />
            <Radar
              dataKey="mobile"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              strokeWidth={2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter />
    </Card>
  )
}
