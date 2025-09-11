import { getRequest } from "@/api";
import type { GeneralError, GetProfile_Response } from "@/types/api";

const endpoints = {
  getProfile: process.env.NEXT_PUBLIC_GET_PROFILE_ENDPOINT!,
};

export function getProfile() {
  return getRequest<GetProfile_Response, GeneralError>(endpoints.getProfile);
}
