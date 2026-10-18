import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
  CodeBlockLine,
  CodeBlockTitle,
} from "@/registry/ui/code-block"

const diff = [
  { variant: "default", text: "export function Greeting({ name }: Props) {" },
  { variant: "removed", text: "  return <p>Hello, {name}</p>" },
  {
    variant: "added",
    text: '  return <p className="text-sm">Hello, {name}!</p>',
  },
  { variant: "default", text: "}" },
] as const

export function CodeBlockDiff() {
  return (
    <CodeBlock className="max-w-lg">
      <CodeBlockHeader>
        <CodeBlockTitle>components/greeting.tsx</CodeBlockTitle>
        <span className="ms-auto text-xs tabular-nums">
          <span className="text-success">+1</span>{" "}
          <span className="text-destructive">−1</span>
        </span>
      </CodeBlockHeader>
      <CodeBlockContent lineNumbers>
        {diff.map((line, index) => (
          <CodeBlockLine key={index} variant={line.variant}>
            {line.text}
          </CodeBlockLine>
        ))}
      </CodeBlockContent>
    </CodeBlock>
  )
}
