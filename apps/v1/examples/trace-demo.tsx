import {
  BrainIcon,
  FilePenIcon,
  GlobeIcon,
  SearchIcon,
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

export function TraceDemo() {
  return (
    <Trace className="max-w-md py-8">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <BrainIcon />
            </TraceIcon>
            <TraceTitle>Thought for 6 seconds</TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          The deploy is slow because image optimization runs on every build. The
          cache key includes the commit hash, so it never hits.
        </TraceCollapsibleContent>
      </TraceCollapsible>
      <TraceLine>
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>Searched for cacheKey</TraceTitle>
        <TraceDescription>3 results</TraceDescription>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <GlobeIcon />
        </TraceIcon>
        <TraceTitle>Read the Vercel build cache docs</TraceTitle>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <FilePenIcon />
        </TraceIcon>
        <TraceTitle>Edited next.config.ts</TraceTitle>
        <TraceDescription>+4 −1</TraceDescription>
      </TraceLine>
      <TraceLine status="running">
        <TraceIcon>
          <TerminalIcon />
        </TraceIcon>
        <TraceTitle>Running pnpm build</TraceTitle>
      </TraceLine>
    </Trace>
  )
}
