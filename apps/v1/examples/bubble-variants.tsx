import { Bubble, BubbleContent, BubbleReactions } from "@/registry/ui/bubble"

export function BubbleVariantsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-12 py-12">
      <Bubble>
        <BubbleContent>This is the default primary bubble.</BubbleContent>
      </Bubble>
      <Bubble variant="secondary" align="end">
        <BubbleContent>This is the secondary variant.</BubbleContent>
      </Bubble>
      <Bubble variant="muted">
        <BubbleContent>
          This one is muted. It uses a lower emphasis color for the chat bubble.
        </BubbleContent>
        <BubbleReactions role="img" aria-label="Reaction: thumbs up">
          <span>👍</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="tinted" align="end">
        <BubbleContent>
          This one is tinted. The tint is a softer color derived from the
          primary color.
        </BubbleContent>
      </Bubble>
      <Bubble variant="outline">
        <BubbleContent>We can also use an outlined variant.</BubbleContent>
      </Bubble>
      <Bubble variant="destructive" align="end">
        <BubbleContent>Or a destructive variant with a reaction.</BubbleContent>
        <BubbleReactions role="img" aria-label="Reaction: fire">
          <span>🔥</span>
        </BubbleReactions>
      </Bubble>
      <Bubble variant="ghost">
        <BubbleContent>
          <div className="flex flex-col gap-2">
            <p>
              Ghost bubbles work for assistant text, <strong>markdown</strong>,
              and other content that should not be framed.
            </p>
            <p>
              They drop the max width, so a reply can take the full width of the
              container. You can also render{" "}
              <code className="font-mono text-[13px]">code</code> in it.
            </p>
          </div>
        </BubbleContent>
      </Bubble>
    </div>
  )
}
