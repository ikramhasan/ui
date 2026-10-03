import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import { Field, FieldLabel } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Data sync</CardTitle>
        <CardDescription>
          Products, orders and customers update every hour.
        </CardDescription>
        <CardAction>
          <Badge className="bg-success/15 text-success">Connected</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Field>
          <FieldLabel htmlFor="card-store">Store URL</FieldLabel>
          <Input id="card-store" defaultValue="acme.myshopify.com" />
        </Field>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Disconnect</Button>
        <Button>Sync now</Button>
      </CardFooter>
    </Card>
  )
}
