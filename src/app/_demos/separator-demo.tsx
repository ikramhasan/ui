import { CopyIcon, RotateCcwIcon, ThumbsDownIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import { Separator } from "@/registry/ui/separator"

export function SeparatorDemo() {
  return (
    <>
      <Example title="Horizontal">
        <div className="flex w-full max-w-sm flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-base leading-5 font-medium">Data sync</h4>
            <p className="text-muted-foreground">
              Products, orders and customers every hour.
            </p>
          </div>
          <Separator />
          <div className="flex h-5 items-center gap-3 text-sm">
            <span>Products</span>
            <Separator orientation="vertical" />
            <span>Orders</span>
            <Separator orientation="vertical" />
            <span>Customers</span>
          </div>
        </div>
      </Example>

      <Example title="Vertical in a toolbar">
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
      </Example>
    </>
  )
}
