"use client"

import * as React from "react"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import { Button } from "@/registry/ui/button"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const code = `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    messages,
  })

  return result.toUIMessageStreamResponse()
}`

// Reveals the code a few characters at a time, like a model writing it.
function useStream(text: string) {
  const [length, setLength] = React.useState(0)
  const [running, setRunning] = React.useState(false)

  React.useEffect(() => {
    if (!running) {
      return
    }

    const interval = setInterval(() => {
      setLength((current) => {
        const next = Math.min(current + 3, text.length)
        if (next === text.length) {
          setRunning(false)
        }
        return next
      })
    }, 24)

    return () => clearInterval(interval)
  }, [running, text])

  return {
    value: text.slice(0, length),
    running,
    start: () => {
      setLength(0)
      setRunning(true)
    },
  }
}

export function CodeBlockStreaming() {
  const stream = useStream(code)
  const lines = useHighlightedCode(stream.value, "ts")

  return (
    <div className="flex w-full max-w-lg flex-col items-start gap-4">
      <CodeBlock className="min-h-20">
        <CodeBlockHeader>
          <CodeBlockTitle>app/api/chat/route.ts</CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={code} disabled={stream.running} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent>
          {lines.map((line, index) => (
            <CodeBlockLine key={index}>{line}</CodeBlockLine>
          ))}
        </CodeBlockContent>
      </CodeBlock>
      <Button
        variant="outline"
        size="sm"
        disabled={stream.running}
        onClick={stream.start}
      >
        {stream.value ? "Stream again" : "Stream"}
      </Button>
    </div>
  )
}
