import type { Exam } from "@/types/api";

export interface QuestionAnswer {
  key: string;
  answer: string;
}

export interface Question {
  _id: string;
  type: "single_choice";
  question: string;
  correct: string;
  answers: QuestionAnswer[];
  exam: Exam;
  createdAt: Date;
}

export interface Get_ExamQuestions_Request {
  exam: string;
}

export interface Get_ExamQuestions_Response {
  message: string;
  questions: Question[];
}
