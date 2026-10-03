import { Button } from "@/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/registry/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group"

const PLANS = [
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

export function ChoosePlan() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose a plan</CardTitle>
        <CardDescription>Switch or cancel any time.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup defaultValue="growth" aria-label="Plan">
          {PLANS.map((plan) => (
            <FieldLabel key={plan.value} htmlFor={`plan-${plan.value}`}>
              <Field orientation="horizontal">
                <RadioGroupItem value={plan.value} id={`plan-${plan.value}`} />
                <FieldContent>
                  <FieldTitle>{plan.title}</FieldTitle>
                  <FieldDescription>{plan.description}</FieldDescription>
                </FieldContent>
              </Field>
            </FieldLabel>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}
