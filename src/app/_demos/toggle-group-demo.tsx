import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

export function ToggleGroupDemo() {
  return (
    <>
      <Example title="Joined (spacing 0)">
        <ToggleGroup spacing={0} defaultValue={["left"]}>
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup spacing={0} defaultValue={["week"]}>
          <ToggleGroupItem value="day">Day</ToggleGroupItem>
          <ToggleGroupItem value="week">Week</ToggleGroupItem>
          <ToggleGroupItem value="month">Month</ToggleGroupItem>
        </ToggleGroup>
      </Example>

      <Example title="Spaced, multiple">
        <ToggleGroup multiple defaultValue={["bold", "italic"]}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>

      <Example title="Outline">
        <ToggleGroup variant="outline" multiple defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup variant="outline" spacing={0} defaultValue={["center"]}>
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenterIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRightIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>

      <Example title="Sizes">
        {(["sm", "default", "lg"] as const).map((size) => (
          <ToggleGroup
            key={size}
            size={size}
            spacing={0}
            defaultValue={["left"]}
          >
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeftIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenterIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRightIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        ))}
      </Example>

      <Example title="Vertical and disabled">
        <ToggleGroup
          orientation="vertical"
          spacing={0}
          defaultValue={["bold"]}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <BoldIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <ItalicIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <UnderlineIcon />
          </ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup spacing={0} disabled defaultValue={["left"]}>
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeftIcon />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenterIcon />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>
    </>
  )
}
