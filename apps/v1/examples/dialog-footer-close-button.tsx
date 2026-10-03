import { Button } from "@/registry/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"

export function DialogFooterCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="secondary" />}>
        What&apos;s new
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>What&apos;s new</DialogTitle>
          <DialogDescription>
            Stores now sync every hour, and you can pin chats to the sidebar.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  )
}
