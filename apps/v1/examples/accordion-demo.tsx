import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["shipping"]} className="max-w-md">
      {faqs.map((faq) => (
        <AccordionItem key={faq.value} value={faq.value}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

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
