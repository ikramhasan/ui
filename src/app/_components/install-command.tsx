"use client"

import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/registry/ui/button"

export function InstallCommand({ name }: { name: string }) {
  const [copied, setCopied] = useState(false)
  const command = `npx shadcn@latest add http://localhost:3000/r/${name}.json`

  async function copy() {
    await navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex h-10 items-center gap-2 rounded-xl border bg-muted pr-1 pl-3">
      <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-muted-foreground">
        {command}
      </code>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label={copied ? "Copied" : "Copy command"}
        onClick={copy}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  )
}
