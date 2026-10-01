import { Example } from "@/app/_components/showcase"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { Switch } from "@/registry/ui/switch"

export function SwitchDemo() {
  return (
    <>
      <Example title="Sizes and states">
        <div className="flex items-center gap-2">
          <Switch id="sw-default" />
          <Label htmlFor="sw-default">Default</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="sw-on" defaultChecked />
          <Label htmlFor="sw-on">On</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="sw-sm" size="sm" defaultChecked />
          <Label htmlFor="sw-sm">Small</Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch id="sw-disabled" disabled />
          <Label htmlFor="sw-disabled">Disabled</Label>
        </div>
      </Example>

      <Example title="Settings">
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
      </Example>
    </>
  )
}
