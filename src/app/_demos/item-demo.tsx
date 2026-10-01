import {
  ChevronRightIcon,
  PackageIcon,
  PlusIcon,
  ShieldCheckIcon,
  StoreIcon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/registry/ui/item"

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

export function ItemDemo() {
  return (
    <>
      <Example title="Variants">
        <ItemGroup className="max-w-md">
          <Item variant="outline">
            <ItemMedia variant="icon">
              <ShieldCheckIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Two-factor authentication</ItemTitle>
              <ItemDescription>
                Ask for a code from your phone when you sign in.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="secondary">
                Enable
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted">
            <ItemContent>
              <ItemTitle>Tool permissions</ItemTitle>
              <ItemDescription>
                Let Marketer read and update your storefront theme.
              </ItemDescription>
            </ItemContent>
          </Item>
          <Item>
            <ItemMedia variant="icon">
              <PackageIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Products synced</ItemTitle>
            </ItemContent>
            <ItemActions>
              <span className="text-muted-foreground">1,284</span>
            </ItemActions>
          </Item>
        </ItemGroup>
      </Example>

      <Example title="App list">
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
      </Example>

      <Example title="Store list (links, separators)">
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
      </Example>

      <Example title="Sizes">
        <ItemGroup className="max-w-md">
          {(["default", "sm", "xs"] as const).map((size) => (
            <Item key={size} size={size} variant="outline">
              <ItemMedia variant="image">
                <Tile letter={size[0].toUpperCase()} className="bg-[#333333]" />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Size {size}</ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </Example>
    </>
  )
}
