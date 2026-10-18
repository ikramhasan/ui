import { TerminalIcon } from "lucide-react"

import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const build = `$ pnpm build
> next build

   ▲ Next.js 16.0.0
   Creating an optimized production build ...
 ✓ Compiled successfully in 4.2s
 ✓ Generating static pages (12/12)

Route (app)                Size  First Load JS
┌ ○ /                    1.9 kB         112 kB
├ ○ /_not-found           993 B         103 kB
└ ƒ /api/chat             141 B         102 kB`

export function CodeBlockHeaderExample() {
  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockHeader>
        <CodeBlockTitle>
          <TerminalIcon />
          Terminal
        </CodeBlockTitle>
        <CodeBlockActions>
          <CodeBlockCopyButton value={build} />
        </CodeBlockActions>
      </CodeBlockHeader>
      <CodeBlockContent>{build}</CodeBlockContent>
    </CodeBlock>
  )
}
