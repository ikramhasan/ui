import { Badge } from "@/registry/ui/badge"

export function BadgeStatus() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="bg-success/15 text-success">Connected</Badge>
      <Badge variant="secondary">Disconnected</Badge>
    </div>
  )
}
