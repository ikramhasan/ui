"use client"

import * as React from "react"

import { Badge } from "@/registry/ui/badge"
import { Checkbox } from "@/registry/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ui/table"

const members = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia@example.com",
    role: "Owner",
  },
  { id: "2", name: "Jackson Lee", email: "jackson@example.com", role: "Admin" },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella@example.com",
    role: "Member",
  },
  { id: "4", name: "William Kim", email: "will@example.com", role: "Member" },
]

export function TableSelection() {
  const [selected, setSelected] = React.useState<string[]>(["2"])

  const allSelected = selected.length === members.length

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox
              checked={allSelected}
              onCheckedChange={(checked) =>
                setSelected(checked ? members.map((member) => member.id) : [])
              }
              aria-label="Select all"
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => {
          const isSelected = selected.includes(member.id)
          return (
            <TableRow
              key={member.id}
              data-state={isSelected ? "selected" : undefined}
            >
              <TableCell>
                <Checkbox
                  checked={isSelected}
                  onCheckedChange={(checked) =>
                    setSelected((current) =>
                      checked
                        ? [...current, member.id]
                        : current.filter((id) => id !== member.id)
                    )
                  }
                  aria-label={`Select ${member.name}`}
                />
              </TableCell>
              <TableCell className="font-medium">{member.name}</TableCell>
              <TableCell className="text-muted-foreground">
                {member.email}
              </TableCell>
              <TableCell className="text-right">
                <Badge
                  variant={member.role === "Owner" ? "default" : "secondary"}
                >
                  {member.role}
                </Badge>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
