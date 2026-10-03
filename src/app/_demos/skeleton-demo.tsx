import { Example } from "@/app/_components/showcase"
import { Card, CardContent, CardHeader } from "@/registry/ui/card"
import { Skeleton } from "@/registry/ui/skeleton"

export function SkeletonDemo() {
  return (
    <>
      <Example title="Profile">
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-28" />
          </div>
        </div>
      </Example>

      <Example title="Card">
        <Card className="w-full max-w-xs">
          <CardHeader className="gap-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="aspect-video w-full rounded-lg" />
          </CardContent>
        </Card>
      </Example>

      <Example title="Form">
        <div className="flex w-full max-w-xs flex-col gap-4">
          {[0, 1].map((i) => (
            <div key={i} className="flex flex-col gap-1.5">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-8 w-full rounded-lg" />
            </div>
          ))}
          <Skeleton className="h-8 w-24 self-end rounded-lg" />
        </div>
      </Example>
    </>
  )
}
