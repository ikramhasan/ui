import { NavigationMenu as NavigationMenuPrimitive } from "@base-ui/react/navigation-menu"
import { cva } from "class-variance-authority"
import { cn } from "cn"
import { ChevronDownIcon } from "lucide-react"

function NavigationMenu({
  align = "start",
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Root.Props &
  Pick<NavigationMenuPrimitive.Positioner.Props, "align">) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuPositioner align={align} />
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  )
}

// A 32px control, flat with an accent hover. While its menu is open (or, on
// a link, while it is the current page) it is pressed into the surface: the
// Toggle's recessed well, fading in on ::before.
const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger relative isolate inline-flex h-8 w-max items-center justify-center rounded-lg px-3 py-0 text-sm font-medium transition-[color,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] outline-none select-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:bg-linear-to-b before:from-[color-mix(in_oklch,var(--muted),var(--foreground)_7%)] before:to-muted before:opacity-0 before:shadow-[inset_0_1px_2px_rgb(0_0_0/0.1),inset_0_0_0_1px_rgb(0_0_0/0.05),0_1px_0_rgb(255_255_255/0.9)] before:transition-opacity before:duration-150 before:ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-transparent data-active:before:opacity-100 data-popup-open:bg-transparent data-popup-open:before:opacity-100 dark:before:from-[color-mix(in_oklch,var(--muted),black_35%)] dark:before:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(0_0_0/0.25),0_1px_0_rgb(255_255_255/0.07)]"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group pr-2.5", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-px ml-1 size-3 text-muted-foreground transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-popup-open/navigation-menu-trigger:rotate-180 motion-reduce:transition-none"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      // Moving between triggers, the old content slides out the way the
      // pointer went and the new one slides in after it, with a fade.
      className={cn(
        "h-full w-auto p-1 transition-[opacity,translate] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 data-starting-style:data-[activation-direction=left]:-translate-x-1/2 data-starting-style:data-[activation-direction=right]:translate-x-1/2 data-ending-style:data-[activation-direction=left]:translate-x-1/2 data-ending-style:data-[activation-direction=right]:-translate-x-1/2 motion-reduce:translate-x-0",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuPositioner({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className={cn(
          "isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] data-instant:transition-none motion-reduce:transition-none data-[side=bottom]:before:absolute data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5",
          className
        )}
        {...props}
      >
        {/* The Dropdown Menu shell: muted, 14px radius, ring, menu shadow and
            an inner top highlight. It morphs its size between contents and
            scales in from the trigger. */}
        <NavigationMenuPrimitive.Popup className="relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-xl bg-muted text-popover-foreground shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_rgb(0_0_0/0.1),inset_0_1px_0_rgb(255_255_255/0.7)] ring-1 ring-border transition-[opacity,scale,width,height] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] outline-none data-ending-style:scale-96 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-96 data-starting-style:opacity-0 motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:bg-[color-mix(in_oklch,var(--popover),black_20%)] dark:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_8px_24px_rgb(0_0_0/0.5),inset_0_1px_0_rgb(255_255_255/0.04)]">
          <NavigationMenuPrimitive.Viewport className="relative size-full overflow-hidden rounded-[inherit]" />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      // In the content, the Dropdown Menu row: rounded 10px (14 − 4) in the
      // shell, and the hovered or focused link lifts out of it as a raised
      // card. The current page (data-active) keeps the card. In the list,
      // style it with navigationMenuTriggerStyle().
      className={cn(
        "flex items-center gap-2 rounded-lg p-2 text-sm outline-none select-none in-data-[slot=navigation-menu-content]:hover:bg-linear-to-b in-data-[slot=navigation-menu-content]:hover:from-background in-data-[slot=navigation-menu-content]:hover:to-[color-mix(in_oklch,var(--background),var(--secondary)_60%)] in-data-[slot=navigation-menu-content]:hover:text-accent-foreground in-data-[slot=navigation-menu-content]:hover:shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] in-data-[slot=navigation-menu-content]:focus-visible:bg-linear-to-b in-data-[slot=navigation-menu-content]:focus-visible:from-background in-data-[slot=navigation-menu-content]:focus-visible:to-[color-mix(in_oklch,var(--background),var(--secondary)_60%)] in-data-[slot=navigation-menu-content]:focus-visible:text-accent-foreground in-data-[slot=navigation-menu-content]:focus-visible:shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] in-data-[slot=navigation-menu-content]:data-active:bg-linear-to-b in-data-[slot=navigation-menu-content]:data-active:from-background in-data-[slot=navigation-menu-content]:data-active:to-[color-mix(in_oklch,var(--background),var(--secondary)_60%)] in-data-[slot=navigation-menu-content]:data-active:shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] in-data-[slot=navigation-menu-content]:dark:hover:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_7%)] in-data-[slot=navigation-menu-content]:dark:hover:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_3%)] in-data-[slot=navigation-menu-content]:dark:hover:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_0_0_1px_rgb(255_255_255/0.05),inset_0_1px_0_rgb(255_255_255/0.06)] in-data-[slot=navigation-menu-content]:dark:focus-visible:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_7%)] in-data-[slot=navigation-menu-content]:dark:focus-visible:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_3%)] in-data-[slot=navigation-menu-content]:dark:focus-visible:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_0_0_1px_rgb(255_255_255/0.05),inset_0_1px_0_rgb(255_255_255/0.06)] in-data-[slot=navigation-menu-content]:dark:data-active:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_7%)] in-data-[slot=navigation-menu-content]:dark:data-active:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_3%)] in-data-[slot=navigation-menu-content]:dark:data-active:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_0_0_1px_rgb(255_255_255/0.05),inset_0_1px_0_rgb(255_255_255/0.06)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground in-data-[slot=navigation-menu-content]:hover:[&_svg:not([class*='text-'])]:text-foreground in-data-[slot=navigation-menu-content]:focus-visible:[&_svg:not([class*='text-'])]:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
    </NavigationMenuPrimitive.Icon>
  )
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuPositioner,
}
