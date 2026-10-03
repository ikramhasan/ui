"use client"

import * as React from "react"
import { cn } from "cn"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@/registry/ui/sidebar"
import { Skeleton } from "@/registry/ui/skeleton"

export function SidebarLoading() {
  return (
    <Shell className="h-80">
      <Sidebar collapsible="none" className="border-r border-sidebar-border">
        <SidebarHeader>
          <div className="flex h-12 items-center gap-2 px-2">
            <Skeleton className="size-8 rounded-md" />
            <Skeleton className="h-4 w-24" />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarMenu>
              {Array.from({ length: 5 }, (_, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
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
