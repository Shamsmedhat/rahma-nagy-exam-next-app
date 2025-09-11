import type { HTMLInputTypeAttribute } from "react";
import type { Path } from "react-hook-form";

export interface Field<FormSchema> {
  id: Path<FormSchema>;
  type: HTMLInputTypeAttribute | "otp";

  // Passsword
  forgottable?: boolean;

  // OTP
  length?: number;

  // General
  label?: string;
  placeholder?: string;
}
