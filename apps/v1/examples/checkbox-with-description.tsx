import { Checkbox } from "@/registry/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/ui/field"

export function CheckboxWithDescription() {
  return (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <Checkbox id="cb-sync" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="cb-sync">Sync products</FieldLabel>
          <FieldDescription>
            Keep titles, prices and stock in step with Shopify.
          </FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="cb-orders" />
        <FieldContent>
          <FieldLabel htmlFor="cb-orders">Sync orders</FieldLabel>
          <FieldDescription>
            Import orders from the last 90 days.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}
