import { scriptToMessages } from "@/examples/message-scroller/scripted-chat"

// A saved incident thread, shared by the static examples.
export const history = scriptToMessages([
  {
    user: "Can you summarize the incident channel?",
    assistant:
      "The first alert was a delayed export job. It started backing up around 09:42 UTC and fired once the retry queue crossed its threshold.\n\nCheckout was not affected, but exports for larger workspaces ran about 12 minutes behind.",
  },
  {
    user: "Was checkout affected?",
    assistant:
      "No checkout errors were reported. Payment authorization, order creation and confirmation emails stayed inside their normal latency.",
  },
  {
    user: "What changed in the last deploy?",
    assistant:
      "Only the export queue worker. The deploy moved large CSV jobs onto the shared retry policy, so each failed attempt held a worker slot longer than before.",
  },
  {
    user: "Do we need to roll back?",
    assistant:
      "Not yet. Queue depth is recovering after we reduced retry concurrency, and the oldest pending job is now under five minutes old.\n\nKeep the rollback ready if the queue starts climbing again.",
  },
  {
    user: "Keep watching for customer-visible issues.",
    assistant:
      "I will watch the queue and support tags for another 15 minutes. If they stay quiet through the next batch window, we can close this as an internal degradation.",
  },
])
