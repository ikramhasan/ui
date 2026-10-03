import { ArrowUpRightIcon, FolderIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderIcon />
        </EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Create project</Button>
          <Button variant="secondary">Import project</Button>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        className="text-muted-foreground dark:text-muted-foreground"
        size="sm"
        render={<a href="#" />}
        nativeButton={false}
      >
        Learn more <ArrowUpRightIcon data-icon="inline-end" />
      </Button>
    </Empty>
  )
}
