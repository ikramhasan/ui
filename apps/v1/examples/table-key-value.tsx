import {
  CalendarIcon,
  PackageIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
} from "lucide-react"

import { Badge } from "@/registry/ui/badge"
import { Table, TableBody, TableCell, TableRow } from "@/registry/ui/table"

const details = [
  { icon: ShieldCheckIcon, label: "Status", value: "Connected" },
  { icon: PackageIcon, label: "Products synced", value: "1,284" },
  { icon: RefreshCwIcon, label: "Last sync", value: "2 minutes ago" },
  { icon: CalendarIcon, label: "Connected on", value: "Mar 14, 2026" },
]

export function TableKeyValue() {
  return (
    <div className="w-full max-w-md">
      <Table className="table-fixed">
        <TableBody>
          {details.map(({ icon: Icon, label, value }) => (
            <TableRow key={label}>
              <TableCell className="border-r text-muted-foreground">
                <span className="flex items-center gap-2 [&>svg]:size-4">
                  <Icon />
                  {label}
                </span>
              </TableCell>
              <TableCell>
                {label === "Status" ? (
                  <Badge className="bg-success/15 text-success">{value}</Badge>
                ) : (
                  value
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
