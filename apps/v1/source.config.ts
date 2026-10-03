import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import rehypePrettyCode from "rehype-pretty-code"

import { transformers } from "@/lib/highlight-code"

export default defineConfig({
  mdxOptions: {
    // Search uses the page tree, not structured data. remark-structure's
    // stringifier also overflows the stack on bold text (fumadocs 16.10).
    remarkStructureOptions: false,
    rehypePlugins: (plugins) => {
      plugins.shift()
      plugins.push([
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          transformers,
        },
      ])

      return plugins
    },
  },
})

export const docs = defineDocs({
  dir: "content/docs",
})
