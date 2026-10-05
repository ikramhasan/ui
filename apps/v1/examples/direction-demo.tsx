"use client"

import { Button } from "@/registry/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import { DirectionProvider } from "@/registry/ui/direction"
import { Field, FieldLabel, FieldTitle } from "@/registry/ui/field"
import { Input } from "@/registry/ui/input"
import { Slider } from "@/registry/ui/slider"

export function DirectionDemo() {
  return (
    <DirectionProvider direction="rtl">
      <Card dir="rtl" lang="ar" className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>تسجيل الدخول إلى حسابك</CardTitle>
          <CardDescription>
            أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <Field>
            <FieldLabel htmlFor="direction-email">البريد الإلكتروني</FieldLabel>
            <Input
              id="direction-email"
              type="email"
              placeholder="m@example.com"
              dir="ltr"
              className="text-right"
            />
          </Field>
          <Field>
            <FieldTitle>مستوى الصوت</FieldTitle>
            <Slider defaultValue={[40]} aria-label="مستوى الصوت" />
          </Field>
        </CardContent>
        <CardFooter>
          <Button className="w-full">تسجيل الدخول</Button>
        </CardFooter>
      </Card>
    </DirectionProvider>
  )
}
