"use client";

import { Advanced_Input } from "@/components/inputs";
import { Button, Form } from "@/components/ui";
import type { Field } from "@/types";
import { useTranslations } from "next-intl";
import type { FieldValues, UseFormReturn } from "react-hook-form";

interface Advanced_Form_Props<FormSchema extends FieldValues> {
  form: UseFormReturn<FormSchema>;
  fields: Field<FormSchema>[];
  submitPhrase?: "continue" | "signin" | "signup" | "forgotPassword" | "verifyCode";
  onSubmit?: (values: FormSchema) => void;
}

export default function Advanced_Form<FormSchema extends FieldValues>({ form, fields, submitPhrase, onSubmit }: Advanced_Form_Props<FormSchema>) {
  const t = useTranslations("form.actions");

  return (
    <Form {...form}>
      <form onSubmit={onSubmit && form.handleSubmit(onSubmit)} className="space-y-5">
        {fields.map((field) => (
          <Advanced_Input key={field.id} control={form.control} fieldProps={field} />
        ))}
        <Button type="submit" className="w-full">
          {submitPhrase ? t(submitPhrase) : t("submit")}
        </Button>
      </form>
    </Form>
  );
}
