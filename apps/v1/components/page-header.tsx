import { cn } from "cn"

export function PageHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("border-b", className)} {...props}>
      <div className="container-wrapper">
        <div className="flex flex-col items-center gap-3 py-12 text-center md:py-20">
          {children}
        </div>
      </div>
    </section>
  )
}

export function PageHeaderHeading({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "max-w-2xl text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl",
        className
      )}
      {...props}
    />
  )
}

export function PageHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "max-w-2xl text-base text-pretty text-muted-foreground sm:text-lg",
        className
      )}
      {...props}
    />
  )
}

export function PageActions({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 pt-2",
        className
      )}
      {...props}
    />
  )
}
