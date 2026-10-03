import {
  ArrowRightIcon,
  ChevronDownIcon,
  DicesIcon,
  LayersIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/registry/ui/button"

export function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="secondary">
        <DicesIcon data-icon="inline-start" />
        Surprise me
      </Button>
      <Button>
        <LayersIcon data-icon="inline-start" />
        Explore Moodboards
      </Button>
      <Button variant="ghost">
        Auto
        <ChevronDownIcon data-icon="inline-end" />
      </Button>
      <Button variant="outline">
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
      <Button variant="destructive">
        <Trash2Icon data-icon="inline-start" />
        Delete
      </Button>
    </div>
  )
}
