"use client"

import * as React from "react"
import {
  CircleAlertIcon,
  CircleCheckIcon,
  CircleDashedIcon,
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/registry/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/components/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/components/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/components/progress",
    description:
      "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll Area",
    href: "/docs/components/scroll-area",
    description: "Augments native scroll functionality for custom styling.",
  },
  {
    title: "Tabs",
    href: "/docs/components/tabs",
    description:
      "A set of layered sections of content, displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/components/tooltip",
    description:
      "A popup that displays information related to an element on hover or focus.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="mb-64">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-80 gap-1">
              <ListItem href="/docs" title="Introduction">
                Every shadcn component, rebuilt with texture.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install the style and add components.
              </ListItem>
              <ListItem href="/docs/theming" title="Theming">
                The tokens behind every surface and control.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 md:w-[500px] md:grid-cols-2">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-48 gap-1">
              <li>
                <NavigationMenuLink href="#">
                  <CircleAlertIcon />
                  Backlog
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <CircleDashedIcon />
                  To do
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">
                  <CircleCheckIcon />
                  Done
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/docs"
            className={navigationMenuTriggerStyle()}
          >
            Docs
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink href={href}>
        <div className="flex flex-col gap-0.5">
          <div className="font-medium">{title}</div>
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        </div>
      </NavigationMenuLink>
    </li>
  )
}
