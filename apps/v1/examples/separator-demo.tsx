import { Separator } from "@/registry/ui/separator"

export function SeparatorDemo() {
  return (
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
  )
}
