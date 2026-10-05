import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getBlock, getBlocks } from "@/lib/blocks"
import { BlocksIndex } from "@/registry/blocks/__index__"

export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return getBlocks().map((block) => ({ name: block.name }))
}

export async function generateMetadata(
  props: PageProps<"/view/[name]">
): Promise<Metadata> {
  const { name } = await props.params
  const block = getBlock(name)

  return {
    title: block?.title,
    description: block?.description,
    robots: { index: false },
  }
}

// A block on its own, without the site chrome: the Blocks page shows it in an
// iframe so its viewport (and the Sidebar's mobile breakpoint) is the frame.
export default async function BlockViewPage(props: PageProps<"/view/[name]">) {
  const { name } = await props.params
  const entry = BlocksIndex[name]

  if (!entry) {
    notFound()
  }

  const { default: Block } = await entry.component()

  return (
    <div className="bg-background">
      <Block />
    </div>
  )
}
