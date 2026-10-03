import { AccountSecurity } from "./account-security"
import { Activity } from "./activity"
import { AssistantChat } from "./assistant-chat"
import { ChoosePlan } from "./choose-plan"
import { Faq } from "./faq"
import { InviteTeam } from "./invite-team"
import { NewCampaign } from "./new-campaign"
import { NotificationSettings } from "./notification-settings"
import { ProductFiles } from "./product-files"
import { ScheduleSync } from "./schedule-sync"
import { StoreConnection } from "./store-connection"
import { UIElements } from "./ui-elements"

// A masonry of real compositions, like shadcn's home page. Columns appear as
// the viewport grows; on phones only the first one shows.
export function CardsDemo() {
  return (
    <div className="relative overflow-hidden bg-muted px-4 pt-6 [--gap:--spacing(6)] sm:px-6 lg:pt-8 xl:[--gap:--spacing(8)] dark:bg-sidebar">
      <div className="relative z-10 mx-auto grid max-w-md gap-(--gap) md:max-w-3xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:max-w-[1400px] xl:grid-cols-4">
        <div className="flex flex-col gap-(--gap)">
          <UIElements />
          <StoreConnection />
          <NotificationSettings />
        </div>
        <div className="hidden flex-col gap-(--gap) md:flex">
          <AssistantChat />
          <InviteTeam />
          <ChoosePlan />
        </div>
        <div className="hidden flex-col gap-(--gap) lg:flex">
          <NewCampaign />
          <Activity />
          <ProductFiles />
        </div>
        <div className="hidden flex-col gap-(--gap) xl:flex">
          <ScheduleSync />
          <AccountSecurity />
          <Faq />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-48 bg-linear-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-48 bg-linear-to-t from-background via-background/80 to-transparent lg:h-64" />
    </div>
  )
}
