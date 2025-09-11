"use client";

import { Advanced_Form } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, useFormData } from "./form-data";
import { useTranslations } from "next-intl";
import type { Dispatch, SetStateAction } from "react";

interface VerifyOtp_Form_Props {
  setStep: Dispatch<SetStateAction<"forgot" | "otp" | "change">>;
}

export default function VerifyOtp_Form({ setStep }: VerifyOtp_Form_Props) {
  const t = useTranslations("form.actions");
  const { formSchema, fields, defaultValues } = useFormData();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: FormSchema) {
    console.log(values);
    setStep("change");
  }

  return <Advanced_Form form={form} fields={fields} submitPhrase={t("verifyCode")} onSubmit={onSubmit} />;
}
