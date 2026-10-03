import { InfoIcon, XIcon } from "lucide-react"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/ui/alert"
import { Button } from "@/registry/ui/button"

export function AlertWithAction() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Alert>
        <InfoIcon />
        <AlertTitle>A new version is available</AlertTitle>
        <AlertDescription>Reload to get the latest changes.</AlertDescription>
        <AlertAction>
          <Button size="sm" variant="secondary">
            Reload
          </Button>
        </AlertAction>
      </Alert>
      <Alert>
        <AlertTitle>Your trial ends in 14 days</AlertTitle>
        <AlertAction>
          <Button size="icon-sm" variant="ghost" aria-label="Dismiss">
            <XIcon />
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}
