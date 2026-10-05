import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { getBlockFiles, getBlocks, createFileTree } from "@/lib/blocks"
import { siteConfig } from "@/lib/config"
import { socialMetadata } from "@/lib/metadata"
import { BlockViewer } from "@/components/block-viewer"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/ui/button"

export const dynamic = "force-static"

const title = "Building Blocks for the Web"
const description =
  "Clean, modern building blocks made from our components. Copy and paste into your apps. Works with all React frameworks."

export const metadata: Metadata = {
  title: "Blocks",
  description,
  alternates: {
    canonical: "/blocks",
  },
  ...socialMetadata({
    title: `Blocks - ${siteConfig.name}`,
    description,
    url: "/blocks",
  }),
}

// shadcn's featured blocks, in its order.
const FEATURED_BLOCKS = [
  "dashboard-01",
  "sidebar-07",
  "sidebar-03",
  "login-03",
  "login-04",
]

export default async function BlocksPage() {
  const blocks = getBlocks()
  const featured = await Promise.all(
    FEATURED_BLOCKS.map(async (name) => {
      const block = blocks.find((item) => item.name === name)
      if (!block) {
        throw new Error(`Block ${name} is not in registry.json.`)
      }

      const files = await getBlockFiles(name)
      const meta = block.meta as { iframeHeight?: string } | undefined

      return {
        block: {
          name,
          description: block.description,
          height: meta?.iframeHeight ?? "930px",
          url: `${siteConfig.registryUrl}/${name}.json`,
        },
        files,
        tree: createFileTree(files.map((file) => file.target)),
      }
    })
  )

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader className="border-b-0">
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <a href="#blocks" className={buttonVariants()}>
            Browse Blocks
          </a>
          <Link
            href="/docs/components"
            className={buttonVariants({ variant: "secondary" })}
          >
            View Components
            <ArrowRightIcon data-icon="inline-end" />
          </Link>
        </PageActions>
      </PageHeader>
      <div
        id="blocks"
        className="flex-1 scroll-mt-14 border-t bg-muted py-10 md:py-12 dark:bg-sidebar"
      >
        <div className="container-wrapper flex flex-col gap-12 md:gap-24">
          {featured.map((item) => (
            <BlockViewer key={item.block.name} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
