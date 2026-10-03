import { AppWindowIcon, SettingsIcon, UserIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/tabs"

export function TabsVertical() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Tabs defaultValue="profile" orientation="vertical">
        <TabsList>
          <TabsTrigger value="profile">
            <UserIcon data-icon="inline-start" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="apps">
            <AppWindowIcon data-icon="inline-start" />
            Apps
          </TabsTrigger>
          <TabsTrigger value="settings">
            <SettingsIcon data-icon="inline-start" />
            Settings
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="profile" orientation="vertical">
        <TabsList variant="line">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="apps">Apps</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
