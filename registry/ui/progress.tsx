"use client"

import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "cn"

function Progress({
  className,
  children,
  value,
  ...props
}: ProgressPrimitive.Root.Props) {
  return (
    <ProgressPrimitive.Root
      value={value}
      data-slot="progress"
      className={cn("flex flex-wrap gap-3", className)}
      {...props}
    >
      {children}
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
    </ProgressPrimitive.Root>
  )
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
  return (
    <ProgressPrimitive.Track
      className={cn(
        // The Slider groove: 6px, recessed, with a 3:1 inner hairline so the
        // empty part reads. The hairline sits above the fill (::after), so the
        // channel stays inside the groove's lip.
        "relative flex h-1.5 w-full items-center overflow-x-hidden rounded-full bg-linear-to-b from-[color-mix(in_oklch,var(--input),var(--foreground)_12%)] to-input after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_1.5px_rgb(0_0_0/0.12),inset_0_0_0_1px_color-mix(in_oklch,var(--input),var(--foreground)_48%)] dark:from-[color-mix(in_oklch,var(--input),black_30%)] dark:after:shadow-[inset_0_1px_1.5px_rgb(0_0_0/0.5),inset_0_0_0_1px_color-mix(in_oklch,var(--input),var(--foreground)_35%)]",
        className
      )}
      data-slot="progress-track"
      {...props}
    />
  )
}

function ProgressIndicator({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) {
  return (
    <ProgressPrimitive.Indicator
      data-slot="progress-indicator"
      className={cn(
        // The Slider's primary channel, rounded at its leading end. Width
        // eases on a strong ease-out so each update lands quickly.
        "h-full rounded-full bg-linear-to-b from-[color-mix(in_oklch,var(--primary),black_14%)] to-primary shadow-[inset_0_1px_1.5px_rgb(0_0_0/0.25),inset_0_0_0_1px_color-mix(in_oklch,var(--primary),black_15%)] transition-[width] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
        className
      )}
      {...props}
    />
  )
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
  return (
    <ProgressPrimitive.Label
      className={cn("text-sm font-medium", className)}
      data-slot="progress-label"
      {...props}
    />
  )
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
  return (
    <ProgressPrimitive.Value
      className={cn(
        "ml-auto text-sm text-muted-foreground tabular-nums",
        className
      )}
      data-slot="progress-value"
      {...props}
    />
  )
}

export {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
}
