import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function LabelDisabledControl() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Input id="api-key" disabled className="peer order-last" />
      <Label htmlFor="api-key">API key</Label>
    </div>
  )
}
