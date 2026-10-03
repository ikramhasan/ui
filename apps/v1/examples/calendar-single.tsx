"use client"

import * as React from "react"

import { Calendar } from "@/registry/ui/calendar"
import { Card, CardContent } from "@/registry/ui/card"

export function CalendarSingleExample() {
  return <CalendarSingle />
}

// Fixed dates keep the server and client renders identical.
const year = new Date().getFullYear()

const month = new Date().getMonth()

function CalendarSingle() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(year, month, 12)
  )

  return (
    <Card className="w-fit p-0">
      <CardContent className="p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} />
      </CardContent>
    </Card>
  )
}
