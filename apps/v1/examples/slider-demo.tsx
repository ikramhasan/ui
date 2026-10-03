"use client"

import * as React from "react"

import { Label } from "@/registry/ui/label"
import { Slider } from "@/registry/ui/slider"

export function SliderDemo() {
  const [volume, setVolume] = React.useState(40)

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground tabular-nums">
          {volume}%
        </span>
      </div>
      <Slider
        aria-label="Volume"
        value={volume}
        onValueChange={(next) => setVolume(next as number)}
      />
    </div>
  )
}
