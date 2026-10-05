"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/ui/combobox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/ui/field"

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function ComboboxInvalid() {
  return (
    <Field data-invalid className="max-w-xs">
      <FieldLabel htmlFor="combobox-framework-invalid">Framework</FieldLabel>
      <Combobox items={frameworks}>
        <ComboboxInput
          id="combobox-framework-invalid"
          placeholder="Select a framework"
          aria-invalid
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
      <FieldDescription>The framework your app is built with.</FieldDescription>
      <FieldError errors={[{ message: "Select a framework." }]} />
    </Field>
  )
}
