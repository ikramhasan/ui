"use client"

import * as React from "react"

import { Button } from "@/registry/ui/button"
import { Calendar } from "@/registry/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"

// A fixed month keeps the server and client renders identical.
const MONTH = new Date(2026, 9, 1)

const TIMES = [
  { label: "9:00 AM", value: "09:00" },
  { label: "12:00 PM", value: "12:00" },
  { label: "3:00 PM", value: "15:00" },
  { label: "6:00 PM", value: "18:00" },
]

export function ScheduleSync() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 9, 14)
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule a launch</CardTitle>
        <CardDescription>Publish the spring collection.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Calendar
          mode="single"
          defaultMonth={MONTH}
          selected={date}
          onSelect={setDate}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="gap-2">
        <Select items={TIMES} defaultValue="09:00">
          <SelectTrigger className="flex-1" aria-label="Time">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {TIMES.map((time) => (
              <SelectItem key={time.value} value={time.value}>
                {time.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button>Schedule</Button>
      </CardFooter>
    </Card>
  )
}
