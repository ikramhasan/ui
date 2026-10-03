"use client"

import * as React from "react"

import { Button } from "@/registry/ui/button"
import { Progress, ProgressLabel, ProgressValue } from "@/registry/ui/progress"

export function ProgressWithLabelAndValue() {
  const [value, setValue] = React.useState(13)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <Progress value={value}>
        <ProgressLabel>Syncing products</ProgressLabel>
        <ProgressValue />
      </Progress>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setValue((v) => Math.max(0, v - 20))}
        >
          −20
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setValue((v) => Math.min(100, v + 20))}
        >
          +20
        </Button>
      </div>
    </div>
  )
}
