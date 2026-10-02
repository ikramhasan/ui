import { ChevronsUpDownIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible"

export function CollapsibleDemo() {
  return (
    <Example title="Default">
      <Collapsible className="flex w-full max-w-xs flex-col">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h4 className="text-sm font-medium">Order #4189</h4>
          <CollapsibleTrigger
            render={
              <Button variant="ghost" size="icon-sm" aria-label="Toggle details" />
            }
          >
            <ChevronsUpDownIcon />
          </CollapsibleTrigger>
        </div>
        <div className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm">
          <span className="text-muted-foreground">Status</span>
          <span className="font-medium">Shipped</span>
        </div>
        {/* The 8px gap lives inside the panel, so it grows with the height
            instead of appearing at once. */}
        <CollapsibleContent>
          <div className="flex flex-col gap-2 pt-2">
            <div className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-medium">Express</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border px-3 py-2 text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-medium tabular-nums">$129.00</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Example>
  )
}
