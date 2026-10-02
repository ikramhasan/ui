"use client"

import {
  ArchiveIcon,
  ArrowLeftIcon,
  ChevronDownIcon,
  CopyIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/registry/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"

const currencies = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "GBP", value: "gbp" },
]

export function ButtonGroupDemo() {
  return (
    <>
      <Example title="Default">
        <ButtonGroup>
          <Button variant="secondary" size="icon" aria-label="Go back">
            <ArrowLeftIcon />
          </Button>
          <Button variant="secondary">Archive</Button>
          <Button variant="secondary">Report</Button>
          <Button variant="secondary">Snooze</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Day</Button>
          <Button variant="outline">Week</Button>
          <Button variant="outline">Month</Button>
        </ButtonGroup>
      </Example>

      <Example title="Nested">
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="secondary" size="sm">
              1
            </Button>
            <Button variant="secondary" size="sm">
              2
            </Button>
            <Button variant="secondary" size="sm">
              3
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="secondary" size="icon-sm" aria-label="Previous">
              <MinusIcon />
            </Button>
            <Button variant="secondary" size="icon-sm" aria-label="Next">
              <PlusIcon />
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </Example>

      <Example title="Split button with a separator">
        <ButtonGroup>
          <Button>
            <CopyIcon data-icon="inline-start" />
            Copy
          </Button>
          <ButtonGroupSeparator />
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button size="icon" aria-label="More copy options" />}
            >
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuItem>Copy as Markdown</DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                Archive
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary">Follow</Button>
          <ButtonGroupSeparator />
          <Button variant="secondary" size="icon" aria-label="More options">
            <ChevronDownIcon />
          </Button>
        </ButtonGroup>
      </Example>

      <Example title="With input, text and select">
        <ButtonGroup className="w-full max-w-xs">
          <Input placeholder="Search…" aria-label="Search" />
          <Button variant="secondary" size="icon" aria-label="Search">
            <SearchIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText render={<Label htmlFor="bg-url" />}>
            https://
          </ButtonGroupText>
          <Input id="bg-url" placeholder="example.com" className="w-40" />
          <ButtonGroupText>.com</ButtonGroupText>
        </ButtonGroup>
        <ButtonGroup>
          <Select items={currencies} defaultValue="usd">
            <SelectTrigger aria-label="Currency">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {currencies.map((c) => (
                  <SelectItem key={c.value} value={c.value}>
                    {c.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input placeholder="10.00" aria-label="Amount" className="w-28" />
        </ButtonGroup>
      </Example>

      <Example title="Vertical">
        <ButtonGroup orientation="vertical" aria-label="Zoom">
          <Button variant="secondary" size="icon" aria-label="Zoom in">
            <PlusIcon />
          </Button>
          <Button variant="secondary" size="icon" aria-label="Zoom out">
            <MinusIcon />
          </Button>
        </ButtonGroup>
      </Example>
    </>
  )
}
