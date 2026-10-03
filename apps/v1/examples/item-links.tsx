import { ChevronRightIcon, StoreIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/ui/item"

export function ItemLinks() {
  return (
    <ItemGroup className="max-w-md gap-0 overflow-hidden rounded-xl border">
      <Item render={<a href="#item" />} className="rounded-none">
        <ItemMedia variant="icon">
          <StoreIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Acme Store</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
      <ItemSeparator className="my-0" />
      <Item render={<a href="#item" />} className="rounded-none">
        <ItemMedia variant="icon">
          <StoreIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Acme Outlet</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronRightIcon className="size-4 text-muted-foreground" />
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}
