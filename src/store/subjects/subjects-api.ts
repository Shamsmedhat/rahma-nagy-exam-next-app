import { getRequest } from "@/api";
import type { GeneralError, GetSubjects_Response } from "@/types/api";

const endpoints = {
  getSubjects: process.env.NEXT_PUBLIC_GET_SUBJECTS_ENDPOINT!,
};

export function getSubjects() {
  return getRequest<GetSubjects_Response, GeneralError>(endpoints.getSubjects);
}
