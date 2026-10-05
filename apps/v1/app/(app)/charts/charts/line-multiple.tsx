"use client"

import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
import { monthly, shortMonth, visitorsConfig } from "./data"

export function ChartLineMultiple() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line chart, multiple</CardTitle>
        <CardDescription>January to June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={visitorsConfig}>
          <LineChart
            accessibilityLayer
            data={monthly}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={shortMonth}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter caption="Visitors for the last 6 months" />
    </Card>
  )
}
