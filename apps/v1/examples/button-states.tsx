import { LoaderCircleIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"

export function ButtonStates() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>Disabled</Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
      <Button variant="secondary" disabled>
        <LoaderCircleIcon data-icon="inline-start" className="animate-spin" />
        Saving
      </Button>
      <Button variant="secondary" aria-invalid>
        Invalid
      </Button>
      <Button variant="secondary" disabled focusableWhenDisabled>
        Focusable when disabled
      </Button>
    </div>
  )
}
