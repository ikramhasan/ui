import { Spinner } from "@/registry/ui/spinner"

export function SpinnerColor() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-6 text-muted-foreground" />
      <Spinner className="size-6 text-primary" />
      <Spinner className="size-6 text-success" />
      <Spinner className="size-6 text-destructive" />
    </div>
  )
}
