import { CopyIcon, RotateCcwIcon, ThumbsDownIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import { Separator } from "@/registry/ui/separator"

export function SeparatorVerticalInAToolbar() {
  return (
    <div className="flex items-center gap-0.5">
      <Button variant="ghost" size="icon-sm" aria-label="Copy">
        <CopyIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Bad response">
        <ThumbsDownIcon />
      </Button>
      <Button variant="ghost" size="icon-sm" aria-label="Retry">
        <RotateCcwIcon />
      </Button>
      <Separator orientation="vertical" className="mx-1.5 my-1.5" />
      <Button variant="ghost" size="sm">
        Share
      </Button>
    </div>
  )
}
