import { ClockIcon, FilePenIcon, SearchIcon } from "lucide-react"

import {
  Trace,
  TraceDescription,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/registry/ui/trace"

export function TraceDescriptionExample() {
  return (
    <Trace className="max-w-md">
      <TraceLine>
        <TraceIcon>
          <FilePenIcon />
        </TraceIcon>
        <TraceTitle>Edited components/ui/trace.tsx</TraceTitle>
        <TraceDescription>+12 −4</TraceDescription>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <SearchIcon />
        </TraceIcon>
        <TraceTitle>Searched the codebase for useChat</TraceTitle>
        <TraceDescription>8 files</TraceDescription>
      </TraceLine>
      <TraceLine>
        <TraceIcon>
          <ClockIcon />
        </TraceIcon>
        <TraceTitle>Waited for the deploy</TraceTitle>
        <TraceDescription>1m 42s</TraceDescription>
      </TraceLine>
    </Trace>
  )
}
