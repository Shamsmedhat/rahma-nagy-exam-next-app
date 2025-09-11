import { OTP_Input, Password_Input } from "@/components/inputs";
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/components/ui";
import type { Field } from "@/types";
import type { Control, FieldValues } from "react-hook-form";

interface AdvancedInput_Props<FormSchema extends FieldValues> {
  control: Control<FormSchema>;
  fieldProps: Field<FormSchema>;
}

export default function Advanced_Input<FormSchema extends FieldValues>({ control, fieldProps }: AdvancedInput_Props<FormSchema>) {
  const { id, type, label } = fieldProps;

  return (
    <FormField
      control={control}
      name={id}
      render={({ field }) => {
        const props = { ...field, ...fieldProps };
        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>{type == "otp" ? <OTP_Input length={length} {...props} /> : type == "password" ? <Password_Input {...props} /> : <Input {...props} />}</FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
