import Link from "next/link"
import { cn } from "cn"

// A Card that is a link: the Card's surface and hairline, with the neutral
// hover fill and the 2px focus ring.
export function LinkedCard({
  className,
  ...props
}: React.ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn(
        "flex w-full flex-col items-center rounded-2xl bg-card text-card-foreground ring-1 ring-border transition-colors duration-150 outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      {...props}
    />
  )
}
