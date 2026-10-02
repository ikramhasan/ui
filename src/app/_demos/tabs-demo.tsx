import {
  AppWindowIcon,
  CodeIcon,
  LayoutGridIcon,
  ListIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs"

export function TabsDemo() {
  return (
    <>
      <Example title="Default">
        <Tabs defaultValue="account" className="w-full max-w-sm">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Change your name. Click save when you&apos;re done.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-1.5">
                <Label htmlFor="tabs-name">Name</Label>
                <Input id="tabs-name" defaultValue="Ada Lovelace" />
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  You&apos;ll be signed out on other devices.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-1.5">
                <Label htmlFor="tabs-password">New password</Label>
                <Input id="tabs-password" type="password" />
              </CardContent>
              <CardFooter>
                <Button>Update password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing</CardTitle>
                <CardDescription>You&apos;re on the free plan.</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </Example>

      <Example title="Icons and a disabled tab">
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
      </Example>

      <Example title="Line">
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
      </Example>

      <Example title="Vertical">
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
      </Example>
    </>
  )
}
