"use client"

import * as React from "react"
import { DownloadIcon, WrapTextIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const error = `TypeError: Cannot read properties of undefined (reading 'map')
    at MessageList (components/message-list.tsx:18:22)
    at renderWithHooks (react-dom.development.js:16305:18)
    at mountIndeterminateComponent (react-dom.development.js:20069:13)`

function download(code: string, filename: string) {
  const url = URL.createObjectURL(new Blob([code], { type: "text/plain" }))
  const link = document.createElement("a")
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

export function CodeBlockActionsExample() {
  const [wrap, setWrap] = React.useState(false)

  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockHeader>
        <CodeBlockTitle>error.log</CodeBlockTitle>
        <CodeBlockActions>
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="Wrap lines"
            aria-pressed={wrap}
            className="aria-pressed:bg-accent aria-pressed:[&_svg]:text-foreground"
            onClick={() => setWrap(!wrap)}
          >
            <WrapTextIcon />
          </Button>
          <Button
            variant="ghost"
            size="icon-xs"
            aria-label="Download"
            onClick={() => download(error, "error.log")}
          >
            <DownloadIcon />
          </Button>
          <CodeBlockCopyButton value={error} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent wrap={wrap}>{error}</CodeBlockContent>
    </CodeBlock>
  )
}
