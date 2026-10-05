"use client"

import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

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
  type ChartConfig,
} from "@/registry/ui/chart"

import { ChartCardFooter } from "./chart-card-footer"
import { monthly } from "./data"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  label: {
    theme: {
      light: "var(--primary-foreground)",
      dark: "var(--background)",
    },
  },
} satisfies ChartConfig

// Labels inside the bar: white on light chart-1 (4.9:1), `background` on the
// lifted dark chart-1 (4.6:1; white would be 3.7:1). Values sit outside the
// bar in foreground.
export function ChartBarHorizontal() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar chart, horizontal</CardTitle>
        <CardDescription>January to June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={monthly}
            layout="vertical"
            margin={{ right: 32 }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis dataKey="month" type="category" hide />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={8}
                className="fill-(--color-label) font-medium"
                fontSize={12}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-foreground tabular-nums"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter caption="Desktop visitors for the last 6 months" />
    </Card>
  )
}
