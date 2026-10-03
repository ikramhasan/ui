"use client"

import * as React from "react"
import { type DateRange } from "react-day-picker"

import { Calendar } from "@/registry/ui/calendar"
import { Card, CardContent } from "@/registry/ui/card"

export function CalendarRangeExample() {
  return <CalendarRange />
}

// Fixed dates keep the server and client renders identical.
const year = new Date().getFullYear()

const month = new Date().getMonth()

function CalendarRange() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(year, month, 12),
    to: new Date(year, month + 1, 6),
  })

  return (
    <Card className="w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
        />
      </CardContent>
    </Card>
  )
}
