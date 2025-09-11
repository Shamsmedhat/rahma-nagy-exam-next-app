import queryKeys from "@/lib/query-keys";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "./profile-api";
import type { AxiosError } from "axios";
import type { GeneralError, Profile } from "@/types/api";

export function useGetProfile() {
  const query = useQuery<Profile | null, AxiosError<GeneralError>>({
    queryKey: [queryKeys.profile],
    queryFn: () =>
      getProfile()
        .then(({ user }) => user)
        .catch(() => null),
  });

  return query;
}
