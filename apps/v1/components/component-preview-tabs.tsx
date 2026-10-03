"use client"

import * as React from "react"
import { cn } from "cn"
import { CodeIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"

export function ComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  source,
}: {
  className?: string
  previewClassName?: string
  align?: "center" | "start" | "end"
  hideCode?: boolean
  component: React.ReactNode
  source: React.ReactNode
}) {
  const [codeVisible, setCodeVisible] = React.useState(false)

  return (
    <div
      data-slot="component-preview"
      className={cn(
        "group/preview relative mt-6 mb-12 flex flex-col overflow-hidden rounded-xl border",
        className
      )}
    >
      <div
        data-slot="preview"
        data-align={align}
        className={cn(
          "preview flex min-h-72 w-full flex-wrap justify-center gap-2 bg-background p-6 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start sm:p-10",
          previewClassName
        )}
      >
        {component}
      </div>
      {!hideCode && (
        <div
          data-slot="code"
          data-visible={codeVisible}
          className="relative border-t bg-(--code) [&_figure]:m-0 [&_figure]:rounded-none [&_figure]:border-0 [&_pre]:max-h-96 data-[visible=false]:[&_pre]:max-h-28 data-[visible=false]:[&_pre]:overflow-hidden data-[visible=false]:**:data-[slot=copy-button]:hidden"
        >
          {source}
          {!codeVisible && (
            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-b from-transparent via-(--code)/70 to-(--code)">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setCodeVisible(true)}
              >
                <CodeIcon data-icon="inline-start" />
                View Code
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
