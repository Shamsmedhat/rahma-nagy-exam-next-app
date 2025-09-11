"use client";

import { Button, Input } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { cn, getLocaleDir } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { ComponentProps, useState } from "react";

interface Password_Input_Props extends ComponentProps<"input"> {
  forgottable?: boolean;
}

export default function Password_Input({ forgottable, className, ...props }: Password_Input_Props) {
  const t = useTranslations("input");
  const locale = useLocale();
  const dir = getLocaleDir(locale);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <div className="relative">
        <Input className={cn("pe-9", className)} {...props} type={showPassword ? "text" : "password"} />
        <Button
          size="icon"
          variant="ghost"
          type="button"
          className={cn("opacity-25 hover:opacity-50 size-8 absolute top-0.5", dir == "ltr" ? "right-0.5" : "left-0.5")}
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          <span className="sr-only">{t("togglePassword")}</span>
          {showPassword ? <EyeIcon /> : <EyeOffIcon />}
        </Button>
      </div>
      {forgottable && (
        <Link href="/forgotpassword" className="block w-fit ms-auto text-primary">
          {t("forgotPasswrod")}
        </Link>
      )}
    </div>
  );
}
