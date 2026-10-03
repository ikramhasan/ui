import { ScrollArea, ScrollBar } from "@/registry/ui/scroll-area"

const log = Array.from({ length: 40 }).map((_, i) => {
  const second = String(i).padStart(2, "0")
  const status = i % 7 === 3 ? "WARN" : "INFO"
  return `12:04:${second} ${status} sync worker-${(i % 3) + 1} processed batch ${1200 + i * 17} (orders, customers, products) in ${80 + ((i * 37) % 140)}ms`
})

export function ScrollAreaBoth() {
  return (
    <ScrollArea className="h-64 w-full max-w-md rounded-lg border">
      <pre className="w-max p-4 font-mono text-xs leading-5 text-muted-foreground">
        {log.join("\n")}
      </pre>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
