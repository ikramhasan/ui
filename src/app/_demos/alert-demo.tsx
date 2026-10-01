import { CircleAlertIcon, InfoIcon, PlugIcon, XIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/ui/alert"
import { Button } from "@/registry/ui/button"

export function AlertDemo() {
  return (
    <>
      <Example title="Default">
        <Alert>
          <InfoIcon />
          <AlertTitle>Sync runs every hour</AlertTitle>
          <AlertDescription>
            Products, orders and customers update automatically. You can also
            sync now from the store settings.
          </AlertDescription>
        </Alert>
      </Example>

      <Example title="Title only">
        <Alert>
          <PlugIcon />
          <AlertTitle>Shopify is connected</AlertTitle>
        </Alert>
      </Example>

      <Example title="Destructive">
        <Alert variant="destructive">
          <CircleAlertIcon />
          <AlertTitle>Sync failed</AlertTitle>
          <AlertDescription>
            We couldn&apos;t reach your store. Check that the app still has
            access, then <a href="#alert">try again</a>.
          </AlertDescription>
        </Alert>
      </Example>

      <Example title="With action">
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
      </Example>

      <Example title="Without icon">
        <Alert>
          <AlertTitle>Heads up</AlertTitle>
          <AlertDescription>
            Changes to permissions take effect the next time the app syncs.
          </AlertDescription>
        </Alert>
      </Example>
    </>
  )
}
