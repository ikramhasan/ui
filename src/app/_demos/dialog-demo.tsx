import { Example } from "@/app/_components/showcase"
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

export function DialogDemo() {
  return (
    <>
      <Example title="Sign in">
        <Dialog>
          <DialogTrigger render={<Button variant="secondary" />}>
            Sign in
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader className="items-center">
              <DialogTitle>Sign in to Acme</DialogTitle>
            </DialogHeader>
            <Input type="email" placeholder="you@studio.com" aria-label="Email" />
            <DialogFooter>
              <Button>Continue</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Example>

      <Example title="Form">
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
      </Example>

      <Example title="Without footer">
        <Dialog>
          <DialogTrigger render={<Button variant="secondary" />}>
            Keyboard shortcuts
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Keyboard shortcuts</DialogTitle>
              <DialogDescription>
                Press ⌘K anywhere to open quick actions, and ⌘/ to see this
                list again.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </Example>

      <Example title="Footer close button">
        <Dialog>
          <DialogTrigger render={<Button variant="secondary" />}>
            What&apos;s new
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>What&apos;s new</DialogTitle>
              <DialogDescription>
                Stores now sync every hour, and you can pin chats to the
                sidebar.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter showCloseButton />
          </DialogContent>
        </Dialog>
      </Example>
    </>
  )
}
