import { XIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"

export function CardSmall() {
  return (
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
  )
}
