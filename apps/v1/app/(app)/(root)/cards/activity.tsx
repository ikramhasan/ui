import {
  GitBranchIcon,
  ImageIcon,
  MailIcon,
  ShoppingBagIcon,
} from "lucide-react"

import { Badge } from "@/registry/ui/badge"
import { Card, CardContent, CardHeader } from "@/registry/ui/card"
import { Marker, MarkerContent, MarkerIcon } from "@/registry/ui/marker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs"

const EVENTS = [
  { icon: ShoppingBagIcon, label: "12 new orders since 9:00 AM" },
  { icon: ImageIcon, label: "Enhanced 48 product photos" },
  { icon: MailIcon, label: "Sent the spring newsletter" },
  { icon: GitBranchIcon, label: "Published theme changes" },
]

export function Activity() {
  return (
    <Card>
      <Tabs defaultValue="activity" className="gap-(--card-spacing)">
        <CardHeader>
          <TabsList variant="line">
            <TabsTrigger value="activity">
              Activity
              <Badge variant="secondary">4</Badge>
            </TabsTrigger>
            <TabsTrigger value="mentions">Mentions</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent>
          <TabsContent value="activity" className="flex flex-col gap-4">
            {EVENTS.map(({ icon: Icon, label }) => (
              <Marker key={label}>
                <MarkerIcon>
                  <Icon />
                </MarkerIcon>
                <MarkerContent>{label}</MarkerContent>
              </Marker>
            ))}
            <Marker variant="separator">
              <MarkerContent>Yesterday</MarkerContent>
            </Marker>
          </TabsContent>
          <TabsContent value="mentions">
            <p className="text-muted-foreground">No mentions yet.</p>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}
