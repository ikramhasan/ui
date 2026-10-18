import {
  ArrowUpRightIcon,
  FileSearchIcon,
  FolderOpenIcon,
  TerminalIcon,
} from "lucide-react"

import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/registry/ui/trace"

export function TraceGroup() {
  return (
    <Trace className="max-w-md">
      <TraceLine>
        <TraceIcon>
          <FolderOpenIcon />
        </TraceIcon>
        <TraceTitle>Listed app/api</TraceTitle>
      </TraceLine>
      <TraceCollapsible>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <FileSearchIcon />
            </TraceIcon>
            <TraceTitle>Searched for streamText</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          app/api/chat/route.ts, lib/ai.ts
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <a href="https://ai-sdk.dev/docs" target="_blank" rel="noreferrer">
        <TraceLine>
          <TraceIcon>
            <TerminalIcon />
          </TraceIcon>
          <TraceTitle>
            Read the AI SDK docs
            <span className="sr-only"> (opens in a new tab)</span>
          </TraceTitle>
          <TraceIcon>
            <ArrowUpRightIcon />
          </TraceIcon>
        </TraceLine>
      </a>
    </Trace>
  )
}
