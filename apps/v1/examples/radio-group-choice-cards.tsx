import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group"

export function RadioGroupChoiceCards() {
  return (
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
  )
}

const plans = [
  {
    value: "starter",
    title: "Starter",
    description: "One store, 500 products.",
  },
  {
    value: "growth",
    title: "Growth",
    description: "Three stores, unlimited products.",
  },
  {
    value: "scale",
    title: "Scale",
    description: "Unlimited stores and priority sync.",
  },
]
