import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/ui/card"

const FAQS = [
  {
    value: "install",
    question: "How do I install a component?",
    answer:
      "Add the style once, then run shadcn add with the component's URL. The file lands in components/ui, ready to edit.",
  },
  {
    value: "themes",
    question: "Does it work with my theme?",
    answer:
      "Yes. Components only read shadcn's variables, so any shadcn theme recolors them.",
  },
  {
    value: "radix",
    question: "Why Base UI?",
    answer:
      "It is what shadcn's base-nova style is built on, so the props and parts match.",
  },
]

export function Faq() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["install"]}>
          {FAQS.map((faq) => (
            <AccordionItem key={faq.value} value={faq.value}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
