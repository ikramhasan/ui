import { Field, FieldLabel } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"

export function FieldHorizontal() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldLabel htmlFor="field-seats">Seats</FieldLabel>
      <Input id="field-seats" type="number" defaultValue={5} className="w-20" />
    </Field>
  )
}
