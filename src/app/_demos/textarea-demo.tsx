import { Example } from "@/app/_components/showcase"
import { Label } from "@/registry/ui/label"
import { Textarea } from "@/registry/ui/textarea"

export function TextareaDemo() {
  return (
    <>
      <Example title="Default">
        <Textarea placeholder="Type your message here." className="max-w-md" />
      </Example>

      <Example title="With label">
        <div className="flex w-full max-w-md flex-col gap-1.5">
          <Label htmlFor="feedback">Feedback</Label>
          <Textarea id="feedback" placeholder="What could be better?" />
        </div>
      </Example>

      <Example title="Invalid">
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
      </Example>

      <Example title="Disabled">
        <Textarea disabled placeholder="Disabled" className="max-w-md" />
      </Example>
    </>
  )
}
