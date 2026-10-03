"use client"

import { Slider } from "@/registry/ui/slider"

export function SliderVertical() {
  return (
    <div className="flex h-40 items-center gap-6">
      <Slider aria-label="Bass" defaultValue={60} orientation="vertical" />
      <Slider
        aria-label="Treble"
        defaultValue={[25, 75]}
        orientation="vertical"
      />
    </div>
  )
}
