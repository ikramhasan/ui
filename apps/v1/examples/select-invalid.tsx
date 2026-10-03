"use client"

import { Field, FieldError, FieldLabel } from "@/registry/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"

export function SelectInvalid() {
  return (
    <Field data-invalid className="max-w-56">
      <FieldLabel htmlFor="select-fruit">Fruit</FieldLabel>
      <Select items={fruits}>
        <SelectTrigger id="select-fruit" aria-invalid className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {fruits.slice(1).map((fruit) => (
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>Pick a fruit to continue.</FieldError>
    </Field>
  )
}

const fruits = [
  { label: "Select a fruit", value: null },
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
]
