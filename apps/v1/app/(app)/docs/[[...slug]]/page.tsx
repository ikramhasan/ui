import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { findNeighbour } from "fumadocs-core/page-tree"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { socialMetadata } from "@/lib/metadata"
import { source } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { DocsTableOfContents } from "@/components/docs-toc"
import { mdxComponents } from "@/mdx-components"
import { buttonVariants } from "@/registry/ui/button"

export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">
): Promise<Metadata> {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  const doc = page.data

  return {
    title: doc.title,
    description: doc.description,
    alternates: {
      canonical: page.url,
    },
    ...socialMetadata({
      title: `${doc.title} - ${siteConfig.name}`,
      description: doc.description,
      url: absoluteUrl(page.url),
      type: "article",
    }),
  }
}

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params
  const page = source.getPage(params.slug)

  if (!page) {
    notFound()
  }

  const doc = page.data
  const MDX = doc.body
  const neighbours = findNeighbour(source.pageTree, page.url)

  return (
    <div data-slot="docs" className="flex items-stretch text-[15px] xl:w-full">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 md:px-0 lg:py-10">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">
                {doc.title}
              </h1>
              <div className="flex shrink-0 items-center gap-1.5 pt-1">
                {neighbours.previous && (
                  <Link
                    href={neighbours.previous.url}
                    aria-label={`Previous: ${neighbours.previous.name}`}
                    className={buttonVariants({
                      variant: "secondary",
                      size: "icon-sm",
                    })}
                  >
                    <ArrowLeftIcon />
                  </Link>
                )}
                {neighbours.next && (
                  <Link
                    href={neighbours.next.url}
                    aria-label={`Next: ${neighbours.next.name}`}
                    className={buttonVariants({
                      variant: "secondary",
                      size: "icon-sm",
                    })}
                  >
                    <ArrowRightIcon />
                  </Link>
                )}
              </div>
            </div>
            {doc.description && (
              <p className="text-base text-pretty text-muted-foreground">
                {doc.description}
              </p>
            )}
          </div>
          <div className="w-full flex-1">
            <MDX components={mdxComponents} />
          </div>
          <div className="flex h-16 w-full items-center gap-2">
            {neighbours.previous && (
              <Link
                href={neighbours.previous.url}
                className={buttonVariants({ variant: "secondary", size: "sm" })}
              >
                <ArrowLeftIcon data-icon="inline-start" />
                {neighbours.previous.name}
              </Link>
            )}
            {neighbours.next && (
              <Link
                href={neighbours.next.url}
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "ml-auto",
                })}
              >
                {neighbours.next.name}
                <ArrowRightIcon data-icon="inline-end" />
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="sticky top-(--header-height) ml-auto hidden h-[calc(100svh-var(--header-height))] w-56 shrink-0 flex-col overflow-y-auto overscroll-none px-6 pt-10 pb-8 xl:flex">
        {doc.toc?.length ? <DocsTableOfContents toc={doc.toc} /> : null}
      </div>
    </div>
  )
}
