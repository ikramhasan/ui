import {
  FilePenIcon,
  FileSearchIcon,
  SparklesIcon,
  TerminalIcon,
} from "lucide-react"

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

export function TraceSteps() {
  return (
    <Trace className="max-w-md">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine status="running">
            <TraceIcon>
              <SparklesIcon />
            </TraceIcon>
            <TraceTitle>Fixing the build cache</TraceTitle>
            <TraceDescription>2 of 3</TraceDescription>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <Trace>
            <TraceLine>
              <TraceIcon>
                <FileSearchIcon />
              </TraceIcon>
              <TraceTitle>Read the build log</TraceTitle>
            </TraceLine>
            <TraceLine>
              <TraceIcon>
                <FilePenIcon />
              </TraceIcon>
              <TraceTitle>Edited vercel.json</TraceTitle>
              <TraceDescription>+3 −1</TraceDescription>
            </TraceLine>
            <TraceLine status="running">
              <TraceIcon>
                <TerminalIcon />
              </TraceIcon>
              <TraceTitle>Running pnpm build</TraceTitle>
            </TraceLine>
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}
