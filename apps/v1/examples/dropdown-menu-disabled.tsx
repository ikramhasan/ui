"use client"

import { Button } from "@/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu"

export function DropdownMenuDisabled() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="secondary" />} disabled>
        Open
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Never opens</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
