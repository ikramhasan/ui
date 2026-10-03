import { CalendarIcon, PackageIcon, RefreshCwIcon } from "lucide-react"

import { Badge } from "@/registry/ui/badge"
import { Button } from "@/registry/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import { Progress, ProgressLabel, ProgressValue } from "@/registry/ui/progress"
import { Table, TableBody, TableCell, TableRow } from "@/registry/ui/table"

const DETAILS = [
  { icon: PackageIcon, label: "Products", value: "1,284" },
  { icon: RefreshCwIcon, label: "Last sync", value: "2 minutes ago" },
  { icon: CalendarIcon, label: "Connected", value: "Mar 14, 2026" },
]

export function StoreConnection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Shopify</CardTitle>
        <CardDescription>acme.myshopify.com</CardDescription>
        <CardAction>
          <Badge className="bg-success/15 text-success">Connected</Badge>
        </CardAction>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <Table className="table-fixed">
          <TableBody>
            {DETAILS.map(({ icon: Icon, label, value }) => (
              <TableRow key={label}>
                <TableCell className="border-r text-muted-foreground">
                  <span className="flex items-center gap-2 [&>svg]:size-4">
                    <Icon />
                    {label}
                  </span>
                </TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Progress value={64}>
          <ProgressLabel>Syncing orders</ProgressLabel>
          <ProgressValue />
        </Progress>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Disconnect</Button>
        <Button>Sync now</Button>
      </CardFooter>
    </Card>
  )
}
