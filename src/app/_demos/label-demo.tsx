import { Example } from "@/app/_components/showcase"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function LabelDemo() {
  return (
    <>
      <Example title="Default">
        <div className="flex w-full max-w-xs flex-col gap-1.5">
          <Label htmlFor="workspace">Workspace name</Label>
          <Input id="workspace" defaultValue="Acme" />
        </div>
      </Example>

      <Example title="Disabled control">
        <div className="flex w-full max-w-xs flex-col gap-1.5">
          <Input id="api-key" disabled className="peer order-last" />
          <Label htmlFor="api-key">API key</Label>
        </div>
      </Example>
    </>
  )
}
