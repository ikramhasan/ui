import {
  FileMinusIcon,
  FilePenIcon,
  FilePlusIcon,
  GitCommitHorizontalIcon,
} from "lucide-react"

import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockLine,
} from "@/registry/ui/code-block"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/ui/sheet"
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

const files = [
  {
    action: "Added",
    path: "lib/cache.ts",
    stat: "+18",
    icon: FilePlusIcon,
    diff: [
      { variant: "added", text: 'import { hashFiles } from "./hash"' },
      { variant: "added", text: "" },
      {
        variant: "added",
        text: 'export const cacheKey = () => hashFiles(["pnpm-lock.yaml"])',
      },
    ],
  },
  {
    action: "Edited",
    path: "next.config.ts",
    stat: "+4 −1",
    icon: FilePenIcon,
    diff: [
      { variant: "default", text: "  images: {" },
      { variant: "removed", text: "    cacheKey: process.env.COMMIT_SHA," },
      { variant: "added", text: "    cacheKey: cacheKey()," },
      { variant: "default", text: "  }," },
    ],
  },
  {
    action: "Deleted",
    path: "scripts/warm-cache.sh",
    stat: "−22",
    icon: FileMinusIcon,
    diff: [
      { variant: "removed", text: "#!/usr/bin/env bash" },
      { variant: "removed", text: "pnpm next build --no-cache" },
    ],
  },
] as const

export function TraceCommit() {
  return (
    <Trace className="max-w-md">
      <TraceCollapsible defaultOpen>
        <TraceCollapsibleTrigger>
          <TraceLine>
            <TraceIcon>
              <GitCommitHorizontalIcon />
            </TraceIcon>
            <TraceTitle>
              Committed &ldquo;Key the image cache on the lockfile&rdquo;
            </TraceTitle>
          </TraceLine>
        </TraceCollapsibleTrigger>
        <TraceCollapsibleContent>
          <Trace>
            {files.map((file) => (
              <Sheet key={file.path}>
                <SheetTrigger>
                  <TraceLine>
                    <TraceIcon>
                      <file.icon />
                    </TraceIcon>
                    <TraceTitle>
                      {file.action} {file.path}
                    </TraceTitle>
                    <TraceDescription>{file.stat}</TraceDescription>
                  </TraceLine>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="font-mono">{file.path}</SheetTitle>
                    <SheetDescription>
                      {file.action}, {file.stat}
                    </SheetDescription>
                  </SheetHeader>
                  <CodeBlock className="mx-4 mb-4 w-auto">
                    <CodeBlockContent>
                      {file.diff.map((line, index) => (
                        <CodeBlockLine key={index} variant={line.variant}>
                          {line.text}
                        </CodeBlockLine>
                      ))}
                    </CodeBlockContent>
                  </CodeBlock>
                </SheetContent>
              </Sheet>
            ))}
          </Trace>
        </TraceCollapsibleContent>
      </TraceCollapsible>
    </Trace>
  )
}
