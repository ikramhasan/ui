import Link from "next/link"

import { getDocsNav } from "@/lib/docs"

export function ComponentsList() {
  const components = getDocsNav().find((section) =>
    section.url?.startsWith("/docs/components")
  )

  if (!components) {
    return null
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:gap-x-12">
      {components.items.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className="text-[15px] font-medium underline-offset-4 outline-none hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}
