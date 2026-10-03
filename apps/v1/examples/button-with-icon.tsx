import {
  ArrowRightIcon,
  ChevronDownIcon,
  RocketIcon,
  ShuffleIcon,
  Trash2Icon,
} from "lucide-react"

import { Button } from "@/registry/ui/button"

export function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="secondary">
        <ShuffleIcon data-icon="inline-start" />
        Shuffle
      </Button>
      <Button>
        <RocketIcon data-icon="inline-start" />
        Launch campaign
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
