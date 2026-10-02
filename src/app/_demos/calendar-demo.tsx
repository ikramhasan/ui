"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import { Calendar } from "@/registry/ui/calendar"
import { Card, CardContent, CardFooter } from "@/registry/ui/card"
import { Field, FieldLabel } from "@/registry/ui/field"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/popover"

// Fixed dates keep the server and client renders identical.
const year = new Date().getFullYear()
const month = new Date().getMonth()

export function CalendarDemo() {
  return (
    <>
      <Example title="Date picker">
        <DatePicker />
        <DatePickerRange />
        <DatePickerDropdowns />
      </Example>

      <Example title="Single">
        <CalendarSingle />
      </Example>

      <Example title="Range">
        <CalendarRange />
      </Example>

      <Example title="Multiple, week numbers">
        <CalendarMultiple />
      </Example>

      <Example title="Disabled days">
        <CalendarBooked />
      </Example>

      <Example title="With presets">
        <CalendarPresets />
      </Example>
    </>
  )
}

function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Field className="w-56">
      <FieldLabel htmlFor="date-picker">Due date</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="secondary"
              id="date-picker"
              className="justify-start px-2.5 font-normal"
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {date ? (
            format(date, "PPP")
          ) : (
            <span className="text-muted-foreground">Pick a date</span>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </PopoverContent>
      </Popover>
    </Field>
  )
}

function DatePickerRange() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(year, month, 8),
    to: new Date(year, month, 19),
  })

  return (
    <Field className="w-64">
      <FieldLabel htmlFor="date-picker-range">Trip</FieldLabel>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="secondary"
              id="date-picker-range"
              className="justify-start px-2.5 font-normal"
            />
          }
        >
          <CalendarIcon data-icon="inline-start" />
          {range?.from ? (
            range.to ? (
              <>
                {format(range.from, "LLL d")} – {format(range.to, "LLL d, y")}
              </>
            ) : (
              format(range.from, "LLL d, y")
            )
          ) : (
            <span className="text-muted-foreground">Pick dates</span>
          )}
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={range?.from}
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}

function DatePickerDropdowns() {
  const [date, setDate] = React.useState<Date>()
  const [open, setOpen] = React.useState(false)

  return (
    <Field className="w-56">
      <FieldLabel htmlFor="date-picker-dob">Date of birth</FieldLabel>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              id="date-picker-dob"
              className="justify-between pr-2 pl-2.5 font-normal"
            />
          }
        >
          {date ? (
            date.toLocaleDateString()
          ) : (
            <span className="text-muted-foreground">Select date</span>
          )}
          <CalendarIcon data-icon="inline-end" className="text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            defaultMonth={date ?? new Date(1995, 5)}
            captionLayout="dropdown"
            startMonth={new Date(1920, 0)}
            endMonth={new Date(year, 11)}
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </Field>
  )
}

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
