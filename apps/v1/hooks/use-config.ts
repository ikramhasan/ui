"use client"

import * as React from "react"

type Config = {
  packageManager: "pnpm" | "npm" | "yarn" | "bun"
  installationType: "cli" | "manual"
}

const STORAGE_KEY = "config"
const DEFAULT_CONFIG: Config = {
  packageManager: "pnpm",
  installationType: "cli",
}

const listeners = new Set<() => void>()
let current: Config | null = null

function read(): Config {
  if (!current) {
    current = DEFAULT_CONFIG
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) current = { ...DEFAULT_CONFIG, ...JSON.parse(raw) }
    } catch {}
  }

  return current!
}

function emit() {
  listeners.forEach((listener) => listener())
}

function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return
  current = null
  emit()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  if (listeners.size === 1) window.addEventListener("storage", onStorage)
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) window.removeEventListener("storage", onStorage)
  }
}

// The docs' install preferences (package manager, CLI or manual), shared by
// every code block on the page and remembered across visits.
export function useConfig() {
  const config = React.useSyncExternalStore(
    subscribe,
    read,
    () => DEFAULT_CONFIG
  )

  const setConfig = React.useCallback((value: Config) => {
    current = value
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    } catch {}
    emit()
  }, [])

  return [config, setConfig] as const
}
