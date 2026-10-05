"use client"

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

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
import { visitorsConfig } from "./data"

const chartData = [{ month: "january", desktop: 1260, mobile: 570 }]
const total = chartData[0].desktop + chartData[0].mobile

// The two arcs are separated by a 2px `card` stroke, so they read as two
// segments without a hard-coded gap color.
export function ChartRadialStacked() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Radial chart, stacked</CardTitle>
        <CardDescription>January to June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={visitorsConfig}
          className="mx-auto aspect-auto h-[280px] w-full max-w-[400px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={180}
            innerRadius={140}
            outerRadius={190}
            cy="88%"
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 20}
                          className="fill-foreground text-[28px] font-medium tabular-nums"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 2}
                          className="fill-muted-foreground text-xs"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="mobile"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-mobile)"
              className="stroke-card stroke-2"
            />
            <RadialBar
              dataKey="desktop"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-desktop)"
              className="stroke-card stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter caption="Visitors for the last 6 months" />
    </Card>
  )
}
