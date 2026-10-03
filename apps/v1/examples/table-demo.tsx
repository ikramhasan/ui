import { Badge } from "@/registry/ui/badge"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table"

const invoices = [
  {
    invoice: "INV001",
    status: "Paid",
    method: "Credit card",
    amount: "$250.00",
  },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  {
    invoice: "INV003",
    status: "Unpaid",
    method: "Bank transfer",
    amount: "$350.00",
  },
  {
    invoice: "INV004",
    status: "Paid",
    method: "Credit card",
    amount: "$450.00",
  },
  { invoice: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
  {
    invoice: "INV006",
    status: "Pending",
    method: "Bank transfer",
    amount: "$200.00",
  },
  {
    invoice: "INV007",
    status: "Unpaid",
    method: "Credit card",
    amount: "$300.00",
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === "Paid") {
    return <Badge className="bg-success/15 text-success">Paid</Badge>
  }
  if (status === "Unpaid") {
    return <Badge variant="destructive">Unpaid</Badge>
  }
  return <Badge variant="secondary">{status}</Badge>
}

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>
              <StatusBadge status={invoice.status} />
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,250.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
