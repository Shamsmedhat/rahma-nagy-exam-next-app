"use client";

import { Advanced_Form } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpFormSchema, useSignUpFormData } from "./form-data";

export default function SignUp_Form() {
  const { signUpFormSchema, fields, defaultValues, submit } = useSignUpFormData();

  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
  });

  function onSubmit(values: SignUpFormSchema) {
    submit(values);
  }

  return <Advanced_Form form={form} fields={fields} submitPhrase="signup" onSubmit={onSubmit} />;
}
