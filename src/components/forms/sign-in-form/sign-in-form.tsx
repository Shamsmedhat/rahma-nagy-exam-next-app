"use client";

import { Advanced_Form } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, useFormData } from "./form-data";

export default function SignIn_Form() {
  const { formSchema, fields, defaultValues, submit } = useFormData();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: FormSchema) {
    submit(values);
  }

  return <Advanced_Form form={form} fields={fields} submitPhrase="signin" onSubmit={onSubmit} />;
}
