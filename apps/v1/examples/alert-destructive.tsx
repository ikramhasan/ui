import { CircleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert"

export function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <CircleAlertIcon />
      <AlertTitle>Sync failed</AlertTitle>
      <AlertDescription>
        We couldn&apos;t reach your store. Check that the app still has access,
        then <a href="#alert">try again</a>.
      </AlertDescription>
    </Alert>
  )
}
