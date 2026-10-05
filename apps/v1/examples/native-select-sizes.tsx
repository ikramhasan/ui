import { NativeSelect, NativeSelectOption } from "@/registry/ui/native-select"

export function NativeSelectSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <NativeSelect size="sm" aria-label="Fruit (small)">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="Fruit">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
