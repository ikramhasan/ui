import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/ui/button"

// Home, Blocks and Charts are filled in once every component has shipped.
export function ComingSoon({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <PageHeader className="flex flex-1 flex-col justify-center border-b-0">
      <PageHeaderHeading>{title}</PageHeaderHeading>
      <PageHeaderDescription>{description}</PageHeaderDescription>
      <PageActions>
        <Link href="/docs" className={buttonVariants()}>
          Get Started
        </Link>
        <Link
          href="/docs/components"
          className={buttonVariants({ variant: "secondary" })}
        >
          Browse Components
          <ArrowRightIcon data-icon="inline-end" />
        </Link>
      </PageActions>
    </PageHeader>
  )
}
