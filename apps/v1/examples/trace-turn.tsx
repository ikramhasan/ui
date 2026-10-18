import {
  BrainIcon,
  FilePenIcon,
  FileSearchIcon,
  ListTreeIcon,
  TerminalIcon,
} from "lucide-react"

import { CodeBlock, CodeBlockContent } from "@/registry/ui/code-block"
import { Message, MessageContent } from "@/registry/ui/message"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/registry/ui/trace"

export function TraceTurn() {
  return (
    <Message className="max-w-md">
      <MessageContent className="gap-3 text-sm leading-relaxed">
        <Trace>
          <TraceCollapsible>
            <TraceCollapsibleTrigger>
              <TraceLine>
                <TraceIcon>
                  <ListTreeIcon />
                </TraceIcon>
                <TraceTitle>Explored the project</TraceTitle>
                <TraceDescription>3 steps</TraceDescription>
              </TraceLine>
            </TraceCollapsibleTrigger>
            <TraceCollapsibleContent>
              <Trace>
                <TraceLine>
                  <TraceIcon>
                    <BrainIcon />
                  </TraceIcon>
                  <TraceTitle>Thought for 3 seconds</TraceTitle>
                </TraceLine>
                <TraceLine>
                  <TraceIcon>
                    <FileSearchIcon />
                  </TraceIcon>
                  <TraceTitle>Read vercel.json</TraceTitle>
                </TraceLine>
                <TraceLine>
                  <TraceIcon>
                    <FileSearchIcon />
                  </TraceIcon>
                  <TraceTitle>Read next.config.ts</TraceTitle>
                </TraceLine>
              </Trace>
            </TraceCollapsibleContent>
          </TraceCollapsible>
        </Trace>
        <p>
          The image cache never hits because its key includes the commit hash.
          I&apos;ll key it on the lockfile instead.
        </p>
        <Trace>
          <TraceLine>
            <TraceIcon>
              <FilePenIcon />
            </TraceIcon>
            <TraceTitle>Edited next.config.ts</TraceTitle>
            <TraceDescription>+4 −1</TraceDescription>
          </TraceLine>
          <TraceCollapsible>
            <TraceCollapsibleTrigger>
              <TraceLine>
                <TraceIcon>
                  <TerminalIcon />
                </TraceIcon>
                <TraceTitle>Ran pnpm build</TraceTitle>
                <TraceDescription>48s</TraceDescription>
              </TraceLine>
            </TraceCollapsibleTrigger>
            <TraceCollapsibleContent>
              <CodeBlock size="sm">
                <CodeBlockContent wrap>
                  ✓ Compiled successfully in 4.2s
                </CodeBlockContent>
              </CodeBlock>
            </TraceCollapsibleContent>
          </TraceCollapsible>
        </Trace>
        <p>Builds now skip image optimization when nothing changed.</p>
      </MessageContent>
    </Message>
  )
}
