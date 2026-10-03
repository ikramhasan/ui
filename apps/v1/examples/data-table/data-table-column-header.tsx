"use client"

import { Subscribe, type Column, type RowData } from "@tanstack/react-table"
import { cn } from "cn"
import { ArrowDown, ArrowUp, ChevronsUpDown, EyeOff } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu"

import { type DataTableFeatures } from "./data-table-features"

interface DataTableColumnHeaderProps<TData extends RowData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<DataTableFeatures, TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData extends RowData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              size="sm"
              className="-my-1.5 -ml-[9px] hover:bg-foreground/5 aria-expanded:bg-foreground/5"
            />
          }
        >
          {title}
          {/* Read the sort through Subscribe: the column object is stable, so
              a memoized header (React Compiler) would miss getIsSorted(). */}
          <Subscribe
            source={column.table.atoms.sorting}
            selector={(sorting) =>
              sorting.find((sort) => sort.id === column.id)?.desc
            }
          >
            {(desc) =>
              desc === undefined ? (
                <ChevronsUpDown data-icon="inline-end" />
              ) : desc ? (
                <ArrowDown data-icon="inline-end" />
              ) : (
                <ArrowUp data-icon="inline-end" />
              )
            }
          </Subscribe>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
              <ArrowUp />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
              <ArrowDown />
              Desc
            </DropdownMenuItem>
          </DropdownMenuGroup>
          {column.getCanHide() && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  onClick={() => column.toggleVisibility(false)}
                >
                  <EyeOff />
                  Hide
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
