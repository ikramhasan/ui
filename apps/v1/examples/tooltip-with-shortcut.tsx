import {
  BoldIcon,
  ItalicIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "lucide-react"

import { Button } from "@/registry/ui/button"
import { Kbd, KbdGroup } from "@/registry/ui/kbd"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip"

export function TooltipWithShortcut() {
  return (
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
  )
}

const formats = [
  { label: "Bold", icon: BoldIcon, key: "B" },
  { label: "Italic", icon: ItalicIcon, key: "I" },
  { label: "Underline", icon: UnderlineIcon, key: "U" },
  { label: "Strikethrough", icon: StrikethroughIcon, key: "X" },
]
