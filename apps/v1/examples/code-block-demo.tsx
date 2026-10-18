"use client"

import { FileCodeIcon } from "lucide-react"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const source = `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    messages,
  })

  return result.toUIMessageStreamResponse()
}`

export function CodeBlockDemo() {
  const lines = useHighlightedCode(source, "ts")

  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockHeader>
        <CodeBlockTitle>
          <FileCodeIcon />
          app/api/chat/route.ts
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={source} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}
