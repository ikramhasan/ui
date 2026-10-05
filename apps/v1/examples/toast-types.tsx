"use client"

import { Button } from "@/registry/ui/button"
import { toast } from "@/registry/ui/toast"

export function ToastTypes() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="secondary"
        onClick={() => toast.add({ title: "Event has been created." })}
      >
        Default
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({ type: "success", title: "Event has been created." })
        }
      >
        Success
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            type: "info",
            title: "Arrive 10 minutes before the event.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            type: "warning",
            title: "The event cannot start before 8:00 AM.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.add({
            type: "error",
            title: "The event could not be created.",
            priority: "high",
          })
        }
      >
        Error
      </Button>
    </div>
  )
}
