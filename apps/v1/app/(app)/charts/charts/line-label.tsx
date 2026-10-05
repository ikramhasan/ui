"use client"

import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

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
import { monthly, shortMonth, visitorsConfig } from "./data"

// Dots are cut out of the card with a 2px `card` ring, so they read on the
// line and on the grid behind it.
export function ChartLineLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line chart, labels</CardTitle>
        <CardDescription>January to June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={visitorsConfig}>
          <LineChart
            accessibilityLayer
            data={monthly}
            margin={{ top: 24, left: 16, right: 16 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={shortMonth}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                r: 4,
                fill: "var(--color-desktop)",
                stroke: "var(--card)",
                strokeWidth: 2,
              }}
              activeDot={{ r: 6, stroke: "var(--card)", strokeWidth: 2 }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground tabular-nums"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter caption="Desktop visitors for the last 6 months" />
    </Card>
  )
}
