"use client"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockLine,
} from "@/registry/ui/code-block"

const output = [
  "$ pnpm test",
  "\u001b[32m ✓\u001b[39m src/lib/format.test.ts \u001b[2m(4 tests)\u001b[22m",
  "\u001b[32m ✓\u001b[39m src/lib/stream.test.ts \u001b[2m(7 tests)\u001b[22m",
  "\u001b[31m ✗\u001b[39m src/lib/parse.test.ts \u001b[2m(1 failed)\u001b[22m",
  "",
  "\u001b[1mTests\u001b[22m  \u001b[31m1 failed\u001b[39m | \u001b[32m11 passed\u001b[39m (12)",
].join("\n")

export function CodeBlockAnsi() {
  const lines = useHighlightedCode(output, "ansi")

  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockContent>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}
