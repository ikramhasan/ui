import { Field, FieldDescription, FieldLabel } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"

export function FieldDemo() {
  return (
    <Field className="max-w-xs">
      <FieldLabel htmlFor="field-store">Store URL</FieldLabel>
      <Input id="field-store" placeholder="your-store.myshopify.com" />
      <FieldDescription>
        The address you sign in to Shopify with.
      </FieldDescription>
    </Field>
  )
}
