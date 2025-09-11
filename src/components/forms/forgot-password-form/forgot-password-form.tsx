"use client";

import { Advanced_Form } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ForgotPasswordFormSchema, useSignUpFormData } from "./form-data";
import { useTranslations } from "next-intl";
import type { Dispatch, SetStateAction } from "react";

interface ForgotPassword_From_Props {
  setStep: Dispatch<SetStateAction<"forgot" | "otp" | "change">>;
}

export default function ForgotPassword_From({ setStep }: ForgotPassword_From_Props) {
  const t = useTranslations("form.actions");
  const { ForgotPasswordFormSchema, fields, defaultValues } = useSignUpFormData();

  const form = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(ForgotPasswordFormSchema),
    defaultValues,
  });

  function onSubmit(values: ForgotPasswordFormSchema) {
    console.log(values);
    setStep("otp");
  }

  return <Advanced_Form form={form} fields={fields} submitPhrase="continue" onSubmit={onSubmit} />;
}
