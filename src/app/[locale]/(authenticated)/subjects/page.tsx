import { getTranslations, setRequestLocale } from "next-intl/server";
import { Subject_Card } from "@/components/cards";
import { getSubjects } from "@/store";
import type { Params } from "@/types";

interface Subjects_Page_Props {
  params: Params;
}

export default async function Subjects_Page({ params }: Subjects_Page_Props) {
  const { locale } = await params;
  const subjects = await getSubjects();

  setRequestLocale(locale);

  const t = await getTranslations("subjectsPage");

  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-2">
      {subjects.subjects.map((subject) => (
        <li key={subject._id}>
          <Subject_Card subject={subject} />
        </li>
      ))}
    </ul>
  );
}
