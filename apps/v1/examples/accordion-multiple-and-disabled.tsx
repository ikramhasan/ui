import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion"

export function AccordionMultipleAndDisabled() {
  return (
    <Accordion multiple className="max-w-md">
      <AccordionItem value="notifications">
        <AccordionTrigger>Notification settings</AccordionTrigger>
        <AccordionContent>
          <p>Choose which events send you an email.</p>
          <p>
            Manage them in <a href="#accordion">Settings</a>.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>Privacy and security</AccordionTrigger>
        <AccordionContent>
          Two-factor authentication and session history.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing" disabled>
        <AccordionTrigger>Billing (owners only)</AccordionTrigger>
        <AccordionContent>Invoices and payment methods.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
