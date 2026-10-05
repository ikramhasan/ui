import { CheckIcon, PlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/ui/avatar"

export function AvatarBadgeIcon() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="lg">
        <AvatarImage
          src="https://github.com/pranathip.png"
          alt="@pranathip"
        />
        <AvatarFallback>PP</AvatarFallback>
        <AvatarBadge>
          <PlusIcon />
        </AvatarBadge>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>PP</AvatarFallback>
        <AvatarBadge className="bg-success">
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
    </div>
  )
}
