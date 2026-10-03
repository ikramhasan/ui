import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function InputWithLabelAndHint() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <Label htmlFor="store-url">Store URL</Label>
      <Input
        id="store-url"
        placeholder="your-store.myshopify.com"
        aria-describedby="store-url-hint"
      />
      <p
        id="store-url-hint"
        className="text-[13px] leading-4 text-muted-foreground"
      >
        The address you sign in to Shopify with.
      </p>
    </div>
  )
}
