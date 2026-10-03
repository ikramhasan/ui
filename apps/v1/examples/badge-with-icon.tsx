import { ArrowUpRightIcon, CheckIcon, SparklesIcon } from "lucide-react"

import { Badge } from "@/registry/ui/badge"

export function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge>
        <SparklesIcon data-icon="inline-start" />
        New
      </Badge>
      <Badge className="bg-success/15 text-success">
        <CheckIcon data-icon="inline-start" />
        Connected
      </Badge>
      <Badge variant="outline">
        Changelog
        <ArrowUpRightIcon data-icon="inline-end" />
      </Badge>
    </div>
  )
}
