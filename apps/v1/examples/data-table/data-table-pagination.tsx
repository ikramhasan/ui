"use client"

import { type ReactTable, type RowData } from "@tanstack/react-table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"

import { type DataTableFeatures } from "./data-table-features"

const pageSizes = [5, 10, 20, 30, 50]

interface DataTablePaginationProps<TData extends RowData> {
  table: ReactTable<DataTableFeatures, TData>
}

export function DataTablePagination<TData extends RowData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="@container/pagination flex items-center justify-between gap-4">
      <div className="flex-1 text-sm whitespace-nowrap text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of{" "}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden items-center gap-2 @lg/pagination:flex">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={table.state.pagination.pageSize}
            onValueChange={(value) => {
              if (value !== null) {
                table.setPageSize(value)
              }
            }}
          >
            <SelectTrigger size="sm" className="w-[4.5rem]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent side="top">
              <SelectGroup>
                {pageSizes.map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="text-sm font-medium whitespace-nowrap tabular-nums">
          Page {table.state.pagination.pageIndex + 1} of{" "}
          {Math.max(table.getPageCount(), 1)}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon-sm"
            className="hidden @2xl/pagination:inline-flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            className="hidden @2xl/pagination:inline-flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  )
}
