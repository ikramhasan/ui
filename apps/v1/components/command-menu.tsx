"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "cn"
import {
  ArrowRightIcon,
  ComponentIcon,
  FileTextIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

import type { DocsNavSection } from "@/lib/docs"
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
} from "@/registry/ui/command"
import { Kbd, KbdGroup } from "@/registry/ui/kbd"

export function CommandMenu({
  nav,
  navItems,
  className,
}: {
  nav: DocsNavSection[]
  navItems: { href: string; label: string }[]
  className?: string
}) {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        const target = e.target as HTMLElement
        if (
          e.key === "/" &&
          (target.isContentEditable ||
            ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
        )
          return
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const run = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="secondary"
        size="sm"
        className={cn(
          "w-full justify-start pr-1 pl-2.5 font-normal text-muted-foreground sm:w-56 lg:w-64",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <SearchIcon data-icon="inline-start" />
        <span className="hidden lg:inline">Search documentation...</span>
        <span className="lg:hidden">Search...</span>
        <KbdGroup className="ml-auto">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search documentation"
        description="Search for a page or component."
      >
        <Command>
          <CommandInput placeholder="Search documentation..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Pages">
              {navItems.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.label}
                  keywords={["page"]}
                  onSelect={() => run(() => router.push(item.href))}
                >
                  <ArrowRightIcon />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
            {nav.map((section) => (
              <CommandGroup key={section.title} heading={section.title}>
                {section.items.map((item) => (
                  <CommandItem
                    key={item.url}
                    value={item.name}
                    keywords={[section.title]}
                    onSelect={() => run(() => router.push(item.url))}
                  >
                    {item.url.startsWith("/docs/components/") ? (
                      <ComponentIcon />
                    ) : (
                      <FileTextIcon />
                    )}
                    {item.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
            <CommandSeparator />
            <CommandGroup heading="Theme">
              <CommandItem onSelect={() => run(() => setTheme("light"))}>
                <SunIcon />
                Light
              </CommandItem>
              <CommandItem onSelect={() => run(() => setTheme("dark"))}>
                <MoonIcon />
                Dark
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
