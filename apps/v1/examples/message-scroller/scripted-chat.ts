"use client"

import * as React from "react"

// A stand-in for a real chat transport: replays a fixed script and streams
// each assistant reply word by word, so the examples need no API.

export type ChatMessage = {
  id: string
  role: "user" | "assistant"
  text: string
}

export type ChatScript = readonly { user: string; assistant: string }[]

export function scriptToMessages(script: ChatScript): ChatMessage[] {
  return script.flatMap((turn, index) => [
    { id: `user-${index}`, role: "user" as const, text: turn.user },
    {
      id: `assistant-${index}`,
      role: "assistant" as const,
      text: turn.assistant,
    },
  ])
}

export function useScriptedChat(
  script: ChatScript,
  { initialTurns = 0, wordDelay = 30 } = {}
) {
  const [turn, setTurn] = React.useState(initialTurns)
  const [messages, setMessages] = React.useState(() =>
    scriptToMessages(script.slice(0, initialTurns))
  )
  const [status, setStatus] = React.useState<"ready" | "streaming">("ready")
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  React.useEffect(() => () => clearTimeout(timer.current), [])

  const next = script[turn]

  function send() {
    if (!next || status !== "ready") {
      return
    }

    const id = `assistant-${turn}`
    const words = next.assistant.split(/(\s+)/)
    let count = 0

    setMessages((current) => [
      ...current,
      { id: `user-${turn}`, role: "user", text: next.user },
    ])
    setTurn(turn + 1)
    setStatus("streaming")

    function step() {
      count += 2
      const text = words.slice(0, count).join("")

      setMessages((current) => {
        const rest = current.filter((message) => message.id !== id)
        return [...rest, { id, role: "assistant", text }]
      })

      if (count < words.length) {
        timer.current = setTimeout(step, wordDelay)
      } else {
        setStatus("ready")
      }
    }

    timer.current = setTimeout(step, 400)
  }

  function reset() {
    clearTimeout(timer.current)
    setTurn(initialTurns)
    setMessages(scriptToMessages(script.slice(0, initialTurns)))
    setStatus("ready")
  }

  return { messages, next, send, reset, status }
}
