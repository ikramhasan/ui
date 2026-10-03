"use client"

import { toast } from "sonner"

import { Button } from "@/registry/ui/button"

export function SonnerDescription() {
  return (
    <Button
      variant="secondary"
      onClick={() =>
        toast.success("Changes saved", {
          description: "Your profile is now visible to your team.",
        })
      }
    >
      Show toast
    </Button>
  )
}
