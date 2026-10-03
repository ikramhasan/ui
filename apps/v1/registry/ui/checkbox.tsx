"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { cn } from "cn"
import { CheckIcon } from "lucide-react"

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Unchecked: a tiny secondary button with a 3:1 border. Checked: the
        // default button's skin fades in on ::before (gradients can't
        // transition, opacity can).
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-[color-mix(in_oklch,var(--input),var(--foreground)_48%)] bg-linear-to-b from-background to-secondary text-primary-foreground shadow-[0_1px_2px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] transition-[border-color,box-shadow,scale] duration-150 ease-out outline-none group-has-disabled/field:opacity-50 group-has-[:focus-visible]/field-label:ring-0 before:absolute before:-inset-px before:rounded-[4px] before:bg-linear-to-b before:from-[color-mix(in_oklch,var(--primary),white_15%)] before:to-primary before:opacity-0 before:shadow-[inset_0_1px_0_rgb(255_255_255/0.22)] before:transition-opacity before:duration-150 before:ease-out after:absolute after:-inset-3 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:active:scale-100 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:border-[color-mix(in_oklch,var(--input),var(--foreground)_35%)] dark:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_4%)] dark:shadow-[0_1px_2px_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.06)] dark:aria-invalid:ring-destructive/40 data-checked:border-[color-mix(in_oklch,var(--primary),black_15%)] data-checked:shadow-[0_1px_2px_rgb(30_60_160/0.28)] data-checked:before:opacity-100 data-indeterminate:border-[color-mix(in_oklch,var(--primary),black_15%)] data-indeterminate:shadow-[0_1px_2px_rgb(30_60_160/0.28)] data-indeterminate:before:opacity-100 dark:data-checked:shadow-[0_1px_2px_rgb(0_0_0/0.45)] dark:data-indeterminate:shadow-[0_1px_2px_rgb(0_0_0/0.45)]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        keepMounted
        // The tick draws itself from the short stroke to the long one.
        // Indeterminate swaps it for an 8×2px dash, centered on whole pixels.
        className="relative grid place-content-center text-current [&>svg]:size-3 [&>svg]:stroke-3 [&_path]:transition-[stroke-dashoffset] [&_path]:duration-200 [&_path]:ease-[cubic-bezier(0.23,1,0.32,1)] [&_path]:[stroke-dasharray:24] data-checked:[&_path]:delay-50 data-checked:[&_path]:[stroke-dashoffset:0] data-unchecked:[&_path]:duration-100 data-unchecked:[&_path]:[stroke-dashoffset:-24] data-indeterminate:before:h-0.5 data-indeterminate:before:w-2 data-indeterminate:before:rounded-full data-indeterminate:before:bg-current data-indeterminate:[&>svg]:hidden motion-reduce:[&_path]:transition-none"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
