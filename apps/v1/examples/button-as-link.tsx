import { ExternalLinkIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"

export function ButtonAsLink() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        variant="secondary"
        nativeButton={false}
        render={<a href="https://base-ui.com/react/components/button" />}
      >
        Base UI docs
        <ExternalLinkIcon data-icon="inline-end" />
      </Button>
      <Button variant="link" nativeButton={false} render={<a href="#button" />}>
        Back to top
      </Button>
    </div>
  )
}
