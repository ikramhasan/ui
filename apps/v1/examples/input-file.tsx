import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function InputFile() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="logo">Logo</Label>
      <Input id="logo" type="file" />
    </div>
  )
}
