import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"
import { Textarea } from "@/registry/ui/textarea"

export function FieldDemo() {
  return (
    <>
      <Example title="With description">
        <Field className="max-w-xs">
          <FieldLabel htmlFor="field-store">Store URL</FieldLabel>
          <Input id="field-store" placeholder="your-store.myshopify.com" />
          <FieldDescription>
            The address you sign in to Shopify with.
          </FieldDescription>
        </Field>
      </Example>

      <Example title="Invalid">
        <Field className="max-w-xs" data-invalid>
          <FieldLabel htmlFor="field-store-invalid">Store URL</FieldLabel>
          <Input id="field-store-invalid" defaultValue="mystore.com" aria-invalid />
          <FieldError>Enter a URL ending in .myshopify.com</FieldError>
        </Field>
      </Example>

      <Example title="Fieldset">
        <FieldSet className="w-full max-w-sm">
          <FieldLegend>Workspace</FieldLegend>
          <FieldDescription>
            Shown to everyone you invite.
          </FieldDescription>
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
      </Example>

      <Example title="Horizontal">
        <Field orientation="horizontal" className="max-w-sm">
          <FieldLabel htmlFor="field-seats">Seats</FieldLabel>
          <Input id="field-seats" type="number" defaultValue={5} className="w-20" />
        </Field>
      </Example>

      <Example title="Separator">
        <FieldGroup className="max-w-xs">
          <Button variant="secondary">Continue with Google</Button>
          <FieldSeparator>Or</FieldSeparator>
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input id="field-email" type="email" placeholder="you@studio.com" />
          </Field>
        </FieldGroup>
      </Example>
    </>
  )
}
