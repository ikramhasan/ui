"use client"

import { GlobeIcon, MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Field, FieldError, FieldLabel } from "@/registry/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"

const fruits = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]

const themes = [
  { label: "Light", value: "light", icon: SunIcon },
  { label: "Dark", value: "dark", icon: MoonIcon },
  { label: "System", value: "system", icon: MonitorIcon },
]

const timezones = [
  "Pacific/Honolulu",
  "America/Anchorage",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Sao_Paulo",
  "Atlantic/Azores",
  "Europe/London",
  "Europe/Paris",
  "Europe/Istanbul",
  "Asia/Dubai",
  "Asia/Karachi",
  "Asia/Dhaka",
  "Asia/Bangkok",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
  "Pacific/Auckland",
].map((zone) => ({ label: zone.replace(/_/g, " "), value: zone }))

export function SelectDemo() {
  return (
    <>
      <Example title="Default">
        <Select items={fruits}>
          <SelectTrigger className="w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              {fruits.slice(1).map((fruit) => (
                <SelectItem key={fruit.value} value={fruit.value}>
                  {fruit.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Example>

      <Example title="Groups, icons and a disabled item">
        <Select items={themes} defaultValue="system">
          <SelectTrigger className="w-44">
            <SelectValue>
              {(value: string) => {
                const theme = themes.find((t) => t.value === value)
                if (!theme) return null
                const Icon = theme.icon
                return (
                  <>
                    <Icon />
                    {theme.label}
                  </>
                )
              }}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Appearance</SelectLabel>
              {themes.map((theme) => (
                <SelectItem key={theme.value} value={theme.value}>
                  <theme.icon />
                  {theme.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectItem value="high-contrast" disabled>
                High contrast
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Example>

      <Example title="Sizes">
        <div className="flex items-center gap-3">
          <Select items={fruits} defaultValue="apple">
            <SelectTrigger size="sm" className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fruits.slice(1).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select items={fruits} defaultValue="apple">
            <SelectTrigger className="w-36">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fruits.slice(1).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </Example>

      <Example title="Below the trigger, scrollable">
        <Select items={timezones} defaultValue="Asia/Dhaka">
          <SelectTrigger className="w-56">
            <GlobeIcon />
            <SelectValue />
          </SelectTrigger>
          <SelectContent alignItemWithTrigger={false} className="max-h-64">
            <SelectGroup>
              <SelectLabel>Timezone</SelectLabel>
              {timezones.map((zone) => (
                <SelectItem key={zone.value} value={zone.value}>
                  {zone.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Example>

      <Example title="Invalid">
        <Field data-invalid className="max-w-56">
          <FieldLabel htmlFor="select-fruit">Fruit</FieldLabel>
          <Select items={fruits}>
            <SelectTrigger id="select-fruit" aria-invalid className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {fruits.slice(1).map((fruit) => (
                  <SelectItem key={fruit.value} value={fruit.value}>
                    {fruit.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldError>Pick a fruit to continue.</FieldError>
        </Field>
      </Example>

      <Example title="Disabled">
        <Select items={fruits} disabled>
          <SelectTrigger className="w-44">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">Apple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </Example>
    </>
  )
}
