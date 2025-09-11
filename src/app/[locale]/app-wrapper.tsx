"use client";

import { useAxiosConfig } from "@/api";
import { reactQueryConfigration } from "@/lib/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { type ReactNode } from "react";
import App from "./app";

const queryClient = new QueryClient(reactQueryConfigration);

export function AppWrapper({ children }: { children: ReactNode }) {
  useAxiosConfig();

  return (
    <QueryClientProvider client={queryClient}>
      <App>{children}</App>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
