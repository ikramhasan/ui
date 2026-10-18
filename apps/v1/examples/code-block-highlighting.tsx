"use client"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const code = `{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-nova",
  "rsc": true,
  "tsx": true,
  "aliases": {
    "components": "@/components",
    "ui": "@/components/ui"
  }
}`

export function CodeBlockHighlighting() {
  const lines = useHighlightedCode(code, "json")

  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockHeader>
        <CodeBlockTitle>components.json</CodeBlockTitle>
      </CodeBlockHeader>
      <CodeBlockContent>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}
