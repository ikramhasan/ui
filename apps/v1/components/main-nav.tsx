"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "cn"

import { buttonVariants } from "@/registry/ui/button"

export function isNavItemActive(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/"
  }

  // Components live under /docs but have their own nav item.
  if (href === "/docs") {
    return (
      pathname.startsWith("/docs") && !pathname.startsWith("/docs/components")
    )
  }

  return pathname.startsWith(href)
}

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[]
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center gap-0.5", className)} {...props}>
      {items.map((item) => {
        const active = isNavItemActive(item.href, pathname)

        return (
          <Link
            key={item.href}
            href={item.href}
            data-active={active}
            aria-current={active ? "page" : undefined}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-2.5 font-normal text-muted-foreground data-[active=true]:text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
