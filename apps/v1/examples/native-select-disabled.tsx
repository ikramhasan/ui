import { NativeSelect, NativeSelectOption } from "@/registry/ui/native-select"

export function NativeSelectDisabled() {
  return (
    <NativeSelect disabled aria-label="Fruit">
      <NativeSelectOption value="">Disabled</NativeSelectOption>
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
    </NativeSelect>
  )
}
