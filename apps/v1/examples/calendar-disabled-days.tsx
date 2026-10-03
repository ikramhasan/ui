"use client"

import * as React from "react"

import { Calendar } from "@/registry/ui/calendar"
import { Card, CardContent } from "@/registry/ui/card"

export function CalendarDisabledDays() {
  return <CalendarBooked />
}

// Fixed dates keep the server and client renders identical.
const year = new Date().getFullYear()

const month = new Date().getMonth()

function CalendarBooked() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(year, month, 7)
  )
  const booked = Array.from(
    { length: 8 },
    (_, i) => new Date(year, month, 14 + i)
  )

  return (
    <Card className="w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={[...booked, { dayOfWeek: [0, 6] }]}
          modifiers={{ booked }}
          modifiersClassNames={{ booked: "[&>button]:line-through" }}
        />
      </CardContent>
    </Card>
  )
}
