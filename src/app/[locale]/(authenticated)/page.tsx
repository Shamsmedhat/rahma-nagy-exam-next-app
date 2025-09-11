import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Params } from "@/types";

interface Home_Props {
  params: Params;
}

export default async function Home({ params }: Home_Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return "authenticated";
}
