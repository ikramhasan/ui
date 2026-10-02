import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet"

export function SheetDemo() {
  return (
    <>
      <Example title="Edit profile">
        <Sheet>
          <SheetTrigger render={<Button variant="secondary" />}>
            Open
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid auto-rows-min gap-4 px-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="sheet-name">Name</Label>
                <Input id="sheet-name" defaultValue="Ada Lovelace" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="sheet-username">Username</Label>
                <Input id="sheet-username" defaultValue="@ada" />
              </div>
            </div>
            <SheetFooter>
              <Button>Save changes</Button>
              <SheetClose render={<Button variant="outline" />}>
                Close
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Example>

      <Example title="Sides">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Sheet key={side}>
            <SheetTrigger
              render={<Button variant="secondary" className="capitalize" />}
            >
              {side}
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>
                  {side[0].toUpperCase() + side.slice(1)} sheet
                </SheetTitle>
                <SheetDescription>
                  Slides in from the {side} edge. Press Escape to close.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        ))}
      </Example>
    </>
  )
}
