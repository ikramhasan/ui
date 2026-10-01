import { Example } from "@/app/_components/showcase"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field"
import { Label } from "@/registry/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group"

const plans = [
  { value: "starter", title: "Starter", description: "One store, 500 products." },
  { value: "growth", title: "Growth", description: "Three stores, unlimited products." },
  { value: "scale", title: "Scale", description: "Unlimited stores and priority sync." },
]

export function RadioGroupDemo() {
  return (
    <>
      <Example title="Default">
        <RadioGroup defaultValue="hourly" className="w-fit">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="hourly" id="rg-hourly" />
            <Label htmlFor="rg-hourly">Every hour</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="daily" id="rg-daily" />
            <Label htmlFor="rg-daily">Every day</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="manual" id="rg-manual" disabled />
            <Label htmlFor="rg-manual">Manually (disabled)</Label>
          </div>
        </RadioGroup>
      </Example>

      <Example title="Choice cards">
        <RadioGroup defaultValue="growth" className="max-w-sm">
          {plans.map((plan) => (
            <FieldLabel key={plan.value} htmlFor={`rg-${plan.value}`}>
              <Field orientation="horizontal">
                <RadioGroupItem value={plan.value} id={`rg-${plan.value}`} />
                <FieldContent>
                  <FieldTitle>{plan.title}</FieldTitle>
                  <FieldDescription>{plan.description}</FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </Example>
    </>
  )
}
