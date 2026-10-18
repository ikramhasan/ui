import { CodeBlock, CodeBlockContent } from "@/registry/ui/code-block"

const source = `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()

  const result = streamText({
    model: "anthropic/claude-sonnet-4.5",
    messages,
  })

  return result.toUIMessageStreamResponse()
}`

export function CodeBlockLineNumbers() {
  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockContent lineNumbers>{source}</CodeBlockContent>
    </CodeBlock>
  )
}
