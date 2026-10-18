import { CodeBlock, CodeBlockContent } from "@/registry/ui/code-block"

const log = Array.from(
  { length: 40 },
  (_, index) =>
    `[${String(index + 1).padStart(2, "0")}] GET /api/chat 200 in ${12 + ((index * 7) % 40)}ms`
).join("\n")

export function CodeBlockHeight() {
  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockContent className="max-h-60 scroll-fade-y">
        {log}
      </CodeBlockContent>
    </CodeBlock>
  )
}
