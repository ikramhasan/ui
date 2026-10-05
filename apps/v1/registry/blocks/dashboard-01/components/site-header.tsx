import { Separator } from "@/registry/ui/separator"
import { SidebarTrigger } from "@/registry/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b px-3 lg:px-4">
      <div className="flex w-full items-center gap-2">
        <SidebarTrigger />
        <Separator orientation="vertical" className="my-3.5" />
        <h1 className="text-sm font-medium">Documents</h1>
      </div>
    </header>
  )
}
