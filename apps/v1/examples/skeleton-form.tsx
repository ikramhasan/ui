import { Skeleton } from "@/registry/ui/skeleton"

export function SkeletonForm() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4">
      {[0, 1].map((i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-8 w-full rounded-lg" />
        </div>
      ))}
      <Skeleton className="h-8 w-24 self-end rounded-lg" />
    </div>
  )
}
