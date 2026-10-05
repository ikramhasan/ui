"use client"

import * as React from "react"
import { cn } from "cn"
import {
  CheckIcon,
  ChevronRightIcon,
  FileIcon,
  FolderIcon,
  FullscreenIcon,
  MonitorIcon,
  RotateCwIcon,
  SmartphoneIcon,
  TabletIcon,
  TerminalIcon,
} from "lucide-react"
import type { PanelImperativeHandle } from "react-resizable-panels"

import type { BlockFile, FileTree } from "@/lib/blocks"
import { CopyButton, useCopy } from "@/components/copy-button"
import { Button } from "@/registry/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/ui/collapsible"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/ui/resizable"
import { Separator } from "@/registry/ui/separator"
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/registry/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip"

type View = "preview" | "code"

type Block = {
  name: string
  description: string
  height: string
  // The full `shadcn add` URL for this deployment.
  url: string
}

const viewports = [
  { value: "100", label: "Desktop", icon: MonitorIcon },
  { value: "60", label: "Tablet", icon: TabletIcon },
  { value: "30", label: "Mobile", icon: SmartphoneIcon },
]

const BlockViewerContext = React.createContext<{
  block: Block
  files: BlockFile[]
  tree: FileTree[]
  view: View
  setView: (view: View) => void
  activeFile: string | null
  setActiveFile: (file: string) => void
  viewport: string
  setViewport: (value: string) => void
  panelRef: React.RefObject<PanelImperativeHandle | null>
  iframeKey: number
  refresh: () => void
} | null>(null)

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext)
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewer.")
  }
  return context
}

// shadcn's block viewer: a toolbar, the block in a resizable iframe on a
// dotted field, and the files it installs.
export function BlockViewer({
  block,
  files,
  tree,
}: {
  block: Block
  files: BlockFile[]
  tree: FileTree[]
}) {
  const [view, setView] = React.useState<View>("preview")
  const [activeFile, setActiveFile] = React.useState<string | null>(
    files[0]?.target ?? null
  )
  const [viewport, setViewport] = React.useState("100")
  const [iframeKey, setIframeKey] = React.useState(0)
  const panelRef = React.useRef<PanelImperativeHandle>(null)

  return (
    <BlockViewerContext.Provider
      value={{
        block,
        files,
        tree,
        view,
        setView,
        activeFile,
        setActiveFile,
        viewport,
        setViewport,
        panelRef,
        iframeKey,
        refresh: () => setIframeKey((key) => key + 1),
      }}
    >
      <section
        id={block.name}
        aria-label={block.description}
        data-view={view}
        className="group/block-view flex min-w-0 scroll-mt-20 flex-col gap-4"
        style={{ "--height": block.height } as React.CSSProperties}
      >
        <BlockViewerToolbar />
        <BlockViewerPreview />
        <BlockViewerCode />
      </section>
    </BlockViewerContext.Provider>
  )
}

function BlockViewerToolbar() {
  const { block, view, setView, viewport, setViewport, panelRef, refresh } =
    useBlockViewer()
  const { hasCopied, copy } = useCopy()

  return (
    <div className="flex w-full items-center gap-2 lg:pr-[14px]">
      <Tabs
        value={view}
        onValueChange={(value) => setView(value as View)}
        className="hidden lg:flex"
      >
        <TabsList>
          <TabsTrigger value="preview" className="px-2.5">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="px-2.5">
            Code
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Separator
        orientation="vertical"
        className="mx-2 hidden h-4 self-center! lg:block"
      />
      <a
        href={`#${block.name}`}
        className="min-w-0 truncate text-sm font-medium underline-offset-4 hover:underline"
      >
        {block.description.replace(/\.$/, "")}
      </a>
      <span className="ml-auto shrink-0 font-mono text-xs text-muted-foreground lg:hidden">
        {block.name}
      </span>
      <div className="ml-auto hidden items-center gap-2 lg:flex">
        <ToggleGroup
          spacing={0}
          size="sm"
          aria-label="Preview width"
          value={[viewport]}
          onValueChange={(values) => {
            const value = values[0]
            if (!value) return
            setViewport(value)
            setView("preview")
            panelRef.current?.resize(`${value}%`)
          }}
        >
          {viewports.map(({ value, label, icon: Icon }) => (
            <Tooltip key={value}>
              <TooltipTrigger
                render={<ToggleGroupItem value={value} aria-label={label} />}
              >
                <Icon />
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </ToggleGroup>
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                nativeButton={false}
                render={
                  <a
                    href={`/view/${block.name}`}
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              />
            }
          >
            <FullscreenIcon />
            <span className="sr-only">Open in new tab</span>
          </TooltipTrigger>
          <TooltipContent>Open in new tab</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger
            render={<Button variant="ghost" size="icon-sm" onClick={refresh} />}
          >
            <RotateCwIcon />
            <span className="sr-only">Refresh preview</span>
          </TooltipTrigger>
          <TooltipContent>Refresh preview</TooltipContent>
        </Tooltip>
        <Separator orientation="vertical" className="mx-1 h-4 self-center!" />
        <Button
          variant="outline"
          size="sm"
          onClick={() => copy(`npx shadcn@latest add ${block.url}`)}
        >
          {hasCopied ? <CheckIcon /> : <TerminalIcon />}
          <span className="font-mono text-xs">npx shadcn add {block.name}</span>
        </Button>
      </div>
    </div>
  )
}

function BlockViewerPreview() {
  const { block, panelRef, iframeKey, setViewport } = useBlockViewer()

  return (
    <div className="relative h-[min(var(--height),80svh)] group-data-[view=code]/block-view:hidden lg:h-(--height)">
      {/* The dotted field the frame is dragged over. */}
      <div
        aria-hidden
        className="absolute inset-0 right-[14px] rounded-xl bg-[radial-gradient(color-mix(in_oklch,var(--border),var(--foreground)_10%)_1px,transparent_1px)] bg-size-[20px_20px] max-lg:hidden"
      />
      <ResizablePanelGroup orientation="horizontal" className="relative">
        <ResizablePanel
          panelRef={panelRef}
          defaultSize="100%"
          minSize="30%"
          onResize={(size) => {
            // A drag no longer matches a preset.
            const match = viewports.find(
              (item) => Math.abs(Number(item.value) - size.asPercentage) < 0.5
            )
            setViewport(match?.value ?? "")
          }}
          className="overflow-hidden rounded-xl border bg-background shadow-xs dark:shadow-[0_1px_2px_rgb(0_0_0/0.4)]"
        >
          <iframe
            key={iframeKey}
            src={`/view/${block.name}`}
            title={block.description}
            loading="lazy"
            className="size-full bg-background"
          />
        </ResizablePanel>
        <ResizableHandle
          withHandle
          aria-label="Resize preview"
          className="w-[14px] bg-transparent shadow-none max-lg:hidden data-[separator=active]:bg-transparent data-[separator=hover]:bg-transparent dark:bg-transparent dark:shadow-none dark:data-[separator=active]:bg-transparent dark:data-[separator=hover]:bg-transparent"
        />
        <ResizablePanel defaultSize="0%" minSize="0%" />
      </ResizablePanelGroup>
    </div>
  )
}

function BlockViewerCode() {
  const { files, activeFile } = useBlockViewer()
  const file = files.find((item) => item.target === activeFile)

  if (!file) {
    return null
  }

  return (
    <div className="mr-[14px] flex h-(--height) overflow-hidden rounded-xl border bg-(--code) group-data-[view=preview]/block-view:hidden">
      <div className="w-72 shrink-0 border-r">
        <BlockViewerFileTree />
      </div>
      <figure
        data-rehype-pretty-code-figure=""
        className="m-0! flex min-w-0 flex-1 flex-col rounded-none border-0"
      >
        <figcaption
          data-rehype-pretty-code-title=""
          data-language={file.language}
          className="flex h-12 shrink-0 items-center gap-2 py-0! pr-2!"
        >
          <FileIcon className="size-4 opacity-70" />
          {file.target}
          <CopyButton
            key={file.target}
            value={file.code}
            className="static ml-auto"
          />
        </figcaption>
        <div
          key={file.target}
          className="min-h-0 flex-1 overflow-y-auto [&_pre]:max-h-none!"
          dangerouslySetInnerHTML={{ __html: file.highlighted }}
        />
      </figure>
    </div>
  )
}

function BlockViewerFileTree() {
  const { tree } = useBlockViewer()

  return (
    <SidebarProvider className="min-h-full! flex-col">
      <Sidebar collapsible="none" className="w-full flex-1 bg-transparent">
        <SidebarGroupLabel className="h-12 shrink-0 rounded-none border-b px-4 text-sm">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="no-scrollbar overflow-y-auto px-2">
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {tree.map((item) => (
                <Tree key={item.name} item={item} depth={0} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  )
}

function Tree({ item, depth }: { item: FileTree; depth: number }) {
  const { activeFile, setActiveFile } = useBlockViewer()
  const style = { paddingLeft: `${0.5 + depth}rem` }

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          size="sm"
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="whitespace-nowrap"
          style={style}
        >
          <ChevronRightIcon className="invisible" />
          <FileIcon />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible defaultOpen className="group/collapsible">
        <CollapsibleTrigger
          render={
            <SidebarMenuButton
              size="sm"
              className="whitespace-nowrap"
              style={style}
            />
          }
        >
          <ChevronRightIcon
            className={cn(
              "transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-data-open/collapsible:rotate-90 motion-reduce:transition-none"
            )}
          />
          <FolderIcon />
          {item.name}
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="mx-0 gap-0.5 border-none px-0 pt-0.5">
            {item.children.map((child) => (
              <Tree key={child.name} item={child} depth={depth + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}
