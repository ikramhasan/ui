import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/registry/ui/native-select"

export function NativeSelectGroups() {
  return (
    <NativeSelect aria-label="Department">
      <NativeSelectOption value="">Select department</NativeSelectOption>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
        <NativeSelectOption value="backend">Backend</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Sales">
        <NativeSelectOption value="sales-rep">Sales rep</NativeSelectOption>
        <NativeSelectOption value="account-manager">
          Account manager
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Operations">
        <NativeSelectOption value="support">
          Customer support
        </NativeSelectOption>
        <NativeSelectOption value="ops-manager">
          Operations manager
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}
