"use client"

import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import { ButtonGroup } from "@/registry/ui/button-group"

export function ButtonGroupNested() {
  return (
    <ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" size="sm">
          1
        </Button>
        <Button variant="secondary" size="sm">
          2
        </Button>
        <Button variant="secondary" size="sm">
          3
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary" size="icon-sm" aria-label="Previous">
          <MinusIcon />
        </Button>
        <Button variant="secondary" size="icon-sm" aria-label="Next">
          <PlusIcon />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}
