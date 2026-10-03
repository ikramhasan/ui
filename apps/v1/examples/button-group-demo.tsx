"use client"

import { ArrowLeftIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import { ButtonGroup } from "@/registry/ui/button-group"

export function ButtonGroupDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ButtonGroup>
        <Button variant="secondary" size="icon" aria-label="Go back">
          <ArrowLeftIcon />
        </Button>
        <Button variant="secondary">Archive</Button>
        <Button variant="secondary">Report</Button>
        <Button variant="secondary">Snooze</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline">Day</Button>
        <Button variant="outline">Week</Button>
        <Button variant="outline">Month</Button>
      </ButtonGroup>
    </div>
  )
}
