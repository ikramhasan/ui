import { CodeBlock, CodeBlockContent } from "@/registry/ui/code-block"

const error = `TypeError: Cannot read properties of undefined (reading 'map')
    at MessageList (components/message-list.tsx:18:22)
    at renderWithHooks (react-dom.development.js:16305:18)
    at mountIndeterminateComponent (react-dom.development.js:20069:13)`

export function CodeBlockWrap() {
  return (
    <CodeBlock className="max-w-md">
      <CodeBlockContent wrap>{error}</CodeBlockContent>
    </CodeBlock>
  )
}
