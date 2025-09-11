import type { Pagination_Response } from "./pagination";

export interface Exam {
  _id: string;
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
  createdAt: Date;
}

export interface GetSubjectExams_Request {
  subject: string;
}

export interface GetExams_Response extends Pagination_Response {
  exams: Exam[];
}
