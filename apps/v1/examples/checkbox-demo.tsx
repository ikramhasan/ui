import { Checkbox } from "@/registry/ui/checkbox"
import { Label } from "@/registry/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2">
        <Checkbox id="cb-terms" />
        <Label htmlFor="cb-terms">Accept terms</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-checked" defaultChecked />
        <Label htmlFor="cb-checked">Checked</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-disabled" disabled />
        <Label htmlFor="cb-disabled">Disabled</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="cb-invalid" aria-invalid />
        <Label htmlFor="cb-invalid">Invalid</Label>
      </div>
    </div>
  )
}
