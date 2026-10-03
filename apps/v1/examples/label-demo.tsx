import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function LabelDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="workspace">Workspace name</Label>
      <Input id="workspace" defaultValue="Acme" />
    </div>
  )
}
