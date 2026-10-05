"use client"

import { FootprintsIcon, WavesIcon } from "lucide-react"
import { Bar, BarChart, XAxis } from "recharts"

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
  type ChartConfig,
} from "@/registry/ui/chart"

import { weekday, workouts } from "./data"

const chartConfig = {
  running: {
    label: "Running",
    color: "var(--chart-1)",
    icon: FootprintsIcon,
  },
  swimming: {
    label: "Swimming",
    color: "var(--chart-2)",
    icon: WavesIcon,
  },
} satisfies ChartConfig

export function ChartTooltipIcons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tooltip, icons</CardTitle>
        <CardDescription>A config icon replaces the indicator.</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={workouts}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={weekday}
            />
            <Bar
              dataKey="running"
              stackId="a"
              fill="var(--color-running)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="var(--color-swimming)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel />}
              defaultIndex={1}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
