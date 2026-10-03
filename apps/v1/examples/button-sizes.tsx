import { Button } from "@/registry/ui/button"

export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button size="xs" variant="secondary">
        Extra small
      </Button>
      <Button size="sm" variant="secondary">
        Small
      </Button>
      <Button variant="secondary">Default</Button>
      <Button size="lg" variant="secondary">
        Large
      </Button>
      <Button size="sm">Upgrade</Button>
    </div>
  )
}
