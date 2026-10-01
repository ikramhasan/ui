import {
  ArrowRightIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  DicesIcon,
  ExternalLinkIcon,
  LayersIcon,
  LoaderCircleIcon,
  MicIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"

export function ButtonDemo() {
  return (
    <>
      <Example title="Variants">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </Example>

      <Example title="With icon">
        <Button variant="secondary">
          <DicesIcon data-icon="inline-start" />
          Surprise me
        </Button>
        <Button>
          <LayersIcon data-icon="inline-start" />
          Explore Moodboards
        </Button>
        <Button variant="ghost">
          Auto
          <ChevronDownIcon data-icon="inline-end" />
        </Button>
        <Button variant="outline">
          Continue
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
        <Button variant="destructive">
          <Trash2Icon data-icon="inline-start" />
          Delete
        </Button>
      </Example>

      <Example title="Sizes">
        <Button size="xs" variant="secondary">
          Extra small
        </Button>
        <Button size="sm" variant="secondary">
          Small
        </Button>
        <Button variant="secondary">Default</Button>
        <Button size="lg" variant="secondary">
          Large
        </Button>
        <Button size="sm">Upgrade</Button>
      </Example>

      <Example title="Icon">
        <Button size="icon-xs" variant="secondary" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon-sm" variant="secondary" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon" variant="secondary" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon-lg" variant="secondary" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon" variant="ghost" aria-label="Voice input">
          <MicIcon />
        </Button>
        <Button size="icon" className="rounded-full" aria-label="Send">
          <ArrowUpIcon />
        </Button>
      </Example>

      <Example title="States">
        <Button disabled>Disabled</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button variant="secondary" disabled>
          <LoaderCircleIcon data-icon="inline-start" className="animate-spin" />
          Saving
        </Button>
        <Button variant="secondary" aria-invalid>
          Invalid
        </Button>
        <Button variant="secondary" disabled focusableWhenDisabled>
          Focusable when disabled
        </Button>
      </Example>

      <Example title="As link">
        <Button
          variant="secondary"
          nativeButton={false}
          render={<a href="https://base-ui.com/react/components/button" />}
        >
          Base UI docs
          <ExternalLinkIcon data-icon="inline-end" />
        </Button>
        <Button
          variant="link"
          nativeButton={false}
          render={<a href="#button" />}
        >
          Back to top
        </Button>
      </Example>
    </>
  )
}
