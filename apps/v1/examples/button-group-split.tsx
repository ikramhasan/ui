"use client"

import { ArchiveIcon, ChevronDownIcon, CopyIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/registry/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu"

export function ButtonGroupSplit() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ButtonGroup>
        <Button>
          <CopyIcon data-icon="inline-start" />
          Copy
        </Button>
        <ButtonGroupSeparator />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button size="icon" aria-label="More copy options" />}
          >
            <ChevronDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuItem>Copy link</DropdownMenuItem>
            <DropdownMenuItem>Copy as Markdown</DropdownMenuItem>
            <DropdownMenuItem>
              <ArchiveIcon />
              Archive
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">Follow</Button>
        <ButtonGroupSeparator />
        <Button variant="secondary" size="icon" aria-label="More options">
          <ChevronDownIcon />
        </Button>
      </ButtonGroup>
    </div>
  )
}
