import { Badge } from "@/registry/ui/badge"

export function BadgeAfterATitle() {
  return (
    <h3 className="flex items-center gap-2 text-xl font-medium">
      Shopify
      <Badge className="bg-success/15 text-success">Connected</Badge>
    </h3>
  )
}
