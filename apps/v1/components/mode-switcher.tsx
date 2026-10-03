"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/registry/ui/button"
import { Kbd } from "@/registry/ui/kbd"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip"

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  // "d" toggles the theme, outside of text fields.
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        e.key !== "d" ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
      )
        return
      e.preventDefault()
      toggleTheme()
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [toggleTheme])

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          />
        }
      >
        <SunIcon className="hidden dark:block" />
        <MoonIcon className="dark:hidden" />
      </TooltipTrigger>
      <TooltipContent>
        Toggle theme <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  )
}
