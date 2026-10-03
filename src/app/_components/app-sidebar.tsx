"use client"

import * as React from "react"
import { BoxIcon, PaletteIcon, SearchIcon } from "lucide-react"

import { Kbd } from "@/registry/ui/kbd"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/registry/ui/sidebar"

export function AppSidebar({
  components,
}: {
  components: { name: string; title: string }[]
}) {
  const { isMobile, setOpenMobile } = useSidebar()
  const [query, setQuery] = React.useState("")
  const active = useActiveSection(["style", ...components.map((c) => c.name)])
  const inputRef = React.useRef<HTMLInputElement>(null)

  // "/" focuses the filter, like most docs sites.
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (
        e.key !== "/" ||
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)
      )
        return
      e.preventDefault()
      inputRef.current?.focus()
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const filtered = components.filter((c) =>
    c.title.toLowerCase().includes(query.trim().toLowerCase())
  )

  function go() {
    if (isMobile) setOpenMobile(false)
  }

  return (
    <Sidebar>
      <SidebarHeader className="gap-3 px-3 pt-4">
        <a
          href="#"
          className="flex h-8 items-center gap-2.5 rounded-md px-2 text-base leading-5 font-medium outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
        >
          <span className="flex size-5 items-center justify-center rounded-[5px] bg-linear-to-b from-[color-mix(in_oklch,var(--primary),white_15%)] to-primary text-primary-foreground shadow-[0_1px_2px_rgb(30_60_160/0.28),inset_0_1px_0_rgb(255_255_255/0.22)] dark:shadow-[0_1px_2px_rgb(0_0_0/0.45),inset_0_1px_0_rgb(255_255_255/0.22)]">
            <BoxIcon className="size-3" strokeWidth={2.25} />
          </span>
          UI Registry
        </a>
        <div className="relative">
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <SidebarInput
            ref={inputRef}
            type="search"
            aria-label="Filter components"
            placeholder="Filter components"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setQuery("")
                e.currentTarget.blur()
              }
            }}
            className="pr-8 pl-8 [&::-webkit-search-cancel-button]:hidden"
          />
          <Kbd className="absolute top-1/2 right-1.5 -translate-y-1/2">/</Kbd>
        </div>
      </SidebarHeader>
      <SidebarContent className="pb-4">
        <SidebarGroup className="px-3">
          <SidebarGroupLabel>Getting started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={active === "style"}
                  render={<a href="#style" onClick={go} />}
                >
                  <PaletteIcon />
                  <span>Style</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="px-3">
          <SidebarGroupLabel>
            Components
            <span className="ml-auto font-normal tabular-nums">
              {components.length}
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filtered.map((c) => (
                <SidebarMenuItem key={c.name}>
                  <SidebarMenuButton
                    isActive={active === c.name}
                    render={<a href={`#${c.name}`} onClick={go} />}
                  >
                    <span>{c.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {filtered.length === 0 && (
                <li className="px-2 py-1.5 text-sm text-muted-foreground">
                  No components match.
                </li>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

// The section nearest the top of the viewport (below a 96px band) is active.
function useActiveSection(ids: string[]) {
  const [active, setActive] = React.useState<string>()
  const key = ids.join()

  React.useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    function update() {
      let current: string | undefined = sections[0]?.id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 96) current = section.id
      }
      // At the very bottom, the last section wins even if it's short.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      )
        current = sections.at(-1)?.id
      setActive(current)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [key])

  // Keep the active item in view inside the sidebar's own scroller.
  React.useEffect(() => {
    if (!active) return
    document
      .querySelector(
        `[data-slot=sidebar] a[href="#${CSS.escape(active)}"]`
      )
      ?.scrollIntoView({ block: "nearest" })
  }, [active])

  return active
}
