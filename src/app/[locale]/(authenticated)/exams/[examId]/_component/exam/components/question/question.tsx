import { Input, Label } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { Question as QuestionType } from "@/types/api";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface Question_Props {
  question: QuestionType;
  setAnswers: Dispatch<
    SetStateAction<{
      [key: string]: string;
    }>
  >;
}

export default function Question({ question: questionObj, setAnswers }: Question_Props) {
  const { _id, question, answers, correct } = questionObj;

  function answerHandler(event: ChangeEvent<HTMLInputElement>, answer: string) {
    event.target.checked && setAnswers((prevAnswers) => ({ ...prevAnswers, [_id]: answer }));
  }

  return (
    <div className="space-y-2">
      <h3 className="text-2xl font-medium text-primary">{question}</h3>
      {answers.map(({ key, answer }) => (
        <Label key={_id + key} className={cn("grid grid-cols-[auto_1fr] items-center bg-secondary hover:bg-secondary/50 px-2")}>
          <Input type="radio" name="answer" className="shadow-none" onChange={(e) => answerHandler(e, key)} />
          <span className="flex-auto">{answer}</span>
        </Label>
      ))}
    </div>
  );
}
