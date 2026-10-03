import { PlugIcon } from "lucide-react"

import { Alert, AlertTitle } from "@/registry/ui/alert"

export function AlertTitleOnly() {
  return (
    <Alert>
      <PlugIcon />
      <AlertTitle>Shopify is connected</AlertTitle>
    </Alert>
  )
}
