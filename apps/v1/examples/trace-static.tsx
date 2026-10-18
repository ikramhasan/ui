import { SearchIcon } from "lucide-react"

import { Trace, TraceIcon, TraceLine, TraceTitle } from "@/registry/ui/trace"

export function TraceStatic() {
  return (
    <Trace className="max-w-md">
      <TraceLine>
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>Searched for minimumReleaseAge</TraceTitle>
      </TraceLine>
    </Trace>
  )
}
