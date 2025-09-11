import { z } from "zod";
import { useSignUp } from "@/store";
import type { Field } from "@/types";
import { useTranslations } from "next-intl";

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;

const signUpFormSchema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    username: z.string().min(1),
    email: z.email(),
    phone: z.string().min(10),
    password: z
      .string()
      .min(8)
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Your password should contain at least a lower case letter, an upper case letter, a number, and a special character of '#?!@$%^&*-'."
      ),
    rePassword: z.string(),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords don't match",
    path: ["rePassword"],
  });

const defaultValues: SignUpFormSchema = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  rePassword: "",
};

export function useSignUpFormData() {
  const t = useTranslations("form.labels");
  const { mutate } = useSignUp();

  const fields: Field<SignUpFormSchema>[] = [
    { id: "firstName", type: "text", label: t("firstName") },
    { id: "lastName", type: "text", label: t("lastName") },
    { id: "username", type: "text", label: t("username") },
    { id: "email", type: "email", label: t("email") },
    { id: "phone", type: "tel", label: t("phone") },
    { id: "password", type: "password", label: t("password") },
    { id: "rePassword", type: "password", label: t("confirmPasswrod") },
  ];

  return { signUpFormSchema, fields, defaultValues, submit: mutate };
}
