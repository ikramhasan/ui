import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"
import { Textarea } from "@/registry/ui/textarea"

export function FieldFieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Workspace</FieldLegend>
      <FieldDescription>Shown to everyone you invite.</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="field-ws-name">Name</FieldLabel>
          <Input id="field-ws-name" defaultValue="Acme" />
        </Field>
        <Field>
          <FieldLabel htmlFor="field-ws-about">About</FieldLabel>
          <Textarea
            id="field-ws-about"
            placeholder="What does your team work on?"
          />
          <FieldDescription>One or two sentences.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
