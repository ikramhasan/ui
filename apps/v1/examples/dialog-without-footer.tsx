import { Button } from "@/registry/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"

export function DialogWithoutFooter() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>
        Keyboard shortcuts
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Keyboard shortcuts</DialogTitle>
          <DialogDescription>
            Press ⌘K anywhere to open quick actions, and ⌘/ to see this list
            again.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
