import { CircleDashedIcon, TerminalIcon } from "lucide-react"

import { Trace, TraceIcon, TraceLine, TraceTitle } from "@/registry/ui/trace"

export function TraceStatus() {
  return (
    <Trace className="max-w-md">
      <TraceLine>
        <TraceIcon>
          <TerminalIcon />
        </TraceIcon>
        <TraceTitle>Ran pnpm install</TraceTitle>
      </TraceLine>
      <TraceLine status="running">
        <TraceIcon>
          <TerminalIcon />
        </TraceIcon>
        <TraceTitle>Running pnpm build</TraceTitle>
      </TraceLine>
      <TraceLine status="error">
        <TraceIcon>
          <TerminalIcon />
        </TraceIcon>
        <TraceTitle>Failed to run pnpm lint</TraceTitle>
      </TraceLine>
      <TraceLine status="pending">
        <TraceIcon>
          <CircleDashedIcon />
        </TraceIcon>
        <TraceTitle>Run pnpm test</TraceTitle>
      </TraceLine>
    </Trace>
  )
}
