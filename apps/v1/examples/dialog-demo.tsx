import { Button } from "@/registry/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"
import { Input } from "@/registry/ui/input"

export function DialogDemo() {
  return (
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
  )
}
