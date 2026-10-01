import { AlertDemo } from "./_demos/alert-demo"
import { AlertDialogDemo } from "./_demos/alert-dialog-demo"
import { BadgeDemo } from "./_demos/badge-demo"
import { ButtonDemo } from "./_demos/button-demo"
import { CardDemo } from "./_demos/card-demo"
import { CheckboxDemo } from "./_demos/checkbox-demo"
import { DialogDemo } from "./_demos/dialog-demo"
import { FieldDemo } from "./_demos/field-demo"
import { InputDemo } from "./_demos/input-demo"
import { InputGroupDemo } from "./_demos/input-group-demo"
import { ItemDemo } from "./_demos/item-demo"
import { KbdDemo } from "./_demos/kbd-demo"
import { LabelDemo } from "./_demos/label-demo"
import { PopoverDemo } from "./_demos/popover-demo"
import { RadioGroupDemo } from "./_demos/radio-group-demo"
import { SeparatorDemo } from "./_demos/separator-demo"
import { SwitchDemo } from "./_demos/switch-demo"
import { TextareaDemo } from "./_demos/textarea-demo"
import { ComponentSection } from "./_components/showcase"
import { ThemeToggle } from "./_components/theme-toggle"

const components = [
  {
    name: "alert",
    title: "Alert",
    description: "Displays a callout for user attention.",
    demo: <AlertDemo />,
  },
  {
    name: "alert-dialog",
    title: "Alert Dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    demo: <AlertDialogDemo />,
  },
  {
    name: "badge",
    title: "Badge",
    description: "Displays a badge or a component that looks like a badge.",
    demo: <BadgeDemo />,
  },
  {
    name: "button",
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    demo: <ButtonDemo />,
  },
  {
    name: "card",
    title: "Card",
    description: "Displays a card with header, content, and footer.",
    demo: <CardDemo />,
  },
  {
    name: "checkbox",
    title: "Checkbox",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    demo: <CheckboxDemo />,
  },
  {
    name: "dialog",
    title: "Dialog",
    description:
      "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    demo: <DialogDemo />,
  },
  {
    name: "field",
    title: "Field",
    description:
      "Combine labels, controls, and help text to compose accessible form fields and grouped inputs.",
    demo: <FieldDemo />,
  },
  {
    name: "input",
    title: "Input",
    description:
      "Displays a form input field or a component that looks like an input field.",
    demo: <InputDemo />,
  },
  {
    name: "input-group",
    title: "Input Group",
    description: "Add addons, buttons, and helper content to inputs.",
    demo: <InputGroupDemo />,
  },
  {
    name: "item",
    title: "Item",
    description:
      "A versatile component that you can use to display any content.",
    demo: <ItemDemo />,
  },
  {
    name: "kbd",
    title: "Kbd",
    description: "Used to display textual user input from keyboard.",
    demo: <KbdDemo />,
  },
  {
    name: "label",
    title: "Label",
    description: "Renders an accessible label associated with controls.",
    demo: <LabelDemo />,
  },
  {
    name: "popover",
    title: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    demo: <PopoverDemo />,
  },
  {
    name: "radio-group",
    title: "Radio Group",
    description:
      "A set of checkable buttons where no more than one can be checked at a time.",
    demo: <RadioGroupDemo />,
  },
  {
    name: "separator",
    title: "Separator",
    description: "Visually or semantically separates content.",
    demo: <SeparatorDemo />,
  },
  {
    name: "switch",
    title: "Switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    demo: <SwitchDemo />,
  },
  {
    name: "textarea",
    title: "Textarea",
    description:
      "Displays a form textarea or a component that looks like a textarea.",
    demo: <TextareaDemo />,
  },
]

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-10 px-4 py-10 sm:px-6">
      <header className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-[28px] leading-9 font-medium text-balance">UI Registry</h1>
          <ThemeToggle />
        </div>
        <p className="text-pretty text-muted-foreground">
          shadcn components rebuilt on Base UI with our own design. Install the
          style once, then add components with the shadcn CLI.
        </p>
        <nav aria-label="Components" className="flex flex-wrap gap-1">
          {components.map((c) => (
            <a
              key={c.name}
              href={`#${c.name}`}
              className="rounded-md px-2 py-1 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </header>

      <ComponentSection
        name="style"
        title="Style"
        description="The design as a shadcn style: theme variables and the Inter font. Install it once, before any component."
      />

      {components.map((c) => (
        <ComponentSection
          key={c.name}
          name={c.name}
          title={c.title}
          description={c.description}
        >
          {c.demo}
        </ComponentSection>
      ))}
    </main>
  )
}
