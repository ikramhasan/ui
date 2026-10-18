import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockLine,
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

const highlighted = [6, 7, 8, 9]

export function CodeBlockHighlightedLines() {
  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockContent lineNumbers>
        {source.split("\n").map((line, index) => (
          <CodeBlockLine
            key={index}
            variant={
              highlighted.includes(index + 1) ? "highlighted" : "default"
            }
          >
            {line}
          </CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}
