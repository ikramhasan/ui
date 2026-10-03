import type * as PageTree from "fumadocs-core/page-tree"

import { source } from "@/lib/source"

export type DocsNavSection = {
  title: string
  url?: string
  items: { name: string; url: string }[]
}

// The page tree as plain sections for the sidebar, mobile nav and search:
// one per top-level folder ("Getting Started", "Components").
export function getDocsNav(): DocsNavSection[] {
  return source.pageTree.children.flatMap((node) => {
    if (node.type !== "folder") {
      return []
    }

    return [
      {
        title: String(node.name),
        url: node.index?.url,
        items: node.children
          .filter((child): child is PageTree.Item => child.type === "page")
          .map((page) => ({ name: String(page.name), url: page.url })),
      },
    ]
  })
}
