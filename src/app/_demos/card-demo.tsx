import { PenLineIcon, SearchIcon, SparklesIcon, XIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
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

const actions = [
  { icon: PenLineIcon, title: "Create", description: "Draft a post or a product page." },
  { icon: SearchIcon, title: "Find", description: "Look up orders and customers." },
  { icon: SparklesIcon, title: "Research", description: "Compare competitors' pricing." },
]

export function CardDemo() {
  return (
    <>
      <Example title="Default">
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
      </Example>

      <Example title="Action and small size">
        <Card size="sm" className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Getting started</CardTitle>
            <CardDescription>1 of 5 steps done</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon-sm" aria-label="Dismiss">
                <XIcon />
              </Button>
            </CardAction>
          </CardHeader>
        </Card>
      </Example>

      <Example title="Action cards">
        <div className="grid w-full gap-4 sm:grid-cols-3">
          {actions.map(({ icon: Icon, title, description }) => (
            <a
              key={title}
              href="#card"
              className="group/action rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Card className="h-full transition-[box-shadow] group-hover/action:shadow-[0_1px_2px_rgb(0_0_0/0.04),0_4px_12px_rgb(0_0_0/0.05)] group-hover/action:ring-input">
                <CardHeader>
                  <Icon className="mb-7 size-5 text-muted-foreground" />
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>
      </Example>
    </>
  )
}
