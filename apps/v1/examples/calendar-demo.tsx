"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Button } from "@/registry/ui/button"
import { Calendar } from "@/registry/ui/calendar"
import { Field, FieldLabel } from "@/registry/ui/field"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/popover"

export function CalendarDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <DatePicker />
      <DatePickerRange />
      <DatePickerDropdowns />
    </div>
  )
}

// Fixed dates keep the server and client renders identical.
const year = new Date().getFullYear()

const month = new Date().getMonth()

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
          <CalendarIcon
            data-icon="inline-end"
            className="text-muted-foreground"
          />
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
