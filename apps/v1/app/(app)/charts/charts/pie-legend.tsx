"use client"

import { Pie, PieChart } from "recharts"

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
import { browsers, browsersConfig } from "./data"

export function ChartPieLegend() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pie chart, legend</CardTitle>
        <CardDescription>January to June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer
          config={browsersConfig}
          className="mx-auto aspect-square max-h-[280px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="browser" hideLabel />}
            />
            <Pie
              data={browsers}
              dataKey="visitors"
              nameKey="browser"
              strokeWidth={4}
            />
            <ChartLegend
              itemSorter={null}
              content={
                <ChartLegendContent
                  nameKey="browser"
                  className="flex-wrap gap-x-4 gap-y-2"
                />
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <ChartCardFooter caption="Visitors by browser" />
    </Card>
  )
}
