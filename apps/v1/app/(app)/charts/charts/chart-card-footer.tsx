import { TrendingUpIcon } from "lucide-react"

import { CardFooter } from "@/registry/ui/card"

// The trend line every gallery card ends with: a body-medium headline and a
// muted caption, on the Card's footer strip.
export function ChartCardFooter({
  trend = "Up 5.2% this month",
  caption = "January to June 2024",
}: {
  trend?: string
  caption?: string
}) {
  return (
    <CardFooter className="flex-col items-start gap-0.5">
      <div className="flex items-center gap-1.5 font-medium">
        {trend}
        <TrendingUpIcon className="size-4 text-muted-foreground" />
      </div>
      <div className="text-muted-foreground">{caption}</div>
    </CardFooter>
  )
}
