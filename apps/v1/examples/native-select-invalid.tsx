import { Field, FieldError, FieldLabel } from "@/registry/ui/field"
import { NativeSelect, NativeSelectOption } from "@/registry/ui/native-select"

export function NativeSelectInvalid() {
  return (
    <Field data-invalid className="w-fit">
      <FieldLabel htmlFor="native-select-country">Country</FieldLabel>
      <NativeSelect id="native-select-country" aria-invalid="true">
        <NativeSelectOption value="">Select a country</NativeSelectOption>
        <NativeSelectOption value="bd">Bangladesh</NativeSelectOption>
        <NativeSelectOption value="de">Germany</NativeSelectOption>
        <NativeSelectOption value="us">United States</NativeSelectOption>
      </NativeSelect>
      <FieldError>Choose the country you ship from.</FieldError>
    </Field>
  )
}
