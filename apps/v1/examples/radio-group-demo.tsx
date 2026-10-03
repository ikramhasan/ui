import { Label } from "@/registry/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="hourly" className="w-fit">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="hourly" id="rg-hourly" />
        <Label htmlFor="rg-hourly">Every hour</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="daily" id="rg-daily" />
        <Label htmlFor="rg-daily">Every day</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="manual" id="rg-manual" disabled />
        <Label htmlFor="rg-manual">Manually (disabled)</Label>
      </div>
    </RadioGroup>
  )
}
