"use client"

import { GalleryVerticalEndIcon } from "lucide-react"
import { LoginForm } from "@/registry/blocks/login-03/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-[color-mix(in_oklch,var(--primary),black_15%)] bg-linear-to-b from-[color-mix(in_oklch,var(--primary),white_15%)] to-primary text-primary-foreground shadow-[0_1px_2px_rgb(30_60_160/0.28),inset_0_1px_0_rgb(255_255_255/0.22)] [&_svg:not([class*='text-'])]:text-primary-foreground!">
            <GalleryVerticalEndIcon className="size-4" />
          </span>
          Acme Inc.
        </a>
        <LoginForm />
      </div>
    </div>
  )
}
