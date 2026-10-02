"use client"

import * as React from "react"
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  RotateCwIcon,
  Trash2Icon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/ui/context-menu"

export function ContextMenuDemo() {
  const [bookmarks, setBookmarks] = React.useState(true)
  const [urls, setUrls] = React.useState(false)
  const [person, setPerson] = React.useState("pedro")

  return (
    <Example title="Right-click the area">
      <ContextMenu>
        <ContextMenuTrigger className="flex h-36 w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
          Right-click here
        </ContextMenuTrigger>
        <ContextMenuContent className="w-56">
          <ContextMenuGroup>
            <ContextMenuItem>
              <ArrowLeftIcon />
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              <ArrowRightIcon />
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <RotateCwIcon />
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-44">
                <ContextMenuItem>Save page…</ContextMenuItem>
                <ContextMenuItem>Create shortcut…</ContextMenuItem>
                <ContextMenuItem>Name window…</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem
              inset
              checked={bookmarks}
              onCheckedChange={setBookmarks}
            >
              Show bookmarks
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem inset checked={urls} onCheckedChange={setUrls}>
              Show full URLs
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
              <ContextMenuRadioItem inset value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem inset value="colm">Colm Tuite</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuItem variant="destructive">
            <Trash2Icon />
            Delete
            <ContextMenuShortcut>⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </Example>
  )
}
