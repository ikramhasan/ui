import path from "path"

import { highlightCode } from "@/lib/highlight-code"
import { fixImports, getRegistryItems, readFileFromRoot } from "@/lib/registry"

export type BlockFile = {
  // Where the CLI writes the file, relative to the user's project.
  target: string
  language: string
  code: string
  highlighted: string
}

export type FileTree = {
  name: string
  path?: string
  children?: FileTree[]
}

export function getBlocks() {
  return getRegistryItems().filter((item) => item.type === "registry:block")
}

export function getBlock(name: string) {
  return getBlocks().find((item) => item.name === name) ?? null
}

// The CLI writes registry:component files to components/ and rewrites the
// block's own imports to match, so show the code as it lands.
function fixBlockImports(code: string) {
  return fixImports(code).replace(
    /@\/registry\/blocks\/[^/]+\/components\//g,
    "@/components/"
  )
}

function getTarget(file: { path: string; target?: string }) {
  return file.target ?? `components/${path.basename(file.path)}`
}

export async function getBlockFiles(name: string): Promise<BlockFile[]> {
  const block = getBlock(name)
  if (!block) {
    return []
  }

  return Promise.all(
    (block.files as { path: string; target?: string }[]).map(async (file) => {
      const language = path.extname(file.path).slice(1) || "tsx"
      const code = fixBlockImports(await readFileFromRoot(file.path)).trimEnd()

      return {
        target: getTarget(file),
        language,
        code,
        highlighted: await highlightCode(code, language),
      }
    })
  )
}

// Folders first, then files, each alphabetical, like an editor's explorer.
export function createFileTree(paths: string[]): FileTree[] {
  const root: FileTree[] = []

  for (const filePath of paths) {
    const parts = filePath.split("/")
    let level = root

    parts.forEach((part, index) => {
      const isFile = index === parts.length - 1
      let node = level.find((item) => item.name === part)

      if (!node) {
        node = isFile
          ? { name: part, path: filePath }
          : { name: part, children: [] }
        level.push(node)
      }

      level = node.children ?? []
    })
  }

  const sort = (nodes: FileTree[]): FileTree[] =>
    nodes
      .sort((a, b) =>
        !!a.children === !!b.children
          ? a.name.localeCompare(b.name)
          : a.children
            ? -1
            : 1
      )
      .map((node) =>
        node.children ? { ...node, children: sort(node.children) } : node
      )

  return sort(root)
}
