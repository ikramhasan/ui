import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group"
import { Spinner } from "@/registry/ui/spinner"

export function SpinnerInputGroup() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput
        placeholder="Searching..."
        aria-label="Search"
        disabled
      />
      <InputGroupAddon align="inline-end">
        <Spinner />
      </InputGroupAddon>
    </InputGroup>
  )
}
