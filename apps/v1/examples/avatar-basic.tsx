import { Avatar, AvatarFallback, AvatarImage } from "@/registry/ui/avatar"

export function AvatarBasic() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="grayscale"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
