import { PlusIcon } from "lucide-react"

import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item"

export function ItemAppList() {
  return (
    <ItemGroup className="max-w-md">
      <Item>
        <ItemMedia variant="image">
          <Tile letter="S" className="bg-[#5e8e3e]" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Shopify</ItemTitle>
          <ItemDescription>
            Products, orders and customers from your store.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Badge className="bg-success/15 text-success">Connected</Badge>
        </ItemActions>
      </Item>
      <Item>
        <ItemMedia variant="image">
          <Tile letter="M" className="bg-[#1877f2]" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Meta Ads</ItemTitle>
          <ItemDescription>
            Facebook and Instagram campaigns, creatives and audiences.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="icon" variant="secondary" aria-label="Connect Meta Ads">
            <PlusIcon />
          </Button>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}

// Partner apps show their own logo in a tile. These stand in for logos.
function Tile({ letter, className }: { letter: string; className: string }) {
  return (
    <div
      className={`flex size-full items-center justify-center text-sm font-semibold text-white ${className}`}
    >
      {letter}
    </div>
  )
}
