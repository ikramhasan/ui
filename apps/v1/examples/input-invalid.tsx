import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function InputInvalid() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="store-url-invalid">Store URL</Label>
      <Input
        id="store-url-invalid"
        defaultValue="mystore.com"
        aria-invalid
        aria-describedby="store-url-error"
      />
      <p
        id="store-url-error"
        className="text-[13px] leading-4 text-destructive"
      >
        Enter a URL ending in .myshopify.com
      </p>
    </div>
  )
}
