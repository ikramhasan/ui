import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function InputDemo() {
  return (
    <>
      <Example title="Default">
        <Input placeholder="Search apps" className="max-w-xs" />
      </Example>

      <Example title="With label and hint">
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
      </Example>

      <Example title="Invalid">
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
      </Example>

      <Example title="Disabled">
        <Input disabled placeholder="Disabled" className="max-w-xs" />
      </Example>

      <Example title="File">
        <div className="flex w-full max-w-xs flex-col gap-1.5">
          <Label htmlFor="logo">Logo</Label>
          <Input id="logo" type="file" />
        </div>
      </Example>

      <Example title="With button">
        <form className="flex w-full max-w-sm items-center gap-2">
          <Input type="email" placeholder="Email" aria-label="Email" />
          <Button type="submit" variant="secondary">
            Subscribe
          </Button>
        </form>
      </Example>
    </>
  )
}
