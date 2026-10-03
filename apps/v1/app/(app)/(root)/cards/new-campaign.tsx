"use client"

import * as React from "react"

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
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"
import { Slider } from "@/registry/ui/slider"
import { Textarea } from "@/registry/ui/textarea"

const CHANNELS = [
  { label: "Email", value: "email" },
  { label: "Instagram", value: "instagram" },
  { label: "Google Ads", value: "google" },
]

export function NewCampaign() {
  const [budget, setBudget] = React.useState(1200)

  return (
    <Card>
      <CardHeader>
        <CardTitle>New campaign</CardTitle>
        <CardDescription>Marketer writes the first draft.</CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="campaign-name">Name</FieldLabel>
            <Input id="campaign-name" defaultValue="Spring collection" />
          </Field>
          <Field>
            <FieldLabel htmlFor="campaign-channel">Channel</FieldLabel>
            <Select items={CHANNELS} defaultValue="email">
              <SelectTrigger id="campaign-channel" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CHANNELS.map((channel) => (
                  <SelectItem key={channel.value} value={channel.value}>
                    {channel.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <div className="flex items-center justify-between">
              <FieldLabel id="campaign-budget-label">Budget</FieldLabel>
              <span className="text-sm text-muted-foreground tabular-nums">
                ${budget.toLocaleString("en-US")}
              </span>
            </div>
            <Slider
              aria-labelledby="campaign-budget-label"
              value={budget}
              onValueChange={(next) => setBudget(next as number)}
              min={100}
              max={5000}
              step={100}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="campaign-brief">Brief</FieldLabel>
            <Textarea
              id="campaign-brief"
              placeholder="Light linen, warm colors, a picnic mood…"
            />
            <FieldDescription>A sentence or two is plenty.</FieldDescription>
          </Field>
        </FieldGroup>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="secondary">Save draft</Button>
        <Button>Generate</Button>
      </CardFooter>
    </Card>
  )
}
