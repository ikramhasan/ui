import { AlertDemo } from "./_demos/alert-demo"
import { AlertDialogDemo } from "./_demos/alert-dialog-demo"
import { BadgeDemo } from "./_demos/badge-demo"
import { ButtonDemo } from "./_demos/button-demo"
import { ButtonGroupDemo } from "./_demos/button-group-demo"
import { CardDemo } from "./_demos/card-demo"
import { CheckboxDemo } from "./_demos/checkbox-demo"
import { ContextMenuDemo } from "./_demos/context-menu-demo"
import { DialogDemo } from "./_demos/dialog-demo"
import { DropdownMenuDemo } from "./_demos/dropdown-menu-demo"
import { FieldDemo } from "./_demos/field-demo"
import { HoverCardDemo } from "./_demos/hover-card-demo"
import { InputDemo } from "./_demos/input-demo"
import { InputGroupDemo } from "./_demos/input-group-demo"
import { ItemDemo } from "./_demos/item-demo"
import { KbdDemo } from "./_demos/kbd-demo"
import { LabelDemo } from "./_demos/label-demo"
import { MenubarDemo } from "./_demos/menubar-demo"
import { PopoverDemo } from "./_demos/popover-demo"
import { ProgressDemo } from "./_demos/progress-demo"
import { RadioGroupDemo } from "./_demos/radio-group-demo"
import { SelectDemo } from "./_demos/select-demo"
import { SeparatorDemo } from "./_demos/separator-demo"
import { SliderDemo } from "./_demos/slider-demo"
import { SwitchDemo } from "./_demos/switch-demo"
import { TabsDemo } from "./_demos/tabs-demo"
import { TextareaDemo } from "./_demos/textarea-demo"
import { ToggleDemo } from "./_demos/toggle-demo"
import { ToggleGroupDemo } from "./_demos/toggle-group-demo"
import { TooltipDemo } from "./_demos/tooltip-demo"
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
    name: "button-group",
    title: "Button Group",
    description:
      "A container that groups related buttons together with consistent styling.",
    demo: <ButtonGroupDemo />,
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
    name: "context-menu",
    title: "Context Menu",
    description:
      "Displays a menu to the user, such as a set of actions or functions, triggered by a right click.",
    demo: <ContextMenuDemo />,
  },
  {
    name: "dialog",
    title: "Dialog",
    description:
      "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.",
    demo: <DialogDemo />,
  },
  {
    name: "dropdown-menu",
    title: "Dropdown Menu",
    description:
      "Displays a menu to the user, such as a set of actions or functions, triggered by a button.",
    demo: <DropdownMenuDemo />,
  },
  {
    name: "field",
    title: "Field",
    description:
      "Combine labels, controls, and help text to compose accessible form fields and grouped inputs.",
    demo: <FieldDemo />,
  },
  {
    name: "hover-card",
    title: "Hover Card",
    description:
      "For sighted users to preview content available behind a link.",
    demo: <HoverCardDemo />,
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
    name: "menubar",
    title: "Menubar",
    description:
      "A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.",
    demo: <MenubarDemo />,
  },
  {
    name: "popover",
    title: "Popover",
    description: "Displays rich content in a portal, triggered by a button.",
    demo: <PopoverDemo />,
  },
  {
    name: "progress",
    title: "Progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    demo: <ProgressDemo />,
  },
  {
    name: "radio-group",
    title: "Radio Group",
    description:
      "A set of checkable buttons where no more than one can be checked at a time.",
    demo: <RadioGroupDemo />,
  },
  {
    name: "select",
    title: "Select",
    description:
      "Displays a list of options for the user to pick from, triggered by a button.",
    demo: <SelectDemo />,
  },
  {
    name: "separator",
    title: "Separator",
    description: "Visually or semantically separates content.",
    demo: <SeparatorDemo />,
  },
  {
    name: "slider",
    title: "Slider",
    description:
      "An input where the user selects a value from within a given range.",
    demo: <SliderDemo />,
  },
  {
    name: "switch",
    title: "Switch",
    description:
      "A control that allows the user to toggle between checked and not checked.",
    demo: <SwitchDemo />,
  },
  {
    name: "tabs",
    title: "Tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    demo: <TabsDemo />,
  },
  {
    name: "textarea",
    title: "Textarea",
    description:
      "Displays a form textarea or a component that looks like a textarea.",
    demo: <TextareaDemo />,
  },
  {
    name: "toggle",
    title: "Toggle",
    description: "A two-state button that can be either on or off.",
    demo: <ToggleDemo />,
  },
  {
    name: "toggle-group",
    title: "Toggle Group",
    description: "A set of two-state buttons that can be toggled on or off.",
    demo: <ToggleGroupDemo />,
  },
  {
    name: "tooltip",
    title: "Tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    demo: <TooltipDemo />,
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
