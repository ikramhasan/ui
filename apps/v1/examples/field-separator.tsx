import { Button } from "@/registry/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"

export function FieldSeparatorExample() {
  return (
    <FieldGroup className="max-w-xs">
      <Button variant="secondary">Continue with Google</Button>
      <FieldSeparator>Or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field-email">Email</FieldLabel>
        <Input id="field-email" type="email" placeholder="you@studio.com" />
      </Field>
    </FieldGroup>
  )
}
