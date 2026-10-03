"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"
import { MenuIcon } from "lucide-react"

import type { DocsNavSection } from "@/lib/docs"
import { isNavItemActive } from "@/components/main-nav"
import { Button } from "@/registry/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet"

export function MobileNav({
  nav,
  navItems,
  className,
}: {
  nav: DocsNavSection[]
  navItems: { href: string; label: string }[]
  className?: string
}) {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label="Open menu"
            className={className}
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-4 pb-6">
          <MobileSection title="Pages">
            {navItems.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                active={isNavItemActive(item.href, pathname)}
                onNavigate={() => setOpen(false)}
              >
                {item.label}
              </MobileLink>
            ))}
          </MobileSection>
          {nav.map((section) => (
            <MobileSection key={section.title} title={section.title}>
              {section.items.map((item) => (
                <MobileLink
                  key={item.url}
                  href={item.url}
                  active={pathname === item.url}
                  onNavigate={() => setOpen(false)}
                >
                  {item.name}
                </MobileLink>
              ))}
            </MobileSection>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

function MobileSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="px-2 text-xs leading-6 font-medium text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  )
}

function MobileLink({
  href,
  active,
  onNavigate,
  children,
}: {
  href: string
  active: boolean
  onNavigate: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex h-8 items-center rounded-md px-2 text-sm outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring",
        active && "bg-accent font-medium"
      )}
    >
      {children}
    </Link>
  )
}
