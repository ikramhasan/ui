import { KeyRoundIcon, LaptopIcon, ShieldCheckIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item"

export function AccountSecurity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>Keep your workspace safe.</CardDescription>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <ShieldCheckIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Two-factor authentication</ItemTitle>
              <ItemDescription>
                Ask for a code when you sign in.
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="secondary">
                Enable
              </Button>
            </ItemActions>
          </Item>
          <Item variant="outline">
            <ItemMedia variant="icon">
              <KeyRoundIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Passkeys</ItemTitle>
              <ItemDescription>Sign in with your fingerprint.</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button size="sm" variant="secondary">
                Add
              </Button>
            </ItemActions>
          </Item>
          <Item variant="muted">
            <ItemMedia variant="icon">
              <LaptopIcon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>MacBook Pro</ItemTitle>
              <ItemDescription>Lisbon · This device</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
