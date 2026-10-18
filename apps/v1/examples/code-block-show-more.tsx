"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockFooter,
} from "@/registry/ui/code-block"

const log = Array.from(
  { length: 40 },
  (_, index) =>
    `[${String(index + 1).padStart(2, "0")}] GET /api/chat 200 in ${12 + ((index * 7) % 40)}ms`
).join("\n")

export function CodeBlockShowMore() {
  const [expanded, setExpanded] = React.useState(false)
  const id = React.useId()

  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockContent
        id={id}
        className={
          expanded ? undefined : "max-h-48 overflow-y-hidden scroll-fade-y"
        }
      >
        {log}
      </CodeBlockContent>
      <CodeBlockFooter className="justify-center">
        <Button
          variant="ghost"
          size="xs"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Show more"}
          <ChevronDownIcon
            data-icon="inline-end"
            className="transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-aria-expanded/button:rotate-180 motion-reduce:transition-none"
          />
        </Button>
      </CodeBlockFooter>
    </CodeBlock>
  )
}
