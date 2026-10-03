"use client"

import * as React from "react"
import { CheckIcon, CopyIcon, TerminalIcon } from "lucide-react"

import { useConfig } from "@/hooks/use-config"
import { useCopy } from "@/components/copy-button"
import { Button } from "@/registry/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs"

export function CodeBlockCommand({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: {
  __npm__?: string
  __yarn__?: string
  __pnpm__?: string
  __bun__?: string
}) {
  const [config, setConfig] = useConfig()
  const { hasCopied, copy } = useCopy()

  const packageManager = config.packageManager
  const tabs = React.useMemo(
    () => ({
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }),
    [__npm__, __pnpm__, __yarn__, __bun__]
  )

  return (
    <div data-slot="code-block-command" className="relative">
      <Tabs
        value={packageManager}
        className="gap-0"
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as typeof packageManager,
          })
        }}
      >
        <div className="flex items-center gap-2 border-b px-3 py-1.5">
          <TerminalIcon className="size-4 text-muted-foreground" />
          <TabsList variant="line" className="h-7">
            {Object.keys(tabs).map((key) => (
              <TabsTrigger
                key={key}
                value={key}
                className="px-2 font-mono text-[13px]"
              >
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {Object.entries(tabs).map(([key, value]) => (
          <TabsContent key={key} value={key}>
            <pre className="no-scrollbar overflow-x-auto px-4 py-3.5">
              <code
                className="font-mono text-[13px] leading-5"
                data-language="bash"
              >
                {value}
              </code>
            </pre>
          </TabsContent>
        ))}
      </Tabs>
      <Button
        data-slot="copy-button"
        size="icon-sm"
        variant="ghost"
        aria-label={hasCopied ? "Copied" : "Copy command"}
        className="absolute top-1.5 right-1.5 z-10 text-muted-foreground hover:text-foreground"
        onClick={() => {
          const command = tabs[packageManager]
          if (command) copy(command)
        }}
      >
        {hasCopied ? <CheckIcon /> : <CopyIcon />}
      </Button>
    </div>
  )
}
