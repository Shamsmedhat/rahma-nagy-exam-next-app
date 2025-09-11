import { getRequest } from "@/api";
import type { GeneralError, Get_ExamQuestions_Request, Get_ExamQuestions_Response } from "@/types/api";

const endpoints = {
  getExamQuestions: process.env.NEXT_PUBLIC_GET_EXAM_QUESTIONS_ENDPOINT!,
};

export function getExamQuestions(requestBody: Get_ExamQuestions_Request) {
  return getRequest<Get_ExamQuestions_Response, GeneralError>(endpoints.getExamQuestions, { params: requestBody });
}
