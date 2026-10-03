import { InfoIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert"

export function AlertDemo() {
  return (
    <Alert>
      <InfoIcon />
      <AlertTitle>Sync runs every hour</AlertTitle>
      <AlertDescription>
        Products, orders and customers update automatically. You can also sync
        now from the store settings.
      </AlertDescription>
    </Alert>
  )
}
