"use client";

import Loading from "./loading";
import useRoutesGuard from "@/hooks/use-routes-guard";
import { ThemeProvider, useGetProfile } from "@/store";
import type { ReactNode } from "react";

interface App_Props {
  children: ReactNode;
}

export default function App({ children }: App_Props) {
  const { isFetching } = useGetProfile();
  useRoutesGuard(isFetching);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" themes={["light", "dark"]} enableSystem enableColorScheme disableTransitionOnChange>
      {isFetching ? <Loading loadingPhrase="authenticating" /> : children}
    </ThemeProvider>
  );
}
