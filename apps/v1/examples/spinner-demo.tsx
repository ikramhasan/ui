import { Item, ItemContent, ItemMedia, ItemTitle } from "@/registry/ui/item"
import { Spinner } from "@/registry/ui/spinner"

export function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm text-muted-foreground tabular-nums">
            $100.00
          </span>
        </ItemContent>
      </Item>
    </div>
  )
}
