"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Question, Timer } from "./components";
import { Button, Progress } from "@/components/ui";
import type { Question as QuestionType } from "@/types/api";

interface Exam_Props {
  questions: QuestionType[];
}

export default function Exam({ questions }: Exam_Props) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  return (
    <section className="p-4 bg-background space-y-4">
      <header>
        <div className="text-muted-foreground text-sm flex items-center justify-between">
          <p>Subject - Exam</p>
          <p>
            Qestion <span className="text-primary font-medium">{step}</span> of {questions.length}
          </p>
        </div>
        <Progress value={(step * 100) / questions.length} className="rounded-none" />
      </header>
      <Question question={questions[step - 1]} setAnswers={setAnswers} />
      <footer className="grid grid-flow-col grid-cols-[1fr_auto_1fr] items-center gap-3">
        <Button variant="secondary" onClick={() => setStep((prevStep) => prevStep - 1)} disabled={step == 1}>
          <ChevronLeftIcon />
          Previous
        </Button>
        <Timer duration={questions[0].exam.duration} />
        {step == questions.length ? (
          <Button>Submit</Button>
        ) : (
          <Button onClick={() => setStep((prevStep) => prevStep + 1)} disabled={step == questions.length}>
            Next
            <ChevronRightIcon />
          </Button>
        )}
      </footer>
    </section>
  );
}
