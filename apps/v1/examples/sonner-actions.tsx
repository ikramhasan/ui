"use client"

import { toast } from "sonner"

import { Button } from "@/registry/ui/button"

export function SonnerActions() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="secondary"
        onClick={() =>
          toast("Message archived", {
            action: { label: "Undo", onClick: () => {} },
          })
        }
      >
        Action
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast("Delete 3 files?", {
            description: "This can't be undone.",
            cancel: { label: "Cancel", onClick: () => {} },
            action: { label: "Delete", onClick: () => {} },
          })
        }
      >
        Action and cancel
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast("Your export is ready", {
            description: "report-2026-10.csv",
            closeButton: true,
          })
        }
      >
        Close button
      </Button>
    </div>
  )
}
