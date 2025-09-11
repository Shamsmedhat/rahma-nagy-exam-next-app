import { z } from "zod";
import { useSignIn } from "@/store";
import { useTranslations } from "next-intl";
import type { Field } from "@/types";

export type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

const defaultValues: FormSchema = {
  email: "",
  password: "",
};

export function useFormData() {
  const t = useTranslations("form.labels");
  const { mutate } = useSignIn();

  const fields: Field<FormSchema>[] = [
    { id: "email", type: "text", label: t("email") },
    { id: "password", type: "password", label: t("password"), forgottable: true },
  ];

  return { formSchema, fields, defaultValues, submit: mutate };
}
