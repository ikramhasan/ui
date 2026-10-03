import { Button } from "@/registry/ui/button"
import { Spinner } from "@/registry/ui/spinner"

export function SpinnerButton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
      <Button variant="secondary" disabled>
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Processing
      </Button>
    </div>
  )
}
