import { InstallCommand } from "./install-command"

export function ComponentSection({
  name,
  title,
  description,
  children,
}: {
  name: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <section id={name} className="flex scroll-mt-20 flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl leading-7 font-medium text-balance">{title}</h2>
        <p className="text-pretty text-muted-foreground">{description}</p>
      </div>
      <InstallCommand name={name} />
      {children && <div className="flex flex-col gap-3">{children}</div>}
    </section>
  )
}

export function Example({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      <div className="border-b px-4 py-2.5 text-[13px] leading-4 font-medium text-muted-foreground">
        {title}
      </div>
      <div className="flex flex-wrap items-center gap-2 p-6">{children}</div>
    </div>
  )
}
