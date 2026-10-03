"use client"

import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/ui/drawer"

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="secondary" />}>
        Set goal
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col">
          <DrawerHeader>
            <DrawerTitle>Move goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="flex items-center justify-center gap-4 p-4">
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              aria-label="Decrease"
              disabled={goal <= 200}
              onClick={() => setGoal((g) => g - 10)}
            >
              <MinusIcon />
            </Button>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-semibold tracking-tight tabular-nums">
                {goal}
              </span>
              <span className="text-xs text-muted-foreground uppercase">
                Calories / day
              </span>
            </div>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full"
              aria-label="Increase"
              disabled={goal >= 500}
              onClick={() => setGoal((g) => g + 10)}
            >
              <PlusIcon />
            </Button>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose render={<Button variant="outline" />}>
              Cancel
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
