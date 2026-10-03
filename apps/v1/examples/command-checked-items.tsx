"use client"

import * as React from "react"
import { MoonIcon, SettingsIcon, SunIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/ui/command"

export function CommandCheckedItems() {
  return <ThemePicker />
}

const themes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "system", label: "System", icon: SettingsIcon },
]

function ThemePicker() {
  const [theme, setTheme] = React.useState("light")

  return (
    <Command className="max-w-60 ring-1 ring-border">
      <CommandInput placeholder="Change theme..." />
      <CommandList>
        <CommandEmpty>No themes found.</CommandEmpty>
        <CommandGroup heading="Theme">
          {themes.map(({ value, label, icon: Icon }) => (
            <CommandItem
              key={value}
              value={value}
              data-checked={theme === value}
              onSelect={setTheme}
            >
              <Icon />
              {label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
