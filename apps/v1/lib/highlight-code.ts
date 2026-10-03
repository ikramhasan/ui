import { codeToHtml } from "shiki"
import type { ShikiTransformer } from "shiki"

// Adds the raw source to code blocks (for the copy button) and, for package
// manager commands, the npm, yarn, pnpm and bun variants.
export const transformers = [
  {
    code(node) {
      if (node.tagName === "code") {
        const raw = this.source
        node.properties["__raw__"] = raw

        if (raw.startsWith("npm install")) {
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace("npm install", "yarn add")
          node.properties["__pnpm__"] = raw.replace("npm install", "pnpm add")
          node.properties["__bun__"] = raw.replace("npm install", "bun add")
        } else if (raw.startsWith("npx create-")) {
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace(
            "npx create-",
            "yarn create "
          )
          node.properties["__pnpm__"] = raw.replace(
            "npx create-",
            "pnpm create "
          )
          node.properties["__bun__"] = raw.replace("npx", "bunx --bun")
        } else if (raw.startsWith("npx")) {
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace("npx", "yarn dlx")
          node.properties["__pnpm__"] = raw.replace("npx", "pnpm dlx")
          node.properties["__bun__"] = raw.replace("npx", "bunx --bun")
        } else if (raw.startsWith("npm run")) {
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace("npm run", "yarn")
          node.properties["__pnpm__"] = raw.replace("npm run", "pnpm")
          node.properties["__bun__"] = raw.replace("npm run", "bun")
        }
      }
    },
  },
] as ShikiTransformer[]

const cache = new Map<string, string>()

export async function highlightCode(code: string, language: string = "tsx") {
  const key = `${language}:${code}`
  const cached = cache.get(key)
  if (cached) {
    return cached
  }

  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
    transformers: [
      {
        pre(node) {
          node.properties["class"] =
            "no-scrollbar min-w-0 overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 !bg-transparent"
        },
        line(node) {
          node.properties["data-line"] = ""
        },
      },
    ],
  })

  cache.set(key, html)
  return html
}
