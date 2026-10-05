import { AspectRatio } from "@/registry/ui/aspect-ratio"

export function AspectRatioSquare() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-full max-w-48 overflow-hidden rounded-xl bg-muted outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
    >
      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80"
        alt="An office with plants and desks"
        className="absolute inset-0 size-full object-cover"
      />
    </AspectRatio>
  )
}
