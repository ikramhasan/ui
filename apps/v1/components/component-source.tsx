import * as React from "react"
import { cn } from "cn"

import { highlightCode } from "@/lib/highlight-code"
import {
  fixImports,
  getExampleSource,
  getRegistryItemSource,
  readFileFromRoot,
} from "@/lib/registry"
import { CodeCollapsibleWrapper } from "@/components/code-collapsible-wrapper"
import { CopyButton } from "@/components/copy-button"

// Highlighted source for a registry item (`name`), an example (`example`) or
// any file in the app (`src`).
export async function ComponentSource({
  name,
  example,
  src,
  title,
  language,
  collapsible = true,
  className,
}: {
  name?: string
  example?: string
  src?: string
  title?: string
  language?: string
  collapsible?: boolean
  className?: string
}) {
  let code: string | null = null

  if (name) {
    code = await getRegistryItemSource(name)
  } else if (example) {
    code = await getExampleSource(example)
  } else if (src) {
    code = fixImports(await readFileFromRoot(src))
  }

  if (!code) {
    return null
  }

  code = code.trimEnd()
  const lang = language ?? title?.split(".").pop() ?? "tsx"
  const highlighted = await highlightCode(code, lang)

  const figure = (
    <ComponentCode
      code={code}
      highlighted={highlighted}
      language={lang}
      title={title}
    />
  )

  if (!collapsible) {
    return <div className={cn("relative", className)}>{figure}</div>
  }

  return (
    <CodeCollapsibleWrapper className={className}>
      {figure}
    </CodeCollapsibleWrapper>
  )
}

export function ComponentCode({
  code,
  highlighted,
  language,
  title,
}: {
  code: string
  highlighted: string
  language: string
  title?: string
}) {
  return (
    <figure data-rehype-pretty-code-figure="">
      {title && (
        <figcaption data-rehype-pretty-code-title="" data-language={language}>
          {title}
        </figcaption>
      )}
      <CopyButton value={code} className={title ? "top-1.5" : undefined} />
      <div dangerouslySetInnerHTML={{ __html: highlighted }} />
    </figure>
  )
}
