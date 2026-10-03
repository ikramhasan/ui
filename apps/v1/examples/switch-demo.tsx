import { Label } from "@/registry/ui/label"
import { Switch } from "@/registry/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2">
        <Switch id="sw-default" />
        <Label htmlFor="sw-default">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-on" defaultChecked />
        <Label htmlFor="sw-on">On</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-sm" size="sm" defaultChecked />
        <Label htmlFor="sw-sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch id="sw-disabled" disabled />
        <Label htmlFor="sw-disabled">Disabled</Label>
      </div>
    </div>
  )
}
