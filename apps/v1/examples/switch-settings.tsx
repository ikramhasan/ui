import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/ui/field"
import { Switch } from "@/registry/ui/switch"

export function SwitchSettings() {
  return (
    <FieldGroup className="max-w-sm">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="sw-sync">Data sync</FieldLabel>
          <FieldDescription>Update products every hour.</FieldDescription>
        </FieldContent>
        <Switch id="sw-sync" defaultChecked />
      </Field>
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="sw-theme">Edit theme</FieldLabel>
          <FieldDescription>
            Let Marketer read and update your storefront theme.
          </FieldDescription>
        </FieldContent>
        <Switch id="sw-theme" />
      </Field>
    </FieldGroup>
  )
}
