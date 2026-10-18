import { CircleAlertIcon } from "lucide-react"

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

export function CodeBlockDestructive() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <CodeBlock variant="destructive">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <CircleAlertIcon />
            Unhandled runtime error
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={error} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent wrap>{error}</CodeBlockContent>
      </CodeBlock>
      <CodeBlock variant="destructive" size="sm">
        <CodeBlockContent wrap>
          ENOENT: no such file or directory, open &apos;CHANGELOG.md&apos;
        </CodeBlockContent>
      </CodeBlock>
    </div>
  )
}
