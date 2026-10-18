import { TerminalIcon } from "lucide-react"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const install = `$ pnpm add ai @ai-sdk/react zod
Progress: resolved 412, reused 398, downloaded 14, added 14, done
dependencies:
+ @ai-sdk/react 3.0.12
+ ai 6.0.12
+ zod 4.1.12
Done in 2.8s using pnpm v10.18.0`

export function CodeBlockSize() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-4">
      <CodeBlock>
        <CodeBlockHeader>
          <CodeBlockTitle>
            <TerminalIcon />
            Default
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={install} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent>{install}</CodeBlockContent>
      </CodeBlock>
      <CodeBlock size="sm">
        <CodeBlockHeader>
          <CodeBlockTitle>
            <TerminalIcon />
            Small
          </CodeBlockTitle>
          <CodeBlockActions>
            <CodeBlockCopyButton value={install} />
          </CodeBlockActions>
        </CodeBlockHeader>
        <CodeBlockContent>{install}</CodeBlockContent>
      </CodeBlock>
    </div>
  )
}
