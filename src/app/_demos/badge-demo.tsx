import { ArrowUpRightIcon, CheckIcon, SparklesIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Badge } from "@/registry/ui/badge"

export function BadgeDemo() {
  return (
    <>
      <Example title="Variants">
        <Badge>New</Badge>
        <Badge variant="secondary">Disconnected</Badge>
        <Badge variant="destructive">Failed</Badge>
        <Badge variant="outline">Draft</Badge>
        <Badge variant="ghost">Beta</Badge>
        <Badge variant="link">Docs</Badge>
      </Example>

      <Example title="Status">
        <Badge className="bg-success/15 text-success">Connected</Badge>
        <Badge variant="secondary">Disconnected</Badge>
      </Example>

      <Example title="With icon">
        <Badge>
          <SparklesIcon data-icon="inline-start" />
          New
        </Badge>
        <Badge className="bg-success/15 text-success">
          <CheckIcon data-icon="inline-start" />
          Connected
        </Badge>
        <Badge variant="outline">
          Changelog
          <ArrowUpRightIcon data-icon="inline-end" />
        </Badge>
      </Example>

      <Example title="After a title">
        <h3 className="flex items-center gap-2 text-xl font-medium">
          Shopify
          <Badge className="bg-success/15 text-success">Connected</Badge>
        </h3>
      </Example>

      <Example title="As link">
        <Badge render={<a href="#badge" />}>New</Badge>
        <Badge variant="secondary" render={<a href="#badge" />}>
          Disconnected
        </Badge>
        <Badge variant="outline" render={<a href="#badge" />}>
          Draft
        </Badge>
      </Example>
    </>
  )
}
