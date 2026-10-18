"use client"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import { Bubble, BubbleContent } from "@/registry/ui/bubble"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/registry/ui/code-block"
import { Message, MessageContent } from "@/registry/ui/message"

const code = `export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = React.useState(value)

  React.useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])

  return debounced
}`

export function CodeBlockMessage() {
  const lines = useHighlightedCode(code, "ts")

  return (
    <div className="flex w-full max-w-lg flex-col gap-6 text-sm">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>How do I debounce the search input?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent className="gap-3 leading-relaxed">
          <p>
            Wrap the value in a <code className="font-mono">useDebounce</code>{" "}
            hook:
          </p>
          <CodeBlock>
            <CodeBlockHeader>
              <CodeBlockTitle>hooks/use-debounce.ts</CodeBlockTitle>
              <CodeBlockActions>
                <CodeBlockCopyButton value={code} />
              </CodeBlockActions>
            </CodeBlockHeader>
            <CodeBlockContent>
              {lines.map((line, index) => (
                <CodeBlockLine key={index}>{line}</CodeBlockLine>
              ))}
            </CodeBlockContent>
          </CodeBlock>
          <p>Then query with the debounced value instead of the raw input.</p>
        </MessageContent>
      </Message>
    </div>
  )
}
