import { setRequestLocale } from "next-intl/server";
import { Exam_Card } from "@/components/cards";
import { getSubjectExams } from "@/store";
import type { Params } from "@/types";

interface PageParams {
  subjectId: string;
}

interface Subject_Page_Props {
  params: Params<PageParams>;
}

export default async function Subject_Page({ params }: Subject_Page_Props) {
  const { locale, subjectId } = await params;
  const exams = await getSubjectExams({ subject: subjectId });

  setRequestLocale(locale);

  return (
    <div className="p-4 bg-background flex-auto">
      <ul className="grid grid-cols-1 gap-2">
        {exams.exams.map((exam) => (
          <li key={exam._id}>
            <Exam_Card exam={exam} />
          </li>
        ))}
      </ul>
      <p className="mt-2 text-muted-foreground text-center">End of the list</p>
    </div>
  );
}
