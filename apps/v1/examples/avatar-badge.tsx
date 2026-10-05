import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/ui/avatar"

export function AvatarBadgeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://github.com/jorgezreik.png"
          alt="@jorgezreik"
        />
        <AvatarFallback>JZ</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <Avatar>
        <AvatarFallback>JZ</AvatarFallback>
        <AvatarBadge className="bg-success" />
      </Avatar>
    </div>
  )
}
