"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/registry/ui/button"
import { Checkbox } from "@/registry/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/registry/ui/field"
import { RadioGroup, RadioGroupItem } from "@/registry/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ui/select"
import { Switch } from "@/registry/ui/switch"

const languages = [
  { label: "Select a language", value: null },
  { label: "English", value: "en" },
  { label: "Bangla", value: "bn" },
  { label: "German", value: "de" },
  { label: "Japanese", value: "ja" },
]

const plans = [
  { id: "starter", title: "Starter", description: "For a single store." },
  { id: "pro", title: "Pro", description: "For teams with several stores." },
]

const formSchema = z.object({
  language: z.string({ error: "Select your language." }),
  plan: z.string({ error: "Choose a plan." }),
  marketing: z.boolean(),
  terms: z.boolean().refine((value) => value, {
    error: "Accept the terms to continue.",
  }),
})

type FormValues = z.input<typeof formSchema>

export function FormControls() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: undefined,
      plan: undefined,
      marketing: false,
      terms: false,
    },
  })

  function onSubmit(data: FormValues) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-1 overflow-x-auto font-mono text-xs">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex w-full max-w-sm flex-col gap-6"
    >
      <FieldGroup>
        <Controller
          name="language"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-controls-language">Language</FieldLabel>
              <Select
                items={languages}
                name={field.name}
                value={field.value ?? null}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="form-controls-language"
                  aria-invalid={fieldState.invalid}
                  className="w-full"
                  onBlur={field.onBlur}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {languages.slice(1).map((language) => (
                      <SelectItem key={language.value} value={language.value}>
                        {language.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="plan"
          control={form.control}
          render={({ field, fieldState }) => (
            <FieldSet data-invalid={fieldState.invalid}>
              <FieldLegend variant="label">Plan</FieldLegend>
              <RadioGroup
                name={field.name}
                value={field.value ?? ""}
                onValueChange={field.onChange}
                aria-invalid={fieldState.invalid}
              >
                {plans.map((plan) => (
                  <FieldLabel
                    key={plan.id}
                    htmlFor={`form-controls-${plan.id}`}
                  >
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>{plan.title}</FieldTitle>
                        <FieldDescription>{plan.description}</FieldDescription>
                      </FieldContent>
                      <RadioGroupItem
                        value={plan.id}
                        id={`form-controls-${plan.id}`}
                        aria-invalid={fieldState.invalid}
                      />
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldSet>
          )}
        />
        <Controller
          name="marketing"
          control={form.control}
          render={({ field }) => (
            <Field orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor="form-controls-marketing">
                  Product updates
                </FieldLabel>
                <FieldDescription>One email a month, at most.</FieldDescription>
              </FieldContent>
              <Switch
                id="form-controls-marketing"
                name={field.name}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </Field>
          )}
        />
        <Controller
          name="terms"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field orientation="horizontal" data-invalid={fieldState.invalid}>
              <Checkbox
                id="form-controls-terms"
                name={field.name}
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-invalid={fieldState.invalid}
              />
              <FieldContent>
                <FieldLabel htmlFor="form-controls-terms">
                  Accept the terms of service
                </FieldLabel>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
            </Field>
          )}
        />
      </FieldGroup>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="secondary" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}
