import { siteConfig } from "@/lib/config"
import { ComingSoon } from "@/components/coming-soon"

export default function IndexPage() {
  return (
    <ComingSoon title={siteConfig.name} description={siteConfig.description} />
  )
}
