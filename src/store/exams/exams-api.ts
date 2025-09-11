import { getRequest } from "@/api";
import type { GeneralError, GetExams_Response, GetSubjectExams_Request } from "@/types/api";

const endpoints = {
  getAllExams: process.env.NEXT_PUBLIC_GET_ALL_EXAMS_ENDPOINT!,
  getSubjectExams: process.env.NEXT_PUBLIC_GET_SUBJECT_EXAMS_ENDPOINT!,
};

export function getAllExams() {
  return getRequest<GetExams_Response, GeneralError>(endpoints.getAllExams);
}

export function getSubjectExams(requestBody: GetSubjectExams_Request) {
  return getRequest<GetExams_Response, GeneralError>(endpoints.getSubjectExams, { params: requestBody });
}
