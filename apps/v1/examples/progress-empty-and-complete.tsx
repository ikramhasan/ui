import { Progress, ProgressLabel, ProgressValue } from "@/registry/ui/progress"

export function ProgressEmptyAndComplete() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      <Progress value={0}>
        <ProgressLabel>Not started</ProgressLabel>
        <ProgressValue />
      </Progress>
      <Progress value={100}>
        <ProgressLabel>Done</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  )
}
