import { Label } from "@/registry/ui/label"
import { Textarea } from "@/registry/ui/textarea"

export function TextareaWithLabel() {
  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <Label htmlFor="feedback">Feedback</Label>
      <Textarea id="feedback" placeholder="What could be better?" />
    </div>
  )
}
