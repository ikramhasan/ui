import { Button } from "@/registry/ui/button"
import { Input } from "@/registry/ui/input"

export function InputWithButton() {
  return (
    <form className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" aria-label="Email" />
      <Button type="submit" variant="secondary">
        Subscribe
      </Button>
    </form>
  )
}
