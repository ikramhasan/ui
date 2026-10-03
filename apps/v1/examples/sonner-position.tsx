"use client"

import { toast } from "sonner"

import { Button } from "@/registry/ui/button"

const positions = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
] as const

export function SonnerPosition() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {positions.map((position) => (
        <Button
          key={position}
          variant="secondary"
          onClick={() =>
            toast("Event has been created", {
              position,
            })
          }
        >
          {position
            .split("-")
            .map((word, index) =>
              index === 0 ? word[0].toUpperCase() + word.slice(1) : word
            )
            .join(" ")}
        </Button>
      ))}
    </div>
  )
}
