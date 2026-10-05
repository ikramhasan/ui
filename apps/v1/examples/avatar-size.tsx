import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/registry/ui/avatar"

const sizes = ["sm", "default", "lg"] as const

export function AvatarSize() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        {sizes.map((size) => (
          <Avatar key={size} size={size}>
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="@shadcn"
              className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {sizes.map((size) => (
          <Avatar key={size} size={size}>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ))}
      </div>
      <div className="flex items-center gap-4">
        {sizes.map((size) => (
          <AvatarGroup key={size}>
            <Avatar size={size}>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size={size}>
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
        ))}
      </div>
    </div>
  )
}
