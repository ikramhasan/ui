import { ArrowUpIcon, MicIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"

export function ButtonIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="icon-xs" variant="secondary" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon-sm" variant="secondary" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="secondary" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon-lg" variant="secondary" aria-label="Add">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="ghost" aria-label="Voice input">
        <MicIcon />
      </Button>
      <Button size="icon" className="rounded-full" aria-label="Send">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
