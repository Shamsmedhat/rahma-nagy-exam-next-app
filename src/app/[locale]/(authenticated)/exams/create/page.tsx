import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Params } from "@/types";

interface CreateExam_Page_Props {
  params: Params;
}

export default async function CreateExam_Page({ params }: CreateExam_Page_Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("createExamPage");

  return (
    <>
      <h2>{t("heading")}</h2>
    </>
  );
}
