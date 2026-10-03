"use client"

import * as React from "react"
import {
  BellIcon,
  BookOpenIcon,
  BoxIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  LogOutIcon,
  MoreHorizontalIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  TrashIcon,
} from "lucide-react"

import { cn } from "cn"

import { Example } from "@/app/_components/showcase"
import { useIsMobile } from "@/registry/hooks/use-mobile"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu"
import { Kbd } from "@/registry/ui/kbd"
import { Separator } from "@/registry/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/registry/ui/sidebar"
import { Skeleton } from "@/registry/ui/skeleton"

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

const projects = [
  { name: "Design system", icon: BoxIcon },
  { name: "Marketing site", icon: FolderIcon },
  { name: "Docs", icon: BookOpenIcon },
]

export function SidebarDemo() {
  const [open, setOpen] = React.useState(true)
  // Below 768px a Sidebar is a sheet, so the shells can't embed; the page's
  // own sidebar is the demo there.
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <p className="text-sm text-muted-foreground">
        Open the menu at the top left: below 768px the page&apos;s own sidebar
        is this component, as a sheet.
      </p>
    )
  }

  return (
    <>
      <Example title="Inset, collapsible to icons">
        <Shell open={open} onOpenChange={setOpen}>
          <Sidebar variant="inset" collapsible="icon" className={embedded}>
            <SidebarHeader>
              <WorkspaceSwitcher />
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive tooltip="Home">
                      <HomeIcon />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Inbox">
                      <InboxIcon />
                      <span>Inbox</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>12</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Notifications">
                      <BellIcon />
                      <span>Notifications</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>3</SidebarMenuBadge>
                  </SidebarMenuItem>
                  <Collapsible
                    defaultOpen
                    render={<SidebarMenuItem />}
                    className="group/collapsible"
                  >
                    <CollapsibleTrigger
                      render={<SidebarMenuButton tooltip="Settings" />}
                    >
                      <SettingsIcon />
                      <span>Settings</span>
                      <ChevronRightIcon className="ml-auto transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-open/collapsible:rotate-90 motion-reduce:transition-none" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton href="#sidebar">
                            <span>General</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton href="#sidebar" isActive>
                            <span>Members</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton href="#sidebar">
                            <span>Billing</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupAction title="Add project">
                  <PlusIcon />
                  <span className="sr-only">Add project</span>
                </SidebarGroupAction>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {projects.map((project) => (
                      <SidebarMenuItem key={project.name}>
                        <SidebarMenuButton tooltip={project.name}>
                          <project.icon />
                          <span>{project.name}</span>
                        </SidebarMenuButton>
                        <ProjectActions />
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton size="lg" tooltip="Ada Lovelace">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-medium">
                      AL
                    </span>
                    <span className="grid flex-1 leading-4">
                      <span className="truncate font-medium">Ada Lovelace</span>
                      <span className="truncate text-xs text-muted-foreground">
                        ada@example.com
                      </span>
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
          </Sidebar>
          <SidebarInset>
            <InsetHeader title="Home" />
            <PageSkeleton />
          </SidebarInset>
        </Shell>
      </Example>

      <Example title="Floating, with search and sub-menus">
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
                <Kbd className="absolute top-1/2 right-1.5 -translate-y-1/2">
                  K
                </Kbd>
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
      </Example>

      <Example title="Loading">
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
      </Example>
    </>
  )
}

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

function ProjectActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<SidebarMenuAction showOnHover />}
        aria-label="More"
      >
        <MoreHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start" className="w-40">
        <DropdownMenuItem>
          <FolderIcon />
          Open
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShareIcon />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Leave
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function InsetHeader({ title }: { title: string }) {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b px-3">
      <SidebarTrigger />
      <Separator orientation="vertical" className="my-3.5" />
      <span className="text-sm font-medium">{title}</span>
    </header>
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
