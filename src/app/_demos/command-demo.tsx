"use client"

import * as React from "react"
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  FileTextIcon,
  LogOutIcon,
  MoonIcon,
  SearchIcon,
  SettingsIcon,
  SmileIcon,
  SunIcon,
  UserIcon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/ui/command"
import { Kbd, KbdGroup } from "@/registry/ui/kbd"

// cmdk scrolls its first item into view when it mounts. On a long page that
// drags the whole window down to an inline Command below the fold, so for a
// moment after mount, undo any scroll the person didn't make.
function useHoldScrollOnMount() {
  React.useLayoutEffect(() => {
    const y = window.scrollY
    let user = false
    const mark = () => (user = true)
    const hold = () => {
      if (!user && window.scrollY !== y) window.scrollTo(0, y)
    }
    const input = ["wheel", "touchstart", "keydown", "pointerdown"] as const
    input.forEach((e) => window.addEventListener(e, mark, { passive: true }))
    window.addEventListener("scroll", hold)
    const stop = window.setTimeout(release, 1000)
    function release() {
      input.forEach((e) => window.removeEventListener(e, mark))
      window.removeEventListener("scroll", hold)
    }
    return () => {
      window.clearTimeout(stop)
      release()
    }
  }, [])
}

export function CommandDemo() {
  useHoldScrollOnMount()

  return (
    <>
      <Example title="Inline">
        <Command className="max-w-sm shadow-[0_1px_2px_rgb(0_0_0/0.04)] ring-1 ring-border">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <CalculatorIcon />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <UserIcon />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </Example>

      <Example title="Dialog (⌘K)">
        <CommandPalette />
      </Example>

      <Example title="Checked items">
        <ThemePicker />
      </Example>

      <Example title="Many items">
        <Command className="max-w-sm ring-1 ring-border">
          <CommandInput placeholder="Search documents..." />
          <CommandList>
            <CommandEmpty>No documents found.</CommandEmpty>
            <CommandGroup heading="Documents">
              {Array.from({ length: 24 }, (_, i) => (
                <CommandItem key={i}>
                  <FileTextIcon />
                  <span>Quarterly report {i + 1}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </Example>
    </>
  )
}

function CommandPalette() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="secondary"
        className="w-64 justify-start pr-1.5 pl-2.5 font-normal text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <SearchIcon data-icon="inline-start" />
        Search...
        <KbdGroup className="ml-auto">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setOpen(false)}>
                <CalendarIcon />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <SmileIcon />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <CalculatorIcon />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Account">
              <CommandItem onSelect={() => setOpen(false)}>
                <UserIcon />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <SettingsIcon />
                <span>Settings</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <LogOutIcon />
                <span>Log out</span>
                <CommandShortcut>⇧⌘Q</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
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
