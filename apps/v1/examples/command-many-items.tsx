"use client"

import { FileTextIcon } from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/ui/command"

export function CommandManyItems() {
  return (
    <Command className="max-w-sm ring-1 ring-border">
      <CommandInput placeholder="Search documents..." />
      <CommandList>
        <CommandEmpty>No documents found.</CommandEmpty>
        <CommandGroup heading="Documents">
          {Array.from({ length: 24 }, (_, i) => (
            <CommandItem key={i}>
              <FileTextIcon />
              <span>Quarterly report {i + 1}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
