"use client"

import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import { ButtonGroup, ButtonGroupText } from "@/registry/ui/button-group"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"

export function ButtonGroupInput() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ButtonGroup className="w-full max-w-xs">
        <Input placeholder="Search…" aria-label="Search" />
        <Button variant="secondary" size="icon" aria-label="Search">
          <SearchIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <ButtonGroupText render={<Label htmlFor="bg-url" />}>
          https://
        </ButtonGroupText>
        <Input id="bg-url" placeholder="example.com" className="w-40" />
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
      <ButtonGroup>
        <Select items={currencies} defaultValue="usd">
          <SelectTrigger aria-label="Currency">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {currencies.map((c) => (
                <SelectItem key={c.value} value={c.value}>
                  {c.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="10.00" aria-label="Amount" className="w-28" />
      </ButtonGroup>
    </div>
  )
}

const currencies = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "GBP", value: "gbp" },
]
