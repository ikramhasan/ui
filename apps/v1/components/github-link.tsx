import { siteConfig } from "@/lib/config"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/registry/ui/button"

export function GitHubLink() {
  return (
    <a
      href={siteConfig.links.github}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
    >
      <Icons.gitHub />
    </a>
  )
}
