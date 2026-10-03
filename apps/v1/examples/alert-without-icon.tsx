import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert"

export function AlertWithoutIcon() {
  return (
    <Alert>
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        Changes to permissions take effect the next time the app syncs.
      </AlertDescription>
    </Alert>
  )
}
