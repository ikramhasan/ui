"use client"

import * as React from "react"
import { cn } from "cn"

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "0% 0% -80% 0%" }
    )

    const elements = itemIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [itemIds])

  return activeId
}

export function DocsTableOfContents({
  toc,
  className,
}: {
  toc: {
    title?: React.ReactNode
    url: string
    depth: number
  }[]
  className?: string
}) {
  const itemIds = React.useMemo(
    () => toc.map((item) => item.url.replace("#", "")),
    [toc]
  )
  const activeHeading = useActiveItem(itemIds)

  if (!toc?.length) {
    return null
  }

  return (
    <div className={cn("flex flex-col gap-2 text-sm", className)}>
      <p className="text-xs leading-6 font-medium text-muted-foreground">
        On This Page
      </p>
      {toc.map((item) => (
        <a
          key={item.url}
          href={item.url}
          className="rounded-sm text-[13px] text-muted-foreground no-underline outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring data-[active=true]:font-medium data-[active=true]:text-foreground data-[depth=3]:pl-4 data-[depth=4]:pl-6"
          data-active={item.url === `#${activeHeading}`}
          data-depth={item.depth}
        >
          {item.title}
        </a>
      ))}
    </div>
  )
}
