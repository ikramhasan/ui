"use client"

import * as React from "react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import { Progress, ProgressLabel, ProgressValue } from "@/registry/ui/progress"

export function ProgressDemo() {
  const [value, setValue] = React.useState(13)

  return (
    <>
      <Example title="Default">
        <Progress value={60} aria-label="Upload" className="w-full max-w-xs" />
      </Example>

      <Example title="With label and value">
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
      </Example>

      <Example title="Empty and complete">
        <div className="flex w-full max-w-xs flex-col gap-4">
          <Progress value={0}>
            <ProgressLabel>Not started</ProgressLabel>
            <ProgressValue />
          </Progress>
          <Progress value={100}>
            <ProgressLabel>Done</ProgressLabel>
            <ProgressValue />
          </Progress>
        </div>
      </Example>
    </>
  )
}
