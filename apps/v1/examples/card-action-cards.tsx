import { PenLineIcon, SearchIcon, SparklesIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"

export function CardActionCards() {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-3">
      {actions.map(({ icon: Icon, title, description }) => (
        <a
          key={title}
          href="#card"
          className="group/action rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Card className="h-full transition-[box-shadow] group-hover/action:shadow-[0_1px_2px_rgb(0_0_0/0.04),0_4px_12px_rgb(0_0_0/0.05)] group-hover/action:ring-input">
            <CardHeader>
              <Icon className="mb-7 size-5 text-muted-foreground" />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        </a>
      ))}
    </div>
  )
}

const actions = [
  {
    icon: PenLineIcon,
    title: "Create",
    description: "Draft a post or a product page.",
  },
  {
    icon: SearchIcon,
    title: "Find",
    description: "Look up orders and customers.",
  },
  {
    icon: SparklesIcon,
    title: "Research",
    description: "Compare competitors' pricing.",
  },
]
