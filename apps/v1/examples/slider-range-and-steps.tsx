"use client"

import { Slider } from "@/registry/ui/slider"

export function SliderRangeAndSteps() {
  return (
    <Slider
      aria-label="Price range"
      defaultValue={[20, 80]}
      step={10}
      className="max-w-xs"
    />
  )
}
