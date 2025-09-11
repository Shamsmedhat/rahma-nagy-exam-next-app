import { getTranslations, setRequestLocale } from "next-intl/server";
import { Exam } from "./_component";
import { getExamQuestions } from "@/store";
import type { Params } from "@/types";

interface PageParams {
  examId: string;
}

interface Exam_Page_Props {
  params: Params<PageParams>;
}

export default async function Exam_Page({ params }: Exam_Page_Props) {
  const { locale, examId } = await params;
  const examQuestions = await getExamQuestions({ exam: examId });

  setRequestLocale(locale);

  const t = await getTranslations("ExamPage");

  return <Exam questions={examQuestions.questions} />;
}
