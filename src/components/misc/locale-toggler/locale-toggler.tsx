"use client";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui";
import { routing } from "@/i18n/routing";
import { languages } from "@/constants";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale, useLocale } from "next-intl";

export default function Locale_Toggler() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function changeLocale(locale: Locale) {
    router.push(pathname, { locale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="uppercase">
          {locale}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => changeLocale(locale)} className="capitalize">
            <span className="uppercase font-medium">{locale}</span>
            <span>{languages[locale]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
