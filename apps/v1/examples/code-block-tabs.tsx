"use client"

import { useHighlightedCode } from "@/registry/hooks/use-highlighted-code"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockLine,
} from "@/registry/ui/code-block"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs"

const files = [
  {
    name: "route.ts",
    language: "ts",
    code: `import { streamText } from "ai"

export async function POST(request: Request) {
  const { messages } = await request.json()
  const result = streamText({ model: "anthropic/claude-sonnet-4.5", messages })

  return result.toUIMessageStreamResponse()
}`,
  },
  {
    name: "chat.tsx",
    language: "tsx",
    code: `"use client"

import { useChat } from "@ai-sdk/react"

export function Chat() {
  const { messages } = useChat()

  return <MessageList messages={messages} />
}`,
  },
  {
    name: ".env.local",
    language: "bash",
    code: `AI_GATEWAY_API_KEY=your-key`,
  },
]

function File({ code, language }: { code: string; language: string }) {
  const lines = useHighlightedCode(code, language)

  return (
    <CodeBlock>
      <CodeBlockActions>
        <CodeBlockCopyButton value={code} />
      </CodeBlockActions>
      <CodeBlockContent>
        {lines.map((line, index) => (
          <CodeBlockLine key={index}>{line}</CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}

export function CodeBlockTabs() {
  return (
    <Tabs defaultValue={files[0].name} className="w-full max-w-lg">
      <TabsList>
        {files.map((file) => (
          <TabsTrigger key={file.name} value={file.name} className="font-mono">
            {file.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {files.map((file) => (
        <TabsContent key={file.name} value={file.name}>
          <File code={file.code} language={file.language} />
        </TabsContent>
      ))}
    </Tabs>
  )
}
