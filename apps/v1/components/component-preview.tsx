import * as React from "react"

import { highlightCode } from "@/lib/highlight-code"
import { getExampleComponent, getExampleSource } from "@/lib/registry"
import { ComponentPreviewTabs } from "@/components/component-preview-tabs"
import { ComponentCode } from "@/components/component-source"

// Renders an example from examples/ with its source below it.
export async function ComponentPreview({
  name,
  className,
  previewClassName,
  align = "center",
  hideCode = false,
}: {
  name: string
  className?: string
  previewClassName?: string
  align?: "center" | "start" | "end"
  hideCode?: boolean
}) {
  const Component = await getExampleComponent(name)
  const code = await getExampleSource(name)

  if (!Component || !code) {
    return (
      <p className="mt-6 text-sm text-muted-foreground">
        Example <code>{name}</code> not found.
      </p>
    )
  }

  const source = code.trimEnd()
  const highlighted = await highlightCode(source)

  return (
    <ComponentPreviewTabs
      className={className}
      previewClassName={previewClassName}
      align={align}
      hideCode={hideCode}
      component={<Component />}
      source={
        <ComponentCode code={source} highlighted={highlighted} language="tsx" />
      }
    />
  )
}
