import { Label } from "@/registry/ui/label"
import { Textarea } from "@/registry/ui/textarea"

export function TextareaInvalid() {
  return (
    <div className="flex w-full max-w-md flex-col gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        id="bio"
        aria-invalid
        aria-describedby="bio-error"
        defaultValue="Hi"
      />
      <p id="bio-error" className="text-[13px] leading-4 text-destructive">
        Write at least 20 characters.
      </p>
    </div>
  )
}
