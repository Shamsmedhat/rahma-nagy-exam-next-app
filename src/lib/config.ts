import type { QueryClientConfig } from "@tanstack/react-query";

export const reactQueryConfigration: QueryClientConfig = {
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, refetchOnReconnect: false, notifyOnChangeProps: "all", staleTime: Infinity, retry: false, gcTime: Infinity },
    mutations: { retry: false },
  },
};
