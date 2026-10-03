import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/registry/ui/input-group"

export function InputGroupTextExample() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="acme" aria-label="Store" />
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>.myshopify.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}
