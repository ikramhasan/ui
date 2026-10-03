import { Field, FieldError, FieldLabel } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"

export function FieldInvalid() {
  return (
    <Field className="max-w-xs" data-invalid>
      <FieldLabel htmlFor="field-store-invalid">Store URL</FieldLabel>
      <Input id="field-store-invalid" defaultValue="mystore.com" aria-invalid />
      <FieldError>Enter a URL ending in .myshopify.com</FieldError>
    </Field>
  )
}
