import { cn } from "cn"
import { InfoIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/registry/ui/alert"

export function Callout({
  title,
  children,
  icon,
  className,
  variant = "default",
}: {
  title?: React.ReactNode
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
  variant?: "default" | "destructive"
}) {
  return (
    <Alert
      variant={variant}
      className={cn(
        "mt-6 bg-muted/50 *:data-[slot=alert-description]:text-muted-foreground [&_code]:text-foreground",
        className
      )}
    >
      {icon ?? <InfoIcon />}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="[&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </AlertDescription>
    </Alert>
  )
}
