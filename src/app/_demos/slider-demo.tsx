"use client"

import * as React from "react"

import { Example } from "@/app/_components/showcase"
import { Label } from "@/registry/ui/label"
import { Slider } from "@/registry/ui/slider"

export function SliderDemo() {
  const [volume, setVolume] = React.useState(40)

  return (
    <>
      <Example title="Default">
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
      </Example>

      <Example title="Range and steps">
        <Slider
          aria-label="Price range"
          defaultValue={[20, 80]}
          step={10}
          className="max-w-xs"
        />
      </Example>

      <Example title="Vertical">
        <div className="flex h-40 items-center gap-6">
          <Slider
            aria-label="Bass"
            defaultValue={60}
            orientation="vertical"
          />
          <Slider
            aria-label="Treble"
            defaultValue={[25, 75]}
            orientation="vertical"
          />
        </div>
      </Example>

      <Example title="Disabled">
        <Slider
          aria-label="Brightness"
          defaultValue={50}
          disabled
          className="max-w-xs"
        />
      </Example>
    </>
  )
}
