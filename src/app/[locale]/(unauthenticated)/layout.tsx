import { setRequestLocale } from "next-intl/server";
import type { Params } from "@/types";
import type { ReactNode } from "react";
import { UnauthenticatedHero } from "./_components";
import { getLocaleDir } from "@/lib/utils";

interface UnauthenticatedLayout_Props {
  children: ReactNode;
  params: Params;
}

export default async function UnauthenticatedLayout({ children, params }: Readonly<UnauthenticatedLayout_Props>) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main className="grid md:grid-cols-2 items-center *:p-5 sm:*:p-10 xl:*:p-20">
      <UnauthenticatedHero dir={getLocaleDir(locale)} />
      <div>{children}</div>
    </main>
  );
}
