import { z } from "zod";
import type { Field } from "@/types";

export type FormSchema = z.infer<typeof formSchema>;

const formSchema = z.object({
  resetCode: z.string().length(5),
});

const fields: Field<FormSchema>[] = [{ id: "resetCode", type: "otp", length: 5 }];

const defaultValues: FormSchema = {
  resetCode: "",
};

export function useFormData() {
  return { formSchema, fields, defaultValues };
}
