import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/ui/pagination"

export function PaginationIconsOnly() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground tabular-nums">
        Page 4 of 12
      </span>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" aria-label="Go to previous page">
              <ChevronLeftIcon />
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" aria-label="Go to next page">
              <ChevronRightIcon />
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
