import { Badge } from "@/registry/ui/badge"

export function BadgeAsLink() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge render={<a href="#badge" />}>New</Badge>
      <Badge variant="secondary" render={<a href="#badge" />}>
        Disconnected
      </Badge>
      <Badge variant="outline" render={<a href="#badge" />}>
        Draft
      </Badge>
    </div>
  )
}
