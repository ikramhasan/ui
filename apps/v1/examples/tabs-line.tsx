import { Badge } from "@/registry/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/tabs"

export function TabsLine() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-sm">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="activity">
          Activity
          <Badge variant="secondary">3</Badge>
        </TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
