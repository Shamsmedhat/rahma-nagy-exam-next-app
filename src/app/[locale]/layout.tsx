import { AppWrapper } from "./app-wrapper";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getLocaleDir } from "@/lib/utils";
import { axiosConfig } from "@/api";
import type { Params } from "@/types";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exams App",
  description: "Create exams and test your friends",
};

interface RootLayout_Props {
  children: ReactNode;
  params: Params;
}

export default async function RootLayout({ children, params }: Readonly<RootLayout_Props>) {
  axiosConfig();

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const dir = getLocaleDir(locale);

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col [&>main]:flex-auto">
        <NextIntlClientProvider>
          <AppWrapper>{children}</AppWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
