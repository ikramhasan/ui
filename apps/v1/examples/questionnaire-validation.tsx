"use client"

import * as React from "react"
import { toast } from "sonner"

import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/ui/card"
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireError,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/registry/ui/questionnaire"

const items = [
  { name: "detail", required: true },
  { name: "audience", required: true },
] as const

type QuestionnaireItemName = "detail" | "audience"
type QuestionnaireErrors = Partial<Record<QuestionnaireItemName, string>>

// Swap this for a schema library such as Zod; it only has to return the
// first message for each invalid item, in item order.
function validate(answers: Record<string, FormDataEntryValue>) {
  const errors: QuestionnaireErrors = {}

  if (answers.detail !== "summary" && answers.detail !== "complete") {
    errors.detail = "Choose the response depth."
  }

  if (answers.audience !== "team" && answers.audience !== "public") {
    errors.audience = "Choose who will read the answer."
  }

  if (answers.audience === "public" && answers.detail === "summary") {
    errors.detail =
      "Public answers need enough context. Choose a complete answer."
  }

  return errors
}

function ValidationProgress() {
  return (
    <QuestionnaireProgress
      className="min-w-0"
      render={(props, state) => (
        <div {...props}>
          {state.current} / {state.total}
        </div>
      )}
    />
  )
}

export function QuestionnaireValidation() {
  const [item, setItem] = React.useState("detail")
  const [errors, setErrors] = React.useState<QuestionnaireErrors>({})

  function clearError(name: QuestionnaireItemName) {
    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[name]
      return nextErrors
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const answers = Object.fromEntries(new FormData(event.currentTarget))
    const nextErrors = validate(answers)
    const firstInvalidItem = items.find((item) => nextErrors[item.name])

    setErrors(nextErrors)

    if (firstInvalidItem) {
      setItem(firstInvalidItem.name)
      return
    }

    toast("Agent response configured", {
      description: `Detail: ${answers.detail} · Audience: ${answers.audience}`,
    })
  }

  return (
    <Questionnaire
      className="mx-auto max-w-md"
      item={item}
      items={items}
      onItemChange={setItem}
      onSubmit={handleSubmit}
    >
      <Card className="w-full">
        <QuestionnaireItem
          invalid={Boolean(errors.detail)}
          name="detail"
          required
        >
          <CardHeader>
            <QuestionnaireTitle>
              How much detail should the answer include?
            </QuestionnaireTitle>
            <QuestionnaireDescription>
              Choose the response depth.
            </QuestionnaireDescription>
            <CardAction>
              <ValidationProgress />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice
                value="summary"
                onChange={() => clearError("detail")}
              >
                Concise summary
              </QuestionnaireChoice>
              <QuestionnaireChoice
                value="complete"
                onChange={() => clearError("detail")}
              >
                Complete answer
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>{errors.detail}</QuestionnaireError>
          </CardContent>
        </QuestionnaireItem>

        <QuestionnaireItem
          invalid={Boolean(errors.audience)}
          name="audience"
          required
        >
          <CardHeader>
            <QuestionnaireTitle>Who will read the answer?</QuestionnaireTitle>
            <QuestionnaireDescription>
              Public answers require complete context.
            </QuestionnaireDescription>
            <CardAction>
              <ValidationProgress />
            </CardAction>
          </CardHeader>
          <CardContent>
            <QuestionnaireChoices>
              <QuestionnaireChoice
                value="team"
                onChange={() => clearError("audience")}
              >
                My team
              </QuestionnaireChoice>
              <QuestionnaireChoice
                value="public"
                onChange={() => clearError("audience")}
              >
                Public audience
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError>{errors.audience}</QuestionnaireError>
          </CardContent>
        </QuestionnaireItem>

        <CardFooter>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireNext>Next</QuestionnaireNext>
            <QuestionnaireSubmit>Validate answers</QuestionnaireSubmit>
          </QuestionnaireActions>
        </CardFooter>
      </Card>
    </Questionnaire>
  )
}
