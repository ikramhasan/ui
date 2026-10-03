import { Badge } from "@/registry/ui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>New</Badge>
      <Badge variant="secondary">Disconnected</Badge>
      <Badge variant="destructive">Failed</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="ghost">Beta</Badge>
      <Badge variant="link">Docs</Badge>
    </div>
  )
}
