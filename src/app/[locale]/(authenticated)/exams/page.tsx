import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Params } from "@/types";

interface Exams_Page_Props {
  params: Params;
}

export default async function Exams_Page({ params }: Exams_Page_Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("examsPage");

  return (
    <>
      <h2>{t("heading")}</h2>
    </>
  );
}
