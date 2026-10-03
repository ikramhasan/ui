import {
  Item,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item"

export function ItemSizes() {
  return (
    <ItemGroup className="max-w-md">
      {(["default", "sm", "xs"] as const).map((size) => (
        <Item key={size} size={size} variant="outline">
          <ItemMedia variant="image">
            <Tile letter={size[0].toUpperCase()} className="bg-[#333333]" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Size {size}</ItemTitle>
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  )
}

// Partner apps show their own logo in a tile. These stand in for logos.
function Tile({ letter, className }: { letter: string; className: string }) {
  return (
    <div
      className={`flex size-full items-center justify-center text-sm font-semibold text-white ${className}`}
    >
      {letter}
    </div>
  )
}
