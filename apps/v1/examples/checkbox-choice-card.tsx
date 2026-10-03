import { Checkbox } from "@/registry/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field"

export function CheckboxChoiceCard() {
  return (
    <FieldLabel className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="cb-card" defaultChecked />
        <FieldContent>
          <FieldTitle>Push enhanced images to Shopify</FieldTitle>
          <FieldDescription>
            Replace product photos with the edited versions.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldLabel>
  )
}
