import { CodeBlock, CodeBlockContent } from "@/registry/ui/code-block"

const middle = `  if (!session) {
    return new Response("Unauthorized", { status: 401 })
  }

  const { messages } = await request.json()
  const result = streamText({ model, messages })

  return result.toUIMessageStreamResponse()`

export function CodeBlockStartLine() {
  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockContent lineNumbers startLine={96}>
        {middle}
      </CodeBlockContent>
    </CodeBlock>
  )
}
