import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { socialMetadata } from "@/lib/metadata"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Badge } from "@/registry/ui/badge"
import { buttonVariants } from "@/registry/ui/button"

import { CardsDemo } from "./cards"

const title = "Components with texture"
const description =
  "Every shadcn component rebuilt on Base UI, with buttons that protrude and keys that sink in. Same API, same CLI, a design of its own."

const metadataTitle = `${siteConfig.name} - ${title}`

export const metadata: Metadata = {
  title: {
    absolute: metadataTitle,
  },
  description,
  alternates: {
    canonical: "/",
  },
  ...socialMetadata({ title: metadataTitle, description }),
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader className="border-b-0">
        <Badge
          variant="secondary"
          render={<Link href="/docs/components/navigation-menu" />}
        >
          New Navigation Menu, Carousel and more
          <ArrowRightIcon data-icon="inline-end" />
        </Badge>
        <PageHeaderHeading className="max-w-3xl md:text-5xl md:leading-tight">
          {title}
        </PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Link href="/docs/installation" className={buttonVariants()}>
            Get Started
          </Link>
          <Link
            href="/docs/components"
            className={buttonVariants({ variant: "secondary" })}
          >
            Browse Components
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </PageActions>
      </PageHeader>
      <CardsDemo />
    </div>
  )
}
