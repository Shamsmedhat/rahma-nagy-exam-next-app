import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";

interface OTP_Input_Props<FormSchema extends FieldValues> extends ControllerRenderProps<FormSchema, Path<FormSchema>> {
  length?: number;
}

export default function OTP_Input<FormSchema extends FieldValues>({ length = 4, ...props }: OTP_Input_Props<FormSchema>) {
  return length > 0 ? (
    <InputOTP maxLength={length} {...props}>
      <InputOTPGroup className="gap-2 mx-auto">
        {new Array(length).fill(1).map((_, index) => (
          <InputOTPSlot key={index} index={index} className="border-s" />
        ))}
      </InputOTPGroup>
    </InputOTP>
  ) : (
    <p>Wrong length!</p>
  );
}
