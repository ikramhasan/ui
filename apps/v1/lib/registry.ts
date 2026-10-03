import { promises as fs } from "fs"
import path from "path"
import type { ComponentType } from "react"

import { ExamplesIndex } from "@/examples/__index__"
import registry from "@/registry.json"

export type RegistryItem = (typeof registry.items)[number] & {
  dependencies?: string[]
  registryDependencies?: string[]
}

export function getRegistryItems() {
  return registry.items as RegistryItem[]
}

export function getRegistryItem(name: string) {
  return getRegistryItems().find((item) => item.name === name) ?? null
}

export async function getExampleComponent(name: string) {
  const entry = ExamplesIndex[name]
  if (!entry) {
    return null
  }

  // Each example file exports one component.
  const mod = await entry.component()
  const Component = Object.values(mod).find(
    (value) => typeof value === "function"
  )

  return (Component as ComponentType | undefined) ?? null
}

export async function readFileFromRoot(filePath: string) {
  return fs.readFile(
    path.join(/*turbopackIgnore: true*/ process.cwd(), filePath),
    "utf8"
  )
}

// The source a user sees: the CLI rewrites our @/registry imports to the
// project's aliases, so show the default ones.
export function fixImports(code: string) {
  return code
    .replaceAll("@/registry/ui/", "@/components/ui/")
    .replaceAll("@/registry/hooks/", "@/hooks/")
}

export async function getExampleSource(name: string) {
  const entry = ExamplesIndex[name]
  if (!entry) {
    return null
  }

  return fixImports(await readFileFromRoot(entry.filePath))
}

export async function getRegistryItemSource(name: string) {
  const item = getRegistryItem(name)
  const file = item?.files?.[0]
  if (!file) {
    return null
  }

  return fixImports(await readFileFromRoot(file.path))
}
