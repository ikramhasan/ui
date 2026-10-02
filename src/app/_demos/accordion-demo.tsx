import { Example } from "@/app/_components/showcase"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion"

const faqs = [
  {
    value: "shipping",
    question: "What are your shipping options?",
    answer:
      "We offer standard (5–7 days), express (2–3 days) and overnight shipping. Free shipping on orders over $50.",
  },
  {
    value: "returns",
    question: "What is your return policy?",
    answer:
      "Returns are accepted within 30 days of delivery. Items must be unused and in their original packaging.",
  },
  {
    value: "support",
    question: "How can I contact customer support?",
    answer:
      "Reach us by email, live chat or phone. Most messages get a reply within a few hours.",
  },
]

export function AccordionDemo() {
  return (
    <>
      <Example title="Single">
        <Accordion defaultValue={["shipping"]} className="max-w-md">
          {faqs.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Example>

      <Example title="Multiple and disabled">
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
      </Example>
    </>
  )
}
