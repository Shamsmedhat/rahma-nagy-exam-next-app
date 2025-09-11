import { Link } from "@/i18n/navigation";
import { AlarmClockIcon } from "lucide-react";
import type { Exam } from "@/types/api";

interface Exam_Card_Props {
  exam: Exam;
}

export default function Exam_Card({ exam }: Exam_Card_Props) {
  const { _id, title, duration, numberOfQuestions } = exam;

  return (
    <Link href={"/exams/" + _id} className="p-2 bg-primary/10 hover:bg-primary/25 flex gap-2 items-center justify-between text-sm sm:text-base transition-colors">
      <div>
        <h3 className="text-primary text-lg sm:text-2xl">{title}</h3>
        <p className="text-muted-foreground">{numberOfQuestions} Questions</p>
      </div>
      <p className="flex gap-2 items-center">
        <AlarmClockIcon className="text-muted-foreground size-4 sm:size-5" />
        <span>Duration: {duration} minutes</span>
      </p>
    </Link>
  );
}
