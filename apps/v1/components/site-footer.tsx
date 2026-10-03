import { siteConfig } from "@/lib/config"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container-wrapper">
        <div className="flex h-(--footer-height) items-center text-sm text-muted-foreground">
          <p>
            Built on{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              shadcn/ui
            </a>{" "}
            and{" "}
            <a
              href="https://base-ui.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Base UI
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
