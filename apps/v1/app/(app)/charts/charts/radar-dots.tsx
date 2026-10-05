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
  ChartTooltip,
  ChartTooltipContent,
} from "@/registry/ui/chart"

import { ChartCardFooter } from "./chart-card-footer"
import { monthly, visitorsConfig } from "./data"

export function ChartRadarDots() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Radar chart, dots</CardTitle>
        <CardDescription>
          Desktop visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={visitorsConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <RadarChart data={monthly}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="month" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                r: 4,
                fillOpacity: 1,
                stroke: "var(--card)",
                strokeWidth: 2,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter />
    </Card>
  )
}
