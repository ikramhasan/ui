import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import { Kbd, KbdGroup } from "@/registry/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/ui/tooltip"

const formats = [
  { label: "Bold", icon: BoldIcon, key: "B" },
  { label: "Italic", icon: ItalicIcon, key: "I" },
  { label: "Underline", icon: UnderlineIcon, key: "U" },
  { label: "Strikethrough", icon: StrikethroughIcon, key: "X" },
]

export function TooltipDemo() {
  return (
    <>
      <Example title="Default">
        <Tooltip>
          <TooltipTrigger render={<Button variant="secondary" />}>
            Hover
          </TooltipTrigger>
          <TooltipContent>Add to library</TooltipContent>
        </Tooltip>
      </Example>

      <Example title="Sides">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger
              render={<Button variant="outline" className="capitalize" />}
            >
              {side}
            </TooltipTrigger>
            <TooltipContent side={side}>Opens on the {side}</TooltipContent>
          </Tooltip>
        ))}
      </Example>

      <Example title="With shortcut">
        <div className="flex items-center gap-0.5">
          {formats.map(({ label, icon: Icon, key }) => (
            <Tooltip key={label}>
              <TooltipTrigger
                render={
                  <Button variant="ghost" size="icon-sm" aria-label={label} />
                }
              >
                <Icon />
              </TooltipTrigger>
              <TooltipContent>
                {label}
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <Kbd>{key}</Kbd>
                </KbdGroup>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </Example>

      <Example title="Long content">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline" />}>
            Sync status
          </TooltipTrigger>
          <TooltipContent>
            Last synced 2 minutes ago. Changes made offline upload as soon as
            you reconnect.
          </TooltipContent>
        </Tooltip>
      </Example>

      <Example title="Disabled">
        <Tooltip disabled>
          <TooltipTrigger render={<Button variant="secondary" />}>
            Hover
          </TooltipTrigger>
          <TooltipContent>Never shows</TooltipContent>
        </Tooltip>
      </Example>
    </>
  )
}
