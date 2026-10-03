import { ScrollArea, ScrollBar } from "@/registry/ui/scroll-area"

const swatches = [
  { name: "Dawn", from: "oklch(0.86 0.09 60)", to: "oklch(0.7 0.15 20)" },
  { name: "Lagoon", from: "oklch(0.88 0.08 190)", to: "oklch(0.6 0.12 230)" },
  { name: "Moss", from: "oklch(0.88 0.1 130)", to: "oklch(0.55 0.11 150)" },
  { name: "Dusk", from: "oklch(0.8 0.1 300)", to: "oklch(0.45 0.15 275)" },
  { name: "Ember", from: "oklch(0.9 0.12 90)", to: "oklch(0.62 0.19 40)" },
  { name: "Slate", from: "oklch(0.9 0.01 250)", to: "oklch(0.5 0.03 250)" },
]

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 rounded-lg border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {swatches.map((swatch) => (
          <figure key={swatch.name} className="shrink-0">
            <div
              className="aspect-[3/4] w-32 rounded-md outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
              style={{
                backgroundImage: `linear-gradient(to bottom, ${swatch.from}, ${swatch.to})`,
              }}
            />
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Gradient{" "}
              <span className="font-medium text-foreground">{swatch.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
