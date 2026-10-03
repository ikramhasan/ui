import { Button } from "@/registry/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"

export function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>
        Edit workspace
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit workspace</DialogTitle>
          <DialogDescription>
            Changes apply to everyone in the workspace.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ws-name">Name</Label>
            <Input id="ws-name" defaultValue="Acme" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="ws-url">URL</Label>
            <Input id="ws-url" defaultValue="acme.techshoi.app" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline" />}>
            Cancel
          </DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
