import {
  ArrowUpIcon,
  BoldIcon,
  ItalicIcon,
  PlusIcon,
  UnderlineIcon,
} from "lucide-react"

import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import { ButtonGroup } from "@/registry/ui/button-group"
import { Card, CardContent } from "@/registry/ui/card"
import { Checkbox } from "@/registry/ui/checkbox"
import { Kbd, KbdGroup } from "@/registry/ui/kbd"
import { Label } from "@/registry/ui/label"
import { Slider } from "@/registry/ui/slider"
import { Spinner } from "@/registry/ui/spinner"
import { Switch } from "@/registry/ui/switch"
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

export function UIElements() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Explore</Button>
          <Button variant="secondary">Surprise me</Button>
          <Button variant="secondary" size="icon" aria-label="Add">
            <PlusIcon />
          </Button>
          <Button size="icon" className="rounded-full" aria-label="Send">
            <ArrowUpIcon />
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ButtonGroup>
            <Button variant="secondary">Day</Button>
            <Button variant="secondary">Week</Button>
            <Button variant="secondary">Month</Button>
          </ButtonGroup>
          <ToggleGroup spacing={0} defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-success/15 text-success">Connected</Badge>
          <Badge>
            <Spinner data-icon="inline-start" />
            Syncing
          </Badge>
          <Badge variant="secondary">Draft</Badge>
          <Badge variant="outline">v1.0</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <div className="flex items-center gap-2">
            <Switch id="ui-sync" defaultChecked />
            <Label htmlFor="ui-sync">Auto sync</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="ui-notify" defaultChecked />
            <Label htmlFor="ui-notify">Notify me</Label>
          </div>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </div>
        <Slider aria-label="Volume" defaultValue={[40]} />
      </CardContent>
    </Card>
  )
}
