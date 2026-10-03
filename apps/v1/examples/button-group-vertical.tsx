"use client"

import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import { ButtonGroup } from "@/registry/ui/button-group"

export function ButtonGroupVertical() {
  return (
    <ButtonGroup orientation="vertical" aria-label="Zoom">
      <Button variant="secondary" size="icon" aria-label="Zoom in">
        <PlusIcon />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Zoom out">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
