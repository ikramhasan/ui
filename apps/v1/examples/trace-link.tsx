import { ArrowUpRightIcon, BookOpenIcon } from "lucide-react"

import { Trace, TraceIcon, TraceLine, TraceTitle } from "@/registry/ui/trace"

export function TraceLink() {
  return (
    <Trace className="max-w-md">
      <a href="https://docs.astro.build" target="_blank" rel="noreferrer">
        <TraceLine>
          <TraceIcon>
            <BookOpenIcon />
          </TraceIcon>
          <TraceTitle>
            Read the Astro install guide
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
