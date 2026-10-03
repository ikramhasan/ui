import { PackageIcon, ShieldCheckIcon } from "lucide-react"

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

export function ItemDemo() {
  return (
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
  )
}
