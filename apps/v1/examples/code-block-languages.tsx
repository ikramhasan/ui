"use client"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const samples = [
  {
    title: "query.sql",
    language: "sql",
    code: `SELECT id, title, created_at
FROM messages
WHERE chat_id = $1
ORDER BY created_at DESC
LIMIT 50;`,
  },
  {
    title: "train.py",
    language: "python",
    code: `def chunk(items: list[str], size: int = 8):
    for start in range(0, len(items), size):
        yield items[start : start + size]`,
  },
  {
    title: "deploy.yml",
    language: "yaml",
    code: `on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest`,
  },
]

function Sample({
  title,
  language,
  code,
}: {
  title: string
  language: string
  code: string
}) {
  const lines = useHighlightedCode(code, language)

  return (
    <CodeBlock>
      <CodeBlockHeader>
        <CodeBlockTitle>{title}</CodeBlockTitle>
      </CodeBlockHeader>
      <CodeBlockContent>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export function CodeBlockLanguages() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      {samples.map((sample) => (
        <Sample key={sample.title} {...sample} />
      ))}
    </div>
  )
}
