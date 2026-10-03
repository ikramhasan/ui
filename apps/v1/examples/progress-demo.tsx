import { Progress } from "@/registry/ui/progress"

export function ProgressDemo() {
  return <Progress value={60} aria-label="Upload" className="w-full max-w-xs" />
}
