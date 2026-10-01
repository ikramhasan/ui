import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-sm border border-transparent px-[5px] text-[13px] leading-4 font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background has-data-[icon=inline-end]:pr-[3px] has-data-[icon=inline-start]:pl-[3px] aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-[color-mix(in_oklch,var(--primary),black_12%)] dark:bg-primary/20 dark:text-[color-mix(in_oklch,var(--primary),white_35%)] [a]:hover:bg-primary/15 dark:[a]:hover:bg-primary/25",
        secondary:
          "bg-muted text-muted-foreground [a]:hover:bg-[color-mix(in_oklch,var(--muted),var(--foreground)_5%)]",
        destructive:
          "bg-destructive/10 text-[color-mix(in_oklch,var(--destructive),black_12%)] focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:text-[color-mix(in_oklch,var(--destructive),white_25%)] dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        outline:
          "border-border text-foreground [a]:hover:bg-accent [a]:hover:text-accent-foreground",
        ghost:
          "text-muted-foreground [a]:hover:bg-accent [a]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline dark:text-[color-mix(in_oklch,var(--primary),white_35%)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
