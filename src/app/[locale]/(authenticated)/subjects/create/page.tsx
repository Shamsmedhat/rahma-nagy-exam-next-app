import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Params } from "@/types";

interface CreateSubject_Page_Props {
  params: Params;
}

export default async function CreateSubject_Page({ params }: CreateSubject_Page_Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations("createSubjectPage");

  return (
    <>
      <h2>{t("heading")}</h2>
    </>
  );
}
