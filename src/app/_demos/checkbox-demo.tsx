import { Example } from "@/app/_components/showcase"
import { Checkbox } from "@/registry/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"

export function CheckboxDemo() {
  return (
    <>
      <Example title="States">
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
      </Example>

      <Example title="With description">
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
              <FieldDescription>Import orders from the last 90 days.</FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </Example>

      <Example title="Choice card">
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
      </Example>
    </>
  )
}
