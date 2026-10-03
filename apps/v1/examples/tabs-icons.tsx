import { CodeIcon, LayoutGridIcon, ListIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/tabs"

export function TabsIcons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tabs defaultValue="grid">
        <TabsList>
          <TabsTrigger value="grid">
            <LayoutGridIcon data-icon="inline-start" />
            Grid
          </TabsTrigger>
          <TabsTrigger value="list">
            <ListIcon data-icon="inline-start" />
            List
          </TabsTrigger>
          <TabsTrigger value="code" disabled>
            <CodeIcon data-icon="inline-start" />
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="grid">
        <TabsList>
          <TabsTrigger value="grid" aria-label="Grid">
            <LayoutGridIcon />
          </TabsTrigger>
          <TabsTrigger value="list" aria-label="List">
            <ListIcon />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
