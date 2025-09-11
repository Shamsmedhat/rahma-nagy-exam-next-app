import queryKeys from "@/lib/query-keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signUp } from "./authentication-api";
import { setCookie } from "@/lib/cookies";
import type { AxiosError } from "axios";
import type { GeneralError, Profile, SignIn_Request, SignUp_Request, SuccessfullAuth_Response } from "@/types/api";

export function useSignUp() {
  const queryClient = useQueryClient();
  const mutation = useMutation<SuccessfullAuth_Response, AxiosError<GeneralError>, SignUp_Request>({
    mutationFn: (requestBody) => signUp(requestBody),
    onSuccess: ({ token, user }) => {
      setCookie("token", token);
      queryClient.setQueryData<Profile>([queryKeys.profile], user);
    },
  });

  return mutation;
}

export function useSignIn() {
  const queryClient = useQueryClient();
  const mutation = useMutation<SuccessfullAuth_Response, AxiosError<GeneralError>, SignIn_Request>({
    mutationFn: (requestBody) => signIn(requestBody),
    onSuccess: ({ token, user }) => {
      setCookie("token", token);
      queryClient.setQueryData<Profile>([queryKeys.profile], user);
    },
  });

  return mutation;
}
