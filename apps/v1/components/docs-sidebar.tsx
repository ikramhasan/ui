"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { DocsNavSection } from "@/lib/docs"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/registry/ui/sidebar"

export function DocsSidebar({
  nav,
  ...props
}: React.ComponentProps<typeof Sidebar> & { nav: DocsNavSection[] }) {
  const pathname = usePathname()

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-(--header-height) z-30 hidden h-[calc(100svh-var(--header-height))] bg-transparent lg:flex"
      {...props}
    >
      <SidebarContent className="no-scrollbar overflow-x-hidden px-2 pt-6 pb-10">
        {nav.map((section) => (
          <SidebarGroup key={section.title} className="pr-4 pl-0">
            <SidebarGroupLabel>
              {section.title}
              {section.url?.startsWith("/docs/components") && (
                <span className="ml-auto font-normal tabular-nums">
                  {section.items.length}
                </span>
              )}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton
                      size="sm"
                      isActive={pathname === item.url}
                      render={<Link href={item.url} />}
                    >
                      {item.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
