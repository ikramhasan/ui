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
  FieldGroup,
  FieldLabel,
} from "@/registry/ui/field"
import { Switch } from "@/registry/ui/switch"

const NOTIFICATIONS = [
  {
    id: "orders",
    label: "New orders",
    description: "A note for every order over $100.",
    defaultChecked: true,
  },
  {
    id: "stock",
    label: "Low stock",
    description: "When a product drops below ten units.",
    defaultChecked: true,
  },
  {
    id: "reviews",
    label: "Reviews",
    description: "New ratings and replies from customers.",
    defaultChecked: false,
  },
  {
    id: "digest",
    label: "Weekly digest",
    description: "Sales and traffic, every Monday.",
    defaultChecked: false,
  },
]

export function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Choose what Marketer tells you about.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          {NOTIFICATIONS.map((n) => (
            <Field key={n.id} orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor={`notify-${n.id}`}>{n.label}</FieldLabel>
                <FieldDescription>{n.description}</FieldDescription>
              </FieldContent>
              <Switch id={`notify-${n.id}`} defaultChecked={n.defaultChecked} />
            </Field>
          ))}
        </FieldGroup>
      </CardContent>
      <CardFooter>
        <Button variant="secondary" className="w-full">
          Save preferences
        </Button>
      </CardFooter>
    </Card>
  )
}
