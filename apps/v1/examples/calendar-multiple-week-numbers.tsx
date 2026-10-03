"use client"

import * as React from "react"

import { Calendar } from "@/registry/ui/calendar"
import { Card, CardContent } from "@/registry/ui/card"

export function CalendarMultipleWeekNumbers() {
  return <CalendarMultiple />
}

// Fixed dates keep the server and client renders identical.
const year = new Date().getFullYear()

const month = new Date().getMonth()

function CalendarMultiple() {
  const [dates, setDates] = React.useState<Date[] | undefined>([
    new Date(year, month, 4),
    new Date(year, month, 11),
    new Date(year, month, 18),
  ])

  return (
    <Card className="w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="multiple"
          showWeekNumber
          selected={dates}
          onSelect={setDates}
        />
      </CardContent>
    </Card>
  )
}
