"use client"

import * as React from "react"

import { useConfig } from "@/hooks/use-config"
import { Tabs } from "@/registry/ui/tabs"

// The Command / Manual tabs of an installation section. The choice is shared
// across pages.
export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig()

  return (
    <Tabs
      value={config.installationType}
      onValueChange={(value) =>
        setConfig({ ...config, installationType: value as "cli" | "manual" })
      }
      className="relative mt-6 w-full gap-4"
    >
      {children}
    </Tabs>
  )
}
