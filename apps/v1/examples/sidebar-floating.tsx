"use client"

import * as React from "react"
import {
  BookOpenIcon,
  BoxIcon,
  ChevronsUpDownIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react"
import { cn } from "cn"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu"
import { Kbd } from "@/registry/ui/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/registry/ui/sidebar"
import { Skeleton } from "@/registry/ui/skeleton"

export function SidebarFloating() {
  return (
    <Shell>
      <Sidebar variant="floating" className={embedded}>
        <SidebarHeader className="gap-3">
          <WorkspaceSwitcher />
          <div className="relative">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <SidebarInput
              placeholder="Quick actions"
              aria-label="Quick actions"
              className="pr-8 pl-8"
            />
            <Kbd className="absolute top-1/2 right-1.5 -translate-y-1/2">K</Kbd>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Docs</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <BookOpenIcon />
                  <span>Getting started</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#sidebar" isActive>
                      <span>Installation</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#sidebar">
                      <span>Theming</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton href="#sidebar" size="sm">
                      <span>Changelog</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton variant="outline">
                  <PlusIcon />
                  <span>New page</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton size="sm">
                  <ShareIcon />
                  <span>Share (sm)</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton disabled>
                  <TrashIcon />
                  <span>Trash (disabled)</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="bg-transparent">
        <PageSkeleton />
      </SidebarInset>
    </Shell>
  )
}

// The demos are embedded shells: the provider is the frame (not the
// viewport) and the sidebar is positioned inside it. Every provider listens
// for ⌘B, so shells that shouldn't collapse ignore open changes.
function Shell({
  children,
  className,
  open = true,
  onOpenChange = () => {},
}: {
  children: React.ReactNode
  className?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  return (
    <SidebarProvider
      open={open}
      onOpenChange={onOpenChange}
      className={cn(
        "relative isolate h-120 min-h-0 w-full overflow-hidden rounded-xl border bg-sidebar",
        className
      )}
      style={{ "--sidebar-width": "15rem" } as React.CSSProperties}
    >
      {children}
    </SidebarProvider>
  )
}

const embedded = "absolute h-full"

function WorkspaceSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton
                size="lg"
                className="data-popup-open:bg-sidebar-accent"
              />
            }
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-[color-mix(in_oklch,var(--primary),black_15%)] bg-linear-to-b from-[color-mix(in_oklch,var(--primary),white_15%)] to-primary text-primary-foreground shadow-[0_1px_2px_rgb(30_60_160/0.28),inset_0_1px_0_rgb(255_255_255/0.22)] [&_svg:not([class*='text-'])]:text-primary-foreground!">
              <BoxIcon />
            </span>
            <span className="grid flex-1 leading-4">
              <span className="truncate font-medium">Acme Inc</span>
              <span className="truncate text-xs text-muted-foreground">
                Enterprise
              </span>
            </span>
            <ChevronsUpDownIcon className="ml-auto" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Acme Inc</DropdownMenuItem>
            <DropdownMenuItem>Acme Corp</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusIcon />
              Add workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}

function PageSkeleton() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-3 gap-4">
        <Skeleton className="aspect-video rounded-lg" />
        <Skeleton className="aspect-video rounded-lg" />
        <Skeleton className="aspect-video rounded-lg" />
      </div>
      <Skeleton className="h-40 rounded-lg" />
    </div>
  )
}
