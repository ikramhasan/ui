"use client"

import * as React from "react"
import { cn } from "cn"

import { Button } from "@/registry/ui/button"

// Long source listings start collapsed to 16rem with a fade, like shadcn's.
export function CodeCollapsibleWrapper({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div
      data-open={open}
      className={cn("group/collapsible relative mt-6", className)}
    >
      <div className="relative overflow-hidden rounded-xl group-data-[open=false]/collapsible:max-h-64 [&>figure]:mt-0">
        {children}
      </div>
      <div className="absolute inset-x-px bottom-px flex h-20 items-end justify-center rounded-b-xl bg-linear-to-b from-transparent to-(--code) pb-3 group-data-[open=true]/collapsible:static group-data-[open=true]/collapsible:h-auto group-data-[open=true]/collapsible:bg-none group-data-[open=true]/collapsible:pt-3 group-data-[open=true]/collapsible:pb-0">
        <Button variant="secondary" size="sm" onClick={() => setOpen(!open)}>
          {open ? "Collapse" : "Expand"}
        </Button>
      </div>
    </div>
  )
}
