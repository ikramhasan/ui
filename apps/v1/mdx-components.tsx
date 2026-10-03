import * as React from "react"
import Link from "next/link"
import { cn } from "cn"

import { withSiteUrl } from "@/lib/registry-url"
import { Callout } from "@/components/callout"
import { CodeBlockCommand } from "@/components/code-block-command"
import { CodeTabs } from "@/components/code-tabs"
import { ComponentPreview } from "@/components/component-preview"
import { ComponentSource } from "@/components/component-source"
import { ComponentsList } from "@/components/components-list"
import { CopyButton } from "@/components/copy-button"
import { Kbd } from "@/registry/ui/kbd"
import { TabsContent, TabsList, TabsTrigger } from "@/registry/ui/tabs"

function getNodeText(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node)
  }

  if (Array.isArray(node)) {
    return node.map(getNodeText).join("")
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getNodeText(node.props.children)
  }

  return ""
}

function getHeadingId(children: React.ReactNode) {
  const id = getNodeText(children)
    .trim()
    .replace(/\s+/g, "-")
    .replace(/['?()⌘,.]/g, "")
    .toLowerCase()

  return id || undefined
}

// Docs are written against http://localhost:3000. Swap in this deployment's
// URL wherever it appears in highlighted code.
function replaceSiteUrl(node: React.ReactNode): React.ReactNode {
  if (typeof node === "string") {
    return withSiteUrl(node)
  }

  if (Array.isArray(node)) {
    return node.map(replaceSiteUrl)
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    if (node.props.children === undefined) {
      return node
    }
    return React.cloneElement(
      node,
      undefined,
      replaceSiteUrl(node.props.children)
    )
  }

  return node
}

function heading(Tag: "h1" | "h2" | "h3" | "h4", className: string) {
  function Heading({
    children,
    id,
    className: classNameProp,
    ...props
  }: React.ComponentProps<"h1">) {
    const headingId = id ?? getHeadingId(children)

    return (
      <Tag
        id={headingId}
        className={cn("scroll-m-24", className, classNameProp)}
        {...props}
      >
        {headingId ? (
          <a href={`#${headingId}`} className="group/heading outline-none">
            {children}
            <span
              aria-hidden
              className="ml-2 text-muted-foreground opacity-0 group-hover/heading:opacity-100"
            >
              #
            </span>
          </a>
        ) : (
          children
        )}
      </Tag>
    )
  }

  return Heading
}

export const mdxComponents = {
  h1: heading("h1", "mt-2 text-3xl font-semibold tracking-tight"),
  h2: heading(
    "h2",
    "mt-12 text-xl font-medium tracking-tight first:mt-0 [&+p]:mt-3!"
  ),
  h3: heading("h3", "mt-8 text-lg font-medium tracking-tight [&+p]:mt-2!"),
  h4: heading("h4", "mt-8 text-base font-medium tracking-tight"),
  a: ({ className, href, ...props }: React.ComponentProps<"a">) => {
    const url = href ? withSiteUrl(href) : href
    const external = url?.startsWith("http")

    const linkClassName = cn(
      "font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground",
      className
    )

    if (!url || external) {
      return (
        <a
          href={url}
          className={linkClassName}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          {...props}
        />
      )
    }

    return <Link href={url} className={linkClassName} {...props} />
  },
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p className={cn("leading-7 not-first:mt-6", className)} {...props} />
  ),
  strong: ({ className, ...props }: React.ComponentProps<"strong">) => (
    <strong className={cn("font-medium", className)} {...props} />
  ),
  ul: ({ className, ...props }: React.ComponentProps<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentProps<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentProps<"li">) => (
    <li className={cn("mt-2 leading-7", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  hr: (props: React.ComponentProps<"hr">) => (
    <hr className="my-8 border-border" {...props} />
  ),
  table: ({ className, ...props }: React.ComponentProps<"table">) => (
    <div className="no-scrollbar my-6 w-full overflow-x-auto rounded-xl border">
      <table
        className={cn("w-full overflow-hidden text-sm", className)}
        {...props}
      />
    </div>
  ),
  tr: ({ className, ...props }: React.ComponentProps<"tr">) => (
    <tr
      className={cn("border-b last:border-b-0 even:bg-muted/40", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentProps<"th">) => (
    <th
      className={cn(
        "px-4 py-2 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentProps<"td">) => (
    <td
      className={cn(
        "px-4 py-2 text-left whitespace-nowrap [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, children, ...props }: React.ComponentProps<"pre">) => (
    <pre
      className={cn(
        "no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-data-[slot=code-block-command]:p-0",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  figure: ({ className, ...props }: React.ComponentProps<"figure">) => (
    <figure className={cn("relative", className)} {...props} />
  ),
  code: ({
    className,
    __raw__,
    __npm__,
    __yarn__,
    __pnpm__,
    __bun__,
    children,
    ...props
  }: React.ComponentProps<"code"> & {
    __raw__?: string
    __npm__?: string
    __yarn__?: string
    __pnpm__?: string
    __bun__?: string
  }) => {
    // Inline code.
    if (typeof children === "string") {
      return (
        <code
          className={cn(
            "rounded-md bg-muted px-[0.3rem] py-[0.15rem] font-mono text-[0.85em] break-words outline-none",
            className
          )}
          {...props}
        >
          {withSiteUrl(children)}
        </code>
      )
    }

    // A package manager command.
    if (__npm__ && __yarn__ && __pnpm__ && __bun__) {
      return (
        <CodeBlockCommand
          __npm__={withSiteUrl(__npm__)}
          __yarn__={withSiteUrl(__yarn__)}
          __pnpm__={withSiteUrl(__pnpm__)}
          __bun__={withSiteUrl(__bun__)}
        />
      )
    }

    return (
      <>
        {__raw__ && <CopyButton value={withSiteUrl(__raw__)} />}
        <code className={className} {...props}>
          {replaceSiteUrl(children)}
        </code>
      </>
    )
  },
  Step: ({ className, id, children, ...props }: React.ComponentProps<"h3">) => (
    <h3
      id={id ?? getHeadingId(children)}
      className={cn("step mt-8 scroll-m-24 font-medium", className)}
      {...props}
    >
      {children}
    </h3>
  ),
  Steps: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div
      className={cn(
        "steps mb-12 ml-4 border-l pl-8 [counter-reset:step]",
        className
      )}
      {...props}
    />
  ),
  Link,
  Kbd,
  Callout,
  CodeTabs,
  TabsList: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsList>) => (
    <TabsList variant="line" className={className} {...props} />
  ),
  TabsTrigger,
  TabsContent: ({
    className,
    ...props
  }: React.ComponentProps<typeof TabsContent>) => (
    <TabsContent
      className={cn(
        "relative text-base [&>.steps]:mt-6 [&>figure:first-child]:mt-0",
        className
      )}
      {...props}
    />
  ),
  ComponentPreview,
  ComponentSource,
  ComponentsList,
}
