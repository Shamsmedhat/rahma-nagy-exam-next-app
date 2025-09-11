import { postRequest } from "@/api";
import type { GeneralError, SignIn_Request, SignUp_Request, SuccessfullAuth_Response } from "@/types/api";

const endpoints = {
  signIn: process.env.NEXT_PUBLIC_SIGN_IN_ENDPOINT!,
  signUp: process.env.NEXT_PUBLIC_SIGN_UP_ENDPOINT!,
};

export function signIn(requestBody: SignIn_Request) {
  return postRequest<SignIn_Request, SuccessfullAuth_Response, GeneralError>(endpoints.signIn, requestBody);
}

export function signUp(requestBody: SignUp_Request) {
  return postRequest<SignIn_Request, SuccessfullAuth_Response, GeneralError>(endpoints.signUp, requestBody);
}
