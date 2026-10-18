import { ChevronRightIcon, FileTextIcon } from "lucide-react"

import { CodeBlock, CodeBlockContent } from "@/registry/ui/code-block"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet"
import { Trace, TraceIcon, TraceLine, TraceTitle } from "@/registry/ui/trace"

const readme = `# Acme Chat

A chat app built with Next.js and the AI SDK.

## Getting started

pnpm install
pnpm dev

## Chat route

app/api/chat/route.ts streams responses through the AI Gateway.
Set AI_GATEWAY_API_KEY in .env.local.`

export function TraceSheet() {
  return (
    <Trace className="max-w-md">
      <Sheet>
        <SheetTrigger>
          <TraceLine>
            <TraceIcon>
              <FileTextIcon />
            </TraceIcon>
            <TraceTitle>Read README.md</TraceTitle>
            <TraceIcon>
              <ChevronRightIcon />
            </TraceIcon>
          </TraceLine>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="font-mono">README.md</SheetTitle>
            <SheetDescription>
              {readme.split("\n").length} lines
            </SheetDescription>
          </SheetHeader>
          <CodeBlock className="mx-4 mb-4 min-h-0 w-auto flex-1">
            <CodeBlockContent wrap>{readme}</CodeBlockContent>
          </CodeBlock>
        </SheetContent>
      </Sheet>
    </Trace>
  )
}
