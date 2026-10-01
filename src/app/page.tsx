import { ButtonDemo } from "./_demos/button-demo"
import { InputDemo } from "./_demos/input-demo"
import { LabelDemo } from "./_demos/label-demo"
import { SeparatorDemo } from "./_demos/separator-demo"
import { TextareaDemo } from "./_demos/textarea-demo"
import { ComponentSection } from "./_components/showcase"
import { ThemeToggle } from "./_components/theme-toggle"

const components = [
  {
    name: "button",
    title: "Button",
    description: "Displays a button or a component that looks like a button.",
    demo: <ButtonDemo />,
  },
  {
    name: "input",
    title: "Input",
    description:
      "Displays a form input field or a component that looks like an input field.",
    demo: <InputDemo />,
  },
  {
    name: "label",
    title: "Label",
    description: "Renders an accessible label associated with controls.",
    demo: <LabelDemo />,
  },
  {
    name: "separator",
    title: "Separator",
    description: "Visually or semantically separates content.",
    demo: <SeparatorDemo />,
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
