import { ChevronRightIcon, GlobeIcon } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/ui/dialog"
import { Trace, TraceIcon, TraceLine, TraceTitle } from "@/registry/ui/trace"

const results = [
  {
    title: "Build cache · Vercel docs",
    url: "vercel.com/docs/builds/build-cache",
  },
  {
    title: "Caching images · Next.js",
    url: "nextjs.org/docs/app/api-reference/components/image",
  },
  {
    title: "Cache keys explained",
    url: "turbo.build/repo/docs/crafting-your-repository/caching",
  },
]

export function TraceDialog() {
  return (
    <Trace className="max-w-md">
      <Dialog>
        <DialogTrigger>
          <TraceLine>
            <TraceIcon>
              <GlobeIcon />
            </TraceIcon>
            <TraceTitle>Searched the web for cache keys</TraceTitle>
            <TraceIcon>
              <ChevronRightIcon />
            </TraceIcon>
          </TraceLine>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>cache keys</DialogTitle>
            <DialogDescription>3 results from the web</DialogDescription>
          </DialogHeader>
          <ul className="flex flex-col gap-3 text-sm">
            {results.map((result) => (
              <li key={result.url} className="flex flex-col">
                <span className="font-medium">{result.title}</span>
                <span className="truncate text-muted-foreground">
                  {result.url}
                </span>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </Trace>
  )
}
