import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { getDocsNav } from "@/lib/docs"
import { CommandMenu } from "@/components/command-menu"
import { GitHubLink } from "@/components/github-link"
import { LogoMark } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import { Separator } from "@/registry/ui/separator"

export function SiteHeader() {
  const nav = getDocsNav()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container-wrapper">
        <div className="flex h-(--header-height) items-center gap-2">
          <MobileNav
            nav={nav}
            navItems={siteConfig.navItems}
            className="lg:hidden"
          />
          <Link
            href="/"
            className="flex h-8 items-center gap-2.5 rounded-md pr-2 text-[15px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring max-lg:hidden"
          >
            <LogoMark />
            {siteConfig.name}
          </Link>
          <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          <div className="ml-auto flex flex-1 items-center justify-end gap-1.5">
            <CommandMenu
              nav={nav}
              navItems={siteConfig.navItems}
              className="max-w-64 flex-1 sm:flex-none"
            />
            <Separator
              orientation="vertical"
              className="mx-1 data-vertical:h-4 data-vertical:self-center"
            />
            <GitHubLink />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
