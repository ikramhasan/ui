"use client"

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

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

export function SelectGroups() {
  return (
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
  )
}

const themes = [
  { label: "Light", value: "light", icon: SunIcon },
  { label: "Dark", value: "dark", icon: MoonIcon },
  { label: "System", value: "system", icon: MonitorIcon },
]
