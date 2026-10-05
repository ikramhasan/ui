"use client"

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import { ChartContainer, type ChartConfig } from "@/registry/ui/chart"

import { ChartCardFooter } from "./chart-card-footer"

const chartData = [
  { browser: "safari", visitors: 1260, fill: "var(--chart-1)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig

// A single gauge: the track is the recessed `muted` ring (the Progress
// groove), the value a rounded `chart-1` arc riding it.
export function ChartRadialText() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Radial chart, text</CardTitle>
        <CardDescription>January to June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={-180}
            innerRadius={90}
            outerRadius={124}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-card"
              polarRadius={[96, 84]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 6}
                          className="fill-foreground text-[28px] font-medium tabular-nums"
                        >
                          {chartData[0].visitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 18}
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
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter caption="Safari visitors, 75% of goal" />
    </Card>
  )
}
