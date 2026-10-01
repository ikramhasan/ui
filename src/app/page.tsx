export default function Home() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col gap-4 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">UI Registry</h1>
      <p className="text-muted-foreground">
        A custom component registry for the shadcn CLI. Install items with:
      </p>
      <pre className="rounded-md bg-muted px-4 py-3 font-mono text-sm">
        npx shadcn@latest add http://localhost:3000/r/&lt;item&gt;.json
      </pre>
    </main>
  )
}
