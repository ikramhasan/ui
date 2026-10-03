"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, CopyIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"

export async function copyToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    return false
  }
}

export function useCopy(timeout = 2000) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    if (!hasCopied) return
    const timer = setTimeout(() => setHasCopied(false), timeout)
    return () => clearTimeout(timer)
  }, [hasCopied, timeout])

  const copy = React.useCallback(async (value: string) => {
    if (await copyToClipboard(value)) {
      setHasCopied(true)
    }
  }, [])

  return { hasCopied, copy }
}

export function CopyButton({
  value,
  className,
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string
}) {
  const { hasCopied, copy } = useCopy()

  return (
    <Button
      data-slot="copy-button"
      data-copied={hasCopied}
      size="icon-sm"
      variant="ghost"
      aria-label={hasCopied ? "Copied" : "Copy"}
      className={cn(
        "absolute top-2 right-2 z-10 text-muted-foreground hover:text-foreground",
        className
      )}
      onClick={() => copy(value)}
      {...props}
    >
      {hasCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
