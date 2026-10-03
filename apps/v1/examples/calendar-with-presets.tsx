"use client"

import * as React from "react"
import { addDays } from "date-fns"

import { Button } from "@/registry/ui/button"
import { Calendar } from "@/registry/ui/calendar"
import { Card, CardContent, CardFooter } from "@/registry/ui/card"

export function CalendarWithPresets() {
  return <CalendarPresets />
}

// Fixed dates keep the server and client renders identical.
const year = new Date().getFullYear()

const month = new Date().getMonth()

const presets = [
  { label: "Today", days: 0 },
  { label: "Tomorrow", days: 1 },
  { label: "In a week", days: 7 },
]

function CalendarPresets() {
  const [date, setDate] = React.useState<Date | undefined>()
  const [current, setCurrent] = React.useState(new Date(year, month, 1))

  return (
    <Card size="sm" className="w-fit">
      <CardContent className="px-2.5">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={current}
          onMonthChange={setCurrent}
          fixedWeeks
          className="p-0"
        />
      </CardContent>
      <CardFooter className="gap-2">
        {presets.map((preset) => (
          <Button
            key={preset.days}
            variant="secondary"
            size="sm"
            className="flex-1"
            onClick={() => {
              const next = addDays(new Date(), preset.days)
              setDate(next)
              setCurrent(new Date(next.getFullYear(), next.getMonth(), 1))
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}
