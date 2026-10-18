import { CodeBlock, CodeBlockContent } from "@/registry/ui/code-block"

const install = `$ pnpm add ai @ai-sdk/react zod
Progress: resolved 412, reused 398, downloaded 14, added 14, done
dependencies:
+ @ai-sdk/react 3.0.12
+ ai 6.0.12
+ zod 4.1.12
Done in 2.8s using pnpm v10.18.0`

export function CodeBlockBasic() {
  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockContent>{install}</CodeBlockContent>
    </CodeBlock>
  )
}
