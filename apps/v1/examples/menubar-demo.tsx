"use client"

import * as React from "react"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/registry/ui/menubar"

export function MenubarDemo() {
  const [bookmarks, setBookmarks] = React.useState(true)
  const [urls, setUrls] = React.useState(false)
  const [profile, setProfile] = React.useState("benoit")

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              New tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>New incognito window</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem>
            Print… <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Undo <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarGroup>
            <MenubarItem>Cut</MenubarItem>
            <MenubarItem>Copy</MenubarItem>
            <MenubarItem>Paste</MenubarItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem variant="destructive">Delete</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent className="w-64">
          <MenubarGroup>
            <MenubarCheckboxItem
              checked={bookmarks}
              onCheckedChange={setBookmarks}
            >
              Always show bookmarks bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem checked={urls} onCheckedChange={setUrls}>
              Always show full URLs
            </MenubarCheckboxItem>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem inset disabled>
            Force reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel inset>Switch profile</MenubarLabel>
            <MenubarRadioGroup value={profile} onValueChange={setProfile}>
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit…</MenubarItem>
          <MenubarItem inset>Add profile…</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
