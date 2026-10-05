"use client"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import { Field, FieldLabel } from "@/registry/ui/field"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/registry/ui/input-otp"

export function InputOTPPattern() {
  return (
    <Field className="w-fit">
      <FieldLabel htmlFor="otp-alphanumeric">Recovery code</FieldLabel>
      <InputOTP
        id="otp-alphanumeric"
        maxLength={6}
        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
