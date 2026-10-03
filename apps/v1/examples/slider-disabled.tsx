"use client"

import { Slider } from "@/registry/ui/slider"

export function SliderDisabled() {
  return (
    <Slider
      aria-label="Brightness"
      defaultValue={50}
      disabled
      className="max-w-xs"
    />
  )
}
