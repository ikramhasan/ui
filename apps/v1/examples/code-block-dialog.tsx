"use client"

import { FileCodeIcon } from "lucide-react"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import { Button } from "@/registry/ui/button"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockLine,
} from "@/registry/ui/code-block"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"

const code = `{
  "name": "acme-chat",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "lint": "eslint ."
  }
}`

export function CodeBlockDialog() {
  const lines = useHighlightedCode(code, "json")

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        <FileCodeIcon data-icon="inline-start" />
        View package.json
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>package.json</DialogTitle>
          <DialogDescription>
            The scripts the agent will run in this project.
          </DialogDescription>
        </DialogHeader>
        <CodeBlock>
          <CodeBlockActions>
            <CodeBlockCopyButton value={code} />
          </CodeBlockActions>
          <CodeBlockContent lineNumbers>
            {lines.map((line, index) => (
              <CodeBlockLine key={index}>{line}</CodeBlockLine>
            ))}
          </CodeBlockContent>
        </CodeBlock>
      </DialogContent>
    </Dialog>
  )
}
