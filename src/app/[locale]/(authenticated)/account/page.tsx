import { setRequestLocale } from "next-intl/server";
import type { Params } from "@/types";

interface Account_Page_Props {
  params: Params;
}

export default async function Account_Page({ params }: Account_Page_Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return <div>Account_Page</div>;
}
