import { z } from "zod";
import { useTranslations } from "next-intl";
import type { Field } from "@/types";

export type ForgotPasswordFormSchema = z.infer<typeof ForgotPasswordFormSchema>;

const ForgotPasswordFormSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

const defaultValues: ForgotPasswordFormSchema = {
  email: "",
};

export function useSignUpFormData() {
  const t = useTranslations("form.labels");

  const fields: Field<ForgotPasswordFormSchema>[] = [{ id: "email", type: "email", label: t("email") }];

  return { ForgotPasswordFormSchema, fields, defaultValues };
}
